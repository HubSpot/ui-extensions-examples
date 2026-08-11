# Camp Referral Builder

A complete HubSpot integration for managing camp referrals with a Deal sidebar card and external API backend.

## 📋 Overview

This project provides a **Referral Builder** for HubSpot that:

- Displays a custom card on Deal records
- Allows searching for Companies (camps)
- Lists Programs associated with Companies
- Lists Sessions associated with Programs
- Creates Referral records linking Deal → Company → Program → Session
- Updates referral properties (outreach status, client interest, notes)

## 🏗️ Architecture

The project consists of two main parts:

### 1. **HubSpot Card** (`hubspot-card/`)
- Uses HubSpot Developer Projects with `platformVersion: 2025.2`
- React-based UI card that appears in the Deal sidebar
- Deployed via `hs project upload` command

### 2. **Vercel API** (`vercel-api/`)
- Next.js API routes deployed on Vercel
- Handles all HubSpot API interactions
- Manages custom object operations (Company, Program, Session, Referral)

```
┌─────────────────┐
│   Deal Record   │
│   (HubSpot UI)  │
└────────┬────────┘
         │
         │ displays
         ▼
┌─────────────────┐        ┌──────────────────┐
│ Referral Card   │───────▶│  Vercel API      │
│ (React UI)      │  fetch │  (Next.js)       │
└─────────────────┘        └────────┬─────────┘
                                    │
                                    │ HubSpot API
                                    ▼
                           ┌─────────────────┐
                           │  HubSpot CRM    │
                           │  (Companies,    │
                           │   Programs,     │
                           │   Sessions,     │
                           │   Referrals)    │
                           └─────────────────┘
```

## 🚀 Getting Started

### Prerequisites

1. **HubSpot Account** with:
   - Developer account access
   - Custom objects created: Program, Session, Referral
   - Private app access token with scopes:
     - `crm.objects.deals.read`
     - `crm.objects.deals.write`
     - `crm.objects.companies.read`
     - `crm.objects.custom.read`
     - `crm.objects.custom.write`

2. **Development Tools**:
   - Node.js 18+ installed
   - HubSpot CLI installed: `npm install -g @hubspot/cli`
   - Vercel account
   - Git

3. **HubSpot Custom Objects**:
   You need to create these custom objects in HubSpot:
   - **Program** (associated with Company)
   - **Session** (associated with Program)
   - **Referral** (associated with Deal, Company, Program, Session)

   Key properties for **Referral** object:
   - `referral_key` (text) - Unique identifier
   - `referral_outreach_status` (dropdown) - Draft, Ready to Send, Sent, etc.
   - `referral_client_interest` (dropdown) - Active, Shortlist, Neutral, etc.
   - `referral_note_to_company` (text area) - Notes

---

## 📦 Installation

### Step 1: Set Up HubSpot Custom Objects

1. Go to **Settings** → **Data Management** → **Objects**
2. Create custom objects:

#### A. Program Object
- **Name**: Program
- **Associations**: Company (many-to-one)
- **Properties**: name (text)

#### B. Session Object
- **Name**: Session
- **Associations**: Program (many-to-one)
- **Properties**:
  - `name` (text)
  - `start_date` (date)
  - `end_date` (date)
  - `price` (number)
  - `weeks` (number)

#### C. Referral Object
- **Name**: Referral
- **Associations**:
  - Deal (many-to-one)
  - Company (many-to-one)
  - Program (many-to-one, optional)
  - Session (many-to-one, optional)
- **Properties**:
  - `referral_key` (text, unique)
  - `referral_outreach_status` (dropdown): Draft, Ready to Send, Sent, Resend, Don't send (already sent)
  - `referral_client_interest` (dropdown): Active / considering, Shortlist, Neutral, Unlikely, Declined, Selected
  - `referral_note_to_company` (text area)

### Step 2: Deploy Vercel API

1. **Navigate to the Vercel API directory**:
   ```bash
   cd referral-builder/vercel-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env
   ```

4. **Edit `.env`** and add your HubSpot access token:
   ```env
   HUBSPOT_ACCESS_TOKEN=pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

   # Adjust these if your custom object names differ
   HS_PROGRAM_OBJECT_TYPE=p_program
   HS_SESSION_OBJECT_TYPE=p_session
   HS_REFERRAL_OBJECT_TYPE=p_referral

   # Adjust these if your property names differ
   HS_REFERRAL_KEY_PROP=referral_key
   HS_REFERRAL_OUTREACH_PROP=referral_outreach_status
   HS_REFERRAL_INTEREST_PROP=referral_client_interest
   HS_REFERRAL_NOTE_PROP=referral_note_to_company
   ```

5. **Test locally** (optional):
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000/api/health to verify it works.

6. **Deploy to Vercel**:

   **Option A: Deploy via Vercel CLI**
   ```bash
   npm install -g vercel
   vercel
   ```
   Follow the prompts to link to your Vercel account.

   **Option B: Deploy via Vercel Dashboard**
   - Push code to GitHub
   - Go to https://vercel.com/new
   - Import your repository
   - Add environment variables in Vercel dashboard

