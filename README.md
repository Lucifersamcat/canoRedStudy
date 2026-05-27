# canoRedStudy

Portal educativo con tres cursos de redes y cableado, en formato HTML estático con flashcards y quizzes interactivos. Incluye un grafo de conocimiento generado con [graphify](https://pypi.org/project/graphifyy/) que mapea las relaciones entre módulos, conceptos y cursos.

## Cursos

| Curso | Módulos | Temas principales |
|-------|---------|-------------------|
| **REDES BASICO** | 6 bloques | Introducción a redes, OSI/TCP-IP, direccionamiento IP, WiFi, virtualización (Proxmox), NAT/IPv6 |
| **REDES AVANZADO** | 7 bloques | Switches Cisco, VLANs/STP, switches Ubiquiti, RADIUS/802.1X, WiFi empresarial, Multicast/PIM, Seguridad L2 |
| **CABLEADO ESTRUCTURADO** | 7 bloques | Medios de cobre (UTP/STP), canalización, data center, trabajo de campo, fibra óptica, consideraciones profesionales, presupuesto de obra |

Cada curso tiene su propio `index.html` con navegación a los bloques, `script.js` con la lógica de flashcards y quizzes, y `styles.css`.

## Estructura

```
index.html                       ← entrada del portal
cableado-estructurado/files/     ← curso 1 (index + 7 bloques)
redes-basico/files/              ← curso 2 (index + 6 bloques)
redes-avanzado/files/            ← curso 3 (index + 7 bloques)
graphify-out/                    ← grafo de conocimiento
  ├── .graphify_chunk_01.json    ← nodos, aristas y metadatos del grafo
  └── cost.json                  ← registro de tokens usados en la generación
```

## Cómo usar

Abrir `index.html` en cualquier navegador. No requiere servidor.

## Grafo de conocimiento

- **62 nodos · 62 aristas · 12 comunidades**
- God nodes (más conectados): los tres índices de curso actúan como hubs centrales
- Conexiones cruzadas detectadas: el bloque de WiFi básico se vincula semánticamente con el de WiFi empresarial Ubiquiti del avanzado
