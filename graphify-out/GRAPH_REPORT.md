# Graph Report - cursos  (2026-05-27)

## Corpus Check
- 7 files · ~51,499 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 62 nodes · 62 edges · 12 communities (11 shown, 1 thin omitted)
- Extraction: 79% EXTRACTED · 21% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1fa93ff9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 8|Community 8]]

## God Nodes (most connected - your core abstractions)
1. `Redes Avanzado — Índice` - 9 edges
2. `Cableado Estructurado — Índice` - 8 edges
3. `Redes Básico — Índice` - 7 edges
4. `Básico B3 — Direccionamiento IP y Servicios` - 6 edges
5. `canoRedStudy` - 5 edges
6. `Avanzado B2 — VLANs y Spanning Tree` - 4 edges
7. `Avanzado B5 — WiFi Empresarial Ubiquiti` - 4 edges
8. `Básico B2 — Conceptos y Protocolos de Red` - 4 edges
9. `Portal Principal de Cursos` - 3 edges
10. `Avanzado B1 — Switches Cisco Fundamentos` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Básico B4 — Redes Inalámbricas` --semantically_similar_to--> `Avanzado B5 — WiFi Empresarial Ubiquiti`  [INFERRED] [semantically similar]
  REDES BASICO/files/bloque4.html → REDES AVANZADO/files/bloque5.html
- `Redes Inalámbricas (WiFi)` --semantically_similar_to--> `WiFi Empresarial`  [INFERRED] [semantically similar]
  REDES BASICO/files/bloque4.html → REDES AVANZADO/files/bloque5.html
- `Redes Avanzado — Índice` --conceptually_related_to--> `Cableado Estructurado — Índice`  [INFERRED]
  REDES AVANZADO/files/index.html → CABLEADO ESTRUCTURADO/files/index.html
- `Portal Principal de Cursos` --references--> `Cableado Estructurado — Índice`  [EXTRACTED]
  MENU_PRINCIPAL.html → CABLEADO ESTRUCTURADO/files/index.html
- `Redes Básico — Índice` --conceptually_related_to--> `Redes Avanzado — Índice`  [INFERRED]
  REDES BASICO/files/index.html → REDES AVANZADO/files/index.html

## Hyperedges (group relationships)
- **Curso Redes Básico (módulos)** — bas_bloque1, bas_bloque2, bas_bloque3, bas_bloque4, bas_bloque5 [EXTRACTED 1.00]
- **Curso Redes Avanzado (bloques)** — adv_bloque1, adv_bloque2, adv_bloque3, adv_bloque4, adv_bloque5, adv_bloque6 [EXTRACTED 1.00]
- **Curso Cableado Estructurado (módulos)** — cab_bloque1, cab_bloque2, cab_bloque3, cab_bloque4, cab_bloque5, cab_bloque6 [EXTRACTED 1.00]

## Communities (12 total, 1 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.25
Nodes (8): Avanzado B2 — VLANs y Spanning Tree, Básico B3 — Direccionamiento IP y Servicios, DHCP, DNS, Direccionamiento IP / Subnetting, NTP, Spanning Tree Protocol (STP), VLAN

### Community 1 - "Community 1"
Cohesion: 0.40
Nodes (5): Avanzado B1 — Switches Cisco Fundamentos, Básico B2 — Conceptos y Protocolos de Red, Cisco IOS / Switches Cisco, Modelo OSI, TCP/IP

### Community 2 - "Community 2"
Cohesion: 0.17
Nodes (15): Avanzado B3 — Switches Ubiquiti, Avanzado B4 — RADIUS Server Windows, Avanzado B5 — WiFi Empresarial Ubiquiti, Redes Avanzado — Índice, Básico B1 — Introducción a Redes de Datos, Básico B4 — Redes Inalámbricas, Básico B5 — Virtualización (Proxmox), Redes Básico — Índice (+7 more)

### Community 3 - "Community 3"
Cohesion: 0.29
Nodes (6): canoRedStudy, code:block1 (MENU_PRINCIPAL.html              ← entrada del portal), Cursos, Cómo usar, Estructura, Grafo de conocimiento

### Community 5 - "Community 5"
Cohesion: 0.17
Nodes (13): Cableado B1 — Introducción al Cableado Estructurado, Cableado B2 — Canalización Profesional, Cableado B3 — Elementos del Data Center, Cableado B4 — En el Campo de Trabajo, Cableado B5 — Introducción a Fibra Óptica, Cableado B6 — Consideraciones Profesionales, Cableado Estructurado — Índice, Canalización (Bandejas/Conduit) (+5 more)

## Knowledge Gaps
- **4 isolated node(s):** `Cursos`, `code:block1 (MENU_PRINCIPAL.html              ← entrada del portal)`, `Cómo usar`, `Grafo de conocimiento`
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Redes Avanzado — Índice` connect `Community 2` to `Community 0`, `Community 1`, `Community 5`, `Community 8`?**
  _High betweenness centrality (0.273) - this node is a cross-community bridge._
- **Why does `Cableado Estructurado — Índice` connect `Community 5` to `Community 2`?**
  _High betweenness centrality (0.228) - this node is a cross-community bridge._
- **Why does `Redes Básico — Índice` connect `Community 2` to `Community 0`, `Community 1`?**
  _High betweenness centrality (0.188) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Redes Avanzado — Índice` (e.g. with `Cableado Estructurado — Índice` and `Redes Básico — Índice`) actually correct?**
  _`Redes Avanzado — Índice` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Cursos`, `code:block1 (MENU_PRINCIPAL.html              ← entrada del portal)`, `Cómo usar` to the rest of the system?**
  _21 weakly-connected nodes found - possible documentation gaps or missing edges._