---
version: 1
slug: "src-pages-lang-index-astro"
primary_target: "src/pages/[lang]/index.astro"
related_targets: []
---

# Home del portafolio (/es/ y /en/)

**Modo:** Persuade. El lector decide en segundos y actúa.

**Lectores:**
- Reclutadores: escanean en unos cinco segundos.
- Hiring managers: verifican a un clic.

**Acción principal:** abrir un proyecto.

**Prueba disponible:**
- Experiencia 2024–2026 (con hueco oct 2025 – ene 2026, según el CV).
- Métricas técnicas del CV: 979 → 268 MB y 8 → 3.8 MB.
- NASA Space Apps 2025 (Global Nominee) y Talent Land 2025.

**Restricciones (PRODUCT.md):**
- Confidencialidad de empleador y clientes.
- Sin teléfono.
- No se menciona la IA usada para programar.
- Sin barras de habilidad.
- El usuario rechazó el rojo/blanco/negro y lo que se ve anticuado.
- La dirección anterior, «Hoja técnica», queda descartada como anti-referencia.

## Direction contract

THESIS: Tus sistemas son muros de color que no se tocan; la luz que entra por un vano es lo que los une. La página es arquitectura moderna mexicana habitable: planos de color, luz rasante y silencio. Rechaza el hero de saludo sobre fondo neutro, las tarjetas iguales y la plantilla oscura de desarrollador.

OWN-WORLD:
- Muros planos a sangre, sin tarjetas ni bordes:
  - rosa (#b8336a) con texto cal;
  - lavanda (#cfc6f0) con tinta ciruela;
  - piso ocre (#e5a33a) y luz sol (#f6cf7a);
  - interiores cielo (#f4effb) como «vanos»;
  - ciruela (#3b1e3f) como tinta y como muro de cierre.
- Sombras de sol de borde nítido que solo explican la profundidad de un vano o de un muro.
- Red Hat Display para titulares, Red Hat Text para lectura y Red Hat Mono solo para códigos y cifras.

STORY: El visitante:
1. entiende en el primer muro quién es: desarrollador full-stack en Puebla, disponible;
2. ve por el vano los cuatro proyectos;
3. abre uno, recorre las salas de proyectos, experiencia y formación;
4. termina en el muro ciruela de contacto.

FIRST VIEWPORT (el boceto elegido):
- A la izquierda, el muro rosa a ~57 % del ancho y ~76 % del alto: navegación arriba, el nombre en Red Hat Display 900 a escala de muro, la línea de rol y la disponibilidad.
- A la derecha, el muro lavanda con un vano cielo que contiene la lista de los cuatro proyectos: enlaces con título, ámbito y prueba. Sin códigos de nota: eran la gramática de la anti-referencia «Hoja técnica».
- Abajo, el piso ocre con el paralelogramo de luz y las acciones «Ver los 4 proyectos» (primaria) y «Contacto».
- En móvil, en ese orden vertical: muro rosa, vano, piso.

FORM:
- Planos de luz y color (arquitectura moderna mexicana), la #3 de mi lista corregida. seed:69eae507da6be4b4.
- Interacción firma: la luz obedece la hora solar de Puebla. El paralelogramo de luz, las sombras de los vanos y la diagonal de cada plano se colocan según la hora local. El estado dice la hora en Puebla, si es horario laboral y que la luz de la página sigue esa hora. No promete tiempos de respuesta, porque PRODUCT.md exige no exagerar. Sin JS, luz de mediodía.
- Movimiento: un solo momento, la luz deslizándose a su lugar al cargar; con `prefers-reduced-motion`, sin animación.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Raises incorporados

- Continuidad sin cortes entre planos.
- Lo más reciente va encima.
- Un solo gesto de sombra recorre las secciones.
- Vacío activo: un foco por pantalla.
- Cifras en una sola escala (antes/después sobre la misma regla).

## Pendiente

- La raíz `/` lleva a `/en/` (propuesta).
- Dominio.
- Fecha de inicio del freelance.
- Estatus del título.
- Rol en EXOD-IA.
- CV en PDF sin teléfono.
