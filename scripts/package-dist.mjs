/**
 * Zips dist/ (files at the root of the archive) for a manual upload in the
 * operaia-host panel. Run after `npm run build`: `npm run package`.
 * Uses the system zip tool (zip on macOS/Linux, PowerShell on Windows).
 */
import { execFileSync } from 'node:child_process';
import { existsSync, rmSync } from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const out = path.resolve('marieligalleani-site.zip');
if (!existsSync(dist)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}
rmSync(out, { force: true });
if (process.platform === 'win32') {
  execFileSync('powershell', ['-NoProfile', '-Command', `Compress-Archive -Path "${dist}\\*" -DestinationPath "${out}"`], { stdio: 'inherit' });
} else {
  execFileSync('zip', ['-qr', out, '.'], { cwd: dist, stdio: 'inherit' });
}
console.log(`✓ ${path.basename(out)} ready — upload it as a STATIC site in operaia-host.`);
