/**
 * Puts a screen recording inside a device frame and exports MP4 (H.264), WebM (VP9) and a poster.
 * Usage: node scripts/mockups/frame.mjs <name> <recording.mp4> '<composition json with one item whose src is "HOLE">' [start] [end]
 * Output: scripts/mockups/out/<name>.mp4|.webm|-poster.jpg — copy them to public/media/.
 */
import { chromium } from 'playwright';
import sharp from 'sharp';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { mkdirSync } from 'node:fs';
const [,, name, video, cfgStr, ss = '0', to = ''] = process.argv;
const dir = path.dirname(new URL(import.meta.url).pathname);
const { default: FF } = await import('ffmpeg-static');
const cfg = JSON.parse(cfgStr);
mkdirSync(path.resolve(dir, 'out'), { recursive: true });
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const pg = await b.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1 });
await pg.goto('file://' + dir + '/studio.html#' + encodeURIComponent(JSON.stringify(cfg)));
await pg.waitForTimeout(200);
const base = path.resolve(dir, 'out', name + '-base.png');
await pg.screenshot({ path: base });
const [h] = await pg.evaluate(() => window.holes);
const isPhone = cfg.items[0].type === 'phone';
await b.close();
const r = isPhone ? 46 : 14;
const mask = path.resolve(dir, 'out', name + '-mask.png');
const { x, y, w } = h; const hh = h.h;
await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000"><rect width="1600" height="1000" fill="black"/><path d="M${x} ${y} H${x + w} V${y + hh - r} Q${x + w} ${y + hh} ${x + w - r} ${y + hh} H${x + r} Q${x} ${y + hh} ${x} ${y + hh - r} Z" fill="white"/></svg>`)).png().toFile(mask);
const outBase = path.resolve(dir, 'out', name);
const probe = (() => { try { execFileSync(FF, ['-i', video]); } catch (e) { return String(e.stderr); } })();
const m = /Duration: (\d+):(\d+):([\d.]+)/.exec(probe);
const dur = (+m[1]) * 3600 + (+m[2]) * 60 + parseFloat(m[3]);
const end = to ? Math.min(+to, dur) : dur;
const len = (end - +ss).toFixed(2);
const trim = ['-ss', ss, '-t', len];
const fc = `[1:v]scale=${w}:${hh}:force_original_aspect_ratio=increase,crop=${w}:${hh}:0:0,pad=1600:1000:${x}:${y},format=rgba[v];[2:v]format=gray[m];[v][m]alphamerge[vm];[0:v][vm]overlay=0:0:shortest=1,format=yuv420p[o]`;
execFileSync(FF, ['-y', '-loglevel', 'error', '-loop', '1', '-i', base, ...trim, '-i', video, '-loop', '1', '-i', mask, '-filter_complex', fc, '-map', '[o]', '-t', len, '-r', '30', '-c:v', 'libx264', '-crf', '27', '-preset', 'medium', '-movflags', '+faststart', '-an', outBase + '.mp4']);
execFileSync(FF, ['-y', '-loglevel', 'error', '-i', outBase + '.mp4', '-c:v', 'libvpx-vp9', '-crf', '38', '-b:v', '0', '-row-mt', '1', '-deadline', 'good', '-cpu-used', '4', '-an', outBase + '.webm']);
execFileSync(FF, ['-y', '-loglevel', 'error', '-ss', '0.5', '-i', outBase + '.mp4', '-frames:v', '1', '-q:v', '3', outBase + '-poster.jpg']);
console.log(name, 'ok');
