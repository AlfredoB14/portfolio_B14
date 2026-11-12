// Única fuente de datos del sitio. Los hechos (fechas, cifras, enlaces) viven una sola vez en `facts`
// y los textos de cada idioma los citan, para que /es/ y /en/ nunca digan cosas distintas.

export type Lang = 'es' | 'en';
export const LANGS: Lang[] = ['es', 'en'];

export const facts = {
  name: 'Alfredo Barranco Ahued',
  initials: 'AB',
  updated: '2026-11-11',
  email: 'alfredobarranco14@gmail.com',
  linkedin: 'https://www.linkedin.com/in/alfredo-barranco-ahued-135221294',
  linkedinLabel: 'linkedin.com/in/alfredo-barranco-ahued-135221294',
  github: 'https://github.com/AlfredoB14',
  githubLabel: 'github.com/AlfredoB14',
  university: 'Universidad Iberoamericana Puebla',
  timeZone: 'America/Mexico_City',
};

type Pair = [label: string, value: string];

export interface Metric {
  label: string;
  before: number;
  after: number;
  unit: string;
  change: string;
}

export interface Project {
  id: string;
  title: string;
  scope: string;
  proof: string;
  problem: string;
  solution: string;
  decision?: string;
  result?: string;
  metrics?: Metric[];
  specs: Pair[];
}

export interface Job {
  period: string;
  role: string;
  company: string;
  place: string;
  changes: string[];
  more?: string;
  stack: string;
}

export interface Content {
  meta: { title: string; description: string; locale: string };
  skip: string;
  nav: { label: string; projects: string; experience: string; contact: string };
  lang: { label: string; names: Record<Lang, string> };
  hero: {
    role: string;
    available: string;
    status: string[];
    stack: string;
    primary: string;
    secondary: string;
    vano: string;
    light: { now: string; open: string; closed: string; follow: string };
  };
  projects: {
    heading: string;
    lead: string;
    labels: { problem: string; solution: string; decision: string; result: string; measured: string; before: string; after: string };
    items: Project[];
  };
  experience: { heading: string; moreLabel: string; jobs: Job[] };
  stack: { heading: string; daily: string; used: string; groups: [name: string, daily: string, used: string][] };
  education: { heading: string; rows: [year: string, item: string, detail: string][] };
  author: { heading: string; body: string[] };
  contact: {
    heading: string;
    lead: string;
    email: string;
    copy: string;
    copied: string;
    open: string;
    freelance: string;
  };
  footer: { updated: string; colophon: string };
}

