/**
 * Generates placeholder cover images for the example cases and the default OG image.
 * Replace the files in src/assets/cases/ with real screenshots when you have them.
 * Run: npm run covers
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const covers = [
  { file: 'src/assets/cases/scientific-software.jpg', label: 'Design System', sub: 'Scientific software', a: '#4527D9', b: '#0B1F3A' },
  { file: 'src/assets/cases/operaia-lab.jpg', label: 'Operaia Lab', sub: 'AI agents virtual office', a: '#7B2FF7', b: '#12002E' },
  { file: 'src/assets/cases/agenda-operaia.jpg', label: 'Agenda Operaia', sub: 'Clinic scheduling', a: '#0E7A4F', b: '#062A1C' },
];

const svg = ({ label, sub, a, b }, w, h) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <g fill="none" stroke="#fff" stroke-opacity="0.12">
    ${Array.from({ length: 12 }, (_, i) => `<circle cx="${w * 0.8}" cy="${h * 0.2}" r="${60 + i * 70}"/>`).join('')}
  </g>
  <rect x="${w * 0.08}" y="${h * 0.56}" width="${w * 0.5}" height="${h * 0.28}" rx="24" fill="#fff" fill-opacity="0.1"/>
  <text x="${w * 0.08}" y="${h * 0.38}" font-family="Helvetica, Arial, sans-serif" font-size="${h * 0.1}" font-weight="700" fill="#fff">${label}</text>
  <text x="${w * 0.08}" y="${h * 0.47}" font-family="Helvetica, Arial, sans-serif" font-size="${h * 0.045}" fill="#fff" fill-opacity="0.8">${sub}</text>
</svg>`;

await mkdir('src/assets/cases', { recursive: true });
for (const c of covers) {
  await sharp(Buffer.from(svg(c, 1600, 1000))).jpeg({ quality: 85 }).toFile(c.file);
  console.log('✓', c.file);
}

const og = svg({ label: 'Marieli Galleani', sub: 'Product Designer who ships.', a: '#4527D9', b: '#16151A' }, 1200, 630);
await sharp(Buffer.from(og)).png().toFile('public/og-default.png');
console.log('✓ public/og-default.png');
