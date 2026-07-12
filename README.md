# Georges Khoury — Portfolio

A DevOps/cloud-engineering-themed personal portfolio built with the same stack as the reference
site: **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, deployable to **Vercel**.

## Tech stack

| Layer      | Choice                                    |
|------------|--------------------------------------------|
| Framework  | Next.js 14 (App Router)                    |
| Language   | TypeScript                                 |
| Styling    | Tailwind CSS                               |
| Components | shadcn/ui (Button, Card, Badge, Tabs, Progress) |
| Icons      | lucide-react                               |
| Fonts      | Space Grotesk (display), Inter (body), JetBrains Mono (code/tags) |
| Hosting    | Vercel (or Netlify / any Node host)        |

### About the shadcn/ui setup

This isn't just Tailwind divs styled to look like shadcn — the actual primitives are wired in:
`components/ui/button.tsx`, `card.tsx`, `badge.tsx`, `tabs.tsx`, `progress.tsx`, all built on Radix UI
+ `class-variance-authority` + `tailwind-merge`, exactly like the shadcn CLI would generate. A
`components.json` is included, so if you ever want to pull in more components (e.g. `Dialog`,
`Accordion`), you can run the CLI normally:
```bash
npx shadcn@latest add dialog
```
The color theme is CSS-variable driven (see `:root` in `app/globals.css`) mapped to this site's dark
palette, so any new shadcn component you add will automatically match.

## Project structure

```
georges-portfolio/
├─ app/
│  ├─ layout.tsx        # fonts, metadata, root shell
│  ├─ page.tsx           # assembles all sections
│  └─ globals.css        # tokens, grid bg, focus states, animations
├─ components/
│  ├─ ui/                 # shadcn/ui primitives: button, card, badge, tabs, progress
│  ├─ Header.tsx          # sticky nav + mobile menu
│  ├─ Hero.tsx            # intro + stats
│  ├─ Terminal.tsx        # typewriter CI/CD terminal (signature element)
│  ├─ About.tsx           # 4 pillar cards
│  ├─ Experience.tsx      # Step To Media internship
│  ├─ Skills.tsx          # progress bars by skill group
│  ├─ Projects.tsx        # filterable grid of all 19 projects
│  ├─ Certifications.tsx  # certification cards
│  ├─ Contact.tsx         # contact cards + resume download
│  └─ Footer.tsx
├─ lib/
│  ├─ data.ts              # ALL content lives here — projects, skills, certs
│  └─ utils.ts             # shadcn's cn() helper
├─ public/
│  └─ resume/Georges-Khoury-Resume.pdf
├─ components.json         # shadcn/ui CLI config
├─ tailwind.config.ts
├─ package.json
└─ tsconfig.json
```

## Run it locally

1. Install [Node.js 18+](https://nodejs.org) if you don't have it.
2. Open a terminal in this folder and run:
   ```bash
   npm install
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

## Deploy to Vercel (matches the reference site's `.vercel.app` URL)

1. Push this folder to a new GitHub repo (e.g. `georges-khoury-portfolio`).
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Framework preset auto-detects **Next.js** — click **Deploy**.
4. You'll get a live URL like `georges-khoury.vercel.app`.

## Editing your content

Everything you'll want to change lives in **`lib/data.ts`**:
- `projects` — add/edit/remove any of the 19 projects, tags, GitHub/live links
- `skillGroups` — skill categories, percentages, tags
- `certifications` — certification list
- `stats` — the 4 hero stat numbers

Contact details (email, phone, LinkedIn, GitHub, location) are in `components/Contact.tsx` and
`components/Footer.tsx`.

Your resume PDF is at `public/resume/Georges-Khoury-Resume.pdf` — replace that file any time to
update what the "Download Resume" buttons serve.
