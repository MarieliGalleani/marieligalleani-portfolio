# marieligalleani.com.br

Site da **Galleani** (nome provisório — confirme em `src/config/site.ts`), agência fundada por
Marieli Galleani que ajuda **empresas estrangeiras a entrar no Brasil e na América Latina**:
estratégia de entrada, localização, infraestrutura comercial (CRM, funis, WhatsApp), performance,
design, conteúdo e audiovisual.
Site estático em **Astro + TypeScript**, CSS próprio baseado em design tokens ([DESIGN.md](DESIGN.md)),
cases em **MDX** via Content Collections.

**Idiomas:** inglês (padrão, em `/`), português (`/pt/`) e espanhol (`/es/`), com menu de idioma
no header, `hreflang` em todas as páginas e sitemap com as versões alternativas.

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
│   └── media/                 # Vídeos dos cases (MP4 + WebM + poster)
├── scripts/
│   ├── mockups/               # Estúdio de mockups: capas, telas e vídeos em moldura
│   ├── generate-covers.mjs    # Gera capas placeholder e a OG padrão (npm run covers)
│   └── contrast.mjs           # Checa contraste WCAG entre duas cores
└── src/
    ├── assets/work/<case>/    # Mockups reais: cover.jpg + screen-N.jpg (otimizados no build)
    ├── assets/cases/          # Capa placeholder do case scientific-software
    ├── components/            # Seções da home e peças reutilizáveis
    │   ├── Header / Footer / BookButton
    │   ├── Hero / Markets / Stats / Challenges / Services / Process
    │   ├── SelectedWork / CaseCard / About / Pricing / Testimonials / Faq / FinalCTA
    │   └── Icon (ícones SVG inline)
    ├── config/site.ts         # Nome da agência, Cal.com, e-mail, WhatsApp, redes  ← edite aqui
    ├── content/cases/
    │   ├── en/*.mdx           # Cases em inglês (o nome do arquivo vira a URL)
    │   ├── pt/*.mdx           # Mesmos arquivos traduzidos para português
    │   └── es/*.mdx           # … e para espanhol
    ├── content.config.ts      # Schema do frontmatter dos cases
    ├── data/agency.ts         # TODO o conteúdo da home nos 3 idiomas  ← edite aqui
    ├── data/testimonials.ts   # Depoimentos por idioma
    ├── i18n/ui.ts             # Textos de interface em EN/PT/ES + helpers de rota
    ├── lib/cases.ts           # Busca cases por idioma (com fallback para EN)
    ├── layouts/BaseLayout.astro  # <head>, SEO, OG, hreflang, placeholder de analytics
    ├── views/                 # HomePage e CasePage (usadas pelas rotas de todos os idiomas)
    ├── pages/
    │   ├── index.astro        # Home EN  → /
    │   ├── work/[slug].astro  # Case EN  → /work/slug/
    │   ├── [lang]/index.astro        # Home PT/ES → /pt/, /es/
    │   ├── [lang]/work/[slug].astro  # Case PT/ES → /pt/work/slug/, /es/work/slug/
    │   ├── 404.astro
    │   └── robots.txt.ts
    └── styles/
        ├── tokens.css         # Custom properties em :root (espelho do DESIGN.md)
        └── global.css         # Reset, layout, botões, tags, cards
```

### Onde editar o quê

| Quero mudar… | Arquivo |
|---|---|
| Nome da agência, Cal.com, e-mail, WhatsApp, LinkedIn | `src/config/site.ts` |
| Hero, mercados, números, desafios, serviços, processo, sobre, planos e preços, FAQ, CTA, rodapé (nos 3 idiomas) | `src/data/agency.ts` |
| Menu, botões e textos de interface | `src/i18n/ui.ts` |
| Depoimentos | `src/data/testimonials.ts` |
| Ordem das seções da home | `src/views/HomePage.astro` |
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

1. Copie `docs/case-template.mdx` para `src/content/cases/en/meu-case.mdx`
   → a página será `/work/meu-case/`.
2. Coloque a capa em `src/assets/cases/meu-case.jpg` (ideal: 1600×1000, JPG ou PNG) e
   aponte `cover: "../../../assets/cases/meu-case.jpg"`. Escreva um `coverAlt` descritivo.
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
   | `video` | Opcional: `{ mp4, webm, poster, label }` em `/media/…` — substitui a capa no topo do case |
   | `gallery` | Opcional: lista de `{ src, alt }` — seção "Telas" no fim do case |
   | `repo` | Opcional: link público do código ("Ver o código no GitHub") |
   | `draft` | `true` esconde o case do site |

4. Escreva o corpo com as seções fixas: **Context, Problem, My role, Process, Key decisions,
   Outcome, Learnings** (`## Título`). Imagens no corpo: `import img from '../../assets/…'`
   e `<Image src={img} alt="…" />` (importando `Image` de `astro:assets`).
5. Traduza: copie o arquivo para `src/content/cases/pt/meu-case.mdx` e `src/content/cases/es/meu-case.mdx`
   **com o mesmo nome** (é ele que liga as versões) e traduza textos e títulos das seções
   (PT: Contexto, Problema, Meu papel, Processo, Decisões-chave, Resultado, Aprendizados;
   ES: Contexto, Problema, Mi rol, Proceso, Decisiones clave, Resultado, Aprendizajes).
   Se a tradução ainda não existir, `/pt/` e `/es/` mostram a versão em inglês.
6. `npm run dev` para conferir. O schema valida o frontmatter — campos faltando geram erro.

---

## Cases e mockups

O portfólio traz 7 projetos reais (telas capturadas dos apps rodando, com dados fictícios)
e o case placeholder `scientific-software`:

| Ordem | Case | Vídeo | Código |
|---|---|---|---|
| 1 | OperaIA.lab | escritório isométrico com agentes | público |
| 2 | OperaIA (Core) | login → conectores → Second Brain → cockpit | público |
| 3 | OdontoClinic | agenda → prontuário → odontograma | privado |
| 4 | Cardápio (Doce Ateliê) | loja no celular → sacola → checkout | público |
| 5 | Agenda OperaIA | login → agenda da equipe → pacientes | privado |
| 6 | OperaIA Atlas | modelo → mapa → tópicos pelo teclado | privado |
| 7 | Design System Onii | tokens → perfil de marca → re-tema ao vivo | privado |

- A home tem uma **vitrine animada** (CSS puro) com as capas; ela pausa no hover, tem botão de
  pausa e fica parada para quem prefere movimento reduzido.
- Os vídeos só tocam quando aparecem na tela, têm botão de pausar/reproduzir e **não** tocam
  sozinhos com `prefers-reduced-motion`.
- Para gerar novos mockups, veja [`scripts/mockups/README.md`](scripts/mockups/README.md).

## Build

```bash
npm run build      # roda astro check (tipos) + astro build
npm run preview    # serve o dist/ localmente para revisão final
```

A saída fica em **`dist/`** — HTML, CSS e imagens estáticas, sem dependência de servidor.

---

## Publicar no operaia-host (site STATIC)

O operaia-host serve sites STATIC com nginx, a partir de um `.zip` enviado no painel ou de uma
branch do GitHub (deploy automático por webhook). Como ele **não roda build**, o site é publicado
já compilado.

### Opção A — deploy automático (recomendado)

1. Faça merge na `main`. O workflow **Deploy** (`.github/workflows/deploy.yml`) roda
   `npm run build` e publica o conteúdo de `dist/` na branch **`site-dist`**.
2. No painel do operaia-host, crie o site **STATIC** para `marieligalleani.com.br` e, em
   *GitHub*, ligue o repositório `MarieliGalleani/marieligalleani-portfolio` na branch `site-dist`.
3. Cole a URL do webhook que o painel mostra em *GitHub → Settings → Webhooks* (evento *push*).

Pronto: cada push na `main` gera um build novo, atualiza a `site-dist` e o painel publica sozinho.

### Opção B — upload manual

```bash
npm run build
npm run package    # gera marieligalleani-site.zip com os arquivos na raiz
```

No painel, crie o site **STATIC** e envie o `marieligalleani-site.zip`.

### CI

O workflow **CI** (`.github/workflows/ci.yml`) roda `astro check` + build em todo PR e em todo
push na `main`, então nada quebrado chega ao ar.

### DNS no Registro.br

Em *Domínios → marieligalleani.com.br → Editar zona* (DNS do Registro.br):

| Tipo | Nome | Valor |
|---|---|---|
| A | `@` (vazio) | IP da VM |
| A | `www` | IP da VM |

A propagação costuma levar de minutos a algumas horas. Depois, emita o certificado HTTPS.

---

## Antes de publicar (checklist)

- [ ] `src/config/site.ts`: nome final da agência, link real do Cal.com, e-mail, WhatsApp e LinkedIn
- [ ] `src/data/agency.ts`: preços reais dos planos no lugar de `$X,XXX` (nos 3 idiomas)
- [ ] `src/data/agency.ts`: confirmar mercados atendidos, prazos e promessas (ex.: atendimento em espanhol)
- [ ] Revisar as traduções PT/ES (feitas a partir do texto em inglês)
- [ ] Cases: trocar textos `[Placeholder]`, números e capas pelas reais
- [ ] `src/data/testimonials.ts`: depoimentos reais (ou remover `<Testimonials />` da home)
- [ ] Analytics: descomentar um provedor em `BaseLayout.astro`
- [ ] `public/og-default.png`: imagem OG final (1200×630)

## Idiomas

| Idioma | URL | Textos |
|---|---|---|
| Inglês (padrão) | `/`, `/work/slug/` | `ui.ts` → `en`, `cases/en/` |
| Português | `/pt/`, `/pt/work/slug/` | `ui.ts` → `pt`, `cases/pt/` |
| Espanhol | `/es/`, `/es/work/slug/` | `ui.ts` → `es`, `cases/es/` |

- O menu de idioma no header (`src/components/LanguageSwitcher.astro`, sem JavaScript) leva para **a mesma página** no outro idioma.
- Toda página declara `<html lang>`, `hreflang` das versões e `og:locale`; o sitemap inclui as alternativas.
- O TypeScript acusa erro se faltar alguma chave de texto em PT ou ES.

**Adicionar outro idioma:** inclua-o em `languages` e `locales` em `src/i18n/ui.ts` (com um objeto
de textos completo), em `agency.ts` e `testimonials.ts`, em `i18n.locales` e no
`sitemap` do `astro.config.mjs`, e crie `src/content/cases/<idioma>/`.
