import React, { useEffect, useMemo, useState } from "react";
import {
  hubspot,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Select,
  Text,
  TextArea,
} from "@hubspot/ui-extensions";

const API_BASE = "https://YOUR_VERCEL_DOMAIN"; // <-- CHANGE THIS (no trailing slash)

type Option = { label: string; value: string };

type ReferralRow = {
  id: string;
  referralKey?: string;
  outreachStatus?: string;
  clientInterest?: string;
  note?: string;
  company?: { id?: string; name?: string };
  program?: { id?: string; name?: string };
  session?: { id?: string; name?: string; startDate?: string; endDate?: string; price?: string };
};

// Default options (will be replaced by API-loaded options if available)
const DEFAULT_OUTREACH_OPTIONS: Option[] = [
  { label: "Draft", value: "Draft" },
  { label: "Ready to Send", value: "Ready to Send" },
  { label: "Sent", value: "Sent" },
  { label: "Resend", value: "Resend" },
  { label: "Don't send (already sent)", value: "Don't send (already sent)" },
];

const DEFAULT_INTEREST_OPTIONS: Option[] = [
  { label: "Active / considering", value: "Active / considering" },
  { label: "Shortlist", value: "Shortlist" },
  { label: "Neutral", value: "Neutral" },
  { label: "Unlikely", value: "Unlikely" },
  { label: "Declined", value: "Declined" },
  { label: "Selected", value: "Selected" },
];

const DEFAULT_PREVIOUSLY_SENT_OPTIONS: Option[] = [
  { label: "Yes (true)", value: "Yes (true)" },
  { label: "No (false)", value: "No (false)" },
];

hubspot.extend(({ context, actions }) => (
  <ReferralBuilderCard context={context} actions={actions} />
));

