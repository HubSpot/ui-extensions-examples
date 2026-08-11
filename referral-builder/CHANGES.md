# Referral Builder Fixes - Implementation Summary

## Overview
This document summarizes the changes made to fix the HubSpot UI extension and Vercel API for referral creation.

---

## Changes Made

### 1. New API Endpoint: `/api/deals/[dealId]/context`
**File:** `vercel-api/src/app/api/deals/[dealId]/context/route.ts` (NEW)

**Purpose:** Fetches the deal's associated company ID reliably before referral creation.

**Returns:**
```json
{
  "dealId": "12345",
  "dealName": "Example Deal",
  "dealStage": "qualifiedtobuy",
  "companyId": "67890",
  "hasCompany": true
}
```

**Why this is needed:**
- The UI needs to know the company associated with a deal before creating a referral
- Without this endpoint, users would get "dealId and companyId are required" errors
- Enables the UI to show a warning if a deal has no associated company

---

### 2. ReferralBuilderCard.tsx - Deal Context Loading
**File:** `hubspot-card/src/app/cards/ReferralBuilderCard.tsx`

**Changes:**
1. **Added state for deal context:**
   - `dealCompanyId` - stores the company ID from the deal's associations
   - `dealContextLoaded` - tracks whether context has been loaded

2. **Added `loadDealContext()` function:**
   - Fetches `/api/deals/[dealId]/context` on card load
   - Sets `dealCompanyId` from the response
   - Marks context as loaded even on error to prevent blocking

3. **Updated `useEffect` hook:**
   - Now loads deal context along with referrals and property definitions
   - `await Promise.all([loadDealContext(), loadReferrals(), loadPropertyDefinitions()])`

4. **Updated UI to show context status:**
   - Displays "Associated Company ID: [id]" when available
   - Shows warning message if deal has no associated company
   - Warning: "This deal has no associated company. You must select a company to create a referral."

---

### 3. ReferralBuilderCard.tsx - Referral Status and Client Interest Dropdowns
**File:** `hubspot-card/src/app/cards/ReferralBuilderCard.tsx`

**Changes:**
1. **Added state for new referral form fields:**
   - `newReferralStatus` - selected referral status for new referrals
   - `newClientInterest` - selected client interest for new referrals

2. **Added two new Select dropdowns in "Add referral" form:**
   ```tsx
   <Select
     name="newReferralStatus"
     label="Referral status (optional)"
     options={outreachOptions}
     value={newReferralStatus}
     onChange={(val: string) => setNewReferralStatus(val)}
   />

   <Select
     name="newClientInterest"
     label="Client interest (optional)"
     options={interestOptions}
     value={newClientInterest}
     onChange={(val: string) => setNewClientInterest(val)}
   />
   ```

3. **Updated `createReferral()` function:**
   - Now uses `dealCompanyId` as fallback if no company is manually selected
   - Includes `outreachStatus` and `clientInterest` in the API payload
   - Clears these fields after successful creation

4. **Updated `canCreate` logic:**
   - Now requires `dealContextLoaded` to be true before allowing submit
   - Allows submit if either `dealCompanyId` or `selectedCompanyId` is available
   - `Boolean(dealId && dealContextLoaded && (dealCompanyId || selectedCompanyId))`

---

### 4. API Already Supports Status and Interest Fields
**File:** `vercel-api/src/app/api/referrals/route.ts`

**Existing Implementation (No Changes Needed):**
- API already accepts `outreachStatus` and `clientInterest` parameters
- Maps them to HubSpot properties:
  - `outreachStatus` → `HS_REFERRAL_PROPS.OUTREACH` (referral_status)
  - `clientInterest` → `HS_REFERRAL_PROPS.INTEREST` (client_interest)
- Saves these properties both during creation and updates

---

### 5. Program and Session Dropdowns Already Show Names
**Files:**
- `vercel-api/src/app/api/companies/[companyId]/programs/route.ts`
- `vercel-api/src/app/api/programs/[programId]/sessions/route.ts`

**Existing Implementation (No Changes Needed):**
- Both endpoints already return `{ id, name }` objects
- Program endpoint: `name: p?.properties?.name || 'Program ${p.id}'`
- Session endpoint: `name: s?.properties?.name || 'Session ${s.id}'`
- UI already uses `name` as the label and `id` as the value

**Note:** If dropdowns still show IDs, it means the HubSpot records don't have the `name` property populated.

---

## Configuration Reference

