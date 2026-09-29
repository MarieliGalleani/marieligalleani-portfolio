/**
 * Recording helpers for Playwright: high-quality screencast (CDP) to MP4, smooth scroll,
 * a visible cursor/touch indicator and glide-to-click.
 */
import { writeFile, mkdir, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
const { default: FF } = await import('ffmpeg-static');
export async function startRec(page, name, { w, h } = {}) {
  const dir = new URL(`./out/rec/${name}/`, import.meta.url).pathname;
  await rm(dir, { recursive: true, force: true }); await mkdir(dir, { recursive: true });
  const cdp = await page.context().newCDPSession(page);
  const frames = [];
  cdp.on('Page.screencastFrame', async f => {
    frames.push({ ts: f.metadata.timestamp, data: f.data });
    await cdp.send('Page.screencastFrameAck', { sessionId: f.sessionId }).catch(()=>{});
  });
  const vp = page.viewportSize();
  await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 92, maxWidth: w || vp.width * 2, maxHeight: h || vp.height * 2, everyNthFrame: 1 });
  return async function stop() {
    const end = Date.now() / 1000;
    await cdp.send('Page.stopScreencast');
    let list = '';
    for (let i = 0; i < frames.length; i++) {
      const f = `${dir}f${String(i).padStart(5, '0')}.jpg`;
      await writeFile(f, Buffer.from(frames[i].data, 'base64'));
      const next = i + 1 < frames.length ? frames[i + 1].ts : end;
      list += `file '${f}'\nduration ${Math.max(0.001, next - frames[i].ts).toFixed(4)}\n`;
    }
    list += `file '${dir}f${String(frames.length - 1).padStart(5, '0')}.jpg'\n`;
    await writeFile(dir + 'list.txt', list);
    const out = new URL(`./out/rec/${name}.mp4`, import.meta.url).pathname;
    execFileSync(FF, ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', dir + 'list.txt', '-vf', 'fps=30,scale=trunc(iw/2)*2:trunc(ih/2)*2', '-c:v', 'libx264', '-crf', '14', '-pix_fmt', 'yuv420p', out]);
    console.log('rec', name, frames.length, 'frames ->', out);
    return out;
  };
}
// smooth scroll helper
export async function smoothScroll(page, dy, ms = 1200, sel = null) {
  await page.evaluate(async ([dy, ms, sel]) => {
    const el = sel ? document.querySelector(sel) : document.scrollingElement;
    const start = el.scrollTop, t0 = performance.now();
    await new Promise(r => { const step = t => { const k = Math.min(1, (t - t0) / ms); const e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; el.scrollTop = start + dy * e; k < 1 ? requestAnimationFrame(step) : r(); }; requestAnimationFrame(step); });
  }, [dy, ms, sel]);
}
// visible cursor overlay so viewers can follow interactions
export async function addCursor(page, touch = false) {
  await page.addInitScript((touch) => {
    addEventListener('DOMContentLoaded', () => {
      const c = document.createElement('div');
      c.id = '__cursor';
      c.style.cssText = 'position:fixed;z-index:2147483647;left:-40px;top:-40px;width:22px;height:22px;pointer-events:none;transition:left .45s cubic-bezier(.2,.8,.2,1),top .45s cubic-bezier(.2,.8,.2,1)';
      c.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24"><path d="M4 2l16 9-7 2-3 7z" fill="#111" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>';
      if (touch) { c.style.width = c.style.height = '34px'; c.innerHTML = '<div style="width:34px;height:34px;border-radius:50%;background:rgba(20,20,20,.28);border:2px solid rgba(255,255,255,.9);box-shadow:0 2px 8px rgba(0,0,0,.3)"></div>'; }
      document.body.appendChild(c);
      addEventListener('mousemove', e => { c.style.left = e.clientX - (touch ? 17 : 3) + 'px'; c.style.top = e.clientY - (touch ? 17 : 2) + 'px'; }, true);
      addEventListener('mousedown', () => { c.animate([{ transform: 'scale(1)' }, { transform: 'scale(.8)' }, { transform: 'scale(1)' }], { duration: 250 }); }, true);
    });
  }, touch);
}
export async function glide(page, locator, opts = {}) {
  let box = await locator.boundingBox();
  const vh = page.viewportSize().height;
  if (box.y < 60 || box.y + box.height > vh - 90) { await smoothScroll(page, box.y - vh * 0.4, 900); await page.waitForTimeout(250); box = await locator.boundingBox(); }
  const x = box.x + box.width * (opts.fx ?? .5), y = box.y + box.height * (opts.fy ?? .5);
  await page.mouse.move(x, y, { steps: 1 }); await page.waitForTimeout(550);
  if (opts.click !== false) { await page.mouse.down(); await page.mouse.up(); }
}
