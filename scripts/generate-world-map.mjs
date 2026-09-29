/**
 * Generates the dotted world map used in the hero.
 *   public/media/world-dots.svg  — the land dots (used as a CSS mask, colored by tokens)
 *   src/data/world-map.json      — map size + projected city coordinates for pins and routes
 * Run: node scripts/generate-world-map.mjs
 */
import { writeFileSync } from 'node:fs';
import dotted from 'dotted-map';

const DottedMap = dotted.default ?? dotted;

const map = new DottedMap({ height: 64, grid: 'diagonal' });

// kind: origin = where clients come from · hub = our base · market = where we launch
const cities = {
  sf: { lat: 37.77, lng: -122.42, kind: 'origin' },
  toronto: { lat: 43.65, lng: -79.38, kind: 'origin' },
  ny: { lat: 40.71, lng: -74.0, kind: 'origin' },
  london: { lat: 51.5, lng: -0.12, kind: 'origin' },
  madrid: { lat: 40.4, lng: -3.7, kind: 'origin' },
  berlin: { lat: 52.52, lng: 13.4, kind: 'origin' },
  telaviv: { lat: 32.08, lng: 34.78, kind: 'origin' },
  saopaulo: { lat: -23.55, lng: -46.63, kind: 'hub' },
  mexico: { lat: 19.43, lng: -99.13, kind: 'market' },
  bogota: { lat: 4.71, lng: -74.07, kind: 'market' },
  quito: { lat: -0.18, lng: -78.47, kind: 'market' },
  lima: { lat: -12.05, lng: -77.04, kind: 'market' },
  santiago: { lat: -33.45, lng: -70.67, kind: 'market' },
  buenosaires: { lat: -34.6, lng: -58.38, kind: 'market' },
  montevideo: { lat: -34.9, lng: -56.16, kind: 'market' },
};

const { width, height } = map.image;
const round = (n) => Math.round(n * 100) / 100;
const points = {};
for (const [id, c] of Object.entries(cities)) {
  const { x, y } = map.getPin({ lat: c.lat, lng: c.lng });
  points[id] = { x: round(x), y: round(y), kind: c.kind };
}

writeFileSync('src/data/world-map.json', JSON.stringify({ width, height, points }, null, 2) + '\n');
// One path of zero-length round-capped segments = one dot each (far smaller than <circle>s).
const d = map.getPoints().map(({ x, y }) => `M${round(x)} ${round(y)}h0`).join('');
writeFileSync(
  'public/media/world-dots.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"><path d="${d}" stroke="#000" stroke-width="0.5" stroke-linecap="round"/></svg>\n`,
);
console.log(`world map ${width}×${height}, ${map.getPoints().length} dots`);
