# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (sitio estático) con hosting en Cloudflare. Lo eligió el usuario el 2026-11-11 a partir de la recomendación de
la investigación (`reports/`). El sitio es bilingüe, con rutas `/es/` y `/en/`.

## Users

**Principales:** reclutadores y hiring managers que evalúan a Alfredo para un puesto de desarrollo de software, en
dos mercados:

- **México y LatAm.** Leen en español y filtran primero por experiencia, salario esperado y ubicación.
- **Remoto internacional (EE. UU. y Europa).** Leen en inglés y buscan nivel de inglés, traslape de zona horaria y
  prueba del trabajo.

**Cómo llegan:** desde el CV en PDF, LinkedIn, GitHub o una referencia, muchas veces en el teléfono y entre muchas
pestañas. El reclutador escanea en segundos y compara contra la vacante. El hiring manager verifica a un clic: case
studies, repositorios y demos.

**Secundario y discreto:** posibles clientes de proyectos freelance. Basta una línea en Contacto.

## Product Purpose

Verificar el CV, no reemplazarlo. En unos cinco segundos el sitio confirma quién es, qué rol busca, con qué stack
trabaja, dónde está y si está disponible. Detrás, a un clic, ofrece prueba profunda.

El sitio funciona si el lector:

1. entiende el perfil en la primera pantalla;
2. abre un proyecto o un case study;
3. descarga el CV o escribe.

## Positioning

**Perfil:** Alfredo Barranco Ahued, desarrollador full-stack e Ingeniero en Sistemas Computacionales (Universidad
Iberoamericana Puebla, egreso en mayo de 2026). Tiene más de dos años de experiencia continua desde junio de 2024, en
tres empresas y como freelance, y trabajó mientras estudiaba la carrera.

**Hilo conductor:** ERPs, APIs REST e integración de sistemas que no se hablan entre sí (ERP legado, CRM, plataformas
de anuncios, marketplace). Hoy suma IA aplicada con control de costo y con pruebas automatizadas.

**Lo que lo distingue:** la prueba es evidencia verificable —case studies con decisiones, métricas técnicas con su
punto de partida, código público— y no adjetivos.

## Operating Context

- Se lee en teléfono y en escritorio.
- Cada CV enlaza a su idioma (`/es/` o `/en/`). El sitio no redirige automáticamente por idioma del navegador ni por
  IP, y en todas las páginas hay un selector de idioma visible.
- El CV se descarga en PDF en ambos idiomas, generado desde los mismos datos que el sitio.
- El sitio se revisa cada trimestre y muestra la fecha de su última actualización.

## Capabilities and Constraints

- **Contenido acordado:** home de una sola página por idioma, 2–3 páginas de case study y una página de CV por
  idioma. El detalle está en `privado/propuesta-estructura.md`, que git ignora.
- **Idiomas:** ambos completos, un solo idioma por página y hreflang recíproco con `x-default`.
- **Calidad técnica:** funciona sin JavaScript, cumple Core Web Vitals en verde y WCAG 2.2 AA.
- **Confidencialidad del empleador:** el nombre del empleador aparece como en el CV. Los sistemas internos se
  describen en genérico mientras no haya permiso por escrito:
  - sin nombres internos ni cifras de negocio;
  - sin capturas reales;
  - con diagramas redibujados y demos con datos sintéticos.
- **Trabajo freelance:** mientras no haya permiso de cada cliente, no se publican nombres de clientes, capturas ni
  enlaces. Nunca se publican testimonios, fotos de personas, teléfonos ni cifras de rendimiento financiero.
- **Contacto:** correo con botón de copiar, LinkedIn y GitHub. El teléfono no se publica.
- **Uso de IA para programar:** el sitio no menciona asistentes de IA. Es decisión del usuario; el tema se trata en
  entrevista.
- **Decisiones abiertas:**
  - a qué idioma lleva la raíz `/` (propuesta: `/en/`);
  - la fecha de inicio del freelance (el CV dice enero de 2026; el historial de git, octubre de 2025);
  - el estatus del título;
  - el dominio propio;
  - si el proyecto EXOD-IA tiene repositorio o demo públicos.

## Brand Commitments

- **Nombre:** Alfredo Barranco Ahued.
- **Título:** idéntico al del CV y LinkedIn: "Desarrollador full-stack" / "Full-stack developer". El sitio nunca dice
  "junior".
- **Voz:** directa, específica y verificable, con cada cifra acompañada de su punto de partida. Sin superlativos, sin
  "apasionado por la tecnología" y sin declaraciones de misión. En inglés, natural, no traducido palabra por palabra.
- **Fuera del sitio:** barras o porcentajes de habilidad, contadores animados, pantallas de carga y muros de logos.
- **Identidad visual:** no hay logo, paleta ni tipografía previos.

## Evidence on Hand

**Archivos de referencia:**

- CV: `privado/CV_Alfredo_Barranco_Ahued.pdf` (git lo ignora).
- Inventarios de proyectos: `privado/inventario-panamotors-zyaxes.md` y `privado/inventario-proyectos-personales.md`
  (git los ignora).
- Investigación: `reports/Portafolio de ingeniero en sistemas.md`.

**Logros verificables:**

- NASA Space Apps Challenge 2025, Global Nominee (EXOD-IA, equipo de cinco).
- Talent Land Guadalajara 2025, segunda fase (Radiance, imagen médica DICOM).

**Métricas técnicas que se pueden publicar (vienen del CV):**

- imagen del contenedor: de 979 MB a 268 MB;
- payload del dashboard: de 8 MB a 3.8 MB.

**Lo que no existe y no se debe inventar:**

- testimonios y certificaciones;
- examen de inglés con puntaje;
- métricas de negocio aprobadas y capturas aprobadas;
- foto profesional;
- repositorios públicos limpios.

## Product Principles

1. **Probar, no prometer.** Cada afirmación lleva su evidencia a un clic; si no la tiene, se quita.
2. **Dos lectores, dos velocidades.** El reclutador entiende en cinco segundos; el hiring manager verifica a un clic.
3. **Los mismos hechos en todas partes.** El sitio, el CV y LinkedIn dicen exactamente lo mismo, en ambos idiomas.
4. **Describir sin divulgar.** Lo confidencial se cuenta con encuadre genérico, diagramas redibujados y datos
   sintéticos.
5. **Mantenible o nada.** Solo se publican secciones que se puedan mantener al día.

## Accessibility & Inclusion

WCAG 2.2 AA:

- contraste suficiente y foco visible;
- objetivos táctiles de al menos 24 px;
- respeto a `prefers-reduced-motion`;
- navegación completa por teclado, con enlace para saltar al contenido;
- atributo `lang` correcto en cada página;
- texto alternativo que diga qué prueba cada imagen.
