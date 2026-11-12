---
name: "Planos de luz y color"
description: "Sistema visual del portafolio bilingüe: arquitectura moderna mexicana de muros planos de color, vanos cielo y una luz que sigue la hora de Puebla."
colors:
  rosa: "#b8336a"
  lavanda: "#cfc6f0"
  lavanda-deep: "#b4a7e2"
  ocre: "#e5a33a"
  sol: "#f6cf7a"
  sol-pale: "#f9dc98"
  ciruela: "#3b1e3f"
  ciruela-2: "#5c3a60"
  ciruela-deep: "#2a1430"
  ciruela-lit: "#5e3462"
  cielo: "#f4effb"
  cal: "#fff4f7"
  cal-2: "#ffe5ee"
  linea: "#ded3ef"
  linea-cal: "rgb(255 244 247 / 0.25)"
  ciruela-wash: "rgb(59 30 63 / 0.1)"
typography:
  display:
    fontFamily: "'Red Hat Display Variable', 'Red Hat Display', system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.2rem + 5vw, 5.5rem)"
    fontWeight: 900
    lineHeight: 0.94
    letterSpacing: "-0.032em"
  headline:
    fontFamily: "'Red Hat Display Variable', 'Red Hat Display', system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 1.4rem + 3.2vw, 4rem)"
    fontWeight: 850
    lineHeight: 1
    letterSpacing: "-0.028em"
  title:
    fontFamily: "'Red Hat Display Variable', 'Red Hat Display', system-ui, sans-serif"
    fontSize: "clamp(1.45rem, 1.15rem + 1vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "'Red Hat Display Variable', 'Red Hat Display', system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 800
    lineHeight: 1.25
  link-title:
    fontFamily: "'Red Hat Display Variable', 'Red Hat Display', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.25
  statement:
    fontFamily: "'Red Hat Display Variable', 'Red Hat Display', system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 1.1rem + 0.9vw, 1.85rem)"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  role-line:
    fontFamily: "'Red Hat Text Variable', 'Red Hat Text', system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 1rem + 0.55vw, 1.4rem)"
    fontWeight: 500
    lineHeight: 1.4
  lead:
    fontFamily: "'Red Hat Text Variable', 'Red Hat Text', system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "'Red Hat Text Variable', 'Red Hat Text', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  meta:
    fontFamily: "'Red Hat Text Variable', 'Red Hat Text', system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  nav:
    fontFamily: "'Red Hat Text Variable', 'Red Hat Text', system-ui, sans-serif"
    fontSize: "0.975rem"
    fontWeight: 600
    lineHeight: 1.6
  control:
    fontFamily: "'Red Hat Text Variable', 'Red Hat Text', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 650
    lineHeight: 1.6
  button:
    fontFamily: "'Red Hat Text Variable', 'Red Hat Text', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.6
  label:
    fontFamily: "'Red Hat Text Variable', 'Red Hat Text', system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: "0.02em"
  figures:
    fontFamily: "'Red Hat Mono Variable', 'Red Hat Mono', ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.6
    fontFeature: '"tnum"'
rounded:
  none: "0px"
  focus: "2px"
  tab: "8px"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 4.4vw, 4rem)"
  max: "84rem"
  plane-block: "clamp(4rem, 9vw, 7.5rem)"
  heading-gap: "clamp(1.75rem, 3vw, 2.5rem)"
  rooms-gap: "clamp(1.5rem, 3vw, 2.25rem)"
  room-padding: "clamp(1.5rem, 3vw, 2.5rem)"
