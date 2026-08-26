# CI/CD

GitHub Actions validates every pull request to `main` and every direct push to
`main`. The production workflow only deploys after dependencies install, lint,
and build all succeed.

## One-time repository setup

In the GitHub repository settings, create these Actions secrets:

- `CLOUDFLARE_API_TOKEN` — a least-privilege Cloudflare API token that can edit
  the intended Worker.
- `CLOUDFLARE_ACCOUNT_ID` — the Cloudflare account that owns that Worker.

Also create this Actions variable:

- `CLOUDFLARE_WORKER_NAME` — the exact Worker name that should receive
  production deployments.

The deployment job uses GitHub's `production` environment. Configure required
reviewers there if production releases should require approval.

## Workflow behavior

- `.github/workflows/ci.yml` runs dependency installation, linting, and the
  production build for pull requests and pushes affecting `site/`.
- `.github/workflows/deploy.yml` repeats those gates and deploys the generated
  Cloudflare Worker after a successful push to `main`, or when run manually.

The deployment command keeps Cloudflare dashboard-managed runtime variables in
place. Do not store API tokens or runtime secrets in this repository.
