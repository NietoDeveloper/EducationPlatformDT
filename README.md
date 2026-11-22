<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:FEB60D,50:3a2f0b,100:0A0A0F&height=140&section=header&text=Education%20DT&fontColor=ffffff&fontSize=40&animation=fadeIn" alt="Education DT"/>
</p>

<p align="cent
  <b>The education platform where grades reach students and families instantly.</b><br/>
## Who it is for

| Segment | Needs |
| Schools (primary and secondary) | Grades per period, report cards, attendance, guardian communication | **First** |
| Universities | Semesters, credits, course enrolment, certificates | Later |
| Open courses and individuals | Catalogue, direct enrolment, certificates | Later |

## Pricing model (indicative, COP)

A one-time setup fee plus a yearly subscription per **active student**.

| Plan | For | Indicative price |
|---|---|---|
| Pilot | First 2–3 schools | 30–60 day trial, spreadsheet import included |
| Small school | up to 300 students | ≈ COP 2,500–4,000 / student / year |
| Medium school | 300–1,000 students | ≈ COP 2,000–3,200 / student / year |
| Large or multi-campus | 1,000+ students | Quote |

These are **starting figures to validate with pilot schools**, not a final price list. The setup fee is quoted per school.

## Technology

| Interface | Services | Computation | Cloud & delivery |
|---|---|---|---|
| React + TypeScript | Node.js + TypeScript | C++ | AWS |
| Next.js | MongoDB | Python | Docker |
| Tailwind CSS | PostgreSQL | PDF generation | CI/CD |
| Zustand | Wompi payments | Analytics | Vercel |

## Honest status

| Item | Status |
|---|---|
| Live grades, spreadsheet import, PDF report cards, platform subscription | **Version 1 in progress** |
| Assignments, materials, messaging, tuition payments | Roadmap |
| Universities and open courses | Roadmap |
| Offline mode and mobile app | Roadmap |
| Prices above | **Indicative.** Validated with pilot schools before being fixed. |
| Comparison with other platforms | The site lists them by name only. No third-party prices until they are verified at the source. |

## Run it locally

Requires Node.js ≥ 20.

```bash
git clone https://github.com/NietoDeveloper/EducationPlatformDT.git
cd EducationPlatformDT
npm install
npm run dev
```

- Web: <http://localhost:5174>
- API: <http://localhost:4200/api/health>

If the API is not running, the site falls back to the bundled content and says so in the hero.

**With Docker** (web on 8081, API on 4200):

```bash
npm run docker:up
```

### Try the live-grade demo

The **"Pruébalo tú mismo"** section simulates the teacher and student views in your browser. It uses no server and no real data. It only illustrates the idea.

## Monorepo layout

```
apps/web         Vite + React + TS + Tailwind showcase site (Spanish)
apps/api         Express + TS API that serves the content (local)
packages/content Typed content and the grade helpers shared by both
```

Scripts: `npm run dev` · `npm run build` · `npm run typecheck` · `npm test` · `npm run check:public`

## Not deployed on purpose

This showcase is meant to be cloned and run locally. It deliberately contains **no product source code, no infrastructure layout, no secrets**. `npm run check:public` fails if anything that looks like a secret or a pointer to private infrastructure sneaks into the tree.

## License

[MIT](LICENSE) for this repository. The Education DT product, name, logo and brand belong to Software DT.

<p align="center">
  Built by <a href="https://github.com/NietoDeveloper"><b>Manuel Nieto</b></a> · <a href="https://softwaredt.com">softwaredt.com</a> · Software DT
</p>
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:FEB60D,50:3a2f0b,100:0A0A0F&height=70&section=footer"/>
</p>
