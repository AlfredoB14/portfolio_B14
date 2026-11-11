# Information architecture of software/systems engineer portfolios: sections, hero, page structure, benchmark of live sites, and a recommended sitemap (focus: bilingual junior engineer in Mexico)

> Research date: 2026-11-11. Every portfolio marked "verified" was fetched successfully on this date. Hero copy and taglines from third-party sites are paraphrased, not reproduced. Short functional UI labels (job titles, nav labels, status badges) appear in `code style`. Sources from before 2024 are flagged **[older]**. Personal contact data (phones, emails) seen on sites is intentionally not recorded.

---

## 1. Which sections should an engineer's portfolio include (essential vs. optional), and which patterns are outdated or harmful?

### Takeaway
The 2023–2026 guidance and the 17 live sites benchmarked agree on a core for job seekers. In order: a hero with name, target role and a one-line value statement; 3–5 selected projects, each with an outcome and live/repo links; experience; skills grouped and tied to evidence; a short "about"; and contact with a résumé link. Writing, talks, open source, testimonials, /now and /uses are optional. Add them only when real, maintained content exists. Every source criticizes self-rated skill bars and percentages, and none of the 17 live sites used them. The other harmful patterns are long logo walls or skill lists, tutorial clones, too many or unfinished projects, placeholder or stale content, and heavy animation or loading screens.

### Cited Findings

