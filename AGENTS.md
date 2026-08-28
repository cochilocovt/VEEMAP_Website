# Project Agent Instructions

## Recommended working mode

For coding tasks, use
[`ponytail:ponytail`](C:\\Users\\V.T\\.codex\\plugins\\cache\\ponytail\\ponytail\\4.9.0\\skills\\ponytail\\SKILL.md)
when it is available. If it is unavailable, continue with the project
instructions; installing Ponytail is not required.

## Keep the handoff current

After a meaningful code, configuration, dependency, content, deployment, or
architecture change, run:

```powershell
node tools/update-handoff.mjs
```

Commit the resulting `docs/LLM_HANDOFF.md` with the related change. Do not run
it for whitespace-only churn or an abandoned experiment. The versioned Git hook
also refreshes and stages the document before each commit once installed.

## Project guardrails

- Read `PRODUCT.md`, `site/DESIGN.md`, and the relevant source in
  `docs/brand-context/` before changing public claims or content.
- Keep the enquiry flow as a client-side `mailto:` handoff unless the user
  explicitly authorizes a submission service.
- Do not invent certifications, client claims, project specifications, social
  links, or performance figures.
- Preserve existing uncommitted work unless the user asks to change it.
