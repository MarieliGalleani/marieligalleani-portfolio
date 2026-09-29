# marieligalleani.com.br

Portfólio de captação de clientes da **Marieli Galleani — Product Designer**.
Site estático em **Astro + TypeScript**, CSS próprio baseado em design tokens ([DESIGN.md](DESIGN.md)),
cases em **MDX** via Content Collections. Idioma: inglês (estrutura pronta para PT).

- Zero JavaScript enviado ao navegador (só HTML + CSS)
- Imagens otimizadas pelo `<Image />` do Astro (WebP responsivo)
- Dark mode automático (`prefers-color-scheme`), WCAG AA, foco visível, skip link
- SEO: title/description por página, Open Graph/Twitter, `sitemap-index.xml`, `robots.txt`, JSON-LD

---

## Estrutura de pastas

```
.
├── DESIGN.md                  # Tokens de design (cores, tipografia, espaçamento, raio, sombras)
├── astro.config.mjs           # Domínio, sitemap, MDX, i18n
├── docs/case-template.mdx     # Modelo para novos cases (copiar para src/content/cases/)
├── public/                    # Copiado como está para dist/ (favicon, og-default.png)
├── scripts/
│   ├── generate-covers.mjs    # Gera capas placeholder e a OG padrão (npm run covers)
│   └── contrast.mjs           # Checa contraste WCAG entre duas cores
└── src/
    ├── assets/cases/          # Capas dos cases (otimizadas no build)
    ├── components/            # Seções da home e peças reutilizáveis
    │   ├── Header / Footer / BookButton
    │   ├── Hero / Services / SelectedWork / CaseCard
    │   └── HowIWork / About / Testimonials / FinalCTA
    ├── config/site.ts         # Nome, link do Cal.com, e-mail, redes sociais  ← edite aqui
    ├── content/cases/*.mdx    # Um arquivo por case (o nome do arquivo vira a URL)
    ├── content.config.ts      # Schema do frontmatter dos cases
    ├── data/                  # Conteúdo editável: services.ts, process.ts, testimonials.ts
    ├── i18n/ui.ts             # Todos os textos de interface (EN; adicionar PT aqui)
    ├── layouts/BaseLayout.astro  # <head>, SEO, OG, placeholder de analytics
    ├── pages/
    │   ├── index.astro        # Home (ordem das seções)
    │   ├── work/[slug].astro  # Página de case
    │   ├── 404.astro
    │   └── robots.txt.ts
    └── styles/
        ├── tokens.css         # Custom properties em :root (espelho do DESIGN.md)
        └── global.css         # Reset, layout, botões, tags, cards
```

### Onde editar o quê

| Quero mudar… | Arquivo |
|---|---|
| Link do Cal.com, e-mail, LinkedIn | `src/config/site.ts` |
| Textos do hero, títulos das seções, CTAs | `src/i18n/ui.ts` |
| Serviços, prazos e preços ("from $X") | `src/data/services.ts` |
| Etapas do "How I work" | `src/data/process.ts` |
| Depoimentos | `src/data/testimonials.ts` |
| Texto do About | `src/components/About.astro` |
| Cores, fontes, espaçamentos | `DESIGN.md` + `src/styles/tokens.css` |
| Analytics | `src/layouts/BaseLayout.astro` (bloco comentado no `<head>`) |

---

## Rodar localmente