**Core sections in current guidance**
- techinterview.org (updated 2026-04-26; author not stated) recommends this structure. A landing area with name, short intro and what you work on. A short, specific About; generic passion statements are discouraged. 3–6 projects, each with context, key technical decisions and outcome. Optional writing/talks, a résumé PDF link, and contact with at least email and LinkedIn. It advises skipping web contact forms. — [techinterview.org](https://www.techinterview.org/post/3233474627/personal-website-portfolio-engineers/?format=md)
- SlateGit (Aug 9, 2026; vendor blog) implies this layout. Above the fold: a role and stack headline plus a one-line pitch. Then 3–5 projects, each with an outcome or metric and a live link. Contact (email, résumé, calendar link) must be visible and work on mobile. About and blog are optional and go below the projects. — [SlateGit, 15 software engineer sites](https://slategit.com/blog/personal-website-examples-software-engineers)
- Platzi course "Curso de Creación de Portafolio para Desarrolladores Web" (class "Secciones clave de un portafolio profesional"; the page shows no instructor or date) gives these sections in order:
  - Presentación: brief, about five lines. May include country, languages with official test scores instead of self-labels like "advanced", and awards.
  - Servicios: 2–3 offers, mostly relevant to freelancers.
  - Proyectos: the largest section, because recruiters look there first. At most 4–5, recent and relevant to the vacancy.
  - Resultados: KPIs, achievements or testimonials as proof.
  - Contacto: LinkedIn and email, included even when a CV is sent.
  
  — [Platzi, secciones clave](https://platzi.com/cursos/portafolio-desarrollo-web/secciones-clave-de-un-portafolio-profesi/)
- Platzi (class "Qué busca un reclutador en tu portafolio"):
  - For each project, show your specific role, the stack/tools and a concrete result.
  - A workflow diagram communicates decisions better than a photo.
  - Drop projects older than about four years. Keep what is recent, relevant and that you can explain confidently.
  - The portfolio serves as proof that the CV is true.
  
  — [Platzi, qué busca un reclutador](https://platzi.com/cursos/portafolio-desarrollo-web/que-busca-un-reclutador-en-tu-portafolio/)
- Josh W. Comeau ("Building an Effective Dev Portfolio" book page; undated, tied to a Feb 2020 tweet) **[older]**:
  - Showcase 2–5 projects. The site is a highlight reel, not an archive.
  - The author should act as a tour guide through each project's internals.
  - Target reader: junior front-end developers aiming at US/Canadian companies.
  - Comeau says he took part in hiring at Gatsby, Khan Academy, DigitalOcean and Unsplash.
  
  — [joshwcomeau.com/effective-portfolio](https://www.joshwcomeau.com/effective-portfolio/)
- James Y. Rauhut, freeCodeCamp (Oct 7, 2016) **[older]**, after reviewing 50 portfolios:
  - Nearly all followed an Intro > Skills > Projects > Contact flow.
  - Reviewers scan rather than read.
  - Accessibility (keyboard navigation, contrast) was the most common failure.
  - Show the code and a live site, and be honest about your contribution, because reviewers check Git history.
  
  — [freeCodeCamp](https://www.freecodecamp.org/news/i-reviewed-fifty-portfolios-on-reddit-and-this-is-what-i-learned-e5d2b43150bc/)
- Keepcoding (search snippet only; not fetched): each project should have a title, clear description, technologies, challenges and a link to working code or the repo. — [Keepcoding](https://keepcoding.io/blog/como-hacer-un-portafolio-en-programacion/)

**Is a portfolio site a differentiator at all?**
- techinterview.org (2026) says a site pays off for:
  - frontend, design and product engineers
  - people with public work
  - career switchers
  - writers

  Backend, infra, SRE, data and ML-platform engineers whose work is mostly private may skip it. A site only helps if there is content to justify it, and an outdated site is worse than none, so review it quarterly or skip it. Expected effort is 4–8 hours for most engineers and 20–40 for frontend engineers building a showcase piece. — [techinterview.org](https://www.techinterview.org/post/3233474627/personal-website-portfolio-engineers/?format=md)
- A dev.to post (Aug 24, 2025; low-authority author) argues a portfolio site is now an expected baseline, not a differentiator. Hiring managers want depth: deployed full-stack work, documented APIs, tests, READMEs and OSS contributions. — [dev.to/oseni03](https://dev.to/oseni03/hiring-managers-dont-care-about-your-portfolio-website-heres-what-they-do-care-about-30lf)
- Blind thread on new-grad sites (search snippet only): views are mixed. Some say to prioritize LeetCode and the résumé; others put school projects on their site. — [Blind](https://www.teamblind.com/post/is-personal-website-worth-it-for-new-grad-j5j3lshx)

**Outdated or harmful patterns**
- **Skill percentages and bars**
  - Frontend Mentor (Dec 8, 2023): percentages do not reflect expertise. Use adjectives (newbie, proficient, advanced) or years per tool instead. — [Frontend Mentor](https://frontendmentor.io/articles/portfoliobuilding-tips-for-aspiring-web-developers-A7qiP-_F-F)
  - Scrimba (Oct 13, 2022) **[older]**: self-assessed percentages are not a viable metric and hurt credibility. List technologies and let projects prove skill. If you use icons, label each with the tech name, because non-technical viewers may not recognize logos. — [Scrimba](https://scrimba.com/articles/web-developer-portfolio-mistakes/)
  - Rauhut (2016) **[older]**: "You say you are 85% proficient at Angular? What does that mean?" He says reviewers only parse three levels: don't know it, learning it, confident in it. — [freeCodeCamp](https://www.freecodecamp.org/news/i-reviewed-fifty-portfolios-on-reddit-and-this-is-what-i-learned-e5d2b43150bc/)
  - techinterview.org (2026): avoid self-rated skill bars and lists of every technology you have touched. — [techinterview.org](https://www.techinterview.org/post/3233474627/personal-website-portfolio-engineers/?format=md)
  - Counterpoint, weak (community comments surfaced by search): some recruiters still ask for numeric self-ratings, so candidates should have an answer ready. — [dev.to thread](https://dev.to/iamzoka/don-t-use-progress-bars-in-your-cv-feb)
- **Logo walls and long skill lists:** SlateGit recommends 5–8 technologies tied to real projects instead of a long skills wall, and the new-grad pattern it describes has no generic skills list at all. — [SlateGit](https://slategit.com/blog/personal-website-examples-software-engineers)
- **Tutorial clones and generic apps:** Scrimba warns against presenting YouTube, course or bootcamp projects as your own, and against generic weather or calculator apps. Extend tutorial projects with your own features and document the challenges. — [Scrimba](https://scrimba.com/articles/web-developer-portfolio-mistakes/)
- **Too many or unfinished projects:** Frontend Mentor lists including every project, and including unfinished or partly working ones, as mistakes. Platzi caps projects at 4–5 because a recruiter may receive 10–15 portfolios a day. — [Frontend Mentor](https://frontendmentor.io/articles/portfoliobuilding-tips-for-aspiring-web-developers-A7qiP-_F-F); [Platzi](https://platzi.com/cursos/portafolio-desarrollo-web/secciones-clave-de-un-portafolio-profesi/)
- **Heavy animation, filler and stale content:**
  - Frontend Mentor flags unnecessary animations and GIFs, and elements that break on phones or tablets.
  - techinterview.org flags heavy animation, parallax, hero videos, mission statements, long filler and stale content.
  
  — [Frontend Mentor](https://frontendmentor.io/articles/portfoliobuilding-tips-for-aspiring-web-developers-A7qiP-_F-F); [techinterview.org](https://www.techinterview.org/post/3233474627/personal-website-portfolio-engineers/?format=md)
- **Boastful tone:** Scrimba says arrogance is a poor first impression and recommends showing humility and teachability. — [Scrimba](https://scrimba.com/articles/web-developer-portfolio-mistakes/)
- **Generic templates:**
  - techinterview.org says generic developer-portfolio templates read as junior and that custom or minimalist designs do better.
  - The most-copied template, Brittany Chiang's v4, has 8.3k stars and 4.2k forks. Its README allows forks but asks for credit linking back and for nobody to claim the work as their own.
  
  — [techinterview.org](https://www.techinterview.org/post/3233474627/personal-website-portfolio-engineers/?format=md); [bchiang7/v4](https://github.com/bchiang7/v4)
- **Observed in the live benchmark (Q4):**
  - None of the 17 verified sites used skill bars or percentage ratings (per text extraction). Skills appeared as grouped text chips, labeled logos, skill cards, or per-project/per-job tags.
  - Defects observed:
    - template placeholder text left in a "key achievements" block ([caesarcode.com.mx](https://www.caesarcode.com.mx/index.html))
    - animated stat counters that show "0" in the fetched HTML ([portafolio-armando-gma.vercel.app](https://portafolio-armando-gma.vercel.app); [mi-portafolio-73v.pages.dev](https://mi-portafolio-73v.pages.dev))
    - a percentage loading screen before any content ([nithish.is-a.dev](https://nithish.is-a.dev))
    - a projects heading with no visible project cards in the fetched render ([luispeche.vercel.app](https://luispeche.vercel.app))

### Inferences
- **Essential for a 0–2-year job seeker:**
  - hero
  - selected projects
  - experience, counting internships, *servicio social*, *residencia profesional*, freelance and part-time work
  - skills, grouped and linked to evidence
  - compact education
  - contact plus CV link
  
  "About" can be 3–5 lines or merged into the hero.
- **Conditional, only when the content exists and is maintained:**
  - certifications that are role-relevant and verifiable
  - achievements: hackathons, awards, scholarships, competitive programming, each quantified
  - writing (3+ solid posts)
  - talks
  - open source (merged contributions, not forks)
  - testimonials, attributed to a named manager, professor or client
- **Remove or never add:**
  - skill bars or percentages
  - unlabeled logo walls
  - a "Welcome to my site" opener
  - mission statements
  - animated counters and loading screens
  - placeholder sections
  - tutorial clones presented as original work
  - more than about 5–6 projects on the home page
  - contact that relies only on a form
- The 2016–2020 "Intro > Skills > Projects > Contact" flow is still the backbone. Current guidance shifts weight from skills to evidence: outcomes, decisions, diagrams and live links.

### Gaps
- No primary survey data was found on which portfolio sections hiring managers actually read, or for how long. Platzi's "10–15 portfolios per day" is a course claim with no cited study.
- Several 2025–2026 SEO guides surfaced in search quote statistics that could not be traced to their original surveys (for example, "73% of hiring managers value a portfolio over a résumé", attributed to Stack Overflow 2024). Do not use them.
- No source specifically analyzes "hire me" buttons or similar gimmicks. Related cautions exist only on boastfulness (Scrimba), mission statements (techinterview.org) and "Welcome to my site" openers (SlateGit).

---

## 2. How should the hero / above-the-fold be written (value proposition, role, location/availability, primary CTA)?

### Takeaway
An effective hero answers, in under five seconds:
1. who you are (name)
2. what role you want or do, with the core stack
3. one concrete value or proof line
4. where you are, including remote openness and availability
5. what to do next: one primary CTA (projects or résumé) plus contact icons

Personality-first or one-line-identity heroes (Lee Robinson, Cassidy Williams, Anthony Fu) only work for people who are already known. Juniors in the benchmark who state role, availability, location and a résumé CTA in the hero are the clearest.

### Cited Findings

**Guidance**
- SlateGit (Aug 2026): name the exact target role and core stack in the first sentence, and avoid opening with a personal essay or "Welcome to my site". For career changers, reframe the prior role in the headline. — [SlateGit](https://slategit.com/blog/personal-website-examples-software-engineers)
- Platzi: name and professional role come first, so a visitor knows who you are and what you do in under five seconds. The presentation can include country, languages with official scores, and awards. — [Platzi](https://platzi.com/cursos/portafolio-desarrollo-web/secciones-clave-de-un-portafolio-profesi/)
- techinterview.org (2026): the landing area needs name, short intro and what you work on. Avoid mission statements, hero videos and parallax. — [techinterview.org](https://www.techinterview.org/post/3233474627/personal-website-portfolio-engineers/?format=md)
- SlateGit, on international students on OPT/STEM-OPT: state work authorization plainly near the contact section. — [SlateGit](https://slategit.com/blog/personal-website-examples-software-engineers)

**Observed hero patterns (paraphrased; labels verbatim)**

| Pattern | Example (paraphrased) | Source |
|---|---|---|
| Role + one-line craft statement | Title `Frontend Engineer` plus one line about building accessible, pixel-perfect web experiences; anchor nav About / Experience / Projects | [brittanychiang.com](https://brittanychiang.com) |
| Role + specialty + location + availability badge + single contact CTA | Photo; role `Ingeniero de Software y Creador de Contenido sobre Programación`; one line on building distinctive web apps; `Barcelona, España`; badge `Disponible para trabajar`; CTA `Contáctame` (mailto) plus LinkedIn/GitHub buttons; years-of-experience chip | [porfolio.dev](https://porfolio.dev) (midudev template) |
| Junior job seeker: role label + availability + location + remote + résumé CTA | Greeting with first name; label `JUNIOR SOFTWARE ENGINEER`; short "who I am & what I build" line; `Seeking junior IT roles`; `Bucharest, Romania · Open to remote`; CTAs `RESUME ↗` and `PROJECTS` | [borcarazvan.tech](https://www.borcarazvan.tech) |
| Two-part title (primary + secondary) + stack sentence + proof stat + CV CTA | `Backend & Generative AI Developer`; one sentence on Java/Spring Boot/SQL Server microservices plus GenAI agents in Python; "2+ years in the banking sector" stat; CTAs `Know Me` and `Download CV`; AWS certification badge | [luispeche.vercel.app](https://luispeche.vercel.app) |
| Student: school + major/minor + languages + focus + location | Student at Drexel studying Software Engineering with an AI/ML minor; builds with Python, C and Go, focused on APIs, systems design and data modeling; `Philadelphia, PA`; CTAs Email / GitHub / LinkedIn / Resume | [andresilva.tech](https://andresilva.tech) |
| Student AI/full-stack: hybrid title + tagline + availability | `Full Stack AI/ML Engineer`; tagline about software that thinks, learns and scales; `Available for work`; CTAs `Connect` and `Resume` | [nithish.is-a.dev](https://nithish.is-a.dev) |
| Mexican new grad: degree-based label + "Jr" title + summary + WhatsApp CTA | `Ingeniero en sistemas computacionales junior` / `Full-stack developer Jr`; summary paragraph on enterprise software, optimization and web services; CTAs `Ver proyectos` and `WhatsApp directo`; 3 stat counters (render "0" without JS) | [portafolio-armando-gma.vercel.app](https://portafolio-armando-gma.vercel.app) |
| Mid-level, bilingual: greeting + name + title + experience summary | `Full Stack Web Developer`; 4+ years summary emphasizing accessibility, security and Agile; CTAs `View projects` and `Let's talk`; availability stated only in the contact section | [manudam69.github.io/en](https://manudam69.github.io/en) |
| Well-known: identity line + personality | "Engineer and writer" identity line plus a mission-like sentence (Lee Robinson); playful line with subtitle `Software Engineer in Chicago` (Cassidy Williams); self-description as an open-source enthusiast and design engineer (Anthony Fu) | [leerob.com](https://leerob.com); [cassidoo.co](https://cassidoo.co); [antfu.me](https://antfu.me) |
| Freelance/services: client-outcome headline + audience + scarcity badge + booking CTA | Headline promises the site/funnel that sells the client's offer; audience line (solopreneurs, coaches, small teams); badge with open slots; CTAs: book a call / see client work | [roxanalafuente.com/en](https://www.roxanalafuente.com/en) |

### Inferences
- For the target profile, the hero should include:
  1. name
  2. a positioning line with a primary role and a secondary capability (see Q6)
  3. one sentence with the 3–4 core technologies and the kind of systems built
  4. one proof chip, only if real (for example a system in production, users or hours saved, an award)
  5. location, time zone and work mode (for example: city, Mexico · UTC−6 · remote/hybrid)
  6. an availability badge
  7. a primary CTA `Ver proyectos` / `View projects`, a secondary CTA `Descargar CV` / `Download résumé`, and icon links for GitHub, LinkedIn and email
- Draft templates (my wording, not from sources; fill in only with true facts):
  - ES: «[Nombre] — Ingeniero de software full-stack · backend, datos y automatización con IA. Construyo aplicaciones web y servicios de punta a punta (Python/TypeScript, PostgreSQL) y automatizo procesos con LLMs. [Prueba real: p. ej., "Sistema interno en producción usado a diario por N personas".] [Ciudad], México · UTC−6 · Disponible para roles remotos o híbridos.» CTAs: «Ver proyectos» · «Descargar CV».
  - EN: «[Name] — Full-stack software engineer · backend, data & AI automation. I build web apps and backend services end to end and automate workflows with LLMs. [Real proof line.] Based in [City], Mexico (UTC−6) · open to remote roles with US/EU overlap.» CTAs: «View projects» · «Download résumé».
- Animated counters (projects, technologies, certifications) in the hero are risky. Two Mexican sites rendered "0" in their server HTML, which is what crawlers, link previews and no-JS readers see. Use static text or omit them.
- A WhatsApp CTA fits local Mexican hiring practice (seen on 2 Spanish-language sites). International recruiters expect email and LinkedIn first, so WhatsApp could stay in the Spanish version only. This is inference; no source compares channel effectiveness.

### Gaps
- No A/B or eye-tracking evidence was found comparing hero formulations for engineer portfolios.
- No source covers how Mexican engineers should state work eligibility for US/EU remote roles (contractor, EOR). SlateGit only covers OPT students.

---

## 3. Single-page vs. multi-page; separate case-study pages; extras like /now, /uses, colophon: what is current practice (2025–2026)?

### Takeaway
Current practice and guidance favor a hybrid: a single scannable home page with anchor navigation, plus a few deep pages. The deep pages are 1–3 case studies, a project archive once there are many projects, a résumé PDF, and optionally writing. All 10 job-seeker sites benchmarked use a one-page home with anchor navigation. None of the junior sites has real case-study pages, so a good case study is still a differentiator. /now, /uses and colophons are optional extras that signal care. They should never displace projects, and every extra page adds maintenance.

### Cited Findings
- SlateGit (June 27, 2026) says neither format is inherently stronger:
  - A one-pager makes a depth claim; a multi-project site makes a range claim.
  - Move to multi-project once you have 3+ projects that are each finished, documented and worth a recruiter's time. Narrow targeting favors a one-pager; a big quality gap between your best and second-best project also favors it.
  - Hybrid option: one flagship in depth plus a short, clearly secondary list.
  - A multi-project homepage should be a quick-scan index linking to case-study pages. Ten thin entries read worse than four strong ones.
  - Separate pages raise upkeep. Dense grids with small tap targets break on phones, where recruiters often open links.
  - Revisit the format every few months.
  
  — [SlateGit, one-pager vs multi-project](https://slategit.com/blog/one-pager-vs-multi-project-developer-portfolio)
- Older community opinion (search-result summary of dev.to threads; attribution to specific posts unverified) **[older]**: keep most content on one page unless you have 20+ projects. One developer reported that over 60% of portfolio traffic came from mobile. — [dev.to, single page or multi?](https://dev.to/lornasw93/dev-portfolio-site-single-page-or-multi-5ek5); [dev.to, one-page portfolios](https://dev.to/imtaslim/the-rise-of-one-page-portfolios-do-they-really-work-40b)
- techinterview.org (2026): the sample structure is a minimal single page. Keep a blog only with a monthly cadence; otherwise a "Selected writing" list of 3–5 posts is enough, and three strong posts beat many weak ones. — [techinterview.org](https://www.techinterview.org/post/3233474627/personal-website-portfolio-engineers/?format=md)
- **Case-study structure (convergent advice, mostly blogs):** problem/context, then role, constraints, approach and architecture, decisions and trade-offs, challenges, measurable result, next steps. One template surfaced in search (exact attribution unverified) suggests about 600–1,200 words. — [sahad.is-a.dev](https://sahad.is-a.dev/blog/turning-projects-into-case-studies); [SystemCraft templates](https://deepaucksharma.github.io/SystemCraft/portfolio/case-study-templates) (search snippets; low authority)
- **Role-specific proof artifacts** (SlateGit):
  - full-stack: one flagship with an architecture diagram
  - backend: an API showing load handling and auth, linked to real docs
  - ML/AI: a model card covering problem, data, eval metric and limitations
  - data engineering: an end-to-end pipeline diagram
  - DevOps/SRE: IaC plus an uptime or deploy-frequency figure
  - senior engineers with private work: prose case studies
  
  — [SlateGit](https://slategit.com/blog/personal-website-examples-software-engineers)
- **Observed:**
  - Brittany Chiang: home shows 4 projects, then a full résumé PDF link and a "full project archive" page (/archive).
  - Lee Robinson: one home page linking to 10 topic "notes" pages and dated posts.
  - Anthony Fu: multi-page hub (Blog, Projects, Talks, Podcasts, Photos, Demos, Sponsors).
  - tiangolo: docs-style multi-page site with search.
  - Juniors (borcarazvan, andresilva, nithish, armando, manudam69): one-page anchors, none with case-study pages.
  
  — [brittanychiang.com](https://brittanychiang.com); [leerob.com](https://leerob.com); [antfu.me](https://antfu.me); [tiangolo.com](https://tiangolo.com); [borcarazvan.tech](https://www.borcarazvan.tech); [andresilva.tech](https://andresilva.tech)
- **/now:** a page, usually at /now, describing what the person is focused on at this point in their life. nownownow.com, run by Derek Sivers, collects them. The only stated guidance is to write what you are doing now and publish it. — [nownownow.com/about](https://nownownow.com/about)
- **/uses:** Wes Bos's repo `awesome-uses` (about 5.3k stars) lists `/uses` pages detailing developer setups, gear, software and configs, and powers the directory at uses.tech. Anthony Fu keeps one at /use. — [wesbos/awesome-uses](https://github.com/wesbos/awesome-uses); [uses.tech](https://uses.tech); [antfu.me](https://antfu.me)
- **Colophon and "source" links:**
  - Brittany Chiang's footer is a colophon: designed in Figma, coded in VS Code, built with Next.js and Tailwind, deployed on Vercel, set in Inter.
  - Cassidy Williams, Guillermo Rauch and andresilva.tech link to the site's source repo in the footer.
  
  — [brittanychiang.com](https://brittanychiang.com); [cassidoo.co](https://cassidoo.co); [rauchg.com](https://rauchg.com); [andresilva.tech](https://andresilva.tech)
- **Maintenance:** techinterview.org recommends a quarterly 15-minute review and says a stale site is a bigger trap than none. A stale signal observed: luiscachog.io's footer reads 2014–2023, and its latest dated content is from Nov 2023. — [techinterview.org](https://www.techinterview.org/post/3233474627/personal-website-portfolio-engineers/?format=md); [luiscachog.io](https://luiscachog.io)

### Inferences
- For the target profile:
  - a single-page home per language with anchors
  - /proyectos/[slug] (ES) and /en/projects/[slug] (EN) case studies for the 2–3 strongest projects, one per facet if possible
  - a downloadable CV per language
  - optional /now (dated; doubles as a "currently learning, building, available" signal)
  - optional /notas or blog only if maintained
  - /uses and a colophon as low-cost personality signals in the footer
  - a project archive only once there are more than about 6 projects
- Linking the portfolio's own GitHub repo in the footer is a cheap code-quality signal, if the repo is clean, has a README and contains no secrets or private data.

### Gaps
- No 2025–2026 dataset measures what share of engineer portfolios are single-page vs. multi-page. The 10/10 figure comes from this small convenience sample.
- No source compares hiring outcomes with and without case-study pages.

---

## 4. Benchmark: 17 verified live portfolios (juniors, well-known engineers, Spanish-speaking/LatAm)

### Takeaway
Seniors and well-known engineers lead with identity plus experience or content (writing, OSS), and often drop the project grid entirely. Juniors lead with projects and hero availability statements. Spanish-speaking and LatAm sites show the same IA, plus local touches: WhatsApp CTAs, language levels, degree-based titles like "Ingeniero en Sistemas Computacionales", and ES/EN switches. Only 3 of 17 sites are bilingual. The strongest junior patterns: availability, location and remote openness in the hero; a résumé CTA; grouped skills without ratings; project cards with status, tech and links; and filters or a dual-positioning line for multi-faceted profiles. The most common weaknesses: no case studies, weak impact bullets, animated or placeholder content, and unexplained breadth.

### Cited Findings

**Discovery sources used**
- emmabostian/developer-portfolios (GitHub): 2,101 portfolios, alphabetical by first name, each with an optional bracketed role tagline. 27.7k stars, 5.4k forks. — [GitHub](https://github.com/emmabostian/developer-portfolios)
- midudev/porfolio.dev (GitHub): Spanish-language open-source portfolio template in Astro + Tailwind. About 1.5k stars and 579 forks; live demo at porfolio.dev. — [GitHub](https://github.com/midudev/porfolio.dev)
- bchiang7/v4 (GitHub): Brittany Chiang's previous site, the most-forked portfolio template. 8.3k stars, 4.2k forks; built with Gatsby. — [GitHub](https://github.com/bchiang7/v4)
- uses.tech and nownownow.com (directories of /uses and /now pages). — [uses.tech](https://uses.tech); [nownownow.com](https://nownownow.com/about)
- Found but not fetched (example roundups): CareerFoundry "24 examples", EPAM Anywhere, SlateGit (pattern-based, names no sites). — [CareerFoundry](https://careerfoundry.com/blog/web-development/software-engineer-portfolio); [EPAM Anywhere](https://anywhere.epam.com/en/blog/how-to-create-your-software-engineer-portfolio-with-examples)

**Summary table (all fetched 2026-11-11)**

| # | URL | Owner / level | Region · language | Home section order | Experience shown as | Projects shown as |
|---|---|---|---|---|---|---|
| 1 | [brittanychiang.com](https://brittanychiang.com) | Brittany Chiang, senior frontend (well-known) | US · EN | Hero → About → Experience → résumé link → Projects → archive link → Writing → colophon footer | 6 reverse-chron entries: dates, linked company, role, description, tech tags, optional links | 4 cards: title link, description, tags, optional metric badge, screenshot; /archive |
| 2 | [leerob.com](https://leerob.com) | Lee Robinson (well-known) | US · EN | Identity line → prose bio → Notes (10 topic pages) → Blog list | Prose bio with links to pages about past roles | None; writing instead |
| 3 | [cassidoo.co](https://cassidoo.co) | Cassidy Williams (well-known) | US · EN | Name + "Software Engineer in Chicago" → nav → playful intro/bio → newsletter CTA → recent posts → subscribe → tags → footer | Mentioned in bio only | None on home |
| 4 | [antfu.me](https://antfu.me) | Anthony Fu (well-known OSS) | EN (+ CN/JP social accounts) | Intro → work grouped by relationship → links to Blog/Projects/Talks/Podcasts/Photos/Demos/Sponsors; /use | Grouped as "Working at" | Grouped: "Creator of", "Core team of", "Maintaining", "Recent work" |
| 5 | [rauchg.com](https://rauchg.com) | Guillermo Rauch (well-known) | EN | Title → About / Follow → essay archive by year → source link | On /about (not on home) | None on home |
| 6 | [tiangolo.com](https://tiangolo.com) | Sebastián Ramírez (FastAPI creator; well-known) | Colombia (lives in Berlin) · EN | Home intro → Open Source → Ideas → Guides (docs-style, search) | Short prose summary | Linked list of OSS tools under "Open Source" |
| 7 | [porfolio.dev](https://porfolio.dev) | midudev template (15+ yrs) | Spain · ES | Hero → Experiencia laboral → Proyectos → Sobre mí → footer | 3 reverse-chron entries: role, company, dates, description, link | 2 cards: image, title, tech tags, metric-bearing description, Code/Preview buttons |
| 8 | [jonmircha.com](https://jonmircha.com) | Jonathan MirCha, educator/engineer | Appears Mexico-based · ES | Hero → bio with links to courses/projects/teaching → socials → "jardín digital" banner → support/donations | Links to /hola anchors | Links to /hola#proyectos |
| 9 | [caesarcode.com.mx](https://www.caesarcode.com.mx/index.html) | "Software Engineer" (level unstated) | .com.mx · ES default + EN switch | Hero → Proyectos destacados → Stack técnico → Logros clave (placeholder) → footer | Separate /experience page | 7 cards: category tag, description, feature bullets, tech badge, Repo/Demo |
| 10 | [luispeche.vercel.app](https://luispeche.vercel.app) | Backend & GenAI dev, 2+ yrs (banking) | Likely Peru (not stated) · EN | Hero → Projects (empty in render) → Skills carousel → filterable milestones timeline → Contact form → footer | Timeline filterable by type (All / Experience / Education), mixed with certifications | Inside timeline entries |
| 11 | [manudam69.github.io/en](https://manudam69.github.io/en) | Full-stack, 4+ yrs (started as Junior Dev 2021) | Mexico · ES at root + /en/ | Hero → Experience → Projects → Skills → Education & Languages → Contact | Reverse-chron cards: dates, title, company, location, bullets | 4 cards: screenshot linked to live site, domain, description, tech list |
| 12 | [portafolio-armando-gma.vercel.app](https://portafolio-armando-gma.vercel.app) | Junior systems engineer, new grad (Dec 2025, TecNM) | Estado de México · ES | Hero → Sobre mí → Experiencia → Trabajo destacado (filters) → Stack → Educación y Certificaciones → Contacto | 2 roles: dates, location, bullets | 5 cards with category filters (Web & Full-Stack / IoT & Hardware / ML & MLOps): screenshot, dates, achievements, tags, repo/presentation/article links |
| 13 | [mi-portafolio-73v.pages.dev](https://mi-portafolio-73v.pages.dev) | "Ingeniero en Sistemas Computacionales" / Full Stack (level unstated) | ES (location unstated) | Hero → Acerca de mí → contact; separate Skills / Experience / Hobbies / game pages | Separate page | None on home (counter only) |
| 14 | [roxanalafuente.com/en](https://www.roxanalafuente.com/en) | Freelance web dev, 10+ yrs | /en + /es · bilingual | Hero → stats → client diagnostic → offers/pricing → comparison → testimonials → CTA → selected work → footer | "10+ years" stat + comparison table | 3 cards: screenshot, title, line, link |
| 15 | [borcarazvan.tech](https://www.borcarazvan.tech) | Junior SWE, Computer Engineering student | Romania · EN | Hero → 01 About → 02 Skills & Background (journey, volunteering, skills, certifications) → 03 Selected Projects → 04 Contact → footer | "My Journey" timeline (bootcamp, degree, freelance) + volunteering roles | 2 featured cards (category, `In Progress` badge, bullets, tags, GitHub, mockup) + 4 small cards |
| 16 | [andresilva.tech](https://andresilva.tech) | SWE student (Drexel, AI/ML minor) | US · EN | Hero → Projects (+ GitHub graph) → Experience → Technologies → Contact → footer (source link) | 1 card: logo, title, company, dates, grouped stack (no bullets) | 4 cards: thumbnail, description, tags, Source/Live links; "View more" → GitHub |
| 17 | [nithish.is-a.dev](https://nithish.is-a.dev) | AI & Data Science student, "Full Stack AI/ML Engineer" | India · EN | Loading screen → Hero → About → Journey → Principles → Projects → Certifications → Let's Connect | Narrative "journey", no dated roles | 3 numbered entries with tags + GitHub; one `In Progress` |

**Per-site notes: what works and caveats**
1. **brittanychiang.com** (senior, verified)
   - Works: a scannable, highlight-reel home with a "view full résumé" PDF and a "full project archive" escape hatch; a metric badge on a project (install count); tech tags per job; a skip-to-content link; a colophon footer; a short 4-post Writing list.
   - Social links: GitHub, LinkedIn, CodePen, Instagram, Goodreads.
   - The previous version (v4) is the most-forked template, and its README asks forkers for attribution.
   
   — [brittanychiang.com](https://brittanychiang.com); [bchiang7/v4](https://github.com/bchiang7/v4)
2. **leerob.com** (well-known, verified)
   - Text-only. Work history is told in prose with links to dedicated pages about past employers.
   - Expertise is shown through 10 thematic "notes" pages and dated posts.
   - Contact: email and X.
   - Pattern: authority through writing. Not a junior model.
   
   — [leerob.com](https://leerob.com)
3. **cassidoo.co** (well-known, verified)
   - Personality-first hero; the newsletter is the primary CTA.
   - Posts have date, one-line summary and tags, plus a tag index.
   - Footer says the site is open source.
   - No work or project sections on the home page.
   
   — [cassidoo.co](https://cassidoo.co)
4. **antfu.me** (well-known OSS, verified)
   - Groups work by relationship to the project (working at, created, core team, maintaining). This framing presents many roles without looking scattered.
   - Separate Talks, Podcasts and Demos pages and a /use page; sponsorship is prominent.
   - Multilingual social accounts (Chinese, Japanese).
   
   — [antfu.me](https://antfu.me)
5. **rauchg.com** (well-known, verified)
   - Pure essay archive with About and Follow links and a footer link to the site's source.
   - The page does not state his background or origin (not verified here).
   
   — [rauchg.com](https://rauchg.com)
6. **tiangolo.com** (well-known LatAm backend/OSS, verified)
   - Self-described "boring" docs-style site. The intro says he is a software developer from Colombia, now working full time on his open-source projects.
   - Experience is a short prose summary: APIs and tools for ML and data systems across the Americas, Middle East and Europe.
   - The OSS tools are the proof. English only.
   
   — [tiangolo.com](https://tiangolo.com)
7. **porfolio.dev** (midudev template; Spain; verified)
   - Hero has photo, role, specialty line, `Barcelona, España`, a `Disponible para trabajar` badge, a years-of-experience chip, and a `Contáctame` mailto CTA with LinkedIn/GitHub buttons.
   - Nav: Experiencia / Proyectos / Sobre mí / Contacto. Light/Dark/System theme switch. No language switch and no dedicated contact section.
   - Experience comes before Projects, which suits a 15-year veteran. Juniors cloning it should consider swapping the order.
   
   — [porfolio.dev](https://porfolio.dev); [GitHub](https://github.com/midudev/porfolio.dev)
8. **jonmircha.com** (appears Mexico-based; verified)
   - Educator brand: role `UX & Software Engineer` with professor/edutuber tagline.
   - Opinionated voice favoring simple web fundamentals.
   - Nav: Cursos / Blog / Hola / Mentoría / Taller IA. Support and donation block; "digital garden" metaphor.
   - Mexico inferred from Mexican payment and store links; city not stated.
   - Pattern: creator or teacher site, not a job-seeker IA.
   
   — [jonmircha.com](https://jonmircha.com)
9. **caesarcode.com.mx** (verified)
   - Strengths:
     - Spanish-first with an ES/EN switcher in the header
     - CV link in the nav
     - project cards with category tags, feature bullets and Repo/Demo links
     - skills grouped into Frontend, Backend, Databases, Seguridad, Herramientas and IA
     - separate /experience and /certificates pages
   - Caveats: a "Logros Clave" section with template placeholder text left in production; partial translation (English placeholder on a Spanish page); no location or availability.
   
   — [caesarcode.com.mx](https://www.caesarcode.com.mx/index.html)
10. **luispeche.vercel.app** (2+ yrs; verified)
    - Strengths:
      - Two-part positioning (`Backend & Generative AI Developer`) with a "Java & AI backend specialist" badge and a sentence naming the primary stack before the secondary GenAI focus.
      - Proof stat (2+ years in banking).
      - A skills carousel where each card says which projects use the skill, tying skills to evidence.
      - A single timeline mixing experience, certifications and education, filterable by type.
      - Contact form with an email fallback.
    - Caveats: the projects heading rendered with no cards; a date typo; a theme toggle that does nothing; an unexplained interactive element; Spanish certificate titles on an English page.
    - Country not stated; the employer name suggests Peru (inference).
    
    — [luispeche.vercel.app](https://luispeche.vercel.app)
11. **manudam69.github.io** (Mexico, 4+ yrs, verified)
    - Clean bilingual structure: Spanish at the root, English at /en/, with an es/en nav switch.
    - Experience → Projects → Skills → Education & Languages → Contact. Project screenshots link to live sites. Skills are plain text in five groups.
    - Skip link.
    - Caveats: no CV link; availability appears only in the contact section.
    
    — [manudam69.github.io/en](https://manudam69.github.io/en)
12. **portafolio-armando-gma.vercel.app** (Mexican new-grad junior; closest match to the target profile; verified)
    - Strengths:
      - "About" as three numbered focus cards: scalable architectures, data in production, hardware/IoT.
      - Project filters by facet: Web & Full-Stack / IoT & Hardware / ML & MLOps.
      - Project cards with achievement bullets and links to repo, presentation or article.
      - A combined "Educación y Certificaciones" section listing the degree, a CENEVAL result and certifications with years (e.g., CCNA).
      - Languages with CEFR levels (English B2, studying C1).
      - CV in nav, hero and contact.
    - Caveats: hero counters show "0" in server HTML; WhatsApp is the primary contact CTA; Spanish only.
    
    — [portafolio-armando-gma.vercel.app](https://portafolio-armando-gma.vercel.app)
13. **mi-portafolio-73v.pages.dev** (verified)
    - Strength: CV offered in four formats, including an ATS-formatted PDF.
    - Caveats: no projects on the home page; counters show "0" in server HTML; a tag grid claiming broad areas (architecture, cloud, AI, digital marketing, leadership) with no evidence on the page; a game link in the top bar; experience and skills hidden on subpages.
    - A useful contrast for "unfocused breadth".
    
    — [mi-portafolio-73v.pages.dev](https://mi-portafolio-73v.pages.dev)
14. **roxanalafuente.com** (bilingual freelance services site; verified)
    - /en and /es with an "ES" switch.
    - Services IA: client problems, offers with pricing, comparison table, testimonials, booking CTA.
    - Relevant only if the target also sells freelance work. It is the wrong IA for job hunting.
    
    — [roxanalafuente.com/en](https://www.roxanalafuente.com/en)
15. **borcarazvan.tech** (junior; verified)
    - Strengths:
      - Hero states role, availability (`Seeking junior IT roles`), location and remote openness (`Bucharest, Romania · Open to remote`), with a Resume CTA.
      - Numbered all-caps section headings.
      - Skills as grouped chips with "(learning)" markers and soft skills.
      - Volunteering roles listed (e.g., GDG).
      - GPA and project-count stat callouts.
      - Certification checklist.
      - Footer line pairing backend thinking with embedded curiosity, a primary/secondary positioning.
      - Download CV in the contact section.
      - Languages: English C1 (Cambridge).
    - Caveats: projects come after skills and background; certifications have no issuer or dates; mockups instead of real screenshots; hackathons appear only as tags.
    
    — [borcarazvan.tech](https://www.borcarazvan.tech)
16. **andresilva.tech** (student; verified)
    - Strengths:
      - Projects first; experience after.
      - A clear focus line (APIs, systems design, data modeling) with the languages used.
      - Source and Live links on cards, a "view more" link to GitHub, and an embedded contribution graph.
      - Click-to-copy obfuscated email.
      - Footer link to the site's source.
      - Lists a "Lead Frontend Engineer" entry (Aug–Nov 2026) at a political action committee, an early leadership signal for a student.
    - Caveat: the experience card lists the stack but has no impact bullets.
    
    — [andresilva.tech](https://andresilva.tech)
17. **nithish.is-a.dev** (student; verified)
    - Strengths: hybrid title `Full Stack AI/ML Engineer` with a single unifying tagline; `Available for work` badge; certifications section with verification links on two items; Resume in nav and hero.
    - Caveats:
      - A loading screen with a percentage counter delays content.
      - A "principles" section uses space evidence could fill.
      - Only 3 projects, with no live demos and no dated experience.
      - Publishes a personal phone number.
    
    — [nithish.is-a.dev](https://nithish.is-a.dev)

**Not verified or excluded**
- qfeng.beaverexp.com (student, full-stack + ML in the emmabostian list): the fetch returned no content, likely a client-rendered SPA. **Not verified.** — [emmabostian list](https://github.com/emmabostian/developer-portfolios)
- pepalonso.com: only a loading indicator and a map attribution were returned. **Inconclusive.**
- mubx.dev: online, but a web-studio site, not a personal portfolio. The owner's personal site (me.mubx.dev) was not checked. **Excluded.**
- luiscachog.io: online, but last dated Nov 2023 with a "2014–2023" footer; location not confirmed. **Excluded (stale).**

**Cross-benchmark tallies** (descriptive, small convenience sample; "job-seeker sites" = #1, 7, 9–13, 15–17, n=10)
- Skill bars or % ratings: 0/17 (from text extraction; purely visual CSS bars with no numeric labels could go undetected).
- Résumé/CV link: 8/10 job-seeker sites (missing on porfolio.dev and manudam69).
- Availability statement: 4/10 (3 in the hero: porfolio.dev, borcarazvan, nithish; 1 in contact: manudam69).
- Location stated somewhere on the home page: 5/10.
- One-page home with anchor nav: 10/10, sometimes with extra subpages (caesarcode, mi-portafolio, brittanychiang /archive).
- Dedicated case-study pages: 0/10.
- Language switcher: 2/10 job-seeker sites (caesarcode, manudam69); 3/17 overall (+ roxanalafuente).
- Contact form: 1/10 (luispeche). Most use mailto + LinkedIn + GitHub. WhatsApp CTA: 2/10, both Spanish-language sites.
- Visible quality defects (placeholder text, "0" counters, empty section, loading screen): 5/10.

### Inferences
- Seniors put Experience before Projects. Juniors with thin experience put Projects (or "journey") first. For 0–2 years, order by strength of evidence: if one role is substantive (6+ months on a real system), Experience can lead; otherwise Projects should lead.
- Juniors rarely link projects to outcomes or architecture. A junior site with 2–3 genuine case studies (diagram, decisions, metrics, limitations) would stand out within this sample.
- Bilingual sites are rare. A clean ES/EN implementation (separate URLs, full translation, no mixed-language pages) is a low-cost differentiator for a Mexico-based candidate targeting both markets.
- Defects like placeholders, "0" counters, empty sections and broken toggles appeared on half of the job-seeker sites. A pre-launch QA pass (view without JS, link check, mobile check, both languages) is a cheap advantage.

### Gaps
- The sample under-represents juniors from Mexico and LatAm: only one clear Mexican new-grad site, plus one Mexican mid-level and one Mexican site of unstated level. LatAm locations for luispeche and jonmircha are inferred, not stated.
- The pages did not state seniority for several owners (caesarcode, mi-portafolio). Levels are approximate.
- Visual design details (layout, typography, motion) could not be assessed from text fetches; the notes cover structure and copy only.

---

## 5. Where do education, certifications and achievements (hackathons, awards, scholarships, competitive programming) go for a junior, and how are they displayed?

### Takeaway
For under about 3 years of experience, education is legitimately prominent. Résumé conventions allow it to come first. On a portfolio, though, sites put education as a compact line in the hero or about section, or in a late "Education & Certifications" section. Certifications and achievements earn space only when job-relevant, quantified and verifiable. The best live examples show the issuer and year, link to verification, and state languages with official scores.

### Cited Findings
- Tech Interview Handbook (Yangshun Tay, ex-Meta Staff Engineer; updated Aug 7, 2026; résumé guidance):
  - Education may come first if you are still in school or have under 3 years of experience.
  - Include GPA only if above 3.5/4.0.
  - List at least 2 projects linked to GitHub or a live site.
  - Include only job-related achievements, quantified, in the format year → quantified result → competition.
  - Competitive-programming profiles and ratings can go in the contact section. Certifications are optional.
  - A personal website URL is a "good-to-have" contact link.
  
  — [techinterviewhandbook.org/resume](https://www.techinterviewhandbook.org/resume/)
- Platzi: the opening "presentación" can carry country, languages with official scores (not self-labels like "avanzado"), and awards. A "Resultados" section turns claims into proof via KPIs, achievements or testimonials. — [Platzi](https://platzi.com/cursos/portafolio-desarrollo-web/secciones-clave-de-un-portafolio-profesi/)
- **Observed placements:**
  - Education in the hero intro line, with no separate section ([andresilva.tech](https://andresilva.tech)).
  - Education inside a "My Journey" timeline, plus a GPA stat callout, a certifications checklist, volunteering roles and hackathons as tags ([borcarazvan.tech](https://www.borcarazvan.tech)).
  - One reverse-chronological "milestones" timeline mixing experience, certifications and education, with filter tabs by type and certificate links ([luispeche.vercel.app](https://luispeche.vercel.app)).
  - A dedicated Certifications section after Projects, with links to issuer verification pages ([nithish.is-a.dev](https://nithish.is-a.dev)).
  - A late "Educación y Certificaciones" section (degree + CENEVAL result, then certifications with years), before Contact ([portafolio-armando-gma.vercel.app](https://portafolio-armando-gma.vercel.app)).
  - "Education & Languages" combined near the end ([manudam69.github.io/en](https://manudam69.github.io/en)).
  - A separate /certificates page ([caesarcode.com.mx](https://www.caesarcode.com.mx/index.html)).
- Official language levels appear on two sites: English C1 (Cambridge) on borcarazvan.tech; English B2, studying C1, on the Mexican new-grad site. — [borcarazvan.tech](https://www.borcarazvan.tech); [portafolio-armando-gma.vercel.app](https://portafolio-armando-gma.vercel.app)
- An honors-level certification label appears on one student's site (NPTEL "Elite"), with verification links on two other certificates. — [nithish.is-a.dev](https://nithish.is-a.dev)

### Inferences
- **Recommended for the target (portfolio, not résumé):**
  1. A compact credential line in the hero or about: degree, school, graduation year, plus an honor if notable (e.g., graduated with distinction or a scholarship).
  2. A "Formación y logros / Education & achievements" section after Projects and Experience:
     - Education: degree, school, dates; GPA only if strong; relevant coursework or thesis only if it supports the positioning.
     - Certifications: role-relevant only. Show issuer, date and a verification link (Credly, AWS, Cisco, etc.); no wall of course badges.
     - Achievements: hackathon placements, awards, scholarships, competitive-programming ratings, each as a one-line quantified entry (year · result · event · link).
     - Languages with official scores (TOEFL/IELTS/Cambridge/CEFR level), important for international remote roles.
  3. A filterable timeline (luispeche pattern) only if credentials are numerous. Otherwise a simple list is clearer.
- Mexican-specific credentials (CENEVAL/EGEL results, *residencia profesional*, *servicio social*) need a short English gloss on the EN version (e.g., "national standardized exit exam"), or international readers will not understand them.
- If an achievement is the strongest proof available (e.g., a hackathon win with a working product), it can be promoted to a project card or the hero proof chip instead of sitting in a list.

### Gaps
- No portfolio-specific (as opposed to résumé) guidance on education placement for juniors was found from an authoritative source. The recommendation combines résumé conventions with observed site patterns.
- No source quantifies whether certifications help junior hiring in Mexico/LatAm vs. US/EU.
- Platzi's junior-specific class ("Qué proyectos poner en tu portafolio junior") is paywalled and could not be read.

---

## 6. How should an engineer whose work spans full-stack web, backend/data and AI/automation present a multi-faceted profile without looking unfocused, while also showing early leadership?

### Takeaway
Live sites handle breadth in four ways:
1. a two-part title, primary first and secondary second ("Backend & Generative AI")
2. a single unifying promise or theme that the facets serve
3. project filters or groups by facet (Web & Full-Stack / IoT / ML & MLOps), or by relationship (created / maintain / core team)
4. role-specific proof per facet: an architecture diagram for full-stack, API docs for backend, a pipeline diagram for data, a model card for AI

Breadth reads as "unfocused" when it is a flat tag list of areas with no evidence. Early leadership shows best as concrete roles and bullets ("led", "mentored", "organized", "taught") inside Experience and case studies, not as a self-applied "Leadership" chip.

### Cited Findings
- **Observed positioning devices:**
  - Two-part title with an ordered stack sentence, Java backend first and GenAI agents second ([luispeche.vercel.app](https://luispeche.vercel.app)).
  - Hybrid title `Full Stack AI/ML Engineer` with one unifying tagline ([nithish.is-a.dev](https://nithish.is-a.dev)).
  - Primary/secondary line in the footer pairing backend thinking with embedded curiosity ([borcarazvan.tech](https://www.borcarazvan.tech)).
  - Three numbered "focus" cards in About plus project filters by facet ([portafolio-armando-gma.vercel.app](https://portafolio-armando-gma.vercel.app)).
  - Grouping by relationship to the work ([antfu.me](https://antfu.me)).
  - Skill categories that include an "IA" group alongside Frontend and Backend ([caesarcode.com.mx](https://www.caesarcode.com.mx/index.html)).
- **Counter-example:** a tag grid claiming architecture, full stack, cloud, agile, databases, AI, digital marketing and leadership, with no projects on the home page to back them. — [mi-portafolio-73v.pages.dev](https://mi-portafolio-73v.pages.dev)
- SlateGit (2026): role-specific proof per facet (architecture diagram for a full-stack flagship; API with load handling and auth plus docs for backend; pipeline diagram for data; model card with problem, data, eval metric and limitations for ML/AI). Freelancers should group projects by client outcome rather than technology. Prefer one flagship with an architecture diagram over five shallow projects. — [SlateGit](https://slategit.com/blog/personal-website-examples-software-engineers)
- techinterview.org (2026) and SlateGit (2026): don't list every technology; tie 5–8 core technologies to real projects. — [techinterview.org](https://www.techinterview.org/post/3233474627/personal-website-portfolio-engineers/?format=md); [SlateGit](https://slategit.com/blog/personal-website-examples-software-engineers)
- In the emmabostian list, many recent entries pair "Full Stack" with "AI/ML/GenAI" in their taglines (e.g., "Full Stack Gen AI Developer", "Full Stack Developer | AI Engineer | CS Student", "Backend & AI Developer"). My sample was filtered for these tags, so no prevalence rate can be inferred. — [emmabostian/developer-portfolios](https://github.com/emmabostian/developer-portfolios)
- **T-/π-shaped framing** (search snippets only; the EPAM page returned HTTP 403 and was not read):
  - EPAM describes the T-shaped developer in the AI era as combining depth, AI fluency, adaptability and systems thinking.
  - A 2026 forum post says "full-stack leadership" means owning projects end to end, but requires depth somewhere first.
  
  — [EPAM (snippet)](https://www.epam.com/insights/ai/blogs/the-quiet-rise-of-the-t-shaped-developer-in-an-ai-first-world); [tianpan.co forum (snippet)](https://tianpan.co/forum/t/t-shaped-engineers-are-out-full-stack-leadership-is-in-what-does-that-mean/190)
- **Leadership and impact signals observed:**
  - A student lists a "Lead Frontend Engineer" role at a political action committee ([andresilva.tech](https://andresilva.tech)).
  - A junior lists volunteering roles in developer communities such as GDG ([borcarazvan.tech](https://www.borcarazvan.tech)).
  - midudev's template experience entry mentions leading tech unification across brands and internal training ([porfolio.dev](https://porfolio.dev)).
  - Platzi's "Resultados" section suggests KPIs, achievements or testimonials as proof ([Platzi](https://platzi.com/cursos/portafolio-desarrollo-web/secciones-clave-de-un-portafolio-profesi/)).
  - The services site uses attributed testimonials ([roxanalafuente.com/en](https://www.roxanalafuente.com/en)).

### Inferences
- **Positioning formula for the target:** primary identity plus a connective promise, e.g., "full-stack engineer who builds data-backed systems and automates them with AI".
  - Full-stack web is the primary identity, since most junior openings in Mexico and remotely are titled that way. This is inference, not verified market data.
  - Backend/data and AI/automation are named as depth areas that serve the same outcome: working systems that save time or money.
- Use facet chips or filters (`Web full-stack` · `Backend & datos` · `IA & automatización`) only if each facet has at least 2 real projects. Otherwise group by outcome. Give each flagship a facet-appropriate proof artifact: diagram, API docs, pipeline, or model/prompt evaluation with limitations.
- **Skills:** group by facet, split into "uso a diario / core" and "he usado / familiar", and link each core skill to the projects that use it (luispeche-style). No ratings.
- **Early leadership without overclaiming:** concrete bullets in Experience and case studies, such as "led a 4-person team...", "defined the API contract...", "onboarded 2 interns...", "taught a workshop to N students...", "organized [community/hackathon]". Add an optional testimonials block (1–2 quotes from a manager, professor or client, with name, role and permission). Avoid a standalone "Leadership" skill tag.
- For AI/automation work at a company that handles sensitive data, case studies must use synthetic or anonymized data and abstracted screenshots. Describe the architecture and impact, never client records. This aligns with the user's own data-privacy constraints for work projects.

### Gaps
- No authoritative source or study measures how recruiters perceive multi-faceted vs. specialized junior profiles. The T-shaped material is opinion, and the EPAM article could not be fetched.
- No source specifically addresses showing "technical leadership" for 0–2-year engineers on a portfolio. Recommendations rest on observed patterns and general proof-over-claims guidance.

---

## 7. What concrete sitemap should a bilingual (ES/EN) junior systems engineer in Mexico use? (synthesis)

### Takeaway
Use a hybrid site:
- a scannable one-page home per language (Hero → Projects → Experience → Skills → Education & achievements → About → Contact)
- 2–3 deep case-study pages (one per facet)
- downloadable ES and EN CVs
- a dated /now page and a colophon footer as optional extras

Language versions live on separate URLs (/es/, /en/) with hreflang, a visible switcher and no automatic redirects. Each element below maps to evidence in Q1–Q6.

### Cited Findings
- Google Search Central, multilingual guidance:
  - Use different URLs per language rather than cookies or browser settings. Subdirectories (example.com/es/) are easy to set up and maintain; URL parameters are not recommended.
  - Annotate language pairs with hreflang.
  - Do not auto-redirect users based on their perceived language.
  - Provide visible links to the other language version.
  - Use one language per page for content and navigation; avoid side-by-side translations.
  - Google determines page language from visible content, not from `lang` attributes.
  
  — [Google Search Central](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)
- Bilingual implementations observed: Spanish at the root with English at /en/ ([manudam69.github.io](https://manudam69.github.io/en)); /en and /es with a flag-labeled switcher ([roxanalafuente.com](https://www.roxanalafuente.com/en)); a Spanish default with an ES/EN toggle and partially untranslated content ([caesarcode.com.mx](https://www.caesarcode.com.mx/index.html)).
- Section-order and content evidence: Q1 (core sections, harmful patterns), Q2 (hero), Q3 (hybrid structure, case studies, extras), Q5 (education/achievements), Q6 (multi-facet). Key sources: [techinterview.org](https://www.techinterview.org/post/3233474627/personal-website-portfolio-engineers/?format=md), [SlateGit (patterns)](https://slategit.com/blog/personal-website-examples-software-engineers), [SlateGit (one-pager vs multi)](https://slategit.com/blog/one-pager-vs-multi-project-developer-portfolio), [Platzi](https://platzi.com/cursos/portafolio-desarrollo-web/secciones-clave-de-un-portafolio-profesi/), [Tech Interview Handbook](https://www.techinterviewhandbook.org/resume/), [brittanychiang.com](https://brittanychiang.com).
- Static site generators (Astro, Hugo, Eleventy) on free hosts (Cloudflare Pages, Vercel, Netlify, GitHub Pages) plus a custom .com or .dev domain (about $12/year) are the low-maintenance default. — [techinterview.org](https://www.techinterview.org/post/3233474627/personal-website-portfolio-engineers/?format=md)

### Inferences (recommended sitemap; my synthesis)

**URL scheme**
- `/es/` (Spanish) and `/en/` (English), or Spanish at the root with English under `/en/`.
- A root `/` that does not auto-redirect: either a light language chooser or a default with a visible switch.
- hreflang on every page pair, and the same slugs translated (`/es/proyectos/…` ↔ `/en/projects/…`).

**Home (one page per language, anchor nav: Proyectos · Experiencia · Habilidades · Formación · Contacto + ES/EN switch + CV button)**
1. **Hero:**
   - name
   - positioning line (primary + connective promise; see Q6)
   - one sentence on core stack and the kind of systems built
   - one real proof chip
   - location, time zone and work mode (`[Ciudad], México · UTC−6 · Remoto/Híbrido`)
   - availability badge (`Disponible para trabajar` / `Open to work`)
   - CTAs `Ver proyectos` (primary) and `Descargar CV` (secondary)
   - icons: GitHub, LinkedIn, email
   
   No counters, typing animations or loading screens.
2. **Proyectos destacados / Selected projects** (3–4 cards; facet chips only if each facet has 2+ projects). Each card has:
   - title and one-line problem
   - your role (solo, or team of N, which also signals leadership)
   - 3–5 tech tags
   - one outcome metric
   - links: case study · demo · repo
   - status badge if in progress
   
   End with "Ver todos en GitHub / archive".
3. **Experiencia / Experience** (reverse-chronological). Count internships, *residencia profesional*, *servicio social*, freelance, teaching assistantships and student-org leadership. Each entry: role · org · dates · location/remote · 2–3 impact bullets with action verbs and numbers · tech tags. Swap sections 2 and 3 only if a substantive engineering role exists.
4. **Habilidades / Skills:** grouped by facet (Web full-stack · Backend & datos · IA & automatización · DevOps/herramientas), split into core and familiar, each core skill linked to a project. Labeled text or labeled icons; no bars, percentages or long logo walls.
5. **Formación y logros / Education & achievements:**
   - degree, school, dates (GPA only if strong)
   - role-relevant certifications with issuer, date and verification link
   - hackathons, awards, scholarships and competitive programming as quantified one-liners
   - languages with official scores (e.g., English B2/C1 with exam name)
   - an English gloss for Mexican credentials
6. **Sobre mí / About** (3–5 lines): how you work, what you are learning next, a human detail. Optionally 1–2 attributed testimonials (manager, professor, client).
7. **Contacto / Contact:**
   - email (copy button), LinkedIn, GitHub, CV (ES and EN)
   - availability and time-zone overlap
   - for international roles, a plain line on engagement model (e.g., open to full-time remote via contractor/EOR); verify wording, see Gaps
   - WhatsApp optional, Spanish version only
   
   No form-only contact.
8. **Footer:** colophon (stack, host, typeface), link to the site's repo if clean, "last updated" date, language switch, links to /now and /uses if present.

**Subpages**
- `/es/proyectos/[slug]` · `/en/projects/[slug]`: 2–3 case studies, ideally one per facet, each 600–1,200 words.
  - Structure: Problem/context → My role & team → Constraints → Architecture (diagram) → Key decisions & trade-offs → Challenges → Results (metrics) → What I'd do next.
  - Facet artifact: API docs or load test (backend); pipeline diagram (data); eval set, metrics and limitations, i.e., a "model/prompt card" (AI/automation).
  - Synthetic or anonymized data only.
- `/es/cv` · `/en/resume`: PDF links, 1 page, ATS-friendly; English version tailored for US/EU.
- `/es/proyectos` (archive): only once there are more than about 6 projects.
- `/now` (optional, dated): current focus, learning and availability.
- `/notas` or `/blog` (optional): only with 3+ solid posts or a sustainable cadence; otherwise a "Selected writing" list on the home page.
- `/uses` (optional, low priority).
- `404` in both languages.

**Pre-launch QA checklist** (from defects observed in Q4):
- render with JS disabled (no "0" counters or empty sections)
- no placeholder text
- every link and CV works in both languages
- no mixed-language pages
- mobile tap targets
- keyboard navigation and contrast (Rauhut's #1 failure)
- no personal phone number on the public site unless intended
- quarterly review date set

### Gaps
- Optimal wording for work-eligibility statements (contractor vs. EOR vs. visa) for Mexican engineers applying to US/EU remote roles was not researched. No source was found.
- No evidence was found on whether Mexican/LatAm recruiters prefer Spanish-first or English-first portfolios, or on how often they open portfolios at all. The ES-root vs. /es/ choice is a judgment call.
- Case-study word counts and structure come from blogs and templates, not hiring studies.
