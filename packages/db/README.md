# DB Package

Este paquete contiene la configuración de Prisma para la gestión de la base de datos.

## Configuración

1. Copia el archivo `.env.example` a `.env`:
```bash
cp .env.example .env
```

2. Instala las dependencias:
```bash
npm install
```

3. Genera el cliente de Prisma:
```bash
npm run generate
```

4. Ejecuta las migraciones:
```bash
npm run migrate
```

## Scripts disponibles

- `npm run dev` - Abre Prisma Studio para explorar la base de datos
- `npm run migrate` - Ejecuta migraciones de desarrollo
- `npm run generate` - Genera el cliente de Prisma
- `npm run push` - Sincroniza el esquema con la base de datos
- `npm run seed` - Ejecuta el script de seed

## Modelo de datos

El esquema incluye modelos de ejemplo:
- **User**: Usuarios del sistema
- **Post**: Publicaciones asociadas a usuarios
