# stock-learning-site-pro-v2

Next.js 14 + Tailwind + (Firebase optional). Hebrew RTL. 20-day curriculum (detailed) + branded landing page.

## Local run
```bash
npm install
npm run dev
```

## Environment variables (recommended)
Create `.env.local`:
```
NEXT_PUBLIC_SITE_NAME=תיק השקעות – פשוט
NEXT_PUBLIC_SITE_DESC=תהליך למידה בן 20 ימים – מאפס ידע לפתיחת תיק במדדים.
NEXT_PUBLIC_SITE_URL=https://YOUR-SITE.vercel.app
NEXT_PUBLIC_CONTACT_EMAIL=you@example.com
NEXT_PUBLIC_WHATSAPP=+972500000000

# Firebase (optional)
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

### Firestore security rules (example)
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /progress/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Deploy to Vercel (step-by-step)
1. Push this folder to GitHub (or connect directly in Vercel).
2. Go to Vercel → New Project → Import your repo → Framework: **Next.js** → Deploy.
3. In Vercel Project → Settings → Environment Variables, add the variables from `.env.local` (at least `NEXT_PUBLIC_SITE_URL`).
4. Click **Redeploy**.
5. Open your site URL. You're live!

### Change brand color
Edit `styles/globals.css`, the `--brand` variable.
