# TP-FINAL

Proyecto final en TypeScript que gestiona usuarios y roles con drag & drop y almacenamiento en LocalStorage.

## Estructura de carpetas

TP-FINAL/
│
├─ src/
│ ├─ eventListeners/ # Manejadores de eventos
│ ├─ front/ # Componentes de frontend (renderCardUsers.ts)
│ ├─ localStorage/ # Funciones para manejar LocalStorage
│ │ ├─ addUser.ts
│ │ ├─ deleteUsers.ts
│ │ ├─ getUsers.ts
│ │ └─ updateUser.ts
│ └─ script.ts # Script principal
│
├─ dist/ # Archivos compilados por TypeScript
├─ index.html # Página principal
├─ styles.css # Estilos
├─ package.json
├─ tsconfig.json
└─ README.md


## Requisitos

- Node.js
- TypeScript

## Instalación

1. Clonar el repositorio:

```bash
git clone <url-del-repo>

npm install

npm run build