components:
  wall-rosa:
    backgroundColor: "{colors.rosa}"
    textColor: "{colors.cal}"
  wall-lavanda:
    backgroundColor: "{colors.lavanda}"
    textColor: "{colors.ciruela}"
  wall-ocre:
    backgroundColor: "{colors.ocre}"
    textColor: "{colors.ciruela}"
  wall-ciruela:
    backgroundColor: "{colors.ciruela}"
    textColor: "{colors.cal}"
  vano:
    backgroundColor: "{colors.cielo}"
    textColor: "{colors.ciruela}"
    rounded: "{rounded.none}"
    padding: "1.6rem 1.75rem 1.1rem"
    width: "min(100%, 30rem)"
  vano-lg:
    backgroundColor: "{colors.cielo}"
    textColor: "{colors.ciruela}"
    rounded: "{rounded.none}"
    padding: "clamp(1.25rem, 3vw, 2.5rem) clamp(1.25rem, 3.5vw, 3rem)"
  room:
    backgroundColor: "{colors.cielo}"
    textColor: "{colors.ciruela}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.room-padding}"
  luz:
    backgroundColor: "{colors.sol}"
    width: "min(46%, 38rem)"
  luz-ciruela:
    backgroundColor: "{colors.ciruela-lit}"
    width: "min(24%, 19rem)"
    height: "64%"
  metric-rule:
    backgroundColor: "{colors.lavanda-deep}"
    rounded: "{rounded.none}"
    height: "0.75rem"
  metric-rule-after:
    backgroundColor: "{colors.rosa}"
    height: "0.75rem"
  button-primary:
    backgroundColor: "{colors.ciruela}"
    textColor: "{colors.cal}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.ciruela-deep}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ciruela}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.5rem"
  button-secondary-hover:
    backgroundColor: "{colors.ciruela-wash}"
  chip-action:
    backgroundColor: "{colors.sol}"
    textColor: "{colors.ciruela}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1.1rem"
  chip-action-hover:
    backgroundColor: "{colors.sol-pale}"
  chip-action-done:
    backgroundColor: "{colors.cal}"
  nav-link:
    textColor: "{colors.cal}"
    typography: "{typography.nav}"
    padding: "0.4rem 0"
  lang-switch:
    textColor: "{colors.ciruela}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.9rem"
  lang-switch-current:
    backgroundColor: "{colors.ciruela}"
    textColor: "{colors.cal}"
  lang-switch-hover:
    backgroundColor: "{colors.ciruela-wash}"
  lang-switch-on-rosa:
    textColor: "{colors.cal}"
  lang-switch-on-rosa-current:
    backgroundColor: "{colors.cal}"
    textColor: "{colors.rosa}"
  skip-link:
    backgroundColor: "{colors.ciruela}"
    textColor: "{colors.cal}"
    rounded: "{rounded.tab}"
    padding: "0.65rem 1rem"
---

# Design System: Planos de luz y color

## Overview

**Creative North Star: "Planos de luz y color"**

La página es arquitectura moderna mexicana habitable. Cada sección es un muro plano de color que corre a sangre (rosa, lavanda, ocre y, al final, ciruela) y los muros se tocan sin juntas ni bordes. El contenido no se pega a los muros como tarjetas: vive en vanos, interiores cielo hundidos en el muro, y la luz de sol que entra por ellos es lo que une un plano con otro. La densidad es de casa, no de tablero: muros amplios, un foco por muro y silencio alrededor.

La luz es el único reloj del sistema. Una sola fuente, la hora local de Puebla, coloca el paralelogramo de luz sobre el piso, la sombra interior de cada vano y el lado de la diagonal que cada muro proyecta sobre el siguiente. Las sombras son de borde nítido y solo explican profundidad arquitectónica; nada flota. Sin JavaScript la casa queda a mediodía. El movimiento se reduce a un momento: la luz deslizándose a su lugar al cargar.

El sistema rechaza el hero de saludo sobre fondo neutro, las tarjetas iguales y la plantilla oscura de desarrollador, y también el rojo/blanco/negro y lo que se ve anticuado. La dirección descartada «Hoja técnica» (códigos de nota, numeración de secciones, gramática de ficha técnica) queda como anti-referencia nombrada: nada de ella forma parte de este sistema.

**Key Characteristics:**
- Muros planos a sangre en rosa, lavanda, ocre y ciruela; interiores cielo como vanos.
- Luz opaca y sombras de borde nítido, colocadas por la hora de Puebla; mediodía sin JavaScript.
- Una sola familia, Red Hat, en tres voces: Display habla, Text explica, Mono mide.
- Arquitectura en esquina viva; solo lo que se pulsa es píldora.
- Tinta ciruela en lugar de negro y cal en lugar de blanco.
- Un único movimiento: la luz que se desliza al cargar.

## Colors

Paleta de muros saturados y cálidos con interiores cielo, una luz amarilla de sol y una tinta ciruela que sustituye al negro.

