# mcprisma

Repositorio de pruebas para integrar Prisma (ORM para bases de datos) con MCP (Model Context Protocol). El objetivo es experimentar con:

- 🔗 Integración MCP como servidor/cliente
- 🗂 Modelado con Prisma y migraciones en base de datos
- 🧪 Pruebas de comunicación entre MCP y Prisma (consultas, mutaciones, validación de esquemas)

## Estructura del Monorepo

Este proyecto está organizado como un monorepo con npm workspaces, conteniendo los siguientes paquetes:

### 📦 Paquetes

#### `packages/db`
Paquete de base de datos con Prisma ORM. Contiene:
- Configuración de Prisma
- Esquemas de base de datos
- Migraciones
- Cliente de Prisma

#### `packages/mcp`
Paquete de MCP (Model Context Protocol). Contiene:
- Servidor MCP para exponer operaciones de base de datos
- Cliente MCP para comunicarse con el servidor
- Herramientas para integración con Prisma

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/agustin-rios/mcprisma.git
cd mcprisma
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar el paquete de base de datos:
```bash
cd packages/db
cp .env.example .env
npm run generate
npm run migrate
```

## Scripts disponibles

Desde la raíz del proyecto:

```bash
# Desarrollo del paquete db
npm run dev:db

# Desarrollo del paquete mcp
npm run dev:mcp

# Construir todos los paquetes
npm run build

# Ejecutar tests en todos los paquetes
npm run test
```

## Uso

### Paquete DB

Consulta la documentación en [`packages/db/README.md`](packages/db/README.md)

### Paquete MCP

Consulta la documentación en [`packages/mcp/README.md`](packages/mcp/README.md)

## Licencia

MIT - Ver [LICENSE](LICENSE) para más detalles. 
