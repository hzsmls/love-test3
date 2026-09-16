# find · 你有多喜欢TA

Mobile-first relationship self-exploration prototype matching the approved low-saturation neumorphic design. Includes home, 30 original scenario questions, answer revision, unknown option, computed trial results, sample preview, and answer-grounded deeper report preview. No payments, accounts, analytics or answer submission. Answers exist only in the mounted page and reset on reload.

## Run

Install with pnpm, then `pnpm dev`. Production build: `pnpm build`.
Scoring checks: `node --experimental-strip-types --test tests/quiz.test.mjs`.

## Scoring

`lib/quiz.ts` implements the agreed trial mapping from 喜欢测试-试测评分方案-v1.md. There are 18 scored items and 12 background items. Exclude null/unknown options. Coverage thresholds: 4/5, 4/6, 5/7. Average the unrounded three dimension percentages equally; round only for display. Require all 30 questions selected, including E where appropriate, before displaying a final total. Weights and mappings are provisional, not a validated scale. No diagnostic labels or cutoffs.

## Assets

`public/soft-hero.png` is an original built-in imagegen asset created for this project, not a screenshot or copied illustration.

## WebMCP

Feature-detected `get_quiz_state` and `select_current_answer` use the same visible app state. No supported WebMCP runtime was available to verify this optional surface; it is not required for the normal user flow. Invalid selections fail before updating state.

## GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`. Upload the project to a GitHub repository, then open **Settings → Pages** and set **Source** to **GitHub Actions**. Each push to `main` will build and publish the site at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

Do not upload `node_modules`, `dist`, `.next`, `.vinext`, or `.wrangler`; GitHub Actions installs dependencies and builds a fresh static copy.

## Scope

Deep report is currently hidden from the result page and can be added later. No claim of scientifically validated scores.
