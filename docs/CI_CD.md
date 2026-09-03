# CI/CD

GitHub Actions validates every pull request and every relevant push to `main`.
Vercel deploys the same GitHub repository after it is connected through the
Vercel dashboard.

## Production

- Vercel project: `veemap-technologies`
- Project root: `site`
- Production branch: `main`
- Production alias: <https://veemap-technologies.vercel.app>

## Vercel project configuration

The project imports `cochilocovt/VEEMAP_Website`, uses `site` as its Root
Directory, detects Next.js, and links `main` to Production. Pull requests receive
Vercel preview deployments automatically.

No GitHub deployment secrets are required for this Git-integration approach.
Vercel stores its deployment credentials and environment values in the Vercel
project rather than in this repository.

## Workflow behavior

- `.github/workflows/ci.yml` runs a clean dependency installation, linting,
  and the production build for pull requests and pushes affecting the site or
  a GitHub workflow.
- Vercel uses `site/vercel.json` and the standard Next.js build to create
  previews for pull requests and deploy `main` to production.