7. **Configure Vercel Environment Variables**:
   In Vercel dashboard → Settings → Environment Variables, add:
   - `HUBSPOT_ACCESS_TOKEN`
   - `HS_PROGRAM_OBJECT_TYPE`
   - `HS_SESSION_OBJECT_TYPE`
   - `HS_REFERRAL_OBJECT_TYPE`
   - (and any other variables from `.env.example`)

8. **Note your Vercel domain**:
   After deployment, you'll get a URL like `https://your-project.vercel.app`

### Step 3: Configure HubSpot Card

1. **Navigate to the HubSpot card directory**:
   ```bash
   cd ../hubspot-card
   ```

2. **Update the Vercel domain in TWO places**:

   **A. In `src/app/app-hsmeta.json`**:
   ```json
   {
     "permittedUrls": {
       "fetch": [
         "https://api.hubapi.com",
         "https://your-project.vercel.app"  ← CHANGE THIS
       ]
     }
   }
   ```

   **B. In `src/app/cards/ReferralBuilderCard.tsx`** (line 13):
   ```typescript
   const API_BASE = "https://your-project.vercel.app"; // ← CHANGE THIS
   ```

3. **Authenticate HubSpot CLI**:
   ```bash
   hs auth
   ```
   Follow the prompts to authenticate with your HubSpot account.

4. **Deploy to HubSpot**:
   ```bash
   hs project upload
   ```

   This will upload your card to HubSpot.

### Step 4: Add Card to Deal Layout

The card won't automatically appear on Deals. You need to add it:

1. Go to **Settings** → **Objects** → **Deals** → **Record customization**
2. Edit the layout you use
3. In the right sidebar, click **"Add card"**
4. Find **"Referral Builder"** under your app
5. Click **Save** and **Publish**

### Step 5: Test the Integration

1. Open any Deal record in HubSpot
2. The **Referral Builder** card should appear in the right sidebar
3. Test the workflow:
   - Search for a company
   - Select a company → programs should load
   - Select a program → sessions should load
   - Create a referral
   - Update referral properties
   - Reload to see persisted data

---

## 🔧 Configuration

### Custom Object Names

If your custom objects use different names (e.g., `p_camp_program` instead of `p_program`):

1. Update `.env` in `vercel-api/`:
   ```env
   HS_PROGRAM_OBJECT_TYPE=p_camp_program
   HS_SESSION_OBJECT_TYPE=p_camp_session
   HS_REFERRAL_OBJECT_TYPE=p_camp_referral
   ```

2. Redeploy to Vercel

### Property Names

If your Referral object uses different property names:

1. Update `.env` in `vercel-api/`:
   ```env
   HS_REFERRAL_KEY_PROP=custom_referral_key
   HS_REFERRAL_OUTREACH_PROP=custom_outreach_status
   # etc.
   ```

2. Update the card UI in `ReferralBuilderCard.tsx` where it calls `updateReferral()` to use matching property names

3. Redeploy both Vercel API and HubSpot card

---

## 📁 Project Structure

```
referral-builder/
├── hubspot-card/                      # HubSpot UI Extension
│   ├── hsproject.json                 # Project config (platformVersion: 2025.2)
│   ├── .gitignore
│   └── src/
│       └── app/
│           ├── app-hsmeta.json        # App metadata
│           └── cards/
│               ├── card-hsmeta.json   # Card metadata
│               ├── ReferralBuilderCard.tsx  # Card UI component
│               └── package.json
│
└── vercel-api/                        # Next.js API Backend
    ├── package.json
    ├── tsconfig.json
    ├── next.config.js
    ├── vercel.json
    ├── .env.example
    ├── .gitignore
    └── src/
        ├── lib/
        │   ├── hubspot.ts             # HubSpot API client
        │   ├── config.ts              # Configuration constants
        │   ├── associations.ts        # Association helper
        │   └── objects.ts             # Object helper
        └── app/
            └── api/
                ├── health/
                │   └── route.ts       # Health check endpoint
                ├── companies/
                │   ├── search/
                │   │   └── route.ts   # Search companies
                │   └── [companyId]/
                │       └── programs/
                │           └── route.ts  # Get programs for company
                ├── programs/
                │   └── [programId]/
                │       └── sessions/
                │           └── route.ts  # Get sessions for program
                ├── deals/
                │   └── [dealId]/
                │       └── referrals/
                │           └── route.ts  # Get referrals for deal
                └── referrals/
                    ├── route.ts       # Create referral
                    └── [referralId]/
                        └── route.ts   # Update referral
```

---

## 🔌 API Endpoints

All endpoints are prefixed with your Vercel domain (e.g., `https://your-project.vercel.app`).

### `GET /api/health`
Health check endpoint.

**Response:**
```json
{
  "ok": true,
  "ts": "2025-01-11T12:00:00.000Z"
}
```

### `GET /api/companies/search?q={query}`
Search for companies by name.

**Parameters:**
- `q` (required): Search query
- `limit` (optional): Max results (default: 20)

