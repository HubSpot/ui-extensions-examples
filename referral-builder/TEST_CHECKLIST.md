# HubSpot Referral Builder - Test Checklist

## Overview
This checklist verifies that the referral creation flow works correctly with all the recent fixes.

## Test Environment Setup
1. Ensure the Vercel API is deployed and `API_BASE` in `ReferralBuilderCard.tsx` points to the correct domain
2. Ensure HubSpot access token is configured in Vercel environment variables
3. Have a test Deal record with an associated Company in HubSpot

---

## Test 1: Deal Context Loading
**Purpose:** Verify that the card correctly loads dealId and companyId from the deal's context.

### Steps:
1. Navigate to a Deal record in HubSpot
2. Open the Referral Builder card in the sidebar

### Expected Results:
- [ ] Card displays "Deal ID: [number]"
- [ ] Card displays "Associated Company ID: [number]" (if deal has a company)
- [ ] If deal has NO associated company, card shows warning: "Warning: This deal has no associated company. You must select a company to create a referral."
- [ ] No error messages appear during loading
- [ ] Existing referrals section loads (may be empty)

---

## Test 2: Company Search and Selection
**Purpose:** Verify company search functionality works (for deals without an associated company).

### Steps:
1. In the "Add referral" section, type a company name in "Search company" field
2. Click "Search" button
3. Select a company from the dropdown

### Expected Results:
- [ ] Company dropdown populates with search results
- [ ] Company names are displayed (not just IDs)
- [ ] Selecting a company triggers the program dropdown to load

---

## Test 3: Program Dropdown with Friendly Names
**Purpose:** Verify that program dropdown shows human-friendly names instead of IDs.

### Steps:
1. After selecting a company (or if deal already has one), observe the "Program" dropdown
2. Click the Program dropdown to view options

### Expected Results:
- [ ] Program dropdown shows program names (e.g., "Summer Camp 2025")
- [ ] NOT showing "Program 12345678" unless the record truly has no name
- [ ] Dropdown is populated with programs associated with the selected company

---

## Test 4: Session Dropdown with Friendly Names
**Purpose:** Verify that session dropdown shows human-friendly names and details.

### Steps:
1. After selecting a program, observe the "Session" dropdown
2. Click the Session dropdown to view options

### Expected Results:
- [ ] Session dropdown shows session names with details (e.g., "Session 1 (2025-06-01) $5000")
- [ ] NOT showing "Session 98765432" unless the record truly has no name
- [ ] Dropdown is populated with sessions associated with the selected program

---

## Test 5: Referral Status Dropdown
**Purpose:** Verify that referral_status dropdown is present and functional in the create form.

### Steps:
1. In the "Add referral" section, locate the "Referral status (optional)" dropdown
2. Click to view available options

### Expected Results:
- [ ] Dropdown is present between "Note to company" and "Client interest"
- [ ] Options include: "Draft", "Ready to Send", "Sent", "Resend", "Don't send (already sent)"
- [ ] Values can be selected

---

## Test 6: Client Interest Dropdown
**Purpose:** Verify that client_interest dropdown is present and functional in the create form.

### Steps:
1. In the "Add referral" section, locate the "Client interest (optional)" dropdown
2. Click to view available options

### Expected Results:
- [ ] Dropdown is present after "Referral status"
- [ ] Options include: "Active / considering", "Shortlist", "Neutral", "Unlikely", "Declined", "Selected"
- [ ] Values can be selected

---

## Test 7: Create Referral with All Fields
**Purpose:** Verify that a referral can be created with all fields populated.

### Steps:
1. Fill in all fields in the "Add referral" form:
   - Select or search for a company
   - Select a program
   - Select a session
   - Enter a note in "Note to company"
   - Select a value for "Referral status"
   - Select a value for "Client interest"
2. Click "Create referral" button

### Expected Results:
- [ ] Success message appears: "Referral created (ID [number])"
- [ ] Form fields are cleared after creation
- [ ] Referral appears in "Existing referrals" section
- [ ] Selected program and session show names (not IDs) in the existing referrals list

