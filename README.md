# canoRedStudy

Portal educativo con tres cursos de redes y cableado, en formato HTML estático con flashcards y quizzes interactivos. Incluye un grafo de conocimiento generado con [graphify](https://pypi.org/project/graphifyy/) que mapea las relaciones entre módulos, conceptos y cursos.

## Cursos

| Curso | Módulos | Temas principales |
|-------|---------|-------------------|
| **REDES BASICO** | 5 bloques | Introducción a redes, OSI/TCP-IP, direccionamiento IP, WiFi, virtualización (Proxmox) |
| **REDES AVANZADO** | 6 bloques | Switches Cisco, VLANs/STP, switches Ubiquiti, RADIUS/802.1X, WiFi empresarial, Multicast/PIM |
| **CABLEADO ESTRUCTURADO** | 6 bloques | Medios de cobre (UTP/STP), canalización, data center, trabajo de campo, fibra óptica, normas TIA/EIA |

Cada curso tiene su propio `index.html` con navegación a los bloques, `script.js` con la lógica de flashcards y quizzes, y `styles.css`.

## Estructura

```
MENU_PRINCIPAL.html              ← entrada del portal
cableado-estructurado/files/     ← curso 1 (index + 6 bloques)
redes-basico/files/              ← curso 2 (index + 5 bloques)
redes-avanzado/files/            ← curso 3 (index + 6 bloques)
graphify-out/                    ← grafo de conocimiento
  ├── graph.html                 ← visualización interactiva
  ├── graph.json                 ← datos del grafo
  └── GRAPH_REPORT.md            ← reporte de auditoría
```

## Cómo usar

Abrir `MENU_PRINCIPAL.html` en cualquier navegador. No requiere servidor.

## Grafo de conocimiento

- **51 nodos · 59 aristas · 13 comunidades**
- God nodes (más conectados): los tres índices de curso actúan como hubs centrales
- Conexiones cruzadas detectadas: el bloque de WiFi básico se vincula semánticamente con el de WiFi empresarial Ubiquiti del avanzado

Para explorar el grafo, abrir `graphify-out/graph.html` en el navegador.
