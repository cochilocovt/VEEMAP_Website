import { execFileSync } from 'node:child_process';
import { chmodSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryRoot = fileURLToPath(new URL('../', import.meta.url));

try {
  execFileSync('git', ['rev-parse', '--git-dir'], { cwd: repositoryRoot, stdio: 'ignore' });
  chmodSync(resolve(repositoryRoot, '.githooks/pre-commit'), 0o755);
  execFileSync('git', ['config', 'core.hooksPath', '.githooks'], { cwd: repositoryRoot, stdio: 'inherit' });
  console.log('Git hooks enabled from .githooks.');
} catch {
  console.log('Not a Git checkout; hooks were not configured.');
}