---

## Test 8: Verify Referral Record in HubSpot
**Purpose:** Verify that the created referral has all properties set correctly in HubSpot.

### Steps:
1. After creating a referral, navigate to the referral record in HubSpot
2. Check the properties on the referral record

### Expected Results:
- [ ] `referral_key` property is set to "[dealId]-[companyId]"
- [ ] `referral_name` property is set to "[Company Name] – Deal [dealId]"
- [ ] `referral_status` property is set to the selected value (if provided)
- [ ] `client_interest` property is set to the selected value (if provided)
- [ ] `referral_note_to_company` property contains the entered note (if provided)
- [ ] `copied_from_deal_key` and `copied_from_year` are set
- [ ] Associations exist: Referral → Deal, Referral → Company
- [ ] If program selected: Association exists: Referral → Program
- [ ] If session selected: Association exists: Referral → Session

---

## Test 9: Submit Blocked Without Company
**Purpose:** Verify that submit is disabled when no company is available.

### Steps:
1. Navigate to a Deal record that has NO associated company
2. Do NOT select a company from the search dropdown
3. Attempt to click "Create referral" button

### Expected Results:
- [ ] "Create referral" button is disabled
- [ ] Warning message is displayed: "Warning: This deal has no associated company..."

---

## Test 10: Update Existing Referral
**Purpose:** Verify that existing referrals can be updated with new status and interest values.

### Steps:
1. In the "Existing referrals" section, locate a referral
2. Change the "Outreach" dropdown value
3. Change the "Client interest" dropdown value
4. Modify the note
5. Click "Save" button

### Expected Results:
- [ ] Success message appears: "Referral updated"
- [ ] Changes are persisted (refresh the card and verify values remain)
- [ ] Updated values appear in HubSpot referral record

---

## Test 11: Reload Button
**Purpose:** Verify that the reload button refreshes the referrals list.

### Steps:
1. In the "Existing referrals" section, click "Reload" button

### Expected Results:
- [ ] Loading indicator appears briefly
- [ ] Referrals list refreshes with latest data from HubSpot
- [ ] No errors occur

---

## Test 12: API Error Handling
**Purpose:** Verify that API errors are displayed to the user.

### Steps:
1. Temporarily modify `API_BASE` to an invalid URL or stop the Vercel API
2. Try to create a referral

### Expected Results:
- [ ] Error message is displayed in red text
- [ ] Error message is descriptive (e.g., "Failed to create/update referral")
- [ ] Application does not crash
- [ ] User can retry after fixing the issue

---

## Additional Notes

### Common Issues and Solutions:

1. **Program/Session showing IDs instead of names:**
   - Verify that the HubSpot Program and Session records have a `name` property populated
   - Check the API responses in browser DevTools Network tab to confirm names are returned

2. **"dealId and companyId are required" error:**
   - Verify that the deal has an associated company OR a company is selected from search
   - Check the new `/api/deals/[dealId]/context` endpoint is working

3. **Referral status/interest dropdowns not showing:**
   - Verify that `/api/referrals/properties` endpoint is returning options
   - Check that the UI correctly maps the options to the Select components

### API Endpoints Reference:
- `GET /api/deals/[dealId]/context` - Get deal's associated companyId ✅ NEW
- `GET /api/deals/[dealId]/referrals` - List referrals for a deal
- `POST /api/referrals` - Create/update referral (now accepts outreachStatus, clientInterest)
- `PATCH /api/referrals/[referralId]` - Update referral properties
- `GET /api/referrals/properties` - Get property definitions and options
- `GET /api/companies/search?q=[query]` - Search companies
- `GET /api/companies/[companyId]/programs` - List programs (returns id + name)
- `GET /api/programs/[programId]/sessions` - List sessions (returns id + name + details)

---

## Summary

**Total Tests:** 12
**Critical Tests:** 1, 7, 8 (deal context, create flow, HubSpot verification)

All tests should pass for the referral creation flow to be considered fully functional.