**Response:**
```json
{
  "results": [
    {
      "id": "12345",
      "name": "Camp Adventure"
    }
  ]
}
```

### `GET /api/companies/{companyId}/programs`
Get programs associated with a company.

**Response:**
```json
{
  "results": [
    {
      "id": "67890",
      "name": "Summer Adventure Program"
    }
  ]
}
```

### `GET /api/programs/{programId}/sessions`
Get sessions associated with a program.

**Response:**
```json
{
  "results": [
    {
      "id": "11111",
      "name": "Session 1",
      "startDate": "2025-06-01",
      "endDate": "2025-06-15",
      "price": "1200",
      "weeks": "2"
    }
  ]
}
```

### `GET /api/deals/{dealId}/referrals`
Get all referrals associated with a deal.

**Response:**
```json
{
  "results": [
    {
      "id": "22222",
      "referralKey": "12345-67890",
      "outreachStatus": "Draft",
      "clientInterest": "Active / considering",
      "note": "Great fit for the family",
      "company": {
        "id": "67890",
        "name": "Camp Adventure"
      },
      "program": {
        "id": "11111",
        "name": "Summer Adventure Program"
      },
      "session": {
        "id": "33333",
        "name": "Session 1",
        "startDate": "2025-06-01",
        "endDate": "2025-06-15",
        "price": "1200"
      }
    }
  ]
}
```

### `POST /api/referrals`
Create a new referral.

**Request body:**
```json
{
  "dealId": "12345",
  "companyId": "67890",
  "programId": "11111",
  "sessionId": "33333",
  "note": "Great fit for the family"
}
```

**Response:**
```json
{
  "ok": true,
  "referralId": "22222"
}
```

### `PATCH /api/referrals/{referralId}`
Update referral properties.

**Request body:**
```json
{
  "properties": {
    "referral_outreach_status": "Sent",
    "referral_client_interest": "Shortlist",
    "referral_note_to_company": "Updated note"
  }
}
```

**Response:**
```json
{
  "ok": true
}
```

---

## 🐛 Troubleshooting

### Card not appearing on Deals
- Verify you added the card to the Deal layout (Settings → Objects → Deals → Record customization)
- Check that `objectTypes: ["deals"]` is set in `card-hsmeta.json`
- Re-run `hs project upload`

### API requests failing
- Verify your Vercel domain is correctly set in both `app-hsmeta.json` and `ReferralBuilderCard.tsx`
- Check Vercel logs for errors
- Verify `HUBSPOT_ACCESS_TOKEN` is set in Vercel environment variables
- Test the health endpoint: `https://your-project.vercel.app/api/health`

### Custom objects not found
- Verify object type IDs in `.env` match your HubSpot setup
- Check object API names in HubSpot Settings → Objects
- Use `p_{object_name}` format or full `objectTypeId`

### Permission errors
- Verify your HubSpot access token has all required scopes
- Check token hasn't expired
- Ensure token has access to custom objects

### Associations not working
- Verify associations are set up between objects in HubSpot
- Check that Companies have associated Programs
- Check that Programs have associated Sessions
- Ensure association labels are set correctly

---

## 🔄 Updating the Application

### Update HubSpot Card UI

1. Make changes to `ReferralBuilderCard.tsx`
2. Run:
   ```bash
   cd hubspot-card
   hs project upload
   ```
3. Refresh the Deal page in HubSpot

### Update Vercel API

1. Make changes to API routes or helpers
2. Commit and push to GitHub (if using automatic deployments)
3. Or run:
   ```bash
   cd vercel-api
   vercel --prod
   ```
4. Changes take effect immediately (no HubSpot refresh needed)

---

## 📚 Additional Resources

- [HubSpot Developer Projects Documentation](https://developers.hubspot.com/docs/platform/developer-projects)
- [HubSpot UI Extensions Documentation](https://developers.hubspot.com/docs/platform/ui-extensions-overview)
- [HubSpot CRM API Documentation](https://developers.hubspot.com/docs/api/crm/understanding-the-crm)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)

---

## 🤝 Support

If you encounter issues:

1. Check the Troubleshooting section above
2. Review Vercel deployment logs
3. Check HubSpot developer console for errors
4. Verify all environment variables are set correctly

---

## 📝 License

This project is provided as-is for internal use.

---

## ✅ Next Steps / Future Enhancements

Consider implementing:

1. **Session Multi-Select**: Allow selecting multiple session options per referral
2. **Copy Prior Year Referrals**: Clone referrals from previous Deals for the same household
3. **Auto-Update Deal**: When client interest becomes "Selected", update Deal amount and close date
4. **Enhanced Error Handling**: More robust error messages and loading states
5. **Bulk Operations**: Create multiple referrals at once
6. **Filtering & Sorting**: Filter referrals by status, sort by date/interest
7. **Email Integration**: Send referral emails directly from the card
8. **Analytics Dashboard**: Track referral conversion rates

---

**Built with ❤️ using HubSpot 2025.2 Platform and Next.js**
