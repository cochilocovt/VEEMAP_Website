# CI/CD

GitHub Actions validates every pull request and every relevant push to `main`.
Vercel deploys the same GitHub repository after it is connected through the
Vercel dashboard.

## Vercel deployment state

- Vercel project: `veemap-technologies`
- Project root: `site`
- Git branch deployed: `main`
- Current deployment: successful, but protected by Vercel Authentication
- Public alias: not currently attached; <https://veemap-technologies.vercel.app>
  returns Vercel `NOT_FOUND`

Promoting the latest deployment and attaching a public alias requires an
authenticated Vercel account session.

## Vercel project configuration

The project imports `cochilocovt/VEEMAP_Website`, uses `site` as its Root
Directory, and detects Next.js. Git pushes receive Vercel deployments; confirm
the Production Branch and public-domain assignment in the Vercel dashboard.

No GitHub deployment secrets are required for this Git-integration approach.
Vercel stores its deployment credentials and environment values in the Vercel
project rather than in this repository.

## Workflow behavior

- `.github/workflows/ci.yml` runs a clean dependency installation, linting,
  and the production build for pull requests and pushes affecting the site or
  a GitHub workflow.
- Vercel uses `site/vercel.json` and the standard Next.js build to create
  previews for pull requests and deploy `main` to production.
