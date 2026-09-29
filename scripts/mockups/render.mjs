/**
 * Renders mockup compositions (browser windows / phones on a branded background) to images.
 * Usage: node scripts/mockups/render.mjs scripts/mockups/compositions.json
 * Each entry: { out, theme: { bg, c1, c2, chrome: 'light'|'dark' }, items: [{ type: 'win'|'phone', x, y, w, src, url }] }
 * `src` paths are relative to the current working directory. Output: scripts/mockups/out/<out>.jpg at 2x.
 */
import { chromium } from 'playwright';
import { readFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
const cfgs = JSON.parse(await readFile(process.argv[2],'utf8'));
const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium', args:['--allow-file-access-from-files'] });
const dir = path.dirname(new URL(import.meta.url).pathname);
for (const c of cfgs) {
  const scale = c.scale ?? 2;
  const pg = await b.newPage({ viewport:{width:1600,height:1000}, deviceScaleFactor:scale });
  const items = c.items.map(i=>({...i, src: i.src==='HOLE'?'HOLE':'file://'+path.resolve(process.cwd(),i.src)}));
  await pg.goto('file://'+dir+'/studio.html#'+encodeURIComponent(JSON.stringify({...c,items})));
  await pg.waitForFunction(()=>[...document.images].every(i=>i.complete)); await pg.waitForTimeout(200);
  await mkdir(path.resolve(dir,'out'),{recursive:true});
  const out = path.resolve(dir,'out',c.out+(c.png?'.png':'.jpg'));
  await pg.screenshot({ path: out, type: c.png?'png':'jpeg', quality: c.png?undefined:90 });
  const holes = await pg.evaluate(()=>window.holes);
  if (holes.length) console.log(c.out, JSON.stringify(holes.map(h=>({x:h.x*scale,y:h.y*scale,w:h.w*scale,h:h.h*scale}))));
  await pg.close();
}
await b.close();
