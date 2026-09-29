import type { Lang } from '@/i18n/ui';
import type { IconName } from '@/data/icons';

/**
 * All agency copy for the home page, per language.
 * Prices and a few claims are placeholders — see the TODOs and the README checklist.
 */

export interface Stat {
  value: string;
  label: string;
  source: string;
}

export interface Service {
  icon: IconName;
  name: string;
  description: string;
  bullets: string[];
  /** Spans two columns in the bento grid. */
  wide?: boolean;
}

export interface Step {
  name: string;
  when: string;
  description: string;
}

export interface Plan {
  name: string;
  forWho: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
}

export interface Faq {
  q: string;
  a: string;
}

export interface AgencyContent {
  meta: { title: string; description: string };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
    trust: string[];
    map: {
      label: string;
      legend: { origin: string; hub: string; market: string };
      cities: Record<string, string>;
    };
    panel: {
      title: string;
      subtitle: string;
      markets: { name: string; status: string; state: 'live' | 'launching' | 'research' }[];
      checklistTitle: string;
      checklist: { label: string; done: boolean }[];
      note: string;
    };
  };
  markets: { label: string; items: string[] };
  stats: { badge: string; title: string; lead: string; items: Stat[] };
  challenges: { badge: string; title: string; lead: string; items: { icon: IconName; name: string; description: string }[] };
  services: { badge: string; title: string; lead: string; items: Service[] };
  process: { badge: string; title: string; lead: string; steps: Step[] };
  work: { badge: string; title: string; lead: string };
  about: { badge: string; title: string; paragraphs: string[]; points: { name: string; description: string }[] };
  pricing: { badge: string; title: string; lead: string; popular: string; cta: string; note: string; plans: Plan[] };
  testimonials: { badge: string; title: string };
  faq: { badge: string; title: string; items: Faq[] };
  cta: { title: string; lead: string; primary: string; note: string };
  footer: { tagline: string; services: string; company: string; contact: string; markets: string };
}

const MARKETS_EN = ['Brazil', 'Mexico', 'Colombia', 'Argentina', 'Chile', 'Peru', 'Uruguay', 'Ecuador'];
const MARKETS_PT = ['Brasil', 'México', 'Colômbia', 'Argentina', 'Chile', 'Peru', 'Uruguai', 'Equador'];
const MARKETS_ES = ['Brasil', 'México', 'Colombia', 'Argentina', 'Chile', 'Perú', 'Uruguay', 'Ecuador'];

// TODO: replace prices with real values.
const PRICE = { launch: '$X,XXX', growth: '$X,XXX', premium: '$X,XXX' };