### HubSpot Property Names (from config.ts)
- `referral_status` - Outreach status (Draft, Ready to Send, Sent, etc.)
- `client_interest` - Client interest level (Active/considering, Shortlist, etc.)
- `referral_note_to_company` - Note to company
- `referral_key` - Unique key: `[dealId]-[companyId]`
- `referral_name` - Display name: `[Company Name] – Deal [dealId]`

### Property Options (sourced from `/api/referrals/properties`)
**Referral Status Options:**
- Draft
- Ready to Send
- Sent
- Resend
- Don't send (already sent)

**Client Interest Options:**
- Active / considering
- Shortlist
- Neutral
- Unlikely
- Declined
- Selected

---

## How the Flow Works Now

### 1. Card Load
1. User opens a Deal record in HubSpot
2. ReferralBuilderCard.tsx loads and extracts `dealId` from context
3. Card fetches three things in parallel:
   - Deal context (including `companyId`)
   - Existing referrals for the deal
   - Property definitions (dropdown options)
4. Card displays deal info and any existing referrals

### 2. Creating a Referral
1. If deal has a company:
   - `dealCompanyId` is automatically set
   - User can proceed to select program/session
   - OR user can search and select a different company

2. If deal has NO company:
   - Warning message is shown
   - User MUST search and select a company
   - Submit button remains disabled until company is selected

3. User fills in optional fields:
   - Program (cascading load of sessions)
   - Session
   - Note
   - **NEW:** Referral status
   - **NEW:** Client interest

4. User clicks "Create referral":
   - Payload includes `dealId`, `companyId`, and all optional fields
   - API creates/updates referral record
   - API sets properties: referral_status, client_interest, note
   - API creates associations: Deal, Company, Program (if selected), Session (if selected)
   - Success message shown
   - Form is cleared
   - Referrals list is refreshed

### 3. Program/Session Dropdowns
- API returns `{ id, name }` for each program/session
- UI displays `name` as the label
- UI submits `id` as the value
- If name is missing in HubSpot, falls back to "Program [id]" or "Session [id]"

---

## Files Modified

1. **NEW:** `vercel-api/src/app/api/deals/[dealId]/context/route.ts`
2. **MODIFIED:** `hubspot-card/src/app/cards/ReferralBuilderCard.tsx`
3. **CREATED:** `referral-builder/TEST_CHECKLIST.md`
4. **CREATED:** `referral-builder/CHANGES.md`

---

## Testing Instructions

See `TEST_CHECKLIST.md` for comprehensive testing steps.

**Quick Smoke Test:**
1. Open a deal with an associated company
2. Verify card shows "Associated Company ID: [number]"
3. Select a program and session (verify names are shown)
4. Set referral status and client interest
5. Click "Create referral"
6. Verify success message and referral appears in list
7. Open the referral record in HubSpot and verify all properties are set

---

## Troubleshooting

### "dealId and companyId are required" error
- **Solution:** This should now be fixed! The card fetches `companyId` automatically from `/api/deals/[dealId]/context`
- **If still occurs:** Check that the new endpoint is deployed and accessible

### Program/Session dropdowns showing IDs instead of names
- **Check:** Are the HubSpot Program and Session records missing the `name` property?
- **Solution:** Populate the `name` property on those records in HubSpot
- **API already correct:** The API is already trying to fetch the `name` property

### Referral status/interest dropdowns not showing options
- **Check:** Is `/api/referrals/properties` endpoint working?
- **Fallback:** The UI has default options hardcoded if the API fails

### Submit button is disabled
- **Check 1:** Has the deal context finished loading? (dealContextLoaded = true)
- **Check 2:** Does the deal have an associated company OR has user selected one?
- **Check 3:** Are there any error messages displayed?

---

## Summary of Fixes

✅ **Task 1: Fix create referral submit error**
- Created `/api/deals/[dealId]/context` endpoint to fetch companyId
- Updated UI to fetch and use dealCompanyId on load
- Submit now blocked until context is loaded and companyId is available
- Warning message shown if deal has no company

✅ **Task 2: Add referral_status and client_interest dropdowns**
- Added two Select dropdowns to the "Add referral" form
- Values are included in the payload to `/api/referrals` POST endpoint
- API already saves these properties to the referral record (no changes needed)

✅ **Task 3: Program/session dropdown labels**
- API already returns `{ id, name }` objects (no changes needed)
- UI already uses `name` as label and `id` as value (no changes needed)
- If IDs are still showing, the HubSpot records need `name` property populated

---

## Next Steps

1. Deploy the updated code to Vercel
2. Update `API_BASE` in `ReferralBuilderCard.tsx` to point to the Vercel domain
3. Test using the checklist in `TEST_CHECKLIST.md`
4. If program/session names are still showing IDs, populate the `name` property on those HubSpot records