const es: Content = {
  meta: {
    title: 'Alfredo Barranco Ahued — Desarrollador full-stack',
    description:
      'Desarrollador full-stack en Puebla, México: ERPs, APIs REST e integración de sistemas, con IA aplicada. Más de dos años de experiencia; disponible para roles remotos o híbridos.',
    locale: 'es_MX',
  },
  skip: 'Saltar al contenido',
  nav: { label: 'Secciones', projects: 'Proyectos', experience: 'Experiencia', contact: 'Contacto' },
  lang: { label: 'Idioma', names: { es: 'Español', en: 'English' } },
  hero: {
    role: 'Desarrollador full-stack. Conecto sistemas que no se hablan entre sí y los automatizo con IA medida.',
    available: 'Disponible',
    status: ['Puebla, México · UTC−6', 'Remoto o híbrido', 'Inglés C1'],
    stack: 'Python · TypeScript · Django · Node.js · Next.js · Google Cloud · AWS',
    primary: 'Ver los 4 proyectos',
    secondary: 'Contacto',
    vano: 'Proyectos',
    light: {
      now: 'En Puebla son las {time}',
      open: 'horario laboral',
      closed: 'fuera de horario',
      follow: 'La luz de esta página sigue esa hora.',
    },
  },
  projects: {
    heading: 'Proyectos',
    lead: 'Dos son de mi empleo actual y se cuentan sin datos de negocio; uno es de un cliente freelance y otro de un hackatón.',
    labels: {
      problem: 'Problema',
      solution: 'Solución',
      decision: 'Decisión clave',
      result: 'Resultado',
      measured: 'Medido en producción',
      before: 'Antes',
      after: 'Después',
    },
    items: [
      {
        id: 'semantic-search',
        title: 'Búsqueda semántica con presupuesto de IA',
        scope: 'Empleador · 2026',
        proof: 'Caché de 4 capas',
        problem:
          'El buscador del sitio de un grupo automotriz no entendía búsquedas en lenguaje natural sobre autos, tractocamiones y maquinaria.',
        solution:
          'Embeddings de Amazon Titan v2 en AWS Bedrock, similitud coseno con NumPy y una caché de cuatro capas que reduce llamadas al modelo y tolera fallas. Bedrock quedó integrado en cuatro subsistemas: normalización, fichas técnicas, enrutamiento de búsquedas y borradores de mensajes, con salidas estructuradas y seguimiento de costos.',
        decision:
          'Coseno con NumPy en lugar de pgvector: la base de datos administrada no permitía instalar la extensión.',
        specs: [
          ['Rol', 'Desarrollo e integración'],
          ['Stack', 'Python · Django · AWS Bedrock · NumPy · Redis'],
          ['Código', 'Privado (empleador)'],
        ],
      },
      {
        id: 'cloud-analytics',
        title: 'Analítica multiempresa en Google Cloud',
        scope: 'Empleador · 2026, en curso',
        proof: 'Imagen −72.6 %',
        problem:
          'La analítica de marketing corría como un prototipo en una laptop, con extracciones manuales y sin control de acceso.',
        solution:
          'Lidero la migración a Cloud Run, Workflows, BigQuery y Secret Manager, con despliegues sin llaves (Workload Identity Federation), SSO, permisos por organización y módulos, y revocación de acceso. Los pipelines llevan a BigQuery datos de Meta Ads, HubSpot, AWS Athena y analítica web.',
        metrics: [
          { label: 'Imagen del contenedor', before: 979, after: 268, unit: 'MB', change: '−72.6 %' },
          { label: 'Payload del dashboard', before: 8, after: 3.8, unit: 'MB', change: '−52.5 %' },
        ],
        specs: [
          ['Rol', 'Responsable de la migración'],
          ['Stack', 'Node.js · TypeScript · Python · BigQuery · Cloud Run · GitHub Actions'],
          ['Código', 'Privado (empleador)'],
        ],
      },
      {
        id: 'members-area',
        title: 'Área de miembros sin backend',
        scope: 'Cliente freelance · 2026',
        proof: '26 pruebas automatizadas',
        problem:
          'Una academia en línea necesitaba un área privada para sus miembros, con clases, herramientas y progreso, sin montar cuentas ni base de datos.',
        solution:
          'Sitio estático en Next.js con acceso por contraseña compartida que nunca llega al navegador: una cookie con vencimiento firmado con HMAC-SHA256, comparada en tiempo constante. Cambiar la contraseña cierra todas las sesiones.',
        result:
          'Calculadora y bitácora cuya lógica cubren 26 pruebas automatizadas, con importación de reportes PDF y exportación a PDF.',
        specs: [
          ['Rol', 'Diseño y desarrollo completos'],
          ['Stack', 'Next.js · TypeScript · Tailwind CSS · Web Crypto'],
          ['Código', 'Privado (cliente)'],
        ],
      },
      {
        id: 'exod-ia',
        title: 'EXOD-IA · NASA Space Apps 2025',
        scope: 'Hackatón · equipo de 5',
        proof: 'Global Nominee',
        problem: 'Analizar candidatos a exoplanetas con modelos de aprendizaje automático desde una aplicación web.',
        solution: 'Aplicación web desarrollada por un equipo de cinco integrantes durante el NASA Space Apps Challenge 2025.',
        result: 'Global Nominee: avanzó a la etapa mundial. Se nominaron 1,294 equipos entre más de 18,000 participantes.',
        specs: [
          ['Equipo', '5 integrantes'],
          ['Reconocimiento', 'Global Nominee'],
        ],
      },
    ],
  },
  experience: {
    heading: 'Experiencia',
    moreLabel: 'Más detalle',
    jobs: [
      {
        period: 'may 2026 – hoy',
        role: 'Desarrollador FullStack',
        company: 'Panamotors Group',
        place: 'Remoto · México',
        changes: [
          'Lidero la migración de la analítica de marketing a Google Cloud (Cloud Run, Workflows, BigQuery, Secret Manager) con despliegues sin llaves mediante Workload Identity Federation.',
          'Implementé búsqueda semántica con embeddings de Amazon Titan v2 en AWS Bedrock y caché de cuatro capas; integré Bedrock en cuatro subsistemas con salidas estructuradas y seguimiento de costos.',
          'Desarrollé la sincronización de inventario desde el ERP, con parsers por marca, normalización con IA y validación humana, y APIs REST para cinco verticales de inventario documentadas con OpenAPI.',
        ],
        more:
          'Pipelines hacia BigQuery desde Meta Ads, HubSpot, AWS Athena y analítica web, con un dashboard de atribución; SSO, autorización por organización y módulos, RBAC y revocación de acceso; sincronización con HubSpot cada dos minutos para crear y deduplicar clientes.',
        stack: 'Python · Django · Node.js · TypeScript · Next.js · PostgreSQL · BigQuery · GCP · AWS Bedrock · Docker',
      },
      {
        period: 'ene 2026 – hoy',
        role: 'Desarrollador FullStack Junior',
        company: 'Freelance',
        place: 'México',
        changes: [
          'Diseñé y desarrollé landing pages responsivas con Next.js según los requerimientos de cada cliente.',
          'Construí una plataforma full-stack con React y TypeScript en el frontend, Django en el backend e integración con Stripe.',
        ],
        stack: 'Next.js · React · TypeScript · Tailwind CSS · Django · Stripe',
      },
      {
        period: 'feb 2025 – oct 2025',
        role: 'Desarrollador FullStack Junior',
        company: 'JAES | Remolques Automotrices',
        place: 'Híbrido · Puebla',
        changes: [
          'Desarrollé la API REST de un ERP en Python/Django: modelos, serializadores, vistas y rutas.',
          'Construí componentes en React con TypeScript, integré endpoints propios entre frontend y backend y realicé pruebas funcionales y de integración.',
        ],
        stack: 'Python · Django · DRF · React · TypeScript',
      },
      {
        period: 'jun 2024 – feb 2025',
        role: 'Desarrollador FullStack Junior',
        company: 'Levisoft.io',
        place: 'Híbrido · Puebla',
        changes: [
          'Desarrollé interfaces web responsivas con JavaScript, React y Vite para proyectos de clientes, y endpoints con Node.js y Express.',
          'Participé en proyectos de software empresarial sobre Frappe/ERPNext.',
        ],
        stack: 'JavaScript · React · Vite · Node.js · Express · Frappe/ERPNext',
      },
    ],
  },
  stack: {
    heading: 'Stack',
    daily: 'Uso diario',
    used: 'Lo he usado',
    groups: [
      ['Lenguajes', 'Python, TypeScript, SQL', 'JavaScript'],
      ['Backend y APIs', 'Django, Django REST Framework, Node.js, Express, Celery, OpenAPI, JWT', 'FastAPI, Frappe/ERPNext'],
      ['Frontend', 'Next.js, React, Tailwind CSS', 'React Native'],
      ['Datos', 'PostgreSQL, Redis, BigQuery', 'MongoDB, Prisma ORM, AWS Athena'],
      ['Nube y despliegue', 'Docker, GitHub Actions, Google Cloud (Cloud Run, Workflows), AWS (S3, Bedrock)', '—'],
      ['IA', 'Embeddings y LLMs en AWS Bedrock, salidas estructuradas, control de costo', 'Aprendizaje automático (EXOD-IA)'],
      ['Pruebas', 'pytest, Vitest', '—'],
    ],
  },
  education: {
    heading: 'Formación y reconocimientos',
    rows: [
      ['2026', 'Ingeniería en Sistemas Computacionales', `${facts.university} · egreso en mayo de 2026`],
      ['2025', 'NASA Space Apps Challenge · Global Nominee', 'EXOD-IA, equipo de 5. Se nominaron 1,294 equipos entre más de 18,000 participantes.'],
      ['2025', 'Talent Land Guadalajara · segunda fase', 'Radiance: imagen médica DICOM con web en Next.js, app en React Native y API en Python.'],
      ['—', 'Idiomas', 'Español nativo · Inglés C1'],
    ],
  },
  author: {
    heading: 'Sobre mí',
    body: [
      'Empecé a trabajar en junio de 2024, mientras estudiaba la carrera: desde entonces he pasado por tres empresas, proyectos freelance y dos hackatones.',
      'Trabajo con pruebas automatizadas, documentos de diseño que explican el porqué de cada decisión y despliegues que se pueden repetir. Lo que más me interesa es llevar un prototipo a producción.',
    ],
  },
  contact: {
    heading: 'Contacto',
    lead: 'Escríbeme por correo o LinkedIn.',
    email: 'Correo',
    copy: 'Copiar',
    copied: 'Copiado',
    open: 'Abrir',
    freelance: 'También tomo proyectos freelance seleccionados.',
  },
  footer: {
    updated: 'Actualizado el 11 de noviembre de 2026',
    colophon: 'Hecho con Astro. Tipografías: Red Hat Display, Red Hat Text y Red Hat Mono.',
  },
};

