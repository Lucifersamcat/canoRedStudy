# Graph Report - .  (2026-05-24)

## Corpus Check
- Corpus is ~38,018 words - fits in a single context window. You may not need a graph.

## Summary
- 51 nodes · 59 edges · 13 communities (6 shown, 7 thin omitted)
- Extraction: 73% EXTRACTED · 27% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.84)
- Token cost: 50,000 input · 5,706 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Servicios IP y VLANs|Servicios IP y VLANs]]
- [[_COMMUNITY_OSI, TCPIP y Cisco IOS|OSI, TCP/IP y Cisco IOS]]
- [[_COMMUNITY_WiFi Empresarial y RADIUS|WiFi Empresarial y RADIUS]]
- [[_COMMUNITY_Fundamentos y Virtualizacion|Fundamentos y Virtualizacion]]
- [[_COMMUNITY_Logica de Quiz (script.js)|Logica de Quiz (script.js)]]
- [[_COMMUNITY_Medios Fisicos Cobre y Fibra|Medios Fisicos: Cobre y Fibra]]
- [[_COMMUNITY_Navegacion del Portal|Navegacion del Portal]]
- [[_COMMUNITY_Canalizacion|Canalizacion]]
- [[_COMMUNITY_Multicast Cisco|Multicast Cisco]]
- [[_COMMUNITY_Switches Ubiquiti|Switches Ubiquiti]]
- [[_COMMUNITY_Data Center y Rack|Data Center y Rack]]
- [[_COMMUNITY_Trabajo de Campo|Trabajo de Campo]]
- [[_COMMUNITY_Normas TIAEIA|Normas TIA/EIA]]

## God Nodes (most connected - your core abstractions)
1. `Redes Avanzado — Índice` - 9 edges
2. `Cableado Estructurado — Índice` - 8 edges
3. `Redes Básico — Índice` - 7 edges
4. `Básico B3 — Direccionamiento IP y Servicios` - 6 edges
5. `Avanzado B1 — Switches Cisco Fundamentos` - 4 edges
6. `Avanzado B2 — VLANs y Spanning Tree` - 4 edges
7. `Avanzado B5 — WiFi Empresarial Ubiquiti` - 4 edges
8. `Básico B2 — Conceptos y Protocolos de Red` - 4 edges
9. `checkQuiz()` - 3 edges
10. `resetQuiz()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Básico B4 — Redes Inalámbricas` --semantically_similar_to--> `Avanzado B5 — WiFi Empresarial Ubiquiti`  [INFERRED] [semantically similar]
  REDES BASICO/files/bloque4.html → REDES AVANZADO/files/bloque5.html
- `Redes Inalámbricas (WiFi)` --semantically_similar_to--> `WiFi Empresarial`  [INFERRED] [semantically similar]
  REDES BASICO/files/bloque4.html → REDES AVANZADO/files/bloque5.html
- `Redes Básico — Índice` --conceptually_related_to--> `Redes Avanzado — Índice`  [INFERRED]
  REDES BASICO/files/index.html → REDES AVANZADO/files/index.html
- `Portal Principal de Cursos` --references--> `Redes Básico — Índice`  [EXTRACTED]
  MENU_PRINCIPAL.html → REDES BASICO/files/index.html
- `Redes Avanzado — Índice` --conceptually_related_to--> `Cableado Estructurado — Índice`  [INFERRED]
  REDES AVANZADO/files/index.html → CABLEADO ESTRUCTURADO/files/index.html

## Hyperedges (group relationships)
- **Curso Redes Básico (módulos)** — bas_bloque1, bas_bloque2, bas_bloque3, bas_bloque4, bas_bloque5 [EXTRACTED 1.00]
- **Curso Redes Avanzado (bloques)** — adv_bloque1, adv_bloque2, adv_bloque3, adv_bloque4, adv_bloque5, adv_bloque6 [EXTRACTED 1.00]
- **Curso Cableado Estructurado (módulos)** — cab_bloque1, cab_bloque2, cab_bloque3, cab_bloque4, cab_bloque5, cab_bloque6 [EXTRACTED 1.00]

