# MCP Package

Este paquete contiene la implementación del servidor y cliente MCP (Model Context Protocol) para la integración con Prisma.

## Servidor MCP

El servidor MCP proporciona herramientas para interactuar con la base de datos a través del protocolo MCP.

### Iniciar el servidor

```bash
npm run dev
# o
npm start
```

El servidor se ejecuta en modo stdio y está listo para recibir conexiones de clientes MCP.

## Cliente MCP

El cliente proporciona una interfaz para comunicarse con el servidor MCP.

### Uso del cliente

```javascript
const { PrismaMCPClient } = require('mcp');

async function example() {
  const client = new PrismaMCPClient();
  await client.connect();
  
  // Listar herramientas disponibles
  const tools = await client.listTools();
  console.log('Available tools:', tools);
  
  // Ejecutar una consulta
  const result = await client.queryDatabase('User', 'findMany');
  console.log('Query result:', result);
  
  await client.close();
}
```

## Herramientas disponibles

### query_database

Ejecuta consultas en la base de datos usando Prisma.

**Parámetros:**
- `model` (string): El modelo de Prisma a consultar (ej: User, Post)
- `operation` (string): La operación a realizar (findMany, findUnique, create, update, delete)
- `data` (object): Los datos para la operación

## Próximos pasos

- Integración completa con el paquete `db` de Prisma
- Implementación de operaciones CRUD completas
- Validación de esquemas
- Manejo de errores mejorado