Requer **Node 22.12+** (veja `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:4321
```

Ajustes visuais: edite os valores em `DESIGN.md` e espelhe em `src/styles/tokens.css`
(os componentes só usam `var(--token)`, então a mudança se propaga pelo site todo).
Para testar dark mode, mude o tema do sistema ou use DevTools → Rendering → `prefers-color-scheme`.

---

## Adicionar um case

1. Copie `docs/case-template.mdx` para `src/content/cases/meu-case.mdx`
   → a página será `/work/meu-case/`.
2. Coloque a capa em `src/assets/cases/meu-case.jpg` (ideal: 1600×1000, JPG ou PNG) e
   aponte `cover: "../../assets/cases/meu-case.jpg"`. Escreva um `coverAlt` descritivo.
3. Preencha o frontmatter:

   | Campo | Uso |
   |---|---|
   | `title` | Título do case |
   | `client` | Tipo de cliente (aparece no card) |
   | `role`, `timeline`, `tools` | Metadados na página do case |
   | `summary` | Uma frase — card, meta description e OG |
   | `outcome` | Resultado principal, destacado no card e no case |
   | `tags` | Tags do card |
   | `cover`, `coverAlt` | Imagem de capa + texto alternativo |
   | `order` | Ordem na home (1 = primeiro); "Next case" segue essa ordem |
   | `draft` | `true` esconde o case do site |

4. Escreva o corpo com as seções fixas: **Context, Problem, My role, Process, Key decisions,
   Outcome, Learnings** (`## Título`). Imagens no corpo: `import img from '../../assets/…'`
   e `<Image src={img} alt="…" />` (importando `Image` de `astro:assets`).
5. `npm run dev` para conferir. O schema valida o frontmatter — campos faltando geram erro.

---

## Build

```bash
npm run build      # roda astro check (tipos) + astro build
npm run preview    # serve o dist/ localmente para revisão final
```

A saída fica em **`dist/`** — HTML, CSS e imagens estáticas, sem dependência de servidor.

---

## Publicar o `dist/` como site STATIC (operaia-host)

1. `npm run build`
2. No operaia-host, crie/abra o site do tipo **STATIC** para `marieligalleani.com.br`.
3. Envie o **conteúdo** da pasta `dist/` (não a pasta em si) para a raiz do site —
   `index.html` deve ficar na raiz. Ex. via rsync para a VM:
   ```bash
   rsync -avz --delete dist/ usuario@IP_DA_VM:/caminho/do/site/
   ```
4. Configure a página de erro 404 para `/404.html`, se o host permitir.
5. Ative HTTPS (Let's Encrypt) para `marieligalleani.com.br` e `www.marieligalleani.com.br`.

Se a VM servir com **nginx**, um bloco mínimo:

```nginx
server {
  server_name marieligalleani.com.br www.marieligalleani.com.br;
  root /var/www/marieligalleani;
  index index.html;
  error_page 404 /404.html;
  location / { try_files $uri $uri/ =404; }
  location /_astro/ { expires 1y; add_header Cache-Control "public, immutable"; }
}
```

### DNS no Registro.br

Em *Domínios → marieligalleani.com.br → Editar zona* (DNS do Registro.br):

| Tipo | Nome | Valor |
|---|---|---|
| A | `@` (vazio) | IP da VM |
| A | `www` | IP da VM |

A propagação costuma levar de minutos a algumas horas. Depois, emita o certificado HTTPS.

---

## Antes de publicar (checklist)

- [ ] `src/config/site.ts`: link real do Cal.com, e-mail e LinkedIn
- [ ] `src/data/services.ts`: preços reais no lugar de `$X,XXX`
- [ ] Cases: trocar textos `[Placeholder]`, números e capas pelas reais
- [ ] `src/data/testimonials.ts`: depoimentos reais (ou remover `<Testimonials />` da home)
- [ ] Analytics: descomentar um provedor em `BaseLayout.astro`
- [ ] `public/og-default.png`: imagem OG final (1200×630)

## Adicionar português depois

1. Em `src/i18n/ui.ts`, adicione `pt` em `languages` e um objeto `pt` com as mesmas chaves.
2. Em `astro.config.mjs`, use `locales: ['en', 'pt']`.
3. Crie `src/pages/pt/index.astro` passando `lang="pt"` aos componentes (todos aceitam `lang`).
4. Para cases traduzidos, use `src/content/cases/pt/*.mdx` e filtre pelo prefixo do `id`.
