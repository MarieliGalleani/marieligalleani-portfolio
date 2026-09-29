import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLang, type Lang } from '@/i18n/ui';

type CaseEntry = CollectionEntry<'cases'>;

/**
 * Cases live in src/content/cases/<lang>/<slug>.mdx, so entry ids look like "pt/operaia-lab".
 * The slug (URL) is the same in every language.
 */
export function caseLang(entry: CaseEntry): Lang {
  return entry.id.split('/')[0] as Lang;
}

export function caseSlug(entry: CaseEntry): string {
  return entry.id.split('/').slice(1).join('/');
}

/**
 * Published cases for a language, sorted by `order`.
 * If a case has no translation yet, the English version is used as a fallback.
 */
export async function getCases(lang: Lang): Promise<CaseEntry[]> {
  const all = await getCollection('cases', ({ data }) => !data.draft);
  const bySlug = new Map<string, CaseEntry>();
  for (const entry of all) {
    const l = caseLang(entry);
    if (l !== lang && l !== defaultLang) continue;
    const slug = caseSlug(entry);
    if (l === lang || !bySlug.has(slug)) bySlug.set(slug, entry);
  }
  return [...bySlug.values()].sort((a, b) => a.data.order - b.data.order);
}
