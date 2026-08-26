# CI/CD

GitHub Actions validates every pull request and every relevant push to `main`.
Vercel deploys the same GitHub repository after it is connected through the
Vercel dashboard.

## One-time Vercel setup

1. In Vercel, import `cochilocovt/VEEMAP_Website` as a new project.
2. Set the project's Root Directory to `site`.
3. Leave the detected framework as Next.js and use the repository's install and
   build commands.
4. Link the `main` branch to Production. Pull requests then receive Vercel
   preview deployments automatically.

No GitHub deployment secrets are required for this Git-integration approach.
Vercel stores its deployment credentials and environment values in the Vercel
project rather than in this repository.

## Workflow behavior

- `.github/workflows/ci.yml` runs a clean dependency installation, linting,
  and the production build for pull requests and pushes affecting the site or
  a GitHub workflow.
- Vercel uses `site/vercel.json` and the standard Next.js build to create
  previews for pull requests and deploy `main` to production.