### Primary
- **Rosa muro** (#b8336a): el muro de identidad. Lleva el nombre en la primera pantalla y los planos de Experiencia y Sobre mí. También es `theme-color`, `accent-color`, el cursor de texto, el pulgar de la barra de desplazamiento, las viñetas cuadradas, el subrayado de hover dentro de los vanos y el tramo «después» de la regla de cifras. Sobre rosa el texto siempre es cal.

### Secondary
- **Lavanda** (#cfc6f0): el muro de lectura en claro. Lleva el vano de la primera pantalla y los planos de Proyectos y Formación, con tinta ciruela.
- **Lavanda profunda** (#b4a7e2): solo dato. Pinta la pista «antes» de la regla de cifras y su muestra en la leyenda.

### Tertiary
- **Ocre piso** (#e5a33a): el piso. Base de la primera pantalla, donde viven las acciones, y plano de Stack, con tinta ciruela.
- **Sol** (#f6cf7a): la luz. El paralelogramo sobre el piso, el punto de disponibilidad, la selección de texto, el subrayado del correo sobre ciruela y el fondo del chip de acción en el muro de cierre.
- **Sol pálido** (#f9dc98): hover del chip de acción. Variable `--sol-pale`.

### Neutral
- **Ciruela** (#3b1e3f): la tinta de todo el sitio y el muro de cierre (Contacto). Fondo del botón primario, de la opción de idioma activa y de la pestaña de salto; anillo de foco sobre fondos claros.
- **Ciruela 2** (#5c3a60): tinta secundaria sobre cielo y lavanda: ámbitos, periodos, lugares, rótulos `dt`, entradillas y leyendas.
- **Ciruela profunda** (#2a1430): hover del botón primario. Variable `--ciruela-deep`.
- **Ciruela iluminado** (#5e3462): la luz que cae sobre el muro ciruela, opaca como el sol sobre el piso. Variable `--ciruela-lit`.
- **Cielo** (#f4effb): interiores. Fondo de vanos, salas y vano grande; fondo del `body` y pista de la barra de desplazamiento. Nunca es muro.
- **Cal** (#fff4f7): texto sobre rosa y ciruela; fondo del chip en estado «copiado» y de la opción de idioma activa en móvil.
- **Cal 2** (#ffe5ee): texto secundario sobre rosa y ciruela: línea de stack, entradilla y nota de Contacto, pie.
- **Línea** (#ded3ef): filetes de 1.5px dentro de los vanos (lista de proyectos del vano, empleos del vano grande).
- **Línea cal** (rgb(255 244 247 / 0.25)): filetes de 1.5px sobre el muro ciruela (canales y pie).
- **Velo ciruela** (rgb(59 30 63 / 0.1)): hover del botón secundario y de la opción de idioma inactiva.

Las filas que van directo sobre un muro (Formación) no usan un color fijo: su filete es `color-mix(in srgb, currentColor 28%, transparent)`, así sigue a la tinta del muro.

### Pares de contraste verificados

WCAG 2.x en sRGB, calculado con los valores de este documento. Texto normal exige 4.5:1; elementos de interfaz, 3:1.

| Texto | Fondo | Contraste | Dónde |
|---|---|---|---|
| Cal | Rosa muro | 5.25:1 | Nombre, rol, estado, navegación |
| Cal 2 | Rosa muro | 4.76:1 | Línea de stack; solo líneas cortas |
| Ciruela | Lavanda | 9.00:1 | Titulares, filas, idioma inactivo |
| Ciruela 2 | Lavanda | 5.83:1 | Entradilla, detalle de filas |
| Ciruela | Cielo | 12.88:1 | Lectura en vanos y salas |
| Ciruela 2 | Cielo | 8.34:1 | Ámbitos, `dt`, leyendas |
| Ciruela | Ocre piso | 6.67:1 | Stack, piso, botón secundario |
| Ciruela | Sol | 9.79:1 | Chip, selección, línea de sol sobre la luz |
| Cal | Ciruela | 13.53:1 | Botón primario, Contacto, pestaña de salto |
| Cal 2 | Ciruela | 12.26:1 | Entradilla y nota de Contacto, pie |
| Cal | Ciruela profunda | 15.74:1 | Botón primario en hover |
| Ciruela | Sol pálido | 10.89:1 | Chip en hover |
| Ciruela | Cal | 13.53:1 | Chip «copiado» |
| Rosa muro | Cal | 5.25:1 | Opción de idioma activa en móvil |
| Cal 2 | Ciruela iluminado | 8.25:1 | Pie cuando cae sobre la luz del muro ciruela |
| Ciruela 2 | Ocre piso | 4.32:1 | **No pasa AA: no se usa** |

Con sombra o luz encima el texto sigue en AA: ciruela 2 sobre lavanda con diagonal queda en 5.17:1, cal sobre rosa con diagonal sube a 6.37:1 y ciruela sobre el piso con la luz nocturna (sol al 35 %) da 7.65:1.

Fuera del texto: el anillo de foco ciruela da 12.88:1 sobre cielo, 9.00:1 sobre lavanda y 6.67:1 sobre ocre; el anillo cal, 5.25:1 sobre rosa y 13.53:1 sobre ciruela. El punto de disponibilidad (sol sobre rosa) da 3.80:1. La regla de cifras queda por debajo de 3:1 (rosa contra lavanda profunda, 2.57:1; lavanda profunda contra cielo, 1.94:1), y por eso nunca carga sola la información (ver la Regla de la Cifra en Texto).

### Named Rules
**La Regla del Muro a Sangre.** Cada sección es un muro de un solo color que llega de borde a borde y toca al siguiente sin junta, borde ni espacio. Dentro de un muro no hay un segundo fondo salvo el cielo de un vano y la luz.

**La Regla de la Tinta Ciruela.** No hay negro ni blanco: la tinta es ciruela, con ciruela 2 para lo secundario, y sobre rosa o ciruela el texto es cal, con cal 2 para lo secundario. El negro solo aparece como sombra translúcida (12 %) sobre los muros oscuros.

**La Regla del Sol que No Es Muro.** El sol nunca pinta un muro: es luz (el paralelogramo del piso), señal (el punto de disponibilidad, el subrayado del correo, la selección) o la acción iluminada sobre el muro ciruela (el chip).

**La Regla del Rosa Breve.** Sobre rosa solo van texto grande y líneas cortas, porque cal da 5.25:1 y cal 2 apenas 4.76:1. Cuando una lista larga cae en un muro rosa, entra en un vano cielo, como la Experiencia.

## Typography

**Display Font:** Red Hat Display Variable (con 'Red Hat Display', system-ui, sans-serif), eje de peso 300–900.
**Body Font:** Red Hat Text Variable (con 'Red Hat Text', system-ui, sans-serif), eje de peso 300–700.
**Label/Mono Font:** Red Hat Mono Variable (con 'Red Hat Mono', ui-monospace, monospace), eje de peso 300–700, solo para cifras y años.

Las tres se sirven desde el propio sitio con `@fontsource-variable` (eje `wght`, `font-display: swap`, subconjuntos latino y latino extendido).

**Character:** Una sola superfamilia en tres voces. Display es arquitectónica: pesos de muro, tracking negativo y líneas balanceadas. Text es abierta y tranquila para leer y operar. Mono comparte esqueleto y solo aparece donde hay medida, así que la página se lee como un solo material.

### Hierarchy
- **Display** (Display 900, clamp(3rem, 1.2rem + 5vw, 5.5rem), 0.94, −0.032em, `text-wrap: balance`): el nombre a escala de muro. Uno por página.
- **Headline** (Display 850, clamp(2.4rem, 1.4rem + 3.2vw, 4rem), 1, −0.028em): el título de cada muro; deja debajo clamp(1.75rem, 3vw, 2.5rem).
- **Title** (Display 800, clamp(1.45rem, 1.15rem + 1vw, 2rem), 1.15, −0.02em, balance): el título de cada sala de proyecto.
- **Title sm** (Display 800, 1.15rem, 1.25): puestos; los rubros de Formación usan 1.1rem con interlínea 1.3 y los grupos de Stack 1.2rem.
- **Link title** (Display 700, 1.0625rem, 1.25): títulos de la lista dentro de un vano. El encabezado del vano usa Display 700 a 1rem con +0.01em.
- **Statement** (Display 600, clamp(1.35rem, 1.1rem + 0.9vw, 1.85rem), 1.35, −0.01em, máx. 40ch): prosa breve en primera persona directamente sobre un muro.
- **Role line** (Text 500, clamp(1.15rem, 1rem + 0.55vw, 1.4rem), 1.4, máx. 30ch): la línea de rol bajo el nombre.
- **Lead** (Text 400, 1.125rem, 1.6, máx. 62ch, ciruela 2): la entradilla de un muro; sube 0.75rem hacia su titular. En Contacto crece a 1.25rem en cal 2.
- **Body** (Text 400, 1.0625rem, 1.6): lectura, con medida máxima de 68–70ch.
- **Meta** (Text 400, 0.9375rem): ámbitos, fichas, lugares, líneas de stack y pie. La línea de sol usa este tamaño en 600.
- **Nav** (Text 600, 0.975rem): navegación de secciones y lista de estado.
- **Control** (Text 650, 0.875rem): opciones del selector de idioma; el resumen «Más detalle» usa 650 a 0.9375rem.
- **Button** (Text 700, 1rem): botones. El chip usa 700 a 0.9375rem.
- **Label** (Text 700, 0.8125rem, +0.02em): rótulos `dt` de los grupos de Stack; el rótulo de una medida usa 700 a 0.875rem en ciruela 2. Nunca en mayúsculas.
- **Figures** (Mono 600, 0.875rem, cifras tabulares): «antes → después unidad · cambio» junto a la regla de cifras. Los años de Formación van en Mono 500 a tamaño de lectura.

### Named Rules
**La Regla de las Tres Voces.** Display habla (nombre, titulares, frases), Text explica y opera (lectura, navegación, botones) y Mono mide (cifras y años, siempre tabulares). Mono nunca es disfraz «técnico».

**La Regla del Peso de Muro.** Los pesos 800–900 y el tracking negativo (de −0.01em a −0.032em) son solo de Display; Text y Mono se quedan entre 400 y 700. Un titular nunca lleva rótulo encima.

## Layout

Una pila de muros a sangre, uno por sección, que se tocan sin espacio entre ellos. Dentro de cada muro el contenido va en un contenedor centrado de 84rem como máximo, con margen lateral fluido de clamp(1.25rem, 4.4vw, 4rem); el muro respira clamp(4rem, 9vw, 7.5rem) arriba y abajo. El orden visual es el del DOM y en cada lista lo más reciente va primero.

**Primera pantalla de la home.** Rejilla de dos columnas 57fr / 43fr sobre dos filas (1fr / auto): muro rosa a la izquierda, muro lavanda con su vano a la derecha y el piso ocre a todo el ancho abajo, con alto mínimo de clamp(9rem, 22vh, 13rem). El conjunto mide max(100svh, 46rem). La barra superior flota en posición absoluta: navegación sobre el rosa y selector de idioma sobre el lavanda. El bloque del nombre se asienta al pie del muro rosa (máx. 44rem) y el vano se centra en el lavanda. La composición pertenece al brief de esa superficie; lo que es del sistema son sus piezas: muro, vano, piso y luz.

**Rejillas internas.**
- Sala de proyecto: 7fr / 4fr (texto | ficha y cifras) con el encabezado a todo el ancho; separación de 1.5rem por clamp(2rem, 4vw, 3.5rem).
- Empleo: 11rem / 16rem / 1fr (periodo | puesto | logros); separación de 0.75rem por 2.5rem.
- Formación: 5rem / 22rem / 1fr (año | rubro | detalle).
- Canales de contacto: 8rem / 1fr / auto (canal | valor | chip), en un máximo de 52rem.
- Grupos de Stack: `repeat(auto-fill, minmax(min(100%, 19rem), 1fr))`, separación de 2rem por clamp(2rem, 4vw, 3.5rem).

**Ritmo.** Las listas se separan con filetes de 1.5px y su paso depende del peso de cada fila: 1.75rem por empleo, 1.25rem por fila de Formación, 1.1rem por canal y 0.85rem por enlace dentro del vano. Las salas se separan clamp(1.5rem, 3vw, 2.25rem). Siempre hay más aire encima de un titular que debajo.

**Medidas.** Lectura de 68–70ch, entradilla de 62ch, línea de rol de 30ch, statement de 40ch y línea de sol de 32ch.

**Vacío activo.** Un foco por muro: su titular o su vano. El resto del muro es color.

**Adaptación.** Tres cortes, todos `max-width`:
- **1100px:** la sala pasa a una columna; el empleo, a dos (10rem / 1fr) con los logros a todo el ancho.
- **860px:** la primera pantalla se apila (rosa, vano, piso) y pierde su alto mínimo; el vano toma todo el ancho; el piso pasa a columna con la línea de sol alineada a la izquierda; la luz se ensancha a 70 %; la sombra de junta se vuelve horizontal; el selector de idioma se invierte a cal sobre rosa. El empleo pasa a una columna, Formación a 4rem / 1fr y los canales a 1fr / auto con el nombre encima.
- **560px:** la navegación se estrecha (0.875rem, separación de 0.9rem), cada opción de idioma baja a 2.5rem, los canales pasan a una columna con el chip al inicio y se retira la luz del muro ciruela.

### Named Rules
**La Regla de la Pila.** Bajo 860px todo es una sola columna en el orden de lectura y ningún contenido se esconde. Lo único que se retira, a 560px, es la luz decorativa del muro ciruela.

## Elevation & Depth

El sistema es plano por material: la profundidad la dan los cambios de muro y la luz de sol, nunca elementos que flotan. Hay dos sombras y una luz, todas de borde nítido; las sombras van en tinta ciruela translúcida, salvo sobre rosa y ciruela, donde son negro al 12 %. Botones, chips y selector no tienen sombra; los vanos no la proyectan hacia afuera, la reciben hacia adentro.

### Shadow Vocabulary
- **Derrame del vano** (`box-shadow: inset var(--reveal-x) var(--reveal-y) 0 rgb(59 30 63 / 0.13)`; a mediodía, `inset 0px 6px 0`): la sombra que el borde del muro deja dentro de un vano (el de la primera pantalla y el vano grande). Sin desenfoque; su desplazamiento sigue al sol.
- **Derrame de sala** (`box-shadow: inset var(--reveal-x) var(--reveal-y) 0 rgb(59 30 63 / 0.1)`): la misma sombra, más tenue, en cada sala de proyecto.
- **Diagonal proyectada** (seudoelemento `::before` de cada muro: 42 % del ancho por clamp(5rem, 12vw, 9rem), `clip-path: polygon(0 0, 100% 0, 0 100%)`, relleno `rgb(59 30 63 / 0.07)` sobre lavanda y ocre y `rgb(0 0 0 / 0.12)` sobre rosa y ciruela): el muro anterior proyecta su borde en diagonal sobre el siguiente. Es el gesto que se repite en todas las secciones. Desde la 1 p. m. pasa a la esquina superior derecha con `polygon(0 0, 100% 0, 100% 100%)`.
- **Luz** (relleno opaco recortado en paralelogramo): no es transparencia sino un tono más claro del mismo muro. Sol sobre el piso ocre, de arriba abajo, con `clip-path: polygon(30% 0, 100% 0, 78% 100%, 0 100%)`, ancho min(46%, 38rem) y `left: var(--light-x)`. Ciruela iluminado sobre el muro de cierre, con `polygon(40% 0, 100% 0, 60% 100%, 0 100%)`, min(24%, 19rem) de ancho y 64 % de alto, fija abajo a la derecha a 7 % del borde.
- **Sombra de junta** (excepción): donde el muro rosa toca al lavanda en la primera pantalla hay un degradado `linear-gradient(90deg, rgb(59 30 63 / 0.26), rgb(59 30 63 / 0))` de clamp(2.5rem, 6vw, 5.5rem) de ancho; bajo 860px se vuelve horizontal (180deg, 0.22, 2.25rem de alto). Es la única sombra difusa del build y se aparta del contrato de borde nítido: no se extiende a otras superficies.

### El reloj de la luz
Un script en línea lee la hora de Puebla (`America/Mexico_City`) al cargar y escribe tres propiedades en `:root` y dos atributos:
- `día = clamp((hora − 7) / 12, 0, 1)`: las 7:00 valen 0 y las 19:00 valen 1.
- `--light-x = 20 % + 42 % × día` (a mediodía, 41 %).
- `--reveal-x = (0.5 − día) × 28px` (de 14px por la mañana a −14px al anochecer; a mediodía, 0px).
- `--reveal-y = 6px + |día − 0.5| × 16px` (6px a mediodía, 14px en los extremos).
- `data-afternoon` cuando `día > 0.5` (desde la 1 p. m.): las diagonales pasan a la derecha y la sombra de junta baja a 35 %.
- `data-night` antes de las 7:00 o desde las 19:30: la luz del piso baja a 35 % de opacidad.

Sin JavaScript quedan los valores de mediodía (41 %, 0px, 6px) y la línea de sol oculta. El horario laboral (lunes a viernes, de 9:00 a 18:00) solo cambia el texto de esa línea.

### Named Rules
**La Regla de la Sombra que Explica.** Una sombra solo explica arquitectura: el derrame interior de un vano o la diagonal que un muro proyecta sobre el siguiente. Siempre de borde nítido y en tinta translúcida; nada que se pulse proyecta sombra.

**La Regla del Reloj de Puebla.** Luz y sombra salen de una sola fuente, la hora de Puebla: por la mañana se cargan a la izquierda y desde la 1 p. m. a la derecha; de noche la luz del piso baja a 35 %. Sin JavaScript, mediodía.

**La Regla del Único Momento.** La única animación es la luz que se desliza de mediodía a su hora al cargar (1600ms, cubic-bezier(0.16, 1, 0.3, 1)); con `prefers-reduced-motion` aparece ya en su lugar.

## Shapes

Lenguaje de arquitectura: rectángulos de esquina viva y polígonos de luz y sombra. Muros, vanos, salas, la regla de cifras, las viñetas (cuadrados de 0.45rem) y las muestras de leyenda (0.7rem) tienen radio 0. Solo lo que se pulsa es píldora (999px): botones, chip y selector de idioma. El punto de disponibilidad es un círculo de 0.62rem en sol. El anillo de foco tiene esquinas de 2px y la pestaña de salto baja del borde superior con las esquinas inferiores a 8px.

Los filetes miden 1.5px (listas, contorno del selector, pie). Los 2px marcan énfasis: el borde del botón secundario, la regla bajo cada grupo de Stack y el trazo del chevron de «Más detalle», un ángulo dibujado con dos bordes.

La luz y la sombra son polígonos con `clip-path`: paralelogramos inclinados como «/» para la luz y triángulos rectángulos para las diagonales. Ninguna figura imita una forma orgánica.

El único icono es una flecha propia en SVG: `viewBox` de 12 × 12, trazo de 1.6 con puntas cuadradas en `currentColor`, a 1rem en botones y a 0.9rem en chips. El favicon es la primera pantalla en miniatura: piso ocre, muro rosa, muro lavanda con su vano cielo y el paralelogramo de sol.

### Named Rules
**La Regla de la Esquina Viva.** Lo que se habita es rectángulo de esquina viva (0); lo que se pulsa es píldora (999px). No hay radios intermedios en superficies.

## Components

### Buttons
Planos y de una pieza: sin sombra y sin transición; el color cambia al instante.
- **Shape:** píldora (999px), alto mínimo de 3rem, relleno de 0.9rem 1.5rem y 0.6rem de separación con la flecha de 1rem.
- **Primary:** fondo ciruela, texto cal, Text 700 a 1rem. Hover en ciruela profunda. Hay uno solo en la página: la acción principal, sobre el piso ocre.
- **Hover / Focus:** anillo de 2.5px a 3px de distancia que sigue la píldora; ciruela sobre fondos claros, cal sobre rosa y ciruela.
- **Secondary:** sin fondo, texto ciruela y borde de 2px ciruela. Hover con velo ciruela.

### Chips
- **Style:** chip de acción de los canales de contacto, sobre el muro ciruela: fondo sol, texto ciruela, Text 700 a 0.9375rem, píldora, relleno de 0.5rem 1.1rem y alto mínimo de 2.5rem; lleva la flecha de 0.9rem cuando abre un enlace externo.
- **State:** hover en sol pálido. «Copiar» pasa a «Copiado» con fondo cal durante 2 segundos. El botón de copiar solo aparece si el navegador tiene portapapeles; sin JavaScript queda el enlace `mailto`.

### Vanos y salas (contenedores)
Interiores hundidos en el muro, nunca tarjetas flotantes.
- **Corner Style:** esquina viva (0).
- **Background:** cielo con tinta ciruela, también cuando el muro alrededor es rosa; dentro de un vano el anillo de foco vuelve a ciruela.
- **Shadow Strategy:** derrame interior (ver Elevation & Depth): 0.13 en vanos, 0.1 en salas.
- **Border:** ninguno. Dentro, las listas se separan con filetes de 1.5px en línea.
- **Internal Padding:** vano, 1.6rem 1.75rem 1.1rem con ancho min(100%, 30rem); vano grande, clamp(1.25rem, 3vw, 2.5rem) por clamp(1.25rem, 3.5vw, 3rem); sala, clamp(1.5rem, 3vw, 2.5rem). Siempre más que el derrame máximo de 14px.
- **Lista del vano:** cada enlace es un bloque con título (Link title) y una línea de 0.875rem en ciruela 2 con ámbito y prueba; sin subrayado en reposo, el título se subraya en rosa al pasar el puntero.
- **Sala de proyecto:** encabezado con Title y su ámbito en meta; cuerpo de párrafos que abren con su rótulo en negrita 700; columna lateral con una ficha `dl` (rótulo en ciruela 2, valor en 600) y, cuando hay medidas, la regla de cifras. Lleva `scroll-margin-top: 1.5rem` para los enlaces que llegan desde el vano.

**La Regla del Vano Hundido.** Un vano se hunde, no flota: fondo cielo, derrame interior de borde nítido y relleno mayor que el derrame máximo de 14px; sin borde, sin radio y sin sombra exterior.

### Navigation
- **Navegación de secciones:** Text 600 a 0.975rem en cal sobre el muro rosa, sin subrayado en reposo y subrayada en hover; 0.4rem de relleno vertical y 1.75rem de separación (0.9rem y 0.875rem bajo 560px). Anillo de foco cal.
- **Selector de idioma:** píldora con contorno de 1.5px y dos opciones en Control con relleno de 0.35rem 0.9rem y ancho mínimo de 2.75rem. Sobre lavanda: contorno y texto ciruela; la opción activa (`aria-current="page"`) va llena en ciruela con texto cal y la otra toma el velo ciruela en hover. Bajo 860px, sobre rosa: contorno y texto cal, y la opción activa llena en cal con texto rosa.
- **Pestaña de salto:** fondo ciruela, texto cal en 600, relleno de 0.65rem 1rem y esquinas inferiores de 8px; baja desde el borde superior al recibir el foco.
- **Enlaces en texto:** heredan el color de su muro; subrayado de 1.5px a 0.22em. Sobre ciruela, el correo se subraya en sol.

### Listas
- **Empleos y filas:** separadas por filetes de 1.5px (línea dentro de vanos; `currentColor` al 28 % sobre muros). Periodo en 600 ciruela 2, puesto en Title sm, empresa en 600 y lugar en meta.
- **Viñetas:** cuadrados rosa de 0.45rem a 0.68em del borde superior, con sangría de 1.2rem y 0.55rem entre puntos.
- **Más detalle:** un `<details>` con chevron dibujado que gira de −45° a 45° en 180ms ease-out; el texto que se abre va en ciruela 2.
- **Grupos de Stack:** título en Title sm con una regla de 2px ciruela debajo; `dt` en Label y `dd` a 1rem.
- **Canales:** nombre del canal en 700, valor a 1rem que parte palabras largas y el chip al final.

### Regla de cifras (firma)
Antes y después sobre una sola regla. La pista completa, en lavanda profunda, de 0.75rem de alto y esquina viva, es el «antes»; el tramo rosa encima mide el «después» como fracción del antes (`width = después / antes`). Encima van el nombre de la medida (Text 600, 0.9375rem) y las cifras en Figures; debajo, una leyenda con muestras cuadradas de 0.7rem. La regla es `role="img"` con un `aria-label` que dice ambos valores.

**La Regla de la Cifra en Texto.** La regla de antes/después acompaña a las cifras, no las sustituye: los dos valores, la unidad y el cambio van escritos en Mono junto a la regla y en su `aria-label`.

### Muros, piso y luz (firma)
- **Muro:** variantes rosa, lavanda, ocre y ciruela, cada una con su diagonal proyectada y su tinta. Los muros rosa y ciruela llevan la clase `on-dark`, que cambia el anillo de foco a cal. El ciruela solo cierra la página y recibe su propia luz.
- **Piso:** franja ocre con las acciones a un lado y la línea de sol al otro (Text 600, 0.9375rem, máx. 32ch, alineada a la derecha). La línea dice la hora en Puebla, si es horario laboral y que la luz de la página sigue esa hora; la escribe el script y sin JavaScript no aparece.
- **Estado:** lista en Nav; la disponibilidad lleva un punto sol de 0.62rem.

### Superficies del navegador
Selección en sol con tinta ciruela; cursor de texto y `accent-color` en rosa; barra de desplazamiento rosa sobre cielo; `color-scheme: light`; `theme-color` rosa; desplazamiento suave solo sin preferencia de movimiento reducido.

## Do's and Don'ts

### Do:
- **Do** construye cada sección como un muro a sangre de un solo color, pegado al siguiente sin espacio; lavanda y ocre para leer, rosa para presencia y ciruela solo para cerrar.
- **Do** mete la lectura densa en un vano o sala cielo con tinta ciruela y un relleno mayor que 14px, el derrame máximo.
- **Do** coloca luz y sombras solo con `--light-x`, `--reveal-x`, `--reveal-y`, `data-afternoon` y `data-night`, y deja los valores de mediodía (41 %, 0px, 6px) como estado sin JavaScript.
- **Do** envuelve cualquier transición de luz o sombra en `@media (prefers-reduced-motion: no-preference)`.
- **Do** escribe las cifras en Red Hat Mono tabular y muestra antes y después sobre una sola regla: lavanda profunda para el antes, rosa para el después.
- **Do** tematiza las superficies del navegador desde la paleta: selección sol, cursor y `accent-color` rosa, barra rosa sobre cielo, foco de 2.5px a 3px (ciruela en claro, cal en oscuro) y subrayado de 1.5px a 0.22em.
- **Do** usa la flecha SVG propia (12 × 12, trazo de 1.6, puntas cuadradas, `currentColor`) en las acciones que llevan a una prueba o salen del sitio.
- **Do** respeta los objetivos táctiles del build: botones de al menos 3rem de alto, chips de 2.5rem y opciones de idioma de 2.75rem de ancho (2.5rem bajo 560px).

### Don't:
- **Don't** traigas la gramática de «Hoja técnica»: códigos de nota (AN-01…), numeración de secciones ni la ficha técnica como estructura de la página.
- **Don't** uses negro ni blanco puros en texto o superficies, ni la combinación rojo/blanco/negro; el negro solo existe como sombra al 12 % sobre rosa y ciruela.
- **Don't** conviertas el sitio en la plantilla oscura de desarrollador ni abras con un saludo sobre fondo neutro; el ciruela es muro de cierre, no tema.
- **Don't** uses tarjetas con borde, radio o sombra exterior: ninguna `box-shadow` fuera del derrame interior de vanos y salas.
- **Don't** difumines sombras; la sombra de junta de la primera pantalla es la única difusa y no se copia.
- **Don't** pintes un muro de sol o de cielo: el sol es luz y el cielo es interior.
- **Don't** pongas ciruela 2 sobre ocre (4.32:1) ni texto largo en cal 2 sobre rosa (4.76:1).
- **Don't** pongas rótulos, «eyebrows» ni versalitas espaciadas encima de un titular.
- **Don't** agregues barras o porcentajes de habilidad, contadores animados, pantallas de carga ni muros de logos.
- **Don't** agregues movimiento decorativo: aparte de la luz, solo el chevron de «Más detalle» gira (180ms) como respuesta de estado; nada de entradas por sección ni efectos al hacer scroll.
- **Don't** dejes que un contenedor con `overflow: hidden` recorte el anillo de foco.