function ReferralBuilderCard({ context, actions }: any) {
  const dealId = context?.crm?.objectId ? String(context.crm.objectId) : null;

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [referrals, setReferrals] = useState<ReferralRow[]>([]);

  const [companyQuery, setCompanyQuery] = useState("");
  const [companyOptions, setCompanyOptions] = useState<Option[]>([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>("");

  const [programOptions, setProgramOptions] = useState<Option[]>([]);
  const [selectedProgramId, setSelectedProgramId] = useState<string>("");

  const [sessionOptions, setSessionOptions] = useState<Option[]>([]);
  const [selectedSessionId, setSelectedSessionId] = useState<string>("");

  const [note, setNote] = useState("");

  const [outreachOptions, setOutreachOptions] = useState<Option[]>(DEFAULT_OUTREACH_OPTIONS);
  const [interestOptions, setInterestOptions] = useState<Option[]>(DEFAULT_INTEREST_OPTIONS);
  const [previouslySentOptions, setPreviouslySentOptions] = useState<Option[]>(DEFAULT_PREVIOUSLY_SENT_OPTIONS);

  const canCreate = useMemo(() => {
    return Boolean(dealId && selectedCompanyId);
  }, [dealId, selectedCompanyId]);

  async function apiRequest(path: string, init?: { method?: string; body?: any }) {
    const url = `${API_BASE}${path}`;
    const headers: Record<string, string> = {};

    if (init?.body) {
      headers["Content-Type"] = "application/json";
    }

    const res = await hubspot.fetch(url, {
      method: init?.method || "GET",
      headers,
      body: init?.body ? JSON.stringify(init.body) : undefined,
    });

    let data: any = null;
    try {
      data = await res.json();
    } catch (e) {
      // ignore
    }

    if (!res.ok) {
      const msg = data?.error || data?.message || `Request failed (${res.status})`;
      throw new Error(msg);
    }
    return data;
  }

  async function loadPropertyDefinitions() {
    try {
      const data = await apiRequest(`/api/referrals/properties`);
      const props = data?.properties || {};

      // Update options if available from API
      if (props.referral_status?.options?.length) {
        setOutreachOptions(props.referral_status.options);
      }
      if (props.client_interest?.options?.length) {
        setInterestOptions(props.client_interest.options);
      }
      if (props.previously_sent_to_camp?.options?.length) {
        setPreviouslySentOptions(props.previously_sent_to_camp.options);
      }
    } catch (e) {
      console.error("Failed to load property definitions:", e);
      // Continue with default options
    }
  }

  async function loadReferrals() {
    if (!dealId) return;
    const data = await apiRequest(`/api/deals/${dealId}/referrals`);
    setReferrals(data?.results || []);
  }

  async function searchCompanies() {
    if (!companyQuery.trim()) {
      setCompanyOptions([]);
      return;
    }
    const data = await apiRequest(`/api/companies/search?q=${encodeURIComponent(companyQuery.trim())}`);
    const opts: Option[] = (data?.results || []).map((c: any) => ({
      label: c.name || `Company ${c.id}`,
      value: String(c.id),
    }));
    setCompanyOptions(opts);
  }

  async function loadPrograms(companyId: string) {
    setProgramOptions([]);
    setSelectedProgramId("");
    setSessionOptions([]);
    setSelectedSessionId("");

    if (!companyId) return;
    const data = await apiRequest(`/api/companies/${companyId}/programs`);
    const opts: Option[] = (data?.results || []).map((p: any) => ({
      label: p.name || `Program ${p.id}`,
      value: String(p.id),
    }));
    setProgramOptions(opts);
  }

  async function loadSessions(programId: string) {
    setSessionOptions([]);
    setSelectedSessionId("");

    if (!programId) return;
    const data = await apiRequest(`/api/programs/${programId}/sessions`);

    const opts: Option[] = (data?.results || []).map((s: any) => {
      const labelParts = [s.name || `Session ${s.id}`];
      if (s.startDate) labelParts.push(`(${s.startDate})`);
      if (s.price) labelParts.push(`$${s.price}`);
      return { label: labelParts.join(" "), value: String(s.id) };
    });

    setSessionOptions(opts);
  }

  async function createReferral() {
    if (!dealId) return;
    if (!selectedCompanyId) return;

    const payload = {
      dealId,
      companyId: selectedCompanyId,
      programId: selectedProgramId || undefined,
      sessionId: selectedSessionId || undefined,
      note: note || undefined,
    };

    const data = await apiRequest(`/api/referrals`, { method: "POST", body: payload });

    const message = data?.created
      ? `Referral created (ID ${data?.referralId || "unknown"})`
      : `Referral updated (ID ${data?.referralId || "unknown"})`;

    actions?.addAlert?.({
      type: "success",
      message,
    });

    // Clear form
    setNote("");
    setSelectedCompanyId("");
    setSelectedProgramId("");
    setSelectedSessionId("");
    setCompanyQuery("");
    setCompanyOptions([]);
    setProgramOptions([]);
    setSessionOptions([]);

    // Refresh referrals list
    await loadReferrals();
  }

  async function updateReferral(referralId: string, properties: Record<string, any>) {
    await apiRequest(`/api/referrals/${referralId}`, {
      method: "PATCH",
      body: { properties },
    });
    actions?.addAlert?.({ type: "success", message: "Referral updated" });
    await loadReferrals();
  }

  useEffect(() => {
    (async () => {
      setError(null);
      if (!dealId) return;
      try {
        setBusy(true);
        await Promise.all([loadReferrals(), loadPropertyDefinitions()]);
      } catch (e: any) {
        setError(e?.message || "Failed to load data");
      } finally {
        setBusy(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dealId]);

  if (!dealId) {
    return (
      <Box>
        <Text>This card is meant to run on a Deal record.</Text>
      </Box>
    );
  }

  return (
    <Flex direction="column" gap="md">
      <Heading>Referral Builder</Heading>
      <Text>Deal ID: {dealId}</Text>

      {error ? <Text format={{ color: "red" }}>{error}</Text> : null}

      <Divider />

      <Heading level="h4">Existing referrals</Heading>
      <Button
        variant="secondary"
        onClick={async () => {
          setError(null);
          try {
            setBusy(true);
            await loadReferrals();
          } catch (e: any) {
            setError(e?.message || "Reload failed");
          } finally {
            setBusy(false);
          }
        }}
      >
        Reload
      </Button>

      {busy ? <Text>Loading…</Text> : null}

      {referrals.length === 0 ? (
        <Text>No referrals yet.</Text>
      ) : (
        <Flex direction="column" gap="sm">
          {referrals.map((r) => (
            <Box key={r.id}>
              <Text>
                <strong>{r.company?.name || "Company"}</strong>
                {" — "}
                {r.program?.name || "Program"}
                {" — "}
                {r.session?.name || "Session"}
              </Text>

              <Flex direction="row" gap="sm">
                <Select
                  name={`outreach-${r.id}`}
                  label="Outreach"
                  options={outreachOptions}
                  value={r.outreachStatus || ""}
                  onChange={(val: string) => {
                    setReferrals((prev) =>
                      prev.map((x) =>
                        x.id === r.id ? { ...x, outreachStatus: val } : x
                      )
                    );
                  }}
                />

                <Select
                  name={`interest-${r.id}`}
                  label="Client interest"
                  options={interestOptions}
                  value={r.clientInterest || ""}
                  onChange={(val: string) => {
                    setReferrals((prev) =>
                      prev.map((x) =>
                        x.id === r.id ? { ...x, clientInterest: val } : x
                      )
                    );
                  }}
                />
              </Flex>

              <TextArea
                name={`note-${r.id}`}
                label="Note to company"
                value={r.note || ""}
                onChange={(val: string) => {
                  setReferrals((prev) =>
                    prev.map((x) => (x.id === r.id ? { ...x, note: val } : x))
                  );
                }}
              />

              <Button
                onClick={async () => {
                  setError(null);
                  try {
                    setBusy(true);
                    await updateReferral(r.id, {
                      referral_status: r.outreachStatus || "",
                      client_interest: r.clientInterest || "",
                      referral_note_to_company: r.note || "",
                    });
                  } catch (e: any) {
                    setError(e?.message || "Update failed");
                  } finally {
                    setBusy(false);
                  }
                }}
              >
                Save
              </Button>

              <Divider />
            </Box>
          ))}
        </Flex>
      )}

      <Divider />

      <Heading level="h4">Add referral</Heading>

      <Input
        name="companyQuery"
        label="Search company"
        value={companyQuery}
        onChange={(val: string) => setCompanyQuery(val)}
        placeholder="Type a camp/company name..."
      />
      <Button variant="secondary" onClick={searchCompanies}>
        Search
      </Button>

      <Select
        name="company"
        label="Company"
        options={companyOptions}
        value={selectedCompanyId}
        onChange={async (val: string) => {
          setSelectedCompanyId(val);
          setError(null);
          try {
            setBusy(true);
            await loadPrograms(val);
          } catch (e: any) {
            setError(e?.message || "Failed to load programs");
          } finally {
            setBusy(false);
          }
        }}
      />

      <Select
        name="program"
        label="Program (optional)"
        options={programOptions}
        value={selectedProgramId}
        onChange={async (val: string) => {
          setSelectedProgramId(val);
          setError(null);
          try {
            setBusy(true);
            await loadSessions(val);
          } catch (e: any) {
            setError(e?.message || "Failed to load sessions");
          } finally {
            setBusy(false);
          }
        }}
      />

      <Select
        name="session"
        label="Session (optional)"
        options={sessionOptions}
        value={selectedSessionId}
        onChange={(val: string) => setSelectedSessionId(val)}
      />

      <TextArea
        name="note"
        label="Note to company"
        value={note}
        onChange={(val: string) => setNote(val)}
        placeholder="Optional note that will appear on the Referral record"
      />

      <Button
        disabled={!canCreate || busy}
        onClick={async () => {
          setError(null);
          try {
            setBusy(true);
            await createReferral();
          } catch (e: any) {
            setError(e?.message || "Create failed");
          } finally {
            setBusy(false);
          }
        }}
      >
        Create referral
      </Button>
    </Flex>
  );
}