const en: Content = {
  meta: {
    title: 'Alfredo Barranco Ahued — Full-stack developer',
    description:
      'Full-stack developer in Puebla, Mexico: ERPs, REST APIs and systems integration, with applied AI. 2+ years of experience; open to remote roles with US/EU overlap.',
    locale: 'en_US',
  },
  skip: 'Skip to content',
  nav: { label: 'Sections', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
  lang: { label: 'Language', names: { es: 'Español', en: 'English' } },
  hero: {
    role: 'Full-stack developer. I connect systems that don’t talk to each other and automate them with measured AI.',
    available: 'Open to work',
    status: ['Puebla, Mexico · UTC−6', 'Remote (US/EU overlap) or hybrid', 'English C1'],
    stack: 'Python · TypeScript · Django · Node.js · Next.js · Google Cloud · AWS',
    primary: 'See the 4 projects',
    secondary: 'Contact',
    vano: 'Projects',
    light: {
      now: 'It’s {time} in Puebla',
      open: 'within working hours',
      closed: 'outside working hours',
      follow: 'The light on this page follows that clock.',
    },
  },
  projects: {
    heading: 'Projects',
    lead: 'Two come from my current job and are described without business data; one is for a freelance client and one is from a hackathon.',
    labels: {
      problem: 'Problem',
      solution: 'Solution',
      decision: 'Key decision',
      result: 'Result',
      measured: 'Measured in production',
      before: 'Before',
      after: 'After',
    },
    items: [
      {
        id: 'semantic-search',
        title: 'Semantic search on an AI budget',
        scope: 'Employer · 2026',
        proof: '4-layer cache',
        problem:
          'The website search of an automotive group could not handle natural-language queries about cars, trucks and machinery.',
        solution:
          'Amazon Titan v2 embeddings on AWS Bedrock, cosine similarity in NumPy and a four-layer cache that cuts model calls and tolerates failures. Bedrock now powers four subsystems: normalization, spec sheets, search routing and message drafts, with structured outputs and cost tracking.',
        decision: 'Cosine similarity in NumPy instead of pgvector: the managed database did not allow installing the extension.',
        specs: [
          ['Role', 'Development and integration'],
          ['Stack', 'Python · Django · AWS Bedrock · NumPy · Redis'],
          ['Code', 'Private (employer)'],
        ],
      },
      {
        id: 'cloud-analytics',
        title: 'Multi-tenant analytics on Google Cloud',
        scope: 'Employer · 2026, ongoing',
        proof: 'Image −72.6%',
        problem: 'Marketing analytics ran as a prototype on a laptop, with manual extractions and no access control.',
        solution:
          'I lead the migration to Cloud Run, Workflows, BigQuery and Secret Manager, with keyless deployments (Workload Identity Federation), SSO, per-organization and per-module permissions, and access revocation. Pipelines bring Meta Ads, HubSpot, AWS Athena and web analytics data into BigQuery.',
        metrics: [
          { label: 'Container image', before: 979, after: 268, unit: 'MB', change: '−72.6%' },
          { label: 'Dashboard payload', before: 8, after: 3.8, unit: 'MB', change: '−52.5%' },
        ],
        specs: [
          ['Role', 'Migration lead'],
          ['Stack', 'Node.js · TypeScript · Python · BigQuery · Cloud Run · GitHub Actions'],
          ['Code', 'Private (employer)'],
        ],
      },
      {
        id: 'members-area',
        title: 'A members area with no backend',
        scope: 'Freelance client · 2026',
        proof: '26 automated tests',
        problem:
          'An online academy needed a private area for its members, with classes, tools and progress tracking, without accounts or a database.',
        solution:
          'A static Next.js site behind a shared password that never reaches the browser: a cookie carrying an HMAC-SHA256-signed expiry, compared in constant time. Changing the password signs everyone out.',
        result: 'Calculator and log tools whose logic is covered by 26 automated tests, with PDF report import and PDF export.',
        specs: [
          ['Role', 'Full design and development'],
          ['Stack', 'Next.js · TypeScript · Tailwind CSS · Web Crypto'],
          ['Code', 'Private (client)'],
        ],
      },
      {
        id: 'exod-ia',
        title: 'EXOD-IA · NASA Space Apps 2025',
        scope: 'Hackathon · team of 5',
        proof: 'Global Nominee',
        problem: 'Analyze exoplanet candidates with machine-learning models from a web application.',
        solution: 'A web application built by a team of five during the NASA Space Apps Challenge 2025.',
        result: 'Global Nominee: advanced to the global stage. 1,294 teams were nominated out of more than 18,000 participants.',
        specs: [
          ['Team', '5 members'],
          ['Recognition', 'Global Nominee'],
        ],
      },
    ],
  },
  experience: {
    heading: 'Experience',
    moreLabel: 'More detail',
    jobs: [
      {
        period: 'May 2026 – now',
        role: 'Full-stack Developer',
        company: 'Panamotors Group',
        place: 'Remote · Mexico',
        changes: [
          'I lead the migration of marketing analytics to Google Cloud (Cloud Run, Workflows, BigQuery, Secret Manager) with keyless deployments through Workload Identity Federation.',
          'Built semantic search with Amazon Titan v2 embeddings on AWS Bedrock and a four-layer cache; integrated Bedrock into four subsystems with structured outputs and cost tracking.',
          'Built inventory sync from the ERP, with per-brand parsers, AI normalization and human validation, plus REST APIs for five inventory verticals documented with OpenAPI.',
        ],
        more:
          'Pipelines into BigQuery from Meta Ads, HubSpot, AWS Athena and web analytics, with an attribution dashboard; SSO, per-organization and per-module authorization, RBAC and access revocation; HubSpot sync every two minutes to create and deduplicate clients.',
        stack: 'Python · Django · Node.js · TypeScript · Next.js · PostgreSQL · BigQuery · GCP · AWS Bedrock · Docker',
      },
      {
        period: 'Jan 2026 – now',
        role: 'Junior Full-stack Developer',
        company: 'Freelance',
        place: 'Mexico',
        changes: [
          'Designed and built responsive landing pages with Next.js to each client’s requirements.',
          'Built a full-stack platform with React and TypeScript on the frontend, Django on the backend and Stripe integration.',
        ],
        stack: 'Next.js · React · TypeScript · Tailwind CSS · Django · Stripe',
      },
      {
        period: 'Feb 2025 – Oct 2025',
        role: 'Junior Full-stack Developer',
        company: 'JAES | Remolques Automotrices',
        place: 'Hybrid · Puebla',
        changes: [
          'Built the REST API of an ERP in Python/Django: models, serializers, views and routes.',
          'Built React components in TypeScript, wired our own endpoints between frontend and backend, and ran functional and integration tests.',
        ],
        stack: 'Python · Django · DRF · React · TypeScript',
      },
      {
        period: 'Jun 2024 – Feb 2025',
        role: 'Junior Full-stack Developer',
        company: 'Levisoft.io',
        place: 'Hybrid · Puebla',
        changes: [
          'Built responsive web interfaces with JavaScript, React and Vite for client projects, plus endpoints with Node.js and Express.',
          'Worked on enterprise software projects on Frappe/ERPNext.',
        ],
        stack: 'JavaScript · React · Vite · Node.js · Express · Frappe/ERPNext',
      },
    ],
  },
  stack: {
    heading: 'Stack',
    daily: 'Daily use',
    used: 'Have used',
    groups: [
      ['Languages', 'Python, TypeScript, SQL', 'JavaScript'],
      ['Backend & APIs', 'Django, Django REST Framework, Node.js, Express, Celery, OpenAPI, JWT', 'FastAPI, Frappe/ERPNext'],
      ['Frontend', 'Next.js, React, Tailwind CSS', 'React Native'],
      ['Data', 'PostgreSQL, Redis, BigQuery', 'MongoDB, Prisma ORM, AWS Athena'],
      ['Cloud & delivery', 'Docker, GitHub Actions, Google Cloud (Cloud Run, Workflows), AWS (S3, Bedrock)', '—'],
      ['AI', 'Embeddings and LLMs on AWS Bedrock, structured outputs, cost control', 'Machine learning (EXOD-IA)'],
      ['Testing', 'pytest, Vitest', '—'],
    ],
  },
  education: {
    heading: 'Education & recognition',
    rows: [
      ['2026', 'B.S. in Computer Systems Engineering (Ingeniería en Sistemas Computacionales)', `${facts.university}, Mexico · completed May 2026`],
      ['2025', 'NASA Space Apps Challenge · Global Nominee', 'EXOD-IA, team of 5. 1,294 teams were nominated out of more than 18,000 participants.'],
      ['2025', 'Talent Land Guadalajara · second round', 'Radiance: DICOM medical imaging with a Next.js web app, a React Native app and a Python API.'],
      ['—', 'Languages', 'Spanish (native) · English (C1)'],
    ],
  },
  author: {
    heading: 'About me',
    body: [
      'I started working in June 2024, while still in college: since then I have worked at three companies, taken on freelance projects and competed in two hackathons.',
      'I work with automated tests, design docs that explain why each decision was made, and deployments that can be repeated safely. What I care about most is taking a prototype to production.',
    ],
  },
  contact: {
    heading: 'Contact',
    lead: 'Write to me by email or on LinkedIn.',
    email: 'Email',
    copy: 'Copy',
    copied: 'Copied',
    open: 'Open',
    freelance: 'I also take on select freelance projects.',
  },
  footer: {
    updated: 'Updated November 11, 2026',
    colophon: 'Built with Astro. Typefaces: Red Hat Display, Red Hat Text and Red Hat Mono.',
  },
};

export const content: Record<Lang, Content> = { es, en };
