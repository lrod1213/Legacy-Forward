# Legacy Forward

Shell website for **Legacy Forward: The Capital Campaign for Legacy Christian Academy**. The tagline is **A Future of Promise**.

The page follows a philanthropic campaign pattern — hero, impact, priorities, ways to give, stories, FAQ, and footer — and uses the September 2026 Legacy Forward brand guide for color, type, logo, and voice. Sections without an approved case statement are labeled **Starter** or left empty. This site does not invent a dollar goal, a timeline, or donor stories.

Prepared for Vercel at `legacyforward.lcafrisco.com`. That domain is not attached yet.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production mode:

```bash
npm run build
npm start
```

No environment variables or secrets are required.

## Deploy on Vercel

1. Import this repository in Vercel. Framework preset: Next.js. Leave environment variables empty.
2. Deploy. The app builds with `next build` and does not call outside services.
3. In the Vercel project, open **Settings → Domains** and add `legacyforward.lcafrisco.com`.
4. At the DNS host for `lcafrisco.com`, add a **CNAME** record:
   - Name: `legacyforward`
   - Target: `cname.vercel-dns.com`
5. Wait until Vercel reports the domain as verified. Do not treat the name as live before that check succeeds.

## Brand notes for the next edit

- Colors: Legacy Green `#004621`, Promise Gold `#FBB812`, Evergreen `#618D74`, Sage `#A7C8B5`, Mist `#D0E1D7`, Honey `#FFD990`.
- Type: Vollkorn italic for headlines, Open Sans for body and tracked labels. Both are Google fonts named in the brand guide.
- Logo files in `public/brand/` are cropped from the brand guide. Do not retype the wordmark.
- Campaign figures (`/?figures=loading` and `/?figures=error`) and stories (`/?stories=loading` and `/?stories=error`) show empty, loading, and error states. The give form at `/give` shows validation, a saving state, an undelivered success state, and an error when the email ends in `@error.test`.