## Communities (13 total, 7 thin omitted)

### Community 0 - "Servicios IP y VLANs"
Cohesion: 0.25
Nodes (8): Avanzado B2 — VLANs y Spanning Tree, Básico B3 — Direccionamiento IP y Servicios, DHCP, DNS, Direccionamiento IP / Subnetting, NTP, Spanning Tree Protocol (STP), VLAN

### Community 1 - "OSI, TCP/IP y Cisco IOS"
Cohesion: 0.33
Nodes (6): Avanzado B1 — Switches Cisco Fundamentos, Avanzado script.js, Básico B2 — Conceptos y Protocolos de Red, Cisco IOS / Switches Cisco, Modelo OSI, TCP/IP

### Community 2 - "WiFi Empresarial y RADIUS"
Cohesion: 0.4
Nodes (6): Avanzado B4 — RADIUS Server Windows, Avanzado B5 — WiFi Empresarial Ubiquiti, Básico B4 — Redes Inalámbricas, RADIUS / 802.1X, Redes Inalámbricas (WiFi), WiFi Empresarial

### Community 3 - "Fundamentos y Virtualizacion"
Cohesion: 0.33
Nodes (6): Básico B1 — Introducción a Redes de Datos, Básico B5 — Virtualización (Proxmox), Redes Básico — Índice, Básico script.js, Topologías de Red, Virtualización / Proxmox

### Community 5 - "Medios Fisicos: Cobre y Fibra"
Cohesion: 0.4
Nodes (5): Cableado B1 — Introducción al Cableado Estructurado, Cableado B5 — Introducción a Fibra Óptica, Cableado script.js (flashcards/quiz), Medios de Cobre (UTP/STP), Fibra Óptica

### Community 6 - "Navegacion del Portal"
Cohesion: 1.0
Nodes (3): Redes Avanzado — Índice, Cableado Estructurado — Índice, Portal Principal de Cursos

## Knowledge Gaps
- **20 isolated node(s):** `Cableado script.js (flashcards/quiz)`, `Avanzado script.js`, `Básico script.js`, `Modelo OSI`, `TCP/IP` (+15 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Redes Avanzado — Índice` connect `Navegacion del Portal` to `Servicios IP y VLANs`, `OSI, TCP/IP y Cisco IOS`, `WiFi Empresarial y RADIUS`, `Fundamentos y Virtualizacion`, `Multicast Cisco`, `Switches Ubiquiti`?**
  _High betweenness centrality (0.466) - this node is a cross-community bridge._
- **Why does `Cableado Estructurado — Índice` connect `Navegacion del Portal` to `Medios Fisicos: Cobre y Fibra`, `Canalizacion`, `Data Center y Rack`, `Trabajo de Campo`, `Normas TIA/EIA`?**
  _High betweenness centrality (0.393) - this node is a cross-community bridge._
- **Why does `Redes Básico — Índice` connect `Fundamentos y Virtualizacion` to `Servicios IP y VLANs`, `OSI, TCP/IP y Cisco IOS`, `WiFi Empresarial y RADIUS`, `Navegacion del Portal`?**
  _High betweenness centrality (0.331) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Redes Avanzado — Índice` (e.g. with `Redes Básico — Índice` and `Cableado Estructurado — Índice`) actually correct?**
  _`Redes Avanzado — Índice` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Avanzado B1 — Switches Cisco Fundamentos` (e.g. with `Básico B2 — Conceptos y Protocolos de Red` and `Avanzado script.js`) actually correct?**
  _`Avanzado B1 — Switches Cisco Fundamentos` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Cableado script.js (flashcards/quiz)`, `Avanzado script.js`, `Básico script.js` to the rest of the system?**
  _20 weakly-connected nodes found - possible documentation gaps or missing edges._