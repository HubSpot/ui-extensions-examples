# Quick Start Guide

Get the Referral Builder running in 15 minutes.

## Prerequisites Checklist

- [ ] HubSpot developer account
- [ ] HubSpot private app access token with required scopes
- [ ] Custom objects created (Program, Session, Referral)
- [ ] Node.js 18+ installed
- [ ] HubSpot CLI: `npm install -g @hubspot/cli`
- [ ] Vercel account
- [ ] Git installed

## 5-Step Setup

### 1️⃣ Deploy Vercel API (5 min)

```bash
cd referral-builder/vercel-api
npm install
cp .env.example .env
# Edit .env and add your HUBSPOT_ACCESS_TOKEN
npm run dev  # Test locally (optional)
vercel       # Deploy to production
```

📝 **Save your Vercel URL**: `https://your-project.vercel.app`

### 2️⃣ Configure Environment Variables in Vercel (2 min)

Go to Vercel Dashboard → Settings → Environment Variables

Add:
```
HUBSPOT_ACCESS_TOKEN=pat-na1-xxxxx
HS_PROGRAM_OBJECT_TYPE=p_program
HS_SESSION_OBJECT_TYPE=p_session
HS_REFERRAL_OBJECT_TYPE=p_referral
```

### 3️⃣ Update HubSpot Card Config (3 min)

**A. Edit `hubspot-card/src/app/app-hsmeta.json`:**
```json
{
  "permittedUrls": {
    "fetch": [
      "https://api.hubapi.com",
      "https://your-project.vercel.app"  ← YOUR VERCEL URL
    ]
  }
}
```

**B. Edit `hubspot-card/src/app/cards/ReferralBuilderCard.tsx` line 13:**
```typescript
const API_BASE = "https://your-project.vercel.app"; // ← YOUR VERCEL URL
```

### 4️⃣ Deploy HubSpot Card (3 min)

```bash
cd ../hubspot-card
hs auth          # Authenticate with HubSpot
hs project upload
```

### 5️⃣ Add Card to Deal Layout (2 min)

1. HubSpot → **Settings** → **Objects** → **Deals** → **Record customization**
2. Edit your layout
3. Right sidebar → **Add card** → Find **"Referral Builder"**
4. Save & Publish

## ✅ Test It

1. Open any Deal in HubSpot
2. You should see the **Referral Builder** card in the sidebar
3. Try:
   - Search for a company
   - Select company → see programs
   - Select program → see sessions
   - Create a referral
   - Update outreach status and client interest

## 🚨 Common Issues

| Problem | Solution |
|---------|----------|
| Card not visible | Add card to Deal layout in HubSpot settings |
| API errors | Check Vercel domain is correct in both config files |
| No companies found | Verify HUBSPOT_ACCESS_TOKEN has company read scope |
| No programs/sessions | Check associations in HubSpot custom objects |

## 📖 Need More Help?

See the full [README.md](./README.md) for:
- Detailed setup instructions
- API endpoint documentation
- Troubleshooting guide
- Architecture overview

---

**That's it! You're ready to build referrals.** 🎉
