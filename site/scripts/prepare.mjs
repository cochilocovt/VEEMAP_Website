import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const installer = new URL('../../tools/install-git-hooks.mjs', import.meta.url);

if (existsSync(fileURLToPath(installer))) {
  await import(installer.href);
} else {
  console.log('Repository hook installer unavailable; skipping local Git hook setup.');
}
