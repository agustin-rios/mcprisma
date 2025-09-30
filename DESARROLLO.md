# Guía de Desarrollo del Monorepo

## Arquitectura del Monorepo

El proyecto mcprisma está estructurado como un monorepo utilizando **npm workspaces**. Esta arquitectura permite gestionar múltiples paquetes relacionados en un solo repositorio.

```
mcprisma/
├── packages/
│   ├── db/          # Paquete de base de datos con Prisma
│   └── mcp/         # Paquete del servidor/cliente MCP
├── package.json     # Configuración del monorepo
└── README.md
```

## Flujo de Trabajo de Desarrollo

### 1. Instalación Inicial

```bash
# Clonar el repositorio
git clone https://github.com/agustin-rios/mcprisma.git
cd mcprisma

# Instalar todas las dependencias
npm install
```

### 2. Configurar el Paquete DB

```bash
cd packages/db
cp .env.example .env
npm run generate  # Genera el cliente de Prisma
npm run migrate   # Ejecuta las migraciones
```

### 3. Trabajar con los Paquetes

#### Desde la raíz del proyecto:

```bash
# Ejecutar Prisma Studio
npm run dev:db

# Ejecutar el servidor MCP
npm run dev:mcp

# Instalar una dependencia en un paquete específico
npm install <package> --workspace=db
npm install <package> --workspace=mcp
```

#### Desde el directorio de un paquete:

```bash
# Trabajar directamente en el paquete db
cd packages/db
npm run migrate
npm run dev

# Trabajar directamente en el paquete mcp
cd packages/mcp
npm run dev
```

## Integración entre Paquetes

### Usar el paquete DB desde MCP

Para usar Prisma Client en el paquete MCP, puedes importarlo así:

```javascript
// En packages/mcp/server.js o cualquier archivo del paquete mcp
const { prisma } = require('../db');

// Usar el cliente de Prisma
const users = await prisma.user.findMany();
```

## Próximos Pasos

1. **Completar la integración**: Conectar el servidor MCP con Prisma Client
2. **Agregar pruebas**: Implementar tests para ambos paquetes
3. **Documentación de API**: Documentar las herramientas MCP disponibles
4. **Ejemplos de uso**: Crear ejemplos prácticos de integración

## Comandos Útiles

```bash
# Ver estructura de paquetes instalados
npm ls --all --depth=0

# Ejecutar script en todos los paquetes
npm run <script> --workspaces

# Ejecutar script solo si existe
npm run <script> --workspaces --if-present

# Limpiar node_modules
rm -rf node_modules packages/*/node_modules
npm install
```

## Solución de Problemas

### Error al generar Prisma Client

Si encuentras errores al ejecutar `npm run generate`:
1. Verifica que el archivo `.env` existe en `packages/db/`
2. Asegúrate de que `DATABASE_URL` está correctamente configurado
3. Intenta limpiar y reinstalar: `npm install`

### Problemas con workspaces

Si los paquetes no se enlazan correctamente:
```bash
npm install --force
```