export const agency: Record<Lang, AgencyContent> = {
  en: {
    meta: {
      title: 'Galleani — Enter Brazil & Latin America with a local growth team',
      description:
        'Market-entry and growth agency for foreign companies launching in Brazil and Latin America: strategy, localization, CRM and funnels, paid media, content and video — in English, on your time zone.',
    },
    hero: {
      badge: 'Market-entry partner for Brazil & Latin America',
      title: 'Launch in Brazil and Latin America <em>with confidence.</em>',
      subtitle:
        'We are your local growth team: market strategy, localization, commercial infrastructure, performance marketing and content — built in-house, delivered in English, on your time zone.',
      primary: 'Book a strategy call',
      secondary: 'See how it works',
      trust: ['English-speaking team', 'US & EU hours overlap', '3-month launch cycles', 'LGPD-ready setup'],
      map: {
        label: 'A world map with routes from North America, Europe and Israel to our hub in São Paulo, and from São Paulo out to Mexico, Colombia, Ecuador, Peru, Chile, Argentina and Uruguay.',
        legend: { origin: 'Your HQ', hub: 'Our hub', market: 'Expansion' },
        cities: { sf: 'San Francisco', ny: 'New York', london: 'London', berlin: 'Berlin', saopaulo: 'São Paulo', mexico: 'Mexico City', bogota: 'Bogotá', lima: 'Lima', santiago: 'Santiago', buenosaires: 'Buenos Aires' },
      },
      panel: {
        title: 'Launch plan',
        subtitle: 'Week 6 · Brazil',
        markets: [
          { name: 'Brazil', status: 'Live', state: 'live' },
          { name: 'Mexico', status: 'Launching', state: 'launching' },
          { name: 'Colombia', status: 'Research', state: 'research' },
        ],
        checklistTitle: 'This cycle',
        checklist: [
          { label: 'Market research & positioning', done: true },
          { label: 'Website localized to PT-BR', done: true },
          { label: 'Pix, boleto & installments at checkout', done: true },
          { label: 'CRM + WhatsApp sales flow', done: true },
          { label: 'Paid campaigns live', done: false },
        ],
        note: 'Illustrative example',
      },
    },
    markets: { label: 'We launch companies across', items: MARKETS_EN },
    stats: {
      badge: 'Why Latin America',
      title: 'The largest market you are <em>not selling to</em> yet.',
      lead: 'Brazil alone is bigger than most European markets combined — and buyers are digital, mobile and ready to pay.',
      items: [
        { value: '213M', label: 'people live in Brazil, the largest country in Latin America', source: 'IBGE, 2024 estimate' },
        { value: '660M+', label: 'people across Latin America and the Caribbean', source: 'UN World Population Prospects 2024' },
        { value: '150M+', label: 'Brazilians pay with Pix, the national instant-payment system', source: 'Banco Central do Brasil' },
      ],
    },
    challenges: {
      badge: 'The challenge',
      title: 'Why global brands <em>stall</em> in Brazil.',
      lead: 'Great products fail here for local reasons. We handle each one before it costs you a quarter.',
      items: [
        { icon: 'language', name: 'Translated is not localized', description: 'Brazilians buy from brands that sound local — tone, references and proof, not just words.' },
        { icon: 'card', name: 'Local payments', description: 'Pix, boleto and interest-free installments are expected at checkout. Cards alone lose sales.' },
        { icon: 'chat', name: 'WhatsApp-first sales', description: 'Buyers want to talk to a person on WhatsApp — not fill out a form and wait for an email.' },
        { icon: 'shield', name: 'LGPD compliance', description: 'Brazil’s data-protection law applies to your forms, CRM, pixels and ads from day one.' },
        { icon: 'building', name: 'Bureaucracy', description: 'Taxes, invoicing and entity setup need local partners you can trust.' },
        { icon: 'clock', name: 'Distance', description: 'Agencies that answer tomorrow slow everything down. We work on your hours.' },
      ],
    },
    services: {
      badge: 'Services',
      title: 'Everything you need to launch and grow — <em>under one roof.</em>',
      lead: 'Strategy, creative, media and technology from a single team. No outsourcing, no hand-offs, no generic templates.',
      items: [
        {
          icon: 'compass',
          name: 'Market entry strategy',
          description: 'A clear, data-backed plan to enter Brazil and the next Latin American market.',
          bullets: ['Market & competitor research', 'Positioning and messaging', 'Pricing in BRL and local currencies', 'Go-to-market roadmap'],
          wide: true,
        },
        {
          icon: 'language',
          name: 'Localization & transcreation',
          description: 'Your website, product, decks and ads rewritten for Brazilian Portuguese and Latin American Spanish.',
          bullets: ['Website & product UI', 'Sales decks and emails', 'Tone of voice guide'],
        },
        {
          icon: 'funnel',
          name: 'Commercial infrastructure',
          description: 'CRM, sales funnels, landing pages and dashboards built for your business — never generic templates.',
          bullets: ['CRM & pipeline setup', 'Landing pages & funnels', 'WhatsApp integration', 'Live KPI dashboards'],
        },
        {
          icon: 'chart',
          name: 'Performance marketing',
          description: 'Paid media focused on ROI, with weekly optimization and transparent reporting.',
          bullets: ['Meta, Google, TikTok & LinkedIn', 'Local audiences & creatives', 'Conversion tracking'],
        },
        {
          icon: 'palette',
          name: 'Brand & premium design',
          description: 'Visual identity adapted to the market and creative that stands out in a crowded feed.',
          bullets: ['Identity adaptation', 'Key visuals & ad creative', 'Sales and social templates'],
        },
        {
          icon: 'grid',
          name: 'Social media & content',
          description: '12 to 20 posts a month in the local language — Reels, carousels and statics — plus community management.',
          bullets: ['Editorial calendar', 'Reels, carousels & statics', 'Community management'],
        },
        {
          icon: 'camera',
          name: 'Audiovisual production',
          description: 'In-house video and photo — made by the same team that plans the strategy, not outsourced.',
          bullets: ['Brand & product videos', 'Local talent and UGC', 'Photo shoots'],
          wide: true,
        },
        {
          icon: 'spark',
          name: 'Product & UX localization',
          description: 'Product design for local users: onboarding, AI features, design systems and MVPs.',
          bullets: ['UX research with local users', 'Design systems', 'Functional MVPs'], wide: true,
        },
        {
          icon: 'building',
          name: 'Local operations setup',
          description: 'The pieces that make selling here work — with a vetted partner network for the rest.',
          bullets: ['Pix & local payment providers', 'WhatsApp Business', 'LGPD-ready data flows', 'Accounting & legal partners'],
        },
      ],
    },
    process: {
      badge: 'How it works',
      title: 'Launch in 90 days. <em>Scale</em> in cycles.',
      lead: 'We work in 3-month cycles — marketing needs time to generate data, optimize and scale. Consistent results usually show from the second month.',
      steps: [
        { name: 'Discover', when: 'Weeks 1–2', description: 'Market research, audit of your funnel, goals and KPIs. You get the go-to-market plan.' },
        { name: 'Localize & build', when: 'Weeks 3–6', description: 'Brand, website, CRM, funnels, payments and content — adapted to the market.' },
        { name: 'Launch', when: 'Weeks 6–8', description: 'Campaigns go live, WhatsApp sales flow on, first leads and sales measured.' },
        { name: 'Optimize & scale', when: 'Month 3+', description: 'Weekly iterations on data, then expansion to the next Latin American market.' },
      ],
    },
    work: {
      badge: 'Work',
      title: 'Products we have <em>designed and shipped.</em>',
      lead: 'Real products built by our team — the same craft we bring to your launch.',
    },
    about: {
      badge: 'About',
      title: 'A local team that <em>speaks your language.</em>',
      paragraphs: [
        'Galleani was founded by Marieli Galleani, a Brazilian product designer who builds products end to end — from research to working software. We combine product design, marketing and engineering to build the commercial engine your expansion needs.',
        'We are based in Brazil, with working hours that overlap US mornings and European afternoons. You get one team, one point of contact and one plan.',
      ],
      points: [
        { name: 'One team, end to end', description: 'Strategy, design, media, video and tech — no hand-offs between vendors.' },
        { name: 'Your language, your hours', description: 'Calls, reports and docs in English. Content in Portuguese and Spanish.' },
        { name: 'Transparent by default', description: 'Live dashboards and a monthly review of what worked and what’s next.' },
        { name: 'Built for ROI', description: 'Every deliverable is tied to a number: leads, pipeline, sales or cost per acquisition.' },
      ],
    },
    pricing: {
      badge: 'Plans',
      title: 'Plans that grow with your <em>expansion.</em>',
      lead: 'Each plan fits a different stage. As the scope grows, so does our involvement. All plans run in 3-month cycles.',
      popular: 'Most popular',
      cta: 'Book a call',
      note: 'Prices in USD. Media budget is paid directly to the ad platforms.',
      plans: [
        {
          name: 'Launch',
          forWho: 'For companies testing the Brazilian market.',
          price: PRICE.launch,
          period: '/ month',
          features: ['Market research & go-to-market plan', 'Localized landing page', 'CRM and WhatsApp setup', 'Paid media on 1–2 channels', 'Monthly report'],
        },
        {
          name: 'Growth',
          forWho: 'For brands ready to acquire customers at scale.',
          price: PRICE.growth,
          period: '/ month',
          features: ['Everything in Launch', '12 posts a month (Reels, carousels, statics)', 'Paid media on up to 3 channels', 'Funnels and live dashboards', 'Bi-weekly optimization calls'],
          featured: true,
        },
        {
          name: 'Premium',
          forWho: 'Your full marketing department in Latin America.',
          price: PRICE.premium,
          period: '/ month',
          features: ['Everything in Growth', '20 posts a month', 'In-house audiovisual production', 'Brazil + one more Latin American market', 'Dedicated strategist and weekly calls'],
        },
      ],
    },
    testimonials: { badge: 'Testimonials', title: 'What clients <em>say.</em>' },
    faq: {
      badge: 'FAQ',
      title: 'Questions we hear <em>every week.</em>',
      items: [
        { q: 'Do we need a Brazilian company to start selling?', a: 'Not always. Many companies start with cross-border sales and local payment providers. When a local entity makes sense, we connect you with vetted accountants and lawyers. We do not provide legal or tax advice ourselves.' },
        { q: 'Which countries do you cover?', a: 'Brazil is our home market. We also launch companies in Mexico, Colombia, Argentina, Chile, Peru and the rest of Latin America.' },
        { q: 'How long until we see results?', a: 'Campaigns go live within the first cycle. Consistent results usually show from the second month, once there is enough data to optimize.' },
        { q: 'Do you work in English?', a: 'Yes. Calls, reports and documentation are in English. Content for your customers is produced in Portuguese and Spanish.' },
        { q: 'Is there a minimum commitment?', a: 'We work in 3-month cycles. It is the minimum time to generate data, optimize and see real results.' },
        { q: 'How do you report results?', a: 'You get a live dashboard with the numbers that matter — leads, pipeline, sales, CPA and ROAS — and a monthly review with next steps.' },
        { q: 'How do you handle LGPD?', a: 'We build LGPD-ready forms, consent and data flows, and work with legal partners for your privacy policy and contracts.' },
      ],
    },
    cta: {
      title: 'Ready to launch in <em>Brazil?</em>',
      lead: 'Book a 30-minute strategy call. You will leave with a clear view of the opportunity and a first launch plan — whether we work together or not.',
      primary: 'Book a strategy call',
      note: 'Free · 30 minutes · in English',
    },
    footer: {
      tagline: 'Market-entry and growth partner for foreign companies in Brazil and Latin America.',
      services: 'Services',
      company: 'Company',
      contact: 'Contact',
      markets: 'Markets',
    },
  },

  pt: {
    meta: {
      title: 'Galleani — Entre no Brasil e na América Latina com um time local de crescimento',
      description:
        'Agência de entrada em mercado e crescimento para empresas estrangeiras no Brasil e na América Latina: estratégia, localização, CRM e funis, mídia paga, conteúdo e vídeo — em inglês, no seu fuso.',
    },
    hero: {
      badge: 'Parceira de entrada no Brasil e na América Latina',
      title: 'Lance no Brasil e na América Latina <em>com confiança.</em>',
      subtitle:
        'Somos o seu time local de crescimento: estratégia de mercado, localização, infraestrutura comercial, performance e conteúdo — feito internamente, em inglês, no seu fuso horário.',
      primary: 'Agendar uma call estratégica',
      secondary: 'Ver como funciona',
      trust: ['Time que fala inglês', 'Horário alinhado com EUA e Europa', 'Ciclos de lançamento de 3 meses', 'Estrutura pronta para a LGPD'],
      map: {
        label: 'Mapa-múndi com rotas da América do Norte, Europa e Israel até a nossa base em São Paulo, e de São Paulo para México, Colômbia, Equador, Peru, Chile, Argentina e Uruguai.',
        legend: { origin: 'Sua sede', hub: 'Nossa base', market: 'Expansão' },
        cities: { sf: 'São Francisco', ny: 'Nova York', london: 'Londres', berlin: 'Berlim', saopaulo: 'São Paulo', mexico: 'Cidade do México', bogota: 'Bogotá', lima: 'Lima', santiago: 'Santiago', buenosaires: 'Buenos Aires' },
      },
      panel: {
        title: 'Plano de lançamento',
        subtitle: 'Semana 6 · Brasil',
        markets: [
          { name: 'Brasil', status: 'No ar', state: 'live' },
          { name: 'México', status: 'Lançando', state: 'launching' },
          { name: 'Colômbia', status: 'Pesquisa', state: 'research' },
        ],
        checklistTitle: 'Neste ciclo',
        checklist: [
          { label: 'Pesquisa de mercado e posicionamento', done: true },
          { label: 'Site localizado em PT-BR', done: true },
          { label: 'Pix, boleto e parcelamento no checkout', done: true },
          { label: 'CRM + fluxo de vendas no WhatsApp', done: true },
          { label: 'Campanhas pagas no ar', done: false },
        ],
        note: 'Exemplo ilustrativo',
      },
    },
    markets: { label: 'Lançamos empresas em', items: MARKETS_PT },
    stats: {
      badge: 'Por que a América Latina',
      title: 'O maior mercado para o qual você <em>ainda não vende.</em>',
      lead: 'Só o Brasil é maior que a maioria dos mercados europeus somados — e o comprador é digital, mobile e está pronto para pagar.',
      items: [
        { value: '213 mi', label: 'de pessoas vivem no Brasil, o maior país da América Latina', source: 'IBGE, estimativa 2024' },
        { value: '660 mi+', label: 'de pessoas na América Latina e no Caribe', source: 'ONU, World Population Prospects 2024' },
        { value: '150 mi+', label: 'de brasileiros pagam com Pix, o sistema de pagamento instantâneo nacional', source: 'Banco Central do Brasil' },
      ],
    },
    challenges: {
      badge: 'O desafio',
      title: 'Por que marcas globais <em>travam</em> no Brasil.',
      lead: 'Produtos ótimos falham aqui por motivos locais. Nós cuidamos de cada um antes que eles custem um trimestre.',
      items: [
        { icon: 'language', name: 'Traduzir não é localizar', description: 'O brasileiro compra de marcas que soam locais — tom, referências e provas, não só palavras.' },
        { icon: 'card', name: 'Pagamentos locais', description: 'Pix, boleto e parcelamento sem juros são esperados no checkout. Só cartão perde vendas.' },
        { icon: 'chat', name: 'Vendas pelo WhatsApp', description: 'O comprador quer falar com uma pessoa no WhatsApp — não preencher um formulário e esperar um e-mail.' },
        { icon: 'shield', name: 'LGPD', description: 'A lei de proteção de dados vale para seus formulários, CRM, pixels e anúncios desde o primeiro dia.' },
        { icon: 'building', name: 'Burocracia', description: 'Impostos, notas fiscais e abertura de empresa exigem parceiros locais de confiança.' },
        { icon: 'clock', name: 'Distância', description: 'Agências que respondem só amanhã atrasam tudo. Nós trabalhamos no seu horário.' },
      ],
    },
    services: {
      badge: 'Serviços',
      title: 'Tudo o que você precisa para lançar e crescer — <em>em um só lugar.</em>',
      lead: 'Estratégia, criação, mídia e tecnologia com um único time. Sem terceirização, sem repasses, sem templates genéricos.',
      items: [
        { icon: 'compass', name: 'Estratégia de entrada no mercado', description: 'Um plano claro, baseado em dados, para entrar no Brasil e no próximo mercado latino-americano.', bullets: ['Pesquisa de mercado e concorrentes', 'Posicionamento e mensagem', 'Preço em reais e moedas locais', 'Roadmap de go-to-market'], wide: true },
        { icon: 'language', name: 'Localização e transcriação', description: 'Site, produto, apresentações e anúncios reescritos em português do Brasil e espanhol latino-americano.', bullets: ['Site e UI do produto', 'Apresentações e e-mails de vendas', 'Guia de tom de voz'] },
        { icon: 'funnel', name: 'Infraestrutura comercial', description: 'CRM, funis de venda, landing pages e dashboards feitos sob medida — nunca templates genéricos.', bullets: ['CRM e pipeline', 'Landing pages e funis', 'Integração com WhatsApp', 'Dashboards de KPIs ao vivo'] },
        { icon: 'chart', name: 'Performance e mídia paga', description: 'Mídia paga com foco em ROI, otimização semanal e relatórios transparentes.', bullets: ['Meta, Google, TikTok e LinkedIn', 'Públicos e criativos locais', 'Rastreamento de conversões'] },
        { icon: 'palette', name: 'Marca e design premium', description: 'Identidade visual adaptada ao mercado e criativos que se destacam no feed.', bullets: ['Adaptação de identidade', 'Key visuals e criativos de anúncio', 'Templates de vendas e social'] },
        { icon: 'grid', name: 'Social media e conteúdo', description: 'De 12 a 20 posts por mês no idioma local — Reels, carrosséis e estáticos — mais gestão de comunidade.', bullets: ['Calendário editorial', 'Reels, carrosséis e estáticos', 'Gestão de comunidade'] },
        { icon: 'camera', name: 'Produção audiovisual', description: 'Vídeo e foto feitos internamente — pelo mesmo time que pensa a estratégia, sem terceirizar.', bullets: ['Vídeos de marca e produto', 'Talentos locais e UGC', 'Sessões de fotos'], wide: true },
        { icon: 'spark', name: 'Localização de produto e UX', description: 'Design de produto para o usuário local: onboarding, recursos de IA, design systems e MVPs.', bullets: ['Pesquisa com usuários locais', 'Design systems', 'MVPs funcionais'], wide: true },
        { icon: 'building', name: 'Estrutura de operação local', description: 'As peças que fazem vender aqui funcionar — com uma rede de parceiros verificados para o resto.', bullets: ['Pix e meios de pagamento locais', 'WhatsApp Business', 'Fluxos de dados prontos para a LGPD', 'Parceiros contábeis e jurídicos'] },
      ],
    },
    process: {
      badge: 'Como funciona',
      title: 'Lance em 90 dias. <em>Escale</em> em ciclos.',
      lead: 'Trabalhamos em ciclos de 3 meses — marketing precisa de tempo para gerar dados, otimizar e escalar. Os resultados consistentes costumam aparecer a partir do segundo mês.',
      steps: [
        { name: 'Diagnóstico', when: 'Semanas 1–2', description: 'Pesquisa de mercado, auditoria do seu funil, metas e KPIs. Você recebe o plano de go-to-market.' },
        { name: 'Localização e build', when: 'Semanas 3–6', description: 'Marca, site, CRM, funis, pagamentos e conteúdo — adaptados ao mercado.' },
        { name: 'Lançamento', when: 'Semanas 6–8', description: 'Campanhas no ar, fluxo de vendas no WhatsApp ativo, primeiros leads e vendas medidos.' },
        { name: 'Otimização e escala', when: 'Mês 3+', description: 'Iterações semanais com base em dados e, depois, expansão para o próximo mercado latino-americano.' },
      ],
    },
    work: {
      badge: 'Projetos',
      title: 'Produtos que <em>desenhamos e colocamos no ar.</em>',
      lead: 'Produtos reais construídos pelo nosso time — o mesmo cuidado que levamos para o seu lançamento.',
    },
    about: {
      badge: 'Sobre',
      title: 'Um time local que <em>fala a sua língua.</em>',
      paragraphs: [
        'A Galleani foi fundada por Marieli Galleani, product designer brasileira que constrói produtos de ponta a ponta — da pesquisa ao software funcionando. Unimos design de produto, marketing e engenharia para montar o motor comercial que a sua expansão precisa.',
        'Estamos no Brasil, com horário que coincide com as manhãs dos EUA e as tardes da Europa. Você tem um time, um ponto de contato e um plano.',
      ],
      points: [
        { name: 'Um time, de ponta a ponta', description: 'Estratégia, design, mídia, vídeo e tecnologia — sem repasses entre fornecedores.' },
        { name: 'Seu idioma, seu horário', description: 'Calls, relatórios e documentos em inglês. Conteúdo em português e espanhol.' },
        { name: 'Transparência por padrão', description: 'Dashboards ao vivo e uma revisão mensal do que funcionou e do que vem a seguir.' },
        { name: 'Feito para ROI', description: 'Cada entrega está ligada a um número: leads, pipeline, vendas ou custo por aquisição.' },
      ],
    },
    pricing: {
      badge: 'Planos',
      title: 'Planos que crescem com a sua <em>expansão.</em>',
      lead: 'Cada plano atende a um momento diferente. Conforme o escopo cresce, nosso envolvimento cresce junto. Todos os planos rodam em ciclos de 3 meses.',
      popular: 'Mais escolhido',
      cta: 'Agendar uma call',
      note: 'Preços em dólares. A verba de mídia é paga diretamente às plataformas de anúncio.',
      plans: [
        { name: 'Launch', forWho: 'Para empresas testando o mercado brasileiro.', price: PRICE.launch, period: '/ mês', features: ['Pesquisa de mercado e plano de go-to-market', 'Landing page localizada', 'Configuração de CRM e WhatsApp', 'Mídia paga em 1–2 canais', 'Relatório mensal'] },
        { name: 'Growth', forWho: 'Para marcas prontas para adquirir clientes em escala.', price: PRICE.growth, period: '/ mês', features: ['Tudo do Launch', '12 posts por mês (Reels, carrosséis, estáticos)', 'Mídia paga em até 3 canais', 'Funis e dashboards ao vivo', 'Calls de otimização quinzenais'], featured: true },
        { name: 'Premium', forWho: 'Seu departamento de marketing completo na América Latina.', price: PRICE.premium, period: '/ mês', features: ['Tudo do Growth', '20 posts por mês', 'Produção audiovisual própria', 'Brasil + mais um mercado latino-americano', 'Estrategista dedicado e calls semanais'] },
      ],
    },
    testimonials: { badge: 'Depoimentos', title: 'O que dizem os <em>clientes.</em>' },
    faq: {
      badge: 'Dúvidas',
      title: 'Perguntas que ouvimos <em>toda semana.</em>',
      items: [
        { q: 'Precisamos de uma empresa brasileira para começar a vender?', a: 'Nem sempre. Muitas empresas começam com vendas internacionais e provedores de pagamento locais. Quando uma empresa local faz sentido, conectamos você a contadores e advogados de confiança. Não prestamos assessoria jurídica ou tributária.' },
        { q: 'Quais países vocês atendem?', a: 'O Brasil é o nosso mercado de origem. Também lançamos empresas no México, Colômbia, Argentina, Chile, Peru e no restante da América Latina.' },
        { q: 'Em quanto tempo vemos resultados?', a: 'As campanhas vão ao ar dentro do primeiro ciclo. Os resultados consistentes costumam aparecer a partir do segundo mês, quando já há dados para otimizar.' },
        { q: 'Vocês trabalham em inglês?', a: 'Sim. Calls, relatórios e documentação em inglês. O conteúdo para os seus clientes é produzido em português e espanhol.' },
        { q: 'Existe um compromisso mínimo?', a: 'Trabalhamos em ciclos de 3 meses. É o tempo mínimo para gerar dados, otimizar e ver resultado de verdade.' },
        { q: 'Como vocês reportam os resultados?', a: 'Você tem um dashboard ao vivo com os números que importam — leads, pipeline, vendas, CPA e ROAS — e uma revisão mensal com os próximos passos.' },
        { q: 'Como vocês lidam com a LGPD?', a: 'Construímos formulários, consentimento e fluxos de dados prontos para a LGPD e trabalhamos com parceiros jurídicos para a política de privacidade e os contratos.' },
      ],
    },
    cta: {
      title: 'Pronto para lançar no <em>Brasil?</em>',
      lead: 'Agende uma call estratégica de 30 minutos. Você sai com uma visão clara da oportunidade e um primeiro plano de lançamento — trabalhando conosco ou não.',
      primary: 'Agendar uma call estratégica',
      note: 'Gratuita · 30 minutos · em inglês ou português',
    },
    footer: {
      tagline: 'Parceira de entrada e crescimento para empresas estrangeiras no Brasil e na América Latina.',
      services: 'Serviços',
      company: 'Empresa',
      contact: 'Contato',
      markets: 'Mercados',
    },
  },

  es: {
    meta: {
      title: 'Galleani — Entra a Brasil y América Latina con un equipo local de crecimiento',
      description:
        'Agencia de entrada al mercado y crecimiento para empresas extranjeras en Brasil y América Latina: estrategia, localización, CRM y embudos, medios pagos, contenido y video — en inglés, en tu zona horaria.',
    },
    hero: {
      badge: 'Socio de entrada a Brasil y América Latina',
      title: 'Lanza en Brasil y América Latina <em>con confianza.</em>',
      subtitle:
        'Somos tu equipo local de crecimiento: estrategia de mercado, localización, infraestructura comercial, performance y contenido — hecho internamente, en inglés, en tu zona horaria.',
      primary: 'Agendar una llamada estratégica',
      secondary: 'Ver cómo funciona',
      trust: ['Equipo que habla inglés', 'Horario alineado con EE. UU. y Europa', 'Ciclos de lanzamiento de 3 meses', 'Estructura lista para la LGPD'],
      map: {
        label: 'Mapamundi con rutas desde Norteamérica, Europa e Israel hasta nuestra base en São Paulo, y desde São Paulo hacia México, Colombia, Ecuador, Perú, Chile, Argentina y Uruguay.',
        legend: { origin: 'Tu sede', hub: 'Nuestra base', market: 'Expansión' },
        cities: { sf: 'San Francisco', ny: 'Nueva York', london: 'Londres', berlin: 'Berlín', saopaulo: 'São Paulo', mexico: 'Ciudad de México', bogota: 'Bogotá', lima: 'Lima', santiago: 'Santiago', buenosaires: 'Buenos Aires' },
      },
      panel: {
        title: 'Plan de lanzamiento',
        subtitle: 'Semana 6 · Brasil',
        markets: [
          { name: 'Brasil', status: 'En vivo', state: 'live' },
          { name: 'México', status: 'Lanzando', state: 'launching' },
          { name: 'Colombia', status: 'Investigación', state: 'research' },
        ],
        checklistTitle: 'En este ciclo',
        checklist: [
          { label: 'Investigación de mercado y posicionamiento', done: true },
          { label: 'Sitio localizado a PT-BR', done: true },
          { label: 'Pix, boleto y cuotas en el checkout', done: true },
          { label: 'CRM + flujo de ventas por WhatsApp', done: true },
          { label: 'Campañas pagas en vivo', done: false },
        ],
        note: 'Ejemplo ilustrativo',
      },
    },
    markets: { label: 'Lanzamos empresas en', items: MARKETS_ES },
    stats: {
      badge: 'Por qué América Latina',
      title: 'El mercado más grande al que <em>aún no le vendes.</em>',
      lead: 'Solo Brasil es más grande que la mayoría de los mercados europeos juntos — y el comprador es digital, mobile y está listo para pagar.',
      items: [
        { value: '213 M', label: 'de personas viven en Brasil, el país más grande de América Latina', source: 'IBGE, estimación 2024' },
        { value: '660 M+', label: 'de personas en América Latina y el Caribe', source: 'ONU, World Population Prospects 2024' },
        { value: '150 M+', label: 'de brasileños pagan con Pix, el sistema nacional de pagos instantáneos', source: 'Banco Central do Brasil' },
      ],
    },
    challenges: {
      badge: 'El desafío',
      title: 'Por qué las marcas globales <em>se frenan</em> en Brasil.',
      lead: 'Productos excelentes fracasan aquí por razones locales. Resolvemos cada una antes de que te cueste un trimestre.',
      items: [
        { icon: 'language', name: 'Traducir no es localizar', description: 'El brasileño compra a marcas que suenan locales — tono, referencias y pruebas, no solo palabras.' },
        { icon: 'card', name: 'Pagos locales', description: 'Pix, boleto y cuotas sin interés se esperan en el checkout. Solo tarjeta pierde ventas.' },
        { icon: 'chat', name: 'Ventas por WhatsApp', description: 'El comprador quiere hablar con una persona por WhatsApp — no llenar un formulario y esperar un email.' },
        { icon: 'shield', name: 'LGPD', description: 'La ley de protección de datos aplica a tus formularios, CRM, píxeles y anuncios desde el primer día.' },
        { icon: 'building', name: 'Burocracia', description: 'Impuestos, facturación y apertura de empresa requieren socios locales de confianza.' },
        { icon: 'clock', name: 'Distancia', description: 'Las agencias que responden mañana frenan todo. Nosotros trabajamos en tu horario.' },
      ],
    },
    services: {
      badge: 'Servicios',
      title: 'Todo lo que necesitas para lanzar y crecer — <em>en un solo lugar.</em>',
      lead: 'Estrategia, creatividad, medios y tecnología con un único equipo. Sin tercerizar, sin traspasos, sin plantillas genéricas.',
      items: [
        { icon: 'compass', name: 'Estrategia de entrada al mercado', description: 'Un plan claro, basado en datos, para entrar a Brasil y al siguiente mercado latinoamericano.', bullets: ['Investigación de mercado y competencia', 'Posicionamiento y mensaje', 'Precios en reales y monedas locales', 'Roadmap de go-to-market'], wide: true },
        { icon: 'language', name: 'Localización y transcreación', description: 'Tu sitio, producto, presentaciones y anuncios reescritos en portugués de Brasil y español latinoamericano.', bullets: ['Sitio y UI del producto', 'Presentaciones y emails de ventas', 'Guía de tono de voz'] },
        { icon: 'funnel', name: 'Infraestructura comercial', description: 'CRM, embudos de venta, landing pages y dashboards a medida — nunca plantillas genéricas.', bullets: ['CRM y pipeline', 'Landing pages y embudos', 'Integración con WhatsApp', 'Dashboards de KPIs en vivo'] },
        { icon: 'chart', name: 'Performance y medios pagos', description: 'Medios pagos enfocados en ROI, con optimización semanal y reportes transparentes.', bullets: ['Meta, Google, TikTok y LinkedIn', 'Audiencias y creatividades locales', 'Seguimiento de conversiones'] },
        { icon: 'palette', name: 'Marca y diseño premium', description: 'Identidad visual adaptada al mercado y creatividades que destacan en el feed.', bullets: ['Adaptación de identidad', 'Key visuals y creatividades de anuncios', 'Plantillas de ventas y redes'] },
        { icon: 'grid', name: 'Redes sociales y contenido', description: 'De 12 a 20 publicaciones al mes en el idioma local — Reels, carruseles y estáticos — más gestión de comunidad.', bullets: ['Calendario editorial', 'Reels, carruseles y estáticos', 'Gestión de comunidad'] },
        { icon: 'camera', name: 'Producción audiovisual', description: 'Video y foto hechos internamente — por el mismo equipo que piensa la estrategia, sin tercerizar.', bullets: ['Videos de marca y producto', 'Talento local y UGC', 'Sesiones de fotos'], wide: true },
        { icon: 'spark', name: 'Localización de producto y UX', description: 'Diseño de producto para el usuario local: onboarding, funciones de IA, design systems y MVPs.', bullets: ['Investigación con usuarios locales', 'Design systems', 'MVPs funcionales'], wide: true },
        { icon: 'building', name: 'Estructura de operación local', description: 'Las piezas que hacen que vender aquí funcione — con una red de socios verificados para el resto.', bullets: ['Pix y medios de pago locales', 'WhatsApp Business', 'Flujos de datos listos para la LGPD', 'Socios contables y legales'] },
      ],
    },
    process: {
      badge: 'Cómo funciona',
      title: 'Lanza en 90 días. <em>Escala</em> en ciclos.',
      lead: 'Trabajamos en ciclos de 3 meses — el marketing necesita tiempo para generar datos, optimizar y escalar. Los resultados consistentes suelen aparecer desde el segundo mes.',
      steps: [
        { name: 'Diagnóstico', when: 'Semanas 1–2', description: 'Investigación de mercado, auditoría de tu embudo, metas y KPIs. Recibes el plan de go-to-market.' },
        { name: 'Localización y build', when: 'Semanas 3–6', description: 'Marca, sitio, CRM, embudos, pagos y contenido — adaptados al mercado.' },
        { name: 'Lanzamiento', when: 'Semanas 6–8', description: 'Campañas en vivo, flujo de ventas por WhatsApp activo, primeros leads y ventas medidos.' },
        { name: 'Optimización y escala', when: 'Mes 3+', description: 'Iteraciones semanales con datos y, luego, expansión al siguiente mercado latinoamericano.' },
      ],
    },
    work: {
      badge: 'Proyectos',
      title: 'Productos que <em>diseñamos y lanzamos.</em>',
      lead: 'Productos reales construidos por nuestro equipo — el mismo cuidado que llevamos a tu lanzamiento.',
    },
    about: {
      badge: 'Nosotros',
      title: 'Un equipo local que <em>habla tu idioma.</em>',
      paragraphs: [
        'Galleani fue fundada por Marieli Galleani, product designer brasileña que construye productos de punta a punta — de la investigación al software funcionando. Unimos diseño de producto, marketing e ingeniería para armar el motor comercial que tu expansión necesita.',
        'Estamos en Brasil, con un horario que coincide con las mañanas de EE. UU. y las tardes de Europa. Tienes un equipo, un punto de contacto y un plan.',
      ],
      points: [
        { name: 'Un equipo, de punta a punta', description: 'Estrategia, diseño, medios, video y tecnología — sin traspasos entre proveedores.' },
        { name: 'Tu idioma, tu horario', description: 'Llamadas, reportes y documentos en inglés. Contenido en portugués y español.' },
        { name: 'Transparencia por defecto', description: 'Dashboards en vivo y una revisión mensual de lo que funcionó y lo que sigue.' },
        { name: 'Hecho para el ROI', description: 'Cada entrega está ligada a un número: leads, pipeline, ventas o costo por adquisición.' },
      ],
    },
    pricing: {
      badge: 'Planes',
      title: 'Planes que crecen con tu <em>expansión.</em>',
      lead: 'Cada plan se adapta a un momento distinto. A medida que crece el alcance, crece nuestro involucramiento. Todos los planes funcionan en ciclos de 3 meses.',
      popular: 'El más elegido',
      cta: 'Agendar una llamada',
      note: 'Precios en dólares. El presupuesto de medios se paga directamente a las plataformas de anuncios.',
      plans: [
        { name: 'Launch', forWho: 'Para empresas que prueban el mercado brasileño.', price: PRICE.launch, period: '/ mes', features: ['Investigación de mercado y plan de go-to-market', 'Landing page localizada', 'Configuración de CRM y WhatsApp', 'Medios pagos en 1–2 canales', 'Reporte mensual'] },
        { name: 'Growth', forWho: 'Para marcas listas para adquirir clientes a escala.', price: PRICE.growth, period: '/ mes', features: ['Todo lo de Launch', '12 publicaciones al mes (Reels, carruseles, estáticos)', 'Medios pagos en hasta 3 canales', 'Embudos y dashboards en vivo', 'Llamadas de optimización quincenales'], featured: true },
        { name: 'Premium', forWho: 'Tu departamento de marketing completo en América Latina.', price: PRICE.premium, period: '/ mes', features: ['Todo lo de Growth', '20 publicaciones al mes', 'Producción audiovisual propia', 'Brasil + otro mercado latinoamericano', 'Estratega dedicado y llamadas semanales'] },
      ],
    },
    testimonials: { badge: 'Testimonios', title: 'Lo que dicen los <em>clientes.</em>' },
    faq: {
      badge: 'Preguntas',
      title: 'Preguntas que escuchamos <em>cada semana.</em>',
      items: [
        { q: '¿Necesitamos una empresa brasileña para empezar a vender?', a: 'No siempre. Muchas empresas empiezan con ventas transfronterizas y proveedores de pago locales. Cuando una entidad local tiene sentido, te conectamos con contadores y abogados de confianza. No brindamos asesoría legal ni tributaria.' },
        { q: '¿Qué países cubren?', a: 'Brasil es nuestro mercado de origen. También lanzamos empresas en México, Colombia, Argentina, Chile, Perú y el resto de América Latina.' },
        { q: '¿En cuánto tiempo vemos resultados?', a: 'Las campañas salen en vivo dentro del primer ciclo. Los resultados consistentes suelen aparecer desde el segundo mes, cuando ya hay datos para optimizar.' },
        { q: '¿Trabajan en inglés?', a: 'Sí. Llamadas, reportes y documentación en inglés. El contenido para tus clientes se produce en portugués y español.' },
        { q: '¿Hay un compromiso mínimo?', a: 'Trabajamos en ciclos de 3 meses. Es el tiempo mínimo para generar datos, optimizar y ver resultados reales.' },
        { q: '¿Cómo reportan los resultados?', a: 'Tienes un dashboard en vivo con los números que importan — leads, pipeline, ventas, CPA y ROAS — y una revisión mensual con los próximos pasos.' },
        { q: '¿Cómo manejan la LGPD?', a: 'Construimos formularios, consentimiento y flujos de datos listos para la LGPD y trabajamos con socios legales para la política de privacidad y los contratos.' },
      ],
    },
    cta: {
      title: '¿Listo para lanzar en <em>Brasil?</em>',
      lead: 'Agenda una llamada estratégica de 30 minutos. Sales con una visión clara de la oportunidad y un primer plan de lanzamiento — trabajes con nosotros o no.',
      primary: 'Agendar una llamada estratégica',
      note: 'Gratis · 30 minutos · en inglés o español',
    },
    footer: {
      tagline: 'Socio de entrada y crecimiento para empresas extranjeras en Brasil y América Latina.',
      services: 'Servicios',
      company: 'Empresa',
      contact: 'Contacto',
      markets: 'Mercados',
    },
  },
};
