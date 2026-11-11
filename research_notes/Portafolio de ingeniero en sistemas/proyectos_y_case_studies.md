# Presenting Projects and Case Studies in a Software Engineer's Portfolio (junior, Mexico/LatAm + international remote; full-stack, backend/data, AI/automation)

Source-quality tags used below: **[≤2023]** = older advice, check before relying on it. **[commercial]** = vendor or marketing source with a promotional angle. **[unsourced]** = the source cites no data for its claim. **[summary-only]** = the claim comes from the search engine's summary of the page, and the page itself was not fetched, so exact wording and attribution are less certain. Research date: Nov 2026.

---

## 1. How many projects should a junior feature? Curation criteria and "featured" vs. "other projects / archive" patterns

### Takeaway
No primary hiring data exists on the right number, but practitioner advice converges on a small, curated set: about **2–5 featured projects, with 3–4 as the practical sweet spot for a junior**. Everything else goes in an archive. Depth, a working deploy or demo, and a clearly stated personal contribution count for more than volume. The canonical pattern is **featured cards on the home page → a link to a full archive table** (Brittany Chiang's site).

### Cited Findings
- Josh W. Comeau, who began reviewing about 200 developer portfolios in Feb 2020, recommends showing **2 to 5 projects**. He calls the site a "highlight reel," not an index of everything you've built, and says the author should act as a "tour guide" who gives an under-the-hood look at each project **[≤2023]**. — [Josh W. Comeau – How to Build an Effective Dev Portfolio](https://www.joshwcomeau.com/effective-portfolio/)
- Comeau also observed that many developers copy a common template "that wasn't optimized for employers," and that a portfolio can set an early-career developer apart in a crowded junior market. — [Josh W. Comeau](https://www.joshwcomeau.com/effective-portfolio/)
- Tech Interview Handbook (resume guide, last updated Aug 7, 2026) says: "Include at least 2 projects you have contributed to, outlining your key contributions." It also says: "Always try to link your project name to GitHub or somewhere the hiring manager can view your project," and "Highlighting a few of your best achievements is better than including many 'average' achievements." — [Tech Interview Handbook – Resume](https://www.techinterviewhandbook.org/resume/)
- A 2025 junior-portfolio guide recommends **3–5 polished projects** that demonstrate problem-solving and technical skills **[summary-only]**. — [webportfolios.dev](https://www.webportfolios.dev/blog/junior-developer-portfolio-guide-2025)
- A Spanish-language equivalent recommends 3–5 pieces that represent the profile well, with no broken links or unfinished sections **[summary-only]**. — [ILERNA](https://www.ilerna.es/blog/como-hacer-portafolio-programador-junior)
- A 2025–26 blog frames junior GitHub curation as a "4-to-6 rule" for repositories. This is from the page title only; the page was not fetched. — [SlateGit](https://slategit.com/blog/how-many-github-repos-junior-developer)
- techinterview.org (May 6, 2026, updated Jul 12, 2026; editorial **[unsourced]**) says:
  - Build one deep project rather than several shallow ones. About 500–1,500 lines can be enough if the design is interesting.
  - "Ten small toy projects" is a red flag.
  - Refresh the portfolio every 6–12 months, but keep strong older projects.
  - Postmortems of unshipped projects can count as evidence of judgment.

  — [techinterview.org – The AI Portfolio](https://www.techinterview.org/post/3233475399/ai-portfolio-built-with-ai-2026-interviews/)
- midudev (Miguel Ángel Durán, Jan 2024) published a tier list (S/A/B/C/F) of portfolio projects for Frontend and FullStack. The S tier includes a published app, a design system and a well-built URL shortener. His core message: "Es mejor la CALIDAD que la CANTIDAD." A companion video, "Adiós Poke Apis," proposes project ideas for FrontEnd, FullStack and Backend **[summary-only; video not reviewed]**. — [midudev on X (guide)](https://x.com/midudev/status/1745099330401206751); [midudev on X (video)](https://x.com/midudev/status/1745456576079819061); [midudev on LinkedIn](https://es.linkedin.com/posts/midudev_necesitas-ideas-para-tu-portafolio-en-activity-7151222280512061440-GjoU)
- Coderhouse (Spanish) says to include at least one complete, deployed project with a working online demo, because the recruiter can see it without installing anything. It also says not to upload only course exercises identical to those of thousands of other candidates; if you include them, personalize them and explain what you added **[summary-only]**. — [Coderhouse](https://www.coderhouse.com/coderlibrary/proyectos-github-conseguir-trabajo-recruiters)
- Gergely Orosz (former Uber engineering manager) says an internal project name means little to a hiring manager without context, but its impact will, and this matters more than side projects. He advises juniors to work on projects so they "have some code in production to show at job interviews." A "Hello World" on GitHub can be a resume item, but contributing to Angular is far more impressive **[summary-only; interview undated, probably ≤2020]**. — [Coding Sans interview](https://codingsans.com/blog/software-engineer-resume)
- **Featured vs. archive pattern (brittanychiang.com):**
  - The home page has a "Projects" list of featured items. Each has a linked title and a description, plus optional tech tags, stats or badges (e.g., "100k+ Installs"; "6k+ stars and 3k+ forks"), external links and a screenshot.
  - Not every card has every field.
  - The list ends with a "View Full Project Archive" link to `/archive`.

  — [brittanychiang.com](https://brittanychiang.com)
- The archive ("All Projects") is a chronological table of about 46 projects (2015–2023) with the columns "Year", "Project", "Made at", "Built with" and "Link".
  - "Made at" names the employer or school and is blank for personal projects.
  - The Link column holds a URL, a "GitHub" link or a "Case Study" link.

  — [brittanychiang.com/archive](https://brittanychiang.com/archive)
- On the same site, each experience entry shows a date range, title and company, a short paragraph, optional tech tags and optional press links. — [brittanychiang.com](https://brittanychiang.com)

### Inferences
- **For this profile (junior with three target tracks):** feature **3–4 projects**, with at least one per track (full-stack, backend/data, AI/automation). Ideally they also span contexts: one confidential employer case study, one client project, one personal open-source project. Each card should then prove something different. Everything else goes in the archive.
- **Curation criteria, in order of importance:**
  1. Relevance to the target role.
  2. Evidence you can actually show: live demo, code, metrics or a synthetic-data demo.
  3. Depth: non-trivial decisions and trade-offs.
  4. Unambiguous personal ownership.
  5. Real users or measurable impact.
  6. Recency.
  7. Finished and maintained, with no broken links.
- Order featured projects by strength and relevance, not chronologically. Tags like "Backend" or "AI" can help a multi-track reader, but the default view should stay curated.
- Adapt Chiang's archive table for a junior with mixed contexts: **Year | Project | Context (Employer · Client · Personal) | Built with | Links (Case study / Demo / Code / "Private – NDA")**.
- Keep tutorial-style API clones (PokéAPI, weather or to-do apps) out of the featured set unless substantially extended. This follows from midudev's "Adiós Poke Apis" framing and Coderhouse's warning about identical course projects.
- Bilingual audience: the card text is short, so maintaining an EN/ES toggle is cheap. Long case studies could be English-first with a Spanish summary, or the reverse, depending on the market targeted. No source was found on this.

### Gaps
- I found no primary survey or eye-tracking study on the optimal number of portfolio projects. All numbers are practitioner opinion.
- I couldn't verify the content of midudev's "Adiós Poke Apis" video or the full tier-list image.
- A claim in search results that "12 projects overwhelm a hiring manager" couldn't be traced to a specific page.
- I found no source specific to Mexico/LatAm recruiters on the number of projects or the language of portfolio content.

---

## 2. Anatomy of an effective project card and an engineering case study, with real examples

### Takeaway
A good **card** answers in seconds: what is it, what did *I* do, what is the proof, and where can I verify it. In practice that means a title, a one-line outcome, role and context, 3–6 stack tags, 1–3 proof metrics, links and media.

A good **engineering case study** is a decision narrative: context → baseline → constraints → role (what I owned and what I didn't) → architecture → options, including rejected ones → decision → results against the baseline (plus what didn't improve) → reflection.

The strongest real examples (Kent C. Dodds, Josh Comeau, Sam Rose, Hamel Husain) combine diagrams, concrete before/after numbers, a justification for each tool, and candor about what didn't work.

### Cited Findings
**Card**
- Chiang's featured cards have a linked title and description, optional tech tags, stats or badges, external links and a screenshot. Fields are optional per card. — [brittanychiang.com](https://brittanychiang.com)
- Coderhouse calls the README the cover page ("portada") of each project: "muchas veces, lo único que se lee." It should include a brief description, screenshots or a GIF, the stack, run instructions and a demo link **[summary-only]**. — [Coderhouse](https://www.coderhouse.com/coderlibrary/proyectos-github-conseguir-trabajo-recruiters)
- "Web como vitrina + GitHub como evidencia": for technical hiring, a well-presented GitHub is key; for clients, a clear website with case studies converts better. Explain what you did and what you learned on each project **[summary-only; attribution among the Spanish guides not individually verified]**. — [BCP Consulting](https://bcpconsulting.pe/portafolio-de-programador-que-poner-para-que-te-contacten-con-ejemplos-reales/)
- Tech Interview Handbook's achievement formula is accomplishment summary → action taken → quantifiable outcome, and it says to "try to quantify your achievements." — [Tech Interview Handbook](https://www.techinterviewhandbook.org/resume/)
- Mark contexts visually with small labels, e.g. "Client Engagement (NDA)" vs. "Personal Project (Open Source)" **[summary-only]**. — [SlateGit – freelance](https://slategit.com/blog/freelance-contractor-portfolio-client-work-showcase)

**Case-study structure**
- Interview Copilot (Aug 28, 2026; **[commercial]**; written for staff level) gives this order for a flagship case study:
  1. Context
  2. Mandate: "what you owned and what you explicitly did not"
  3. Baseline
  4. Options: "two or three plausible approaches, including the one you rejected"
  5. Decision: the principle, data or constraint that broke the tie
  6. Plan: sequence, safety mechanisms, checkpoints
  7. Result: measured outcomes plus what remained imperfect
  8. Reflection: what you would change

  — [Interview Copilot](https://interviewcopilot.co/blog/staff-engineer-technical-portfolio-2026)
- The same source also recommends:
  - an "architecture we did not build" section;
  - describing failure behavior: a delayed queue, stale data from a dependency, a lost region, an operator error;
  - covering degradation, recovery and rollout safety;
  - recording the baseline before the work starts;
  - stating the measurement window and denominator ("'Saved 30%' is incomplete");
  - adding a "what did not improve" line.

  — [Interview Copilot](https://interviewcopilot.co/blog/staff-engineer-technical-portfolio-2026)
- Similar outlines recur across blog guides: context, constraints, options, decision, results, plus "what I would do differently" **[summary-only; specific attribution not verified]**. — [Dev Weekends – Case Study Guide](https://resources.devweekends.com/case-studies/guide); [The Leadership Training](https://www.theleadershiptraining.com/best-engineering-portfolio-examples/)

**Real examples of engineering write-ups on personal sites**
- **Kent C. Dodds, "How I built a modern website in 2021"** (Sep 29, 2021) **[≤2023]** — [kentcdodds.com](https://kentcdodds.com/blog/how-i-built-a-modern-website-in-2021)
  - **Goals:** fast worldwide despite per-user content, maintainable, a real full-stack app.
  - **Architecture:**
    - Fly.io in six regions.
    - Postgres primary in Dallas with read replicas; writes routed to the primary with `fly-replay`.
    - Redis plus an in-memory LRU cache.
    - A GitHub Action that refreshes content.
    - MSW mocks for 13 third-party APIs.
  - **Diagrams:** five Excalidraw diagrams covering the deploy pipeline, database connectivity, request replays, the magic-link auth flow and session resolution.
  - **Numbers:**
    - 27,225 lines of code.
    - About 945 commits.
    - Content refresh cut from 10–25 min to about 8 s.
    - A cache hit turning a 350 ms operation into 5 ms.
  - **Explicit trade-offs:**
    - Hand-rolled magic-link auth to avoid the cross-region latency of a central auth provider.
    - A single primary for writes means slower writes for distant users.
    - E2E tests don't block deploys, which he acknowledges as temporary.
    - Stale-while-revalidate means the last user after expiry sees old data.
  - **Weaknesses:**
    - Cost is described only qualitatively.
    - Few benchmarks.
    - A note at the top says the database later moved to SQLite/LiteFS.
- **Josh W. Comeau, "How I Built My Blog" v2** (Sep 24, 2024; updated Oct 20, 2026) — [joshwcomeau.com](https://www.joshwcomeau.com/blog/how-i-built-my-blog-v2/)
  - **A rationale for each tool:**
    - Linaria, for zero-runtime CSS that works with Server Components.
    - Shiki, which highlights at compile time and adds 0 kb of JS, versus about 26 kb for Prism.
  - **Candid negatives:**
    - Linaria's cryptic errors.
    - 245 kb of CSS loaded with only 47 kb used.
    - Dev-server boot time went from 7–12 s to 30–60+ s.
    - Lighthouse performance was 88 before and after, so the migration brought no performance gain.
  - **A rejected alternative with reasons:** Tailwind, because of migration cost, lack of code-splitting, and preference.
  - **Presentation:**
    - Interactive widgets.
    - Before/after screenshots.
    - The post is kept up to date; it notes that PartyKit shut down in 2026.
- **Sam Rose, "Load Balancing"** (Apr 10, 2023; updated Oct 25, 2026) teaches backend behavior with interactive simulations — [samwho.dev](https://samwho.dev/load-balancing/)
  - **Controls:** play, speed sliders, shuffle, reset and a final playground.
  - **Algorithms compared:** round robin, weighted, least connections and PEWMA.
  - **Metrics shown:**
    - Graphs of dropped requests.
    - Median/p95/p99 latency.
    - Histograms.
- **Hamel Husain's evals essay** (Mar 29, 2024) is built around a real case: Rechat's assistant "Lucy." Early prompt-engineering gains plateaued until the team built evaluation-centered iteration. It is a usable model for an AI case-study narrative. — [hamel.dev](https://hamel.dev/blog/posts/evals/)
- Chiang's archive links some rows to a "Case Study." — [brittanychiang.com/archive](https://brittanychiang.com/archive)

### Inferences
**Why the examples work:**
1. They start from explicit goals and requirements.
2. Each hard flow gets its own diagram.
3. They give before/after numbers with enough context to be believable.
4. Each tool choice states the trade-off that was accepted.
5. They name negatives and rejected alternatives.
6. They stay maintained, with update notes at the top, which signals ownership.

A junior version should be shorter, scoped to **one hard problem**, and honest about mandate ("I owned the ETL; the DBA owned schema changes"). Avoid inflated verbs like "led" or "architected" unless they're true.

**Template: project card (bilingual-ready).** This is synthesized from Chiang, Coderhouse, TIH, SlateGit and Interview Copilot; the example values are illustrative, not real.
```
[Media 16:10: screenshot | muted ≤5 s loop | diagram thumbnail]   alt = what the image proves
Context badge: Employer · Confidential | Client · Freelance | Personal · Open source
Title: plain descriptive name (never an internal codename)
One-liner (value): "<outcome/metric> for <user> by <mechanism>"
   e.g. "Cut weekly report prep from ~6 h to ~15 min by automating a CSV→PostgreSQL ETL"
Role · team · timeframe: "Sole developer · 3 months · 2025"
Proof chips (1–3): "p95 180 ms" · "40 daily users" · "Eval 88% (n=60)"
Stack (3–6 tags): Python · FastAPI · PostgreSQL · Docker
Links: Case study → | Live demo (synthetic data) | Code | 90-s video   (or "Code private – NDA")
```

**Template: engineering case study (junior-adapted).** Headings are given with their Spanish equivalents for a bilingual site.
```
TL;DR box: problem · my role · stack · result (with metric) · links            (Resumen)
1. Context – who uses it, why it matters (generic framing if NDA)               (Contexto)
2. Problem & baseline – observable symptoms, numbers before                      (Problema y punto de partida)
3. Constraints – time, budget, team, legacy, data privacy                        (Restricciones)
4. My role – what I owned / what I did not                                       (Mi rol)
5. Architecture – C4 context + container diagram; sequence diagram of the
   critical flow; text long-description                                          (Arquitectura)
6. Key decisions & trade-offs – options considered, choice, cost accepted;
   "what I deliberately did not build"                                           (Decisiones y trade-offs)
7. Challenges & failure modes – what broke, how it degrades/recovers             (Retos y modos de falla)
8. Results – metric vs baseline, window & denominator, what did NOT improve      (Resultados)
9. Learnings / what I'd do differently / next steps                              (Aprendizajes)
10. Evidence – repo, demo (synthetic data), video, docs + confidentiality note   (Evidencia)
AI add-on: Evals · Cost & latency · Guardrails · Known failure cases (see §4)
```
- Suggested length: a skimmable TL;DR plus about 800–1,500 words. This is my own inference; no source gives a length.

### Gaps
- I found few public engineering case studies written by *junior* engineers. The strong examples come from senior or well-known authors writing about personal projects with no NDA constraints.
- I found no evidence on ideal case-study length or on how far reviewers actually read.
- "Portfolio Case Studies: A Simple, Verifiable Template" (bradleymatera.dev) appeared in search results but returned 404 when fetched.

---

## 3. Showcasing backend/data/infrastructure work that has no visual UI

### Takeaway
Replace screens with **verifiable artifacts**:
- architecture diagrams at C4 context/container level and sequence diagrams, rendered as Mermaid in READMEs;
- a hosted API with interactive docs over **synthetic data**;
- terminal recordings (VHS or asciinema);
- a short narrated walkthrough;
- performance and reliability numbers with method and baseline.

Then tell the story of **one hard problem**: data model, API contract, failure handling.

### Cited Findings
- Backend portfolio guides **[summary-only; exact per-source attribution not verified]** — [FolioBuild](https://foliobuild.co.uk/portfolios/backend-engineer-portfolio); [TheTailorCV](https://thetailorcv.com/blog/backend-developer-portfolio); [Foliox](https://foliox.me/portfolio-for/backend-developers)
  - Explain a backend project through its data model, API contract and failure handling.
  - Show a request example, a diagram or a documentation link.
  - Use architecture diagrams, a hosted API with docs, test coverage, and a written case study of one hard problem.
  - Useful evidence: throughput and latency, data integrity, fault tolerance, observability, and decisions made under real constraints.
  - A short Loom-style walkthrough also works.
- A backend project page should have a summary, an architecture diagram and a live demo **[summary-only]**. — [Codersarts](https://labs.codersarts.com/blog/portfolio-projects/backend-portfolio-projects)
- **C4 model** (Simon Brown) has four hierarchical levels: system context, container (separately deployable or runnable parts, including data stores), component and code. Supporting diagrams cover the system landscape, dynamics and deployment. It is notation-independent and tooling-independent. — [c4model.com](https://c4model.com/)
- **GitHub renders Mermaid** in Markdown, as well as GeoJSON, TopoJSON and ASCII STL, from a fenced code block tagged `mermaid`. That makes diagrams-as-code possible in READMEs. — [GitHub Docs – Creating diagrams](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)
- Kent C. Dodds uses Excalidraw diagrams for flows: deploy pipeline, DB connectivity, request replay, magic-link auth and session resolution. — [kentcdodds.com](https://kentcdodds.com/blog/how-i-built-a-modern-website-in-2021)
- **FastAPI** generates interactive API docs automatically (Swagger UI and ReDoc) from OpenAPI/JSON Schema, so a deployed API can serve as its own explorable demo. — [FastAPI – Features](https://fastapi.tiangolo.com/features/)
- **Faker** is "a Python package that generates fake data for you." It supports locales such as `es_MX` (e.g., `Faker('es_MX')`), which makes realistic synthetic Mexican datasets possible. — [Faker docs](https://faker.readthedocs.io/en/master/)
- **Terminal recordings** **[third-party sources]** — [AgentGIF guide](https://agentgif.com/guides/how-to-record-terminal-gif/); [Bill Mill's notes](https://notes.billmill.org/computer_usage/terminals/recording_terminal_sessions.html); [opensource.com – asciinema](https://opensource.com/article/22/1/record-terminal-session-asciinema); [DEV – VHS for CLIs](https://dev.to/bala_paranj_059d338e44e7e/visual-regression-testing-for-clis-with-vhs-54gl)
  - **VHS** (Charm) uses `.tape` scripts to drive a headless terminal and outputs GIF, MP4 or WebM.
    - Demos are reproducible and easy to regenerate after UI changes.
    - It can run in CI.
  - **asciinema** records text-based `.cast` files that play in a web player and are small.
    - GitHub strips the JS player, so a cast can only be linked from a README, not embedded.
- Sam Rose shows backend behavior with interactive simulations and charts of percentile latency and dropped requests. — [samwho.dev](https://samwho.dev/load-balancing/)
- Metric hygiene:
  - Record a baseline before the work.
  - Report percentiles.
  - State the measurement window and denominator.
  - When absolute values are confidential, use percentages, ranges, normalized indices or order-of-magnitude labels.

  — [Interview Copilot](https://interviewcopilot.co/blog/staff-engineer-technical-portfolio-2026)
- "Reviewers don't clone," so a live deployment URL matters **[commercial, unsourced]**. — [Landed – projects-to-land-an-ai-job](https://github.com/landedjobs/projects-to-land-an-ai-job)

### Inferences
**"Proof stack" for headless projects**, ordered from least to most reviewer effort:
1. A one-line problem statement plus a C4 context/container diagram on the card or in the README. Use Mermaid so it renders on GitHub.
2. A sequence diagram of the critical path, e.g. ingest → validate → upsert → notify.
3. A small numbers table:
   - data volume, p50/p95, throughput, error rate, cost per month;
   - with the method: tool, dataset size, hardware, date.
4. A live sandbox:
   - a hosted API with Swagger UI over Faker `es_MX` synthetic data;
   - read-only and rate-limited.
5. A VHS GIF or MP4 of the CLI or pipeline running, embedded in the README.
6. A 60–120 s narrated walkthrough.
7. Tests, a CI badge, and a one-command run such as `docker compose up`.

**Variations by project type:**
- **Data and ETL projects:**
  - a data-lineage diagram;
  - data-quality evidence: row counts, null and duplicate rates before and after;
  - schedule and runtime before and after;
  - a dashboard rebuilt over synthetic data.
- **Infrastructure:**
  - a C4 deployment diagram;
  - IaC excerpts;
  - monthly cost;
  - a recorded recovery from a simulated failure.

### Gaps
- I found no data on which backend artifacts (diagrams, live APIs, videos) reviewers actually engage with.
- Load-testing tools (k6, Locust, hyperfine) and observability dashboards (e.g., Grafana) were not researched or verified here.
- I found no source on ideal demo-video length.

---

## 4. Showcasing AI/LLM/automation projects credibly in 2025–2026 (and avoiding the "thin wrapper" perception)

### Takeaway
Credibility now comes from showing the model is **load-bearing and measured**:
- a task-specific **eval set** with a stated metric and a baseline;
- **p50/p95 latency and cost per request**;
- documented design decisions: why an LLM at all, model choice, retrieval and tool design;
- **guardrails** mapped to known risks (OWASP Top 10 for LLM Applications 2025);
- honest failure cases;
- a working demo.

It also means starting simple (a workflow before an agent) and not hiding behind frameworks. Most "how hiring managers judge AI portfolios" content is editorial or commercial, with no hiring data behind it.

### Cited Findings
- **Hamel Husain, "Your AI Product Needs Evals"** (Mar 29, 2024) — [hamel.dev](https://hamel.dev/blog/posts/evals/)
  - Unsuccessful LLM products share a root cause: "a failure to create robust evaluation systems." Vibe checks are not enough.
  - He describes three levels of evaluation:
    1. Unit tests and assertions, organized by feature and scenario, run on every change. A 100% pass rate isn't required.
    2. Human and model evaluation of logged traces. Start with binary good/bad labels, align LLM judges with human labels and track agreement, and use precision/recall when the data is imbalanced.
    3. A/B testing for mature products.
  - Quotes:
    - "You must remove all friction from the process of looking at data."
    - "Don't rely on generic evaluation frameworks to measure the quality of your AI."
  - LLMs can help generate test cases and synthetic data.
- **Anthropic, "Building effective agents"** (Dec 19, 2024) — [Anthropic](https://www.anthropic.com/engineering/building-effective-agents)
  - Workflows are "orchestrated through predefined code paths"; agents "dynamically direct their own processes and tool usage."
  - "We recommend finding the simplest solution possible, and only increasing complexity when needed."
  - Agents trade latency and cost for performance.
  - Frameworks "often create extra layers of abstraction that can obscure the underlying prompts and responses"; "If you do use a framework, ensure you understand the underlying code."
  - It recommends "extensive testing in sandboxed environments, along with the appropriate guardrails."
- **OWASP Top 10 for LLM Applications 2025:**
  1. LLM01 Prompt Injection
  2. LLM02 Sensitive Information Disclosure
  3. LLM03 Supply Chain
  4. LLM04 Data and Model Poisoning
  5. LLM05 Improper Output Handling
  6. LLM06 Excessive Agency
  7. LLM07 System Prompt Leakage
  8. LLM08 Vector and Embedding Weaknesses
  9. LLM09 Misinformation
  10. LLM10 Unbounded Consumption

  There is no foolproof prevention for prompt injection. Mitigations include least privilege, separating untrusted content, input validation and output filtering. A 2026 edition may exist **[secondary sources; OWASP primary page not fetched]**. — [Invicti](https://invicti.com/blog/web-security/owasp-top-10-risks-llm-security-2025); [HackerOne](https://www.hackerone.com/ai/owasp-top-10-llms-2025); [Aembit](https://aembit.io/blog/owasp-top-10-llm-risks-explained/)
- **techinterview.org** (May 6, 2026, updated Jul 12, 2026; editorial **[unsourced]**) — [techinterview.org](https://www.techinterview.org/post/3233475399/ai-portfolio-built-with-ai-2026-interviews/)
  - **Signals interviewers look for:**
    - The AI must be load-bearing: if a regex or lookup table could replace the model without changing results, the project doesn't count.
    - Documented design decisions (model choice, chunking, prompt structure) and the trade-offs each one created.
    - A small eval set with a stated scoring method; about 20 hand-curated examples can be meaningful.
    - Candor about failure cases.
    - Rough cost and latency figures (tokens per request, observed latency).
  - **Red flags:**
    - Thin wrappers around a model API.
    - "AI does X" claims without evidence, or a vague "we used GPT."
    - Polished demos without robustness.
    - No discussion of cost or latency.
    - Quantity over depth.
  - **Advice:**
    - Use the LLM meaningfully: structured output, tool calls, retrieval or multi-step control flow.
    - Solve a real problem for a named user.
    - Lead the README with the problem and the key decision.
    - For small projects, direct API calls are often clearer than frameworks.
    - Write a build narrative that includes dead ends.
  - Review order it describes: README → repo and code quality → eval evidence → candor about trade-offs → deployed product.
- **Landed** (**[commercial, unsourced]**) — [Landed](https://github.com/landedjobs/projects-to-land-an-ai-job)
  - **Strongest signals, in its order:**
    1. A README that works as a product spec: problem, architecture diagram, results.
    2. An eval report with named metrics, numbers and a target; "it works well" is a red flag.
    3. A live deployment URL, since "reviewers don't clone."
    4. Cost and latency as $/1k tokens and p50/p95.
  - **Suggested metrics:**
    - Retrieval: recall@k, MRR, nDCG.
    - Generation: faithfulness.
    - Judge calibration: Cohen's κ against human labels.
    - Safety: an attack-success-rate table.
    - Agents: trajectory evaluation and pass^k.
- **Example of the "README contract" pattern:** an AI portfolio hub where every project must include "a measured evaluation, a cost and latency breakdown, and an honest list of limitations" plus a "reproducible setup." — [sebastian946/ai-engineer-portfolio](https://github.com/sebastian946/ai-engineer-portfolio)
  - A CI script (`scripts/check_readme.py`) fails any README missing a mandatory section.
  - The project table has the columns: project, "What it proves," "Key result," "Status."
  - Caveat: the hub currently lists no finished projects ("Coming soon"), so it illustrates the pattern but proves nothing about outcomes.
- Interview Copilot's section "Use AI without outsourcing judgment" warns against letting AI tools invent metrics or infer confidential details. — [Interview Copilot](https://interviewcopilot.co/blog/staff-engineer-technical-portfolio-2026)

### Inferences
**AI card add-ons:**
- A "Why an LLM (vs. rules)" line.
- An eval chip, e.g. "Eval: 52 cases · exact-match 81% vs 64% baseline."
- Latency and cost, e.g. "p50 1.4 s / p95 3.1 s · ~$0.004/request."
- A guardrails line.
- A "Known failures" link.

**Map guardrails explicitly to OWASP:**

| OWASP risk | Guardrail |
|---|---|
| LLM01 Prompt Injection | Separate untrusted content; least-privilege tools |
| LLM02 Sensitive Information Disclosure | Redact PII in logs and prompts |
| LLM05 Improper Output Handling | Validate output against a JSON schema |
| LLM06 Excessive Agency | Human approval before side effects |
| LLM10 Unbounded Consumption | Per-IP rate limits and a hard monthly budget cap on the public demo |

Budget caps on a public demo do double duty: they control cost and they signal engineering maturity.

**Automation projects (n8n/Make/Python cron/RPA):**
- Show measured time saved and how it was measured.
- Show the run success rate and retries, idempotency, alerting, and human-in-the-loop steps.
- Include a sequence diagram plus a run-log screenshot over synthetic data.

**Other recommendations:**
- **Avoiding the "wrapper" perception:** show the non-LLM engineering around the call: data pipeline, retrieval quality, schema-validated outputs, caching, fallbacks, evals in CI, and cost controls. Include a one-paragraph "what the model does vs. what my code does."
- **Product-AI vs. platform-AI roles:** for product roles, emphasize UX (streaming, error states, citations); for platform roles, emphasize the eval harness, benchmarks and retries. This is my inference; the search snippet I saw saying this couldn't be attributed.
- **AI-assisted coding:** a short "How I used AI tools" note in each case study (what was generated, what was verified or tested, and by whom) pre-empts doubts. No source explicitly recommends this disclosure; it extends techinterview.org's "name the model, prompt, architecture" and Interview Copilot's "don't outsource judgment."

### Gaps
- I found no primary hiring data on the "thin wrapper" perception. Widely repeated statistics, such as "~70% of AI candidates have a ChatGPT wrapper" or "~80% skip testing," have no visible primary source and should not be used.
- I didn't fetch the OWASP primary page. A 2026 edition may have re-ranked the list.
- I found no verified source on whether to disclose AI-assisted coding in portfolios, or how recruiters in Mexico/LatAm view it.

---

## 5. Presenting work done under NDA or for an employer's internal systems

### Takeaway
Default to **"describe, don't disclose."** Get **written permission** for anything specific. Without it, present:
- the generic business problem;
- your role and approach;
- the architecture, at a generic level and redrawn by you;
- relative metrics;

and prove the skills with a **synthetic re-implementation** (new repo, synthetic data, no copied code). Label the work clearly as confidential.

For a Mexico-based employee, three laws make code, internal names, real data and real screenshots off-limits by default:
- employer ownership of software written by employees (LFDA art. 103);
- the statutory duty to keep technical and commercial secrets (LFT art. 134-XIII);
- the new personal-data law (LFPDPPP, 2025).

None of this is legal advice.

### Cited Findings
- **Get written permission:** get written confirmation of exactly what you may show — [UX Playbook](https://uxplaybook.org/articles/ux-design-portfolio-nda-guide-2026).
- **Read the NDA itself:** check its definition of confidential information, which may cover only specific data — [Harlow](https://meetharlow.com/blog/how-to-build-a-portfolio-when-your-best-wins-are-locked-by-ndas/).
- **What counts as confidential:** for developers, source code, architecture, data structures, API designs and internal tool names can all be confidential even if no file is published — [freelancermap](https://www.freelancermap.com/blog/can-i-share-nda-protected-work-on-my-portfolio-tips-and-advice/).
- **Anonymize:**
  - title it "Confidential Project" and drop logos and client names — [Designforce](https://designforce.me/portfolio-101-protected-work/);
  - use a "category + problem" framing in place of the client's name — [Harlow](https://meetharlow.com/blog/how-to-build-a-portfolio-when-your-best-wins-are-locked-by-ndas/).
- **Stand-in demos:**
  - rebuild the core logic in a new repo with dummy data — [Harlow](https://meetharlow.com/blog/how-to-build-a-portfolio-when-your-best-wins-are-locked-by-ndas/);
  - or build a comparable original project from scratch — [SlateGit – freelance](https://slategit.com/blog/freelance-contractor-portfolio-client-work-showcase).
- **Show judgment, not the system:**
  - use generic system-design diagrams and standard patterns — [SlateGit – NDA](https://slategit.com/blog/developer-portfolio-confidential-work-nda);
  - tell the process story rather than the client story, since methodology is rarely covered by an NDA — [SelectedFirms](https://selectedfirms.co/blog/showcase-client-work-under-nda).
- **Password protection** doesn't override NDA obligations — [SlateGit – NDA](https://slategit.com/blog/developer-portfolio-confidential-work-nda). Avoid public platforms like LinkedIn for protected material — [Designforce](https://designforce.me/portfolio-101-protected-work/).
- **Be transparent:** label anonymized work clearly and be ready to explain the restriction in interviews — [IxDF](https://ixdf.org/literature/article/keep-it-confidential-how-to-showcase-your-nda-protected-design-work); [Open Doors Careers](https://blog.opendoorscareers.com/p/what-you-can-and-can-t-show-navigating-ndas-in-your-portfolio).
- All of the above are career or design blogs, several with commercial angles. None is legal advice.
- **Interview Copilot** (Aug 2026) — [Interview Copilot](https://interviewcopilot.co/blog/staff-engineer-technical-portfolio-2026)
  - Don't publish internal documents, customer names, incident timelines or proprietary code without explicit permission.
  - Replace names and identifiers, and keep proprietary diagrams local.
  - Describe the threat and the control rather than publishing sensitive topology.
  - Remove links when the employer asks.
  - Run a safety check before sharing.
  - Use safe metric forms: percentages, ranges, normalized indices, order of magnitude.
  - Don't let AI tools invent metrics or infer confidential details.
- **Mexico – Ley Federal del Derecho de Autor (LFDA), art. 103:** "Salvo pacto en contrario, los derechos patrimoniales sobre un programa de computación y su documentación, cuando hayan sido creados por uno o varios empleados en el ejercicio de sus funciones o siguiendo las instrucciones del empleador, corresponden a éste." Art. 102 protects software like literary works. Verify the current text on diputados.gob.mx. — [mley.mx – LFDA art. 103](https://mley.mx/LFDA/articulo/103/); [Cámara de Diputados – LFDA reforms](https://www.diputados.gob.mx/LeyesBiblio/ref/lfda.htm)
- **Mexico – Ley Federal del Trabajo (LFT), art. 134 fr. XIII:** workers must "guardar escrupulosamente los secretos técnicos, comerciales y de fabricación de los productos a cuya elaboración concurran directa o indirectamente," plus reserved administrative matters whose disclosure could harm the company. One copy numbers it as fraction XII; verify on the official text. — [Justia México – LFT](https://mexico.justia.com/federales/leyes/ley-federal-del-trabajo/titulo-cuarto/capitulo-ii/); [SDV – art. 134](https://sdv.com.mx/compendio/ley-federal-trabajo/articulo-134/)
- **Related provisions** **[commercial secondary source; primary texts not fetched]** — [Forms-Legal (ES)](https://forms-legal.com/es/mexico/employment/hr-forms/acuerdo-confidencialidad-empleados-mexico)
  - Disclosing company secrets can justify dismissal without employer liability (LFT art. 47 fr. IX).
  - The Ley Federal de Protección a la Propiedad Industrial (DOF Jul 1, 2020) protects trade secrets (art. 82 cited).
  - Federal Penal Code art. 223 criminalizes unauthorized disclosure of industrial secrets by current or former workers.
- **Mexico – personal data:**
  - A new Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) was published in the DOF on Mar 20, 2025, took effect Mar 21, 2025, and replaced the 2010 law.
  - The Secretaría Anticorrupción y Buen Gobierno replaced INAI as the authority.
  - The Cámara de Diputados portal lists a later reform (Nov 14, 2025) **[summary-only]**.

  — [EY México](https://www.ey.com/es_mx/technical/tax/boletines-fiscales/nueva-ley-federal-proteccion-datos-personal-posesion-particulares); [Basham](https://basham.com.mx/nueva-ley-federal-de-proteccion-de-datos-personales-en-posesion-de-los-particulares-publicada-en-el-diario-oficial-de-la-federacion/); [Cámara de Diputados – LFPDPPP](https://www.diputados.gob.mx/LeyesBiblio/ref/lfpdppp.htm)
- **GitHub:** turning on "Private contributions" displays activity from private and internal repositories on your profile in anonymized form. — [GitHub Docs – private contributions](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/showing-your-private-contributions-and-achievements-on-your-profile)

### Inferences
**Decision ladder:**
1. Read your contract, the NDA and internal policies.
2. Ask your manager **in writing** for a specific list of what you may show (see below).
3. If permission is partial or absent, publish an anonymized case study with generic framing ("an internal reporting platform for a mid-size company"), redrawn diagrams and relative metrics.
4. Prove the skill with a synthetic re-implementation in your own repo: new code, synthetic data from Faker `es_MX`, no copied code or schemas.
5. Keep deeper detail for verbal interview discussion, still within confidentiality limits.

**What to ask permission for** (one email, itemized):
- naming the company;
- a one-paragraph generic description;
- a redrawn high-level diagram;
- percentage metrics;
- screenshots recreated with synthetic data;
- a reference contact.

Re-confirm after you leave the company.

**Generally safe vs. not safe:**

| Generally safe (subject to the contract) | Not safe without explicit permission |
|---|---|
| Your title, team size and tenure | Source code, schemas, internal codenames |
| The generic domain and problem class | Customer or client names |
| Technologies already public, e.g. listed in job posts | Screenshots with real data |
| Your responsibilities | Exact revenue or volumes |
| Approach and patterns | Network or security topology |
| Relative metrics | Incident details, vendor terms |
| Lessons learned | |

**Screenshots:**
- Prefer **recreating** UIs with synthetic data over blurring or pixelating real ones. Redaction errors leak data, and pixelated text has reportedly been reversible in some cases (unverified in this research).
- Never show real personal data; in Mexico that touches the LFPDPPP as well as the NDA.

**Labeling:**
- Use a badge such as "Employer project · details generalized · code private."
- If permission was granted, say "shown with permission."

**Caution about AI tools:** pasting confidential code or data into external AI tools to "anonymize" a case study can itself be a disclosure. Do the anonymization by hand, from memory, in generic terms.

### Gaps
- I found no Mexico-specific guidance (from a bar association, INDAUTOR or HR bodies) on employees showing work in portfolios. Whether describing the generic business problem is allowed depends on each contract.
- The LFT fraction numbering (XIII vs. XII in one copy) and the primary texts of LFPPI art. 82 and CPF art. 223 were not verified against the official DOF texts.
- I didn't verify the claim that pixelation or blur can be reversed.

---

## 6. Freelance/client projects: consent, testimonials, live links, grouping similar sites

### Takeaway
Treat client work as **client-owned**:
- secure permission to show it, ideally in the contract;
- name clients only with consent;
- collect **metrics and a testimonial at project close**;
- place testimonials **inside the matching case study**;
- label client vs. personal work.

Many similar small client sites work best as **one grouped entry** with one deep case study. That last point is my inference; no source covers grouping.

### Cited Findings
- Title each case study by client type and outcome, and name the client only if they gave permission **[summary-only; attribution among these pages not individually verified]**. — [9am.works](https://www.9am.works/freelancer-academy/blog/freelance-case-studies-portfolio-that-wins-projects); [Jobbers – freelance case study](https://www.jobbers.io/how-to-write-a-freelance-case-study-that-wins-clients/)
- After the project ends, email the client to ask which measurable results changed ("I'd like to add this to my portfolio. What metrics changed as a result of the work?"). Track simple metrics across projects (time saved, deliverables completed, client retention) **[summary-only]**. — [Jobbers](https://www.jobbers.io/how-to-write-a-freelance-case-study-that-wins-clients/); [9am.works](https://www.9am.works/freelancer-academy/blog/freelance-case-studies-portfolio-that-wins-projects)
- Ask for testimonials at the tail end of a project, and include them within the relevant case studies, not just on a separate page **[summary-only]**. — [Testimonial.to](https://testimonial.to/resources/collect-testimonials-for-freelance-business); [Shoutbase](https://shoutbase-alpha.vercel.app/blog/freelancer-portfolio-testimonials-guide)
- If client work is fully off-limits, rebuild a comparable original project. Keep client case studies and personal projects visually distinct with labels such as "Client Engagement (NDA)" and "Personal Project (Open Source)." The same page notes that no study measures how much a case study moves a client's hiring decision **[summary-only]**. — [SlateGit – freelance](https://slategit.com/blog/freelance-contractor-portfolio-client-work-showcase)
- For clients, a clear website with case studies converts better; for technical hiring, GitHub is key **[summary-only]**. — [BCP Consulting](https://bcpconsulting.pe/portafolio-de-programador-que-poner-para-que-te-contacten-con-ejemplos-reales/)
- Remove identifying details and generalize proprietary ones when consent is limited. — [Designforce](https://designforce.me/portfolio-101-protected-work/); [Harlow](https://meetharlow.com/blog/how-to-build-a-portfolio-when-your-best-wins-are-locked-by-ndas/)

### Inferences
**Grouping template** (my inference): one archive or featured entry such as "Client websites (2023–2025): 6 sites for small businesses." It contains:
- a thumbnail grid;
- the shared stack and process (discovery → design → build → handoff);
- one line per site: type of business, the key feature, and a live link if the client allows it;
- one site expanded as the deep case study, with a testimonial and before/after metrics such as Lighthouse scores, lead-form submissions or load time.

**Link rot:** client sites change or disappear after handoff. Keep "as delivered" screenshots with a date, and say "Live site may have changed since delivery."

**Contracts going forward:** add a portfolio clause that lets you show the work, name the client (opt-in), and request a testimonial. This is cheaper than asking afterwards.

**Testimonials:**
- Use name, role and company only with consent.
- In LatAm, praise often arrives on WhatsApp. Transcribe it with explicit consent rather than posting chat screenshots, which contain personal data such as phone numbers and photos.
- Offer a translation if the portfolio targets international readers.

**Weight:** for employer hiring, client work counts most when it shows engineering depth (integrations, performance, deployment, maintenance). Simple brochure sites belong in the grouped entry, not as separate featured cards.

### Gaps
- I found no authoritative source on grouping several similar client sites into one entry; the grouping advice above is my inference.
- I found no data on how much testimonials influence employers, as opposed to prospective clients.
- I didn't verify which of the freelancer blogs said which specific quote.

---

## 7. Game development and hobby projects: when they help vs. distract; risks of fan projects using third-party IP

### Takeaway
For a **non-game** software-engineering profile, game and hobby projects help when they are framed around transferable engineering: architecture or state management, performance profiling, networking, tooling or CI, testing, and collaboration on a shared codebase. They should normally stay **secondary**, in the archive or as a "Lab/Playground" section. They distract when they dominate the portfolio, are unfinished, or showcase art and music rather than code.

**Fan projects using third-party IP** carry real takedown risk. Nintendo had 562 fan games pulled from Game Jolt in 2016 and 379 in 2021. A takedown leaves dead links and a weak IP-hygiene signal. Use original names and assets, or stay strictly within a publisher's published fan-content rules.

### Cited Findings
- A gamedev.net reviewer told a software engineer that their portfolio "says very little about your software engineering," and that the assets and music "aren't relevant as that's not what you'd be doing as a software engineer" **[forum; older, ≈2018]**. — [gamedev.net thread](https://gamedev.net/forums/topic/696289-looking-for-career-advicefeedback-on-my-resume-and-portfolio)
- A Filament Games hiring manager advises including non-game jobs, e.g. work as a web engineer **[≤2023, 2021]**. — [Filament Games](https://filamentgames.com/blog/how-to-get-hired-at-a-game-studio-game-engineer-edition-2021)
- Game-portfolio guides **[summary-only; attribution among guides not individually verified]** — [Codecademy](https://www.codecademy.com/resources/blog/how-to-make-your-game-development-portfolio-catch-a-hiring-managers-eye); [Wayline](https://www.wayline.io/blog/building-a-game-dev-portfolio)
  - A game jam or co-developed project shows you understand version control, can give and receive feedback, and can contribute to a shared codebase.
  - Highlight non-trivial logic (inventory systems, turn-based combat, procedural generation) and the reasoning behind design decisions.
  - Tailor the portfolio to the "required/preferred" technologies in job descriptions.
- For game-industry portfolios specifically, juniors are advised to show 2–3 complete games plus 1 technical demo; other guides suggest 5–8 polished pieces. These figures are for game jobs, not general SWE. — [GeneralistProgrammer](https://generalistprogrammer.com/tutorials/game-development-portfolio-complete-career-guide-2025)
- **Nintendo takedowns:**
  - In Sept 2016, Nintendo of America's DMCA notice covered **562 games on Game Jolt** using Mario, Zelda and Pokémon IP. The fan remake AM2R was also targeted. Game Jolt locked the games from public access. — [Engadget](https://www.engadget.com/2016/09/05/nintendo-issues-dmca-takedown-for-hundreds-of-fan-games/); [Game Developer](https://gamedeveloper.com/business/500-fan-games-on-game-jolt-targeted-by-nintendo-dmca-takedown)
  - In Jan 2021 a further **379 fan games** were removed. — [Nintendo Life](https://www.nintendolife.com/news/2021/01/nintendo_issues_mass_dmca_takedown_379_fan-made_games_forcibly_removed)
- **Microsoft's Game Content Usage Rules** — [Xbox – Game Content Usage Rules](https://www.xbox.com/en-US/developers/rules)
  - They grant a limited, revocable license to create derivative works "strictly for your personal, non-commercial" use; commercial use needs permission or a license.
  - Distributing an item grants Microsoft a broad royalty-free license to it.
  - Minecraft has separate terms.
  - The rules date to about 2015 per secondary coverage; check the live version.

  Contrast this with Nintendo's enforcement: IP holders vary, and their policies are revocable.
- midudev's "Adiós Poke Apis" framing implies that PokéAPI-style projects are overused in junior portfolios **[summary-only; video not reviewed]**. — [midudev on X](https://x.com/midudev/status/1745456576079819061)

### Inferences
**When a game or hobby project earns a featured slot** (rarely, for this profile):
- it demonstrates a skill the target roles value: real-time networking (WebSockets), performance work (profiling, frame budgets), architecture (ECS, state machines), tooling or CI (automated builds), or data (telemetry and analytics);
- and the card and case study are written in engineering language: problem, constraint, decision, metric.

**Otherwise:**
- Put it in the archive or a "Lab" section with one line each, so it signals curiosity without diluting the professional story.
- Unfinished prototypes stay in the archive at most.

**Fan projects:**
- Don't feature games that use third-party characters, names, assets or music.
- If you keep one, make it non-commercial (no ads, donations or paid tiers), replace IP with original or properly licensed assets (e.g., CC0), rename it, and host the code without the copyrighted assets.

A takedown also breaks portfolio links, and some employers may read IP-careless work as a judgment issue (my inference). Public-API clones (PokéAPI, Rick and Morty) aren't an IP risk in the same way, but they are a **differentiation** risk.

### Gaps
- I found no hiring-manager survey on how game projects are perceived for non-game SWE roles (web, backend, data), and nothing specific to Mexico/LatAm.
- I didn't fetch the primary DMCA notices or Game Jolt's GitHub DMCA repository.
- I found no data on enforcement against fan projects in Mexico.

---

## 8. GitHub hygiene supporting the portfolio; do hiring managers actually read the code?

### Takeaway
The portfolio is the **showcase**; GitHub is the **evidence**. Pin six or fewer repositories that match the featured projects. Give each a product-style README: problem, demo, architecture, results, a one-command run, tests/CI. Keep the profile README concise.

Code is read **selectively**: mostly by engineers in later stages, or when a candidate offers it as a work sample. The README and repo structure carry the first impression. The commonly quoted percentages about recruiters checking GitHub are **unverifiable** and contradict each other.

### Cited Findings
- **Profile README** — [GitHub Docs – Managing your profile README](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)
  - The repository name must match your username exactly, the repository must be public, and README.md must sit at the root with content. GitHub pre-populates a template.
  - The profile README disappears if the file is emptied or removed, the repository is made private, or the name stops matching.
- **Pinning:** "Select up to six repositories and gists, combined." Pins are reordered by dragging, and changes apply after "Save pins." — [GitHub Docs – Pinning items](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/pinning-items-to-your-profile)
- **Private contributions** can be shown on the contribution graph in anonymized form, via Contribution settings → Private contributions. — [GitHub Docs – private contributions](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/showing-your-private-contributions-and-achievements-on-your-profile)
- **Mermaid diagrams** render natively in GitHub Markdown. — [GitHub Docs – Creating diagrams](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)
- **Simon Willison, "Coping strategies for the serial project hoarder"** (Nov 26, 2022) **[≤2023, but practices are evergreen]** — [simonwillison.net](https://simonwillison.net/2022/Nov/26/productivity/)
  - "Every new project starts with a test."
  - "Your documentation must live in the same repository as your code!"
  - "The perfect commit" combines implementation, tests, documentation and a link to an issue thread.
  - Issues serve as timestamped notes.
  - Release notes should carry dates.
  - "No project of mine is finished until I've told people about it in some way."
  - "If your project is tested and documented, you have nothing to feel guilty about."
- **Spanish-language guides** **[summary-only; attribution among these pages not individually verified]** — [Coderhouse](https://www.coderhouse.com/coderlibrary/proyectos-github-conseguir-trabajo-recruiters); [Prometeo FP](https://www.prometeo-fp.com/blog/guia-para-crear-tu-primer-portafolio-como-programador-junior); [BCP Consulting](https://bcpconsulting.pe/portafolio-de-programador-que-poner-para-que-te-contacten-con-ejemplos-reales/)
  - Pin the most relevant repos and keep them clean, each with a README (setup, features, screenshots).
  - A coherent commit history conveys consistency.
  - The README "muchas veces, lo único que se lee."
- **Hiring-manager perspective on reading code.** Jacob Kaplan-Moss, hiring manager (Work Sample Tests series, 2021) **[≤2023]**, argues that interviews alone aren't enough and that work samples should simulate real work — [jacobian.org – Bring Your Own Code](https://jacobian.org/2021/dec/7/wst-byoc/); [series index](https://jacobian.org/series/work-sample-tests/):
  - Companies that test coding should let candidates submit code they have already written, such as side projects or open source.
  - Reviewers should ask for tests and documentation with the sample.
  - Reuse isn't cheating.
- **Tech Interview Handbook** lists GitHub and personal-site URLs as "good-to-haves" in the resume header (LinkedIn is the must-have). — [Tech Interview Handbook](https://www.techinterviewhandbook.org/resume/)
- **techinterview.org's described review order** (editorial **[unsourced]**): README first → repo and code quality → eval evidence → candor about trade-offs → deployed product. — [techinterview.org](https://www.techinterview.org/post/3233475399/ai-portfolio-built-with-ai-2026-interviews/)
- **Landed:** "reviewers don't clone" **[commercial, unsourced]**. — [Landed](https://github.com/landedjobs/projects-to-land-an-ai-job)
- **Statistics circulating online are unverifiable and conflicting.** None of the original studies (attributed to Beamery, Stack Overflow, HBR) could be found. — [Fonzi](https://fonzi.ai/blog/do-recruiters-check-github); [devbio.me](https://devbio.me/blogs/developer-portfolio-guide-2026); [daily.dev Recruiter](https://recruiter.daily.dev/resources/recruit-developers-on-github-sourcing-guide/)
  - "83% of technical hiring managers trust GitHub more than resumes" (attributed to a 2025 Beamery study).
  - "87% check GitHub."
  - "72% (HBR 2024)."
  - "60–80% glance, 40–50% deep review."
  - "Only 31% of tech recruiters use GitHub regularly."

### Inferences
**Code is read selectively.** Code reading is most likely:
- at engineer-led screening or later stages;
- for juniors without big-company names on their resume;
- when the candidate explicitly points to a specific repo, file or PR ("see `pipeline/dedupe.py` for the matching logic").

So make each pinned repo skimmable in about 60 seconds, and point reviewers to the one or two most interesting files from the README and the case study.

**Pinned set:** the ≤6 pins should mirror the featured projects, plus at most one or two strong extras such as a meaningful open-source PR or a well-tested library. Don't pin forks of tutorials or empty profile-config repos.

**README skeleton** (product-spec style):
```
# Name — one-line value statement
Badges: CI · tests/coverage · license · live demo
Demo: GIF/MP4 (VHS for CLIs) or screenshot + link to live sandbox (synthetic data)
## Problem & who it's for
## What it does (3–5 bullets)
## Architecture (Mermaid C4/sequence diagram) + key decisions & trade-offs
## Results / benchmarks / evals (with method)
## Run it locally (one command: docker compose up / make dev) · .env.example
## Tests & quality (how to run; what's covered)
## Limitations & roadmap
## Context (personal / client – with permission / synthetic re-implementation of employer work)
```

**Profile README** (keep it short, bilingual if targeting both markets):
- who you are and your focus (full-stack · backend/data · AI/automation);
- 3–4 featured projects with one-liners and links to the case studies;
- a portfolio link and contact details;
- optionally a "currently learning" line.

Avoid stat widgets and badge walls that add noise.

**Hygiene checklist:**
- no secrets in history, and a `.env.example`;
- a license;
- descriptive repo names, a description and topics;
- archive stale repos;
- consistent commit messages;
- issues used as design notes (Willison);
- dates on releases.

**Contribution graph:** don't game it. The "Private contributions" toggle can show employer activity in anonymized form; consider whether that's desirable. It reveals activity, not content.

### Gaps
- I found no primary, methodologically sound survey on how often recruiters or hiring managers open GitHub or read code. All widely cited percentages are untraceable.
- A blog claim that hiring managers discount the "green squares" graph, and that one meaningful merged PR outweighs many trivial contributions, appeared in search summaries (candidate sources: [Reskilll](https://blogs.reskilll.com/?p=323), [CodePath](https://codepath.org/news/how-to-have-side-projects-that-stand-out-and-why)), but I couldn't verify which page said it.
- I found no data specific to Mexico/LatAm on GitHub's weight in hiring.

---

## 9. Media: screenshots vs. GIF vs. video, device mockups, performance impact, alt text

### Takeaway
Default to **optimized static screenshots** on cards. Use **short, muted, looping MP4/WebM video instead of GIFs** for interactions: a 3.7 MB GIF became 551 KB as MP4 and 341 KB as WebM in web.dev's example. Use longer narrated videos only behind a click.

Respect performance:
- don't lazy-load the hero or LCP image;
- set width and height on images;
- lazy-load below-the-fold media.

Respect accessibility:
- WCAG 2.2.2 requires a pause/stop control for auto-playing motion that lasts more than 5 s;
- diagrams need a two-part text alternative (short alt plus a long description).

Device mockups are optional decoration. No evidence was found that they help.

### Cited Findings
- **GIF vs. video** — [web.dev – Replace animated GIFs with video](https://web.dev/articles/replace-gifs-with-videos)
  - Animated GIFs can be "downright huge." In the article's example, a 3.7 MB GIF became a 551 KB MP4 and a 341 KB WebM.
  - Use `<video autoplay loop muted playsinline>` with `<source>` WebM first, then MP4; the browser takes the first format it supports.
  - Lighthouse flags this under "Use video formats for animated content." FFmpeg can do the conversion.
  - A video without a poster isn't an LCP candidate.
- **Image loading** — [web.dev – Browser-level image lazy loading](https://web.dev/articles/browser-level-image-lazy-loading)
  - Don't lazy-load images visible in the initial viewport, especially the LCP image; use `fetchpriority="high"` for it.
  - Use `loading="lazy"` only below the fold.
  - Always set `width`/`height` to avoid layout shift (CLS).
  - Iframes support `loading="lazy"`.
- **WCAG 2.2.2 Pause, Stop, Hide (Level A):**
  - Moving, blinking or scrolling content that starts automatically, lasts more than five seconds, and is shown alongside other content needs "a mechanism for the user to pause, stop, or hide it."
  - Alternatively, the animation can stop on its own within 5 s (technique G152).
  - Essential motion is exempt.

  — [W3C – Understanding SC 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
- **Complex images (diagrams, charts)** need "a two-part text alternative": a short alt that identifies the image, plus a long description. — [W3C WAI – Complex images tutorial](https://www.w3.org/WAI/tutorials/images/complex/)
  - Placement options:
    - an adjacent link;
    - a `<figure role="group">` with `<figcaption>`;
    - `aria-describedby`, which is read as "one continuous paragraph," so no headings or tables.
  - "Make long descriptions available to everyone."
  - Simplify complex images, and summarize them in the surrounding text.
- **Terminal recordings:** VHS outputs GIF, MP4 or WebM from scripts. asciinema casts can only be linked from GitHub READMEs, not embedded **[third-party]**. — [AgentGIF guide](https://agentgif.com/guides/how-to-record-terminal-gif/); [Bill Mill's notes](https://notes.billmill.org/computer_usage/terminals/recording_terminal_sessions.html)
- **Examples in practice:**
  - Brittany Chiang's featured cards use screenshots — [brittanychiang.com](https://brittanychiang.com).
  - Josh Comeau's case study uses interactive widgets and side-by-side before/after screenshots — [joshwcomeau.com](https://www.joshwcomeau.com/blog/how-i-built-my-blog-v2/).
  - Sam Rose uses interactive simulations instead of static diagrams — [samwho.dev](https://samwho.dev/load-balancing/).
- READMEs should include screenshots or a GIF **[summary-only]**. — [Coderhouse](https://www.coderhouse.com/coderlibrary/proyectos-github-conseguir-trabajo-recruiters)

### Inferences
**Media decision table:**

| Situation | Use |
|---|---|
| Static UI or dashboard | Screenshot (AVIF/WebP, sized) |
| Single interaction (drag, live update) | Muted MP4/WebM loop of ≤5 s, or a visible pause button |
| End-to-end flow | 60–120 s narrated video, click-to-play |
| CLI or pipeline | VHS-generated MP4/GIF |
| Backend | Architecture or sequence diagram as SVG with a long description |
| Performance claim | A chart with the method stated |

- Honor `prefers-reduced-motion` by pausing autoplay for users who request it. This is consistent with WCAG 2.2.2 but was not separately sourced here.
- Use a click-to-load "facade" (thumbnail plus play button) for YouTube or Loom embeds, so third-party iframes don't load on page load. This follows the same lazy-loading logic; not separately sourced here.
- **Alt text** should state what the image *proves*, not "screenshot of app." For example: "Dashboard (synthetic data) showing weekly report generated in 15 min instead of 6 h." Use `alt=""` for purely decorative images. Give architecture diagrams a text walkthrough of the flow under the figure; it doubles as the case-study narrative.
- **Device mockups:** for web apps they mostly add bytes and visual noise; use them sparingly (one hero) if at all. For backend or data projects, a diagram beats a laptop mockup. I found no evidence either way.
- **Synthetic data in every image:** all screenshots and videos should use synthetic data, which serves privacy and NDA compliance and makes the demo reproducible. Mark it visibly ("synthetic data").

### Gaps
- I found no study on how GIFs, videos and screenshots differ in hiring-reviewer engagement, and no data on whether device mockups help or hurt.
- I didn't verify current browser support for AVIF/WebP or the `prefers-reduced-motion` and facade-pattern guidance against a primary source in this research.
- The web.dev GIF article showed no publication date in the fetched content.
