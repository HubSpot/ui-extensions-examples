const HS_BASE = "https://api.hubapi.com";

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

async function hubspotRequest<T>(path: string, init: RequestInit = {}): Promise<T> {
  const token = requireEnv("HUBSPOT_ACCESS_TOKEN");
  const url = `${HS_BASE}${path}`;

  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };

  // Only set JSON content-type if we're sending a body
  const hasBody = Boolean(init.body);
  if (hasBody) headers["Content-Type"] = "application/json";

  const res = await fetch(url, {
    ...init,
    headers: { ...headers, ...(init.headers as any) },
  });

  const text = await res.text();
  let data: any = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { raw: text };
  }

  if (!res.ok) {
    const msg = data?.message || data?.error || text || `HubSpot error ${res.status}`;
    throw new Error(msg);
  }

  return data as T;
}

export async function hsGet<T>(path: string): Promise<T> {
  return hubspotRequest<T>(path, { method: "GET" });
}

export async function hsPost<T>(path: string, body: any): Promise<T> {
  return hubspotRequest<T>(path, { method: "POST", body: JSON.stringify(body) });
}

export async function hsPatch<T>(path: string, body: any): Promise<T> {
  return hubspotRequest<T>(path, { method: "PATCH", body: JSON.stringify(body) });
}

export async function hsPut(path: string, body?: any): Promise<void> {
  await hubspotRequest(path, { method: "PUT", body: body ? JSON.stringify(body) : undefined });
}
