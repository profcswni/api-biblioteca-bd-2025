# 📚 API Biblioteca2025

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![PostgreSQL](https://img.shields.io/badge/postgresql-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Una API RESTful moderna para gestionar un sistema de biblioteca, construida con Node.js, Express y PostgreSQL.

## 🚀 Características

- **Acceso Seguro a Base de Datos**: Utiliza variables de entorno para proteger credenciales sensibles
- **Agrupación de Conexiones**: Conexiones eficientes a la base de datos utilizando el pool de pg
- **API RESTful**: Endpoints bien estructurados para la gestión de recursos de biblioteca
- **JavaScript Moderno**: Sintaxis ES6+ con import/export

## 🛠️ Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/profcswni/api-biblioteca-bd-2025.git
   cd api-biblioteca-bd-2025
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar PostgreSQL:
   - Instalar PostgreSQL si aún no está instalado
   - Crear una base de datos llamada `biblioteca2025`
   - Importar el esquema desde el archivo `biblioteca-2025-postgres.sql`:
     ```bash
     psql -U postgres -f biblioteca-2025-postgres.sql
     ```

4. Crear un archivo `.env` en el directorio raíz con la siguiente estructura:
   ```
   DB_HOST=localhost
   DB_USER=postgres
   DB_PASSWORD=tucontraseña
   DB_NAME=biblioteca2025
   DB_PORT=5432
   PORT=3000
   ```

5. Iniciar el servidor:
   ```bash
   npm run dev
   ```

## 🔌 Endpoints de la API

### Libros

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET    | /libros  | Obtener todos los libros |
| GET    | /libros/:id | Obtener libro por ID |
| POST   | /libros  | Crear nuevo libro |
| PUT    | /libros/:id | Actualizar un libro |
| DELETE | /libros/:id | Eliminar un libro |

### Autores

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET    | /autores  | Obtener todos los autores |
| GET    | /autores/:id | Obtener autor por ID |
| POST   | /autores  | Crear nuevo autor |
| PUT    | /autores/:id | Actualizar un autor |
| DELETE | /autores/:id | Eliminar un autor |

## 📦 Estructura del Proyecto

```
api-biblioteca-bd-2025/
├── config.js                          # Configuración de conexión a la base de datos
├── index.js                           # Punto de entrada principal de la aplicación
├── .env                               # Variables de entorno (no incluido en git)
├── biblioteca-2025-postgres.sql       # Esquema de la base de datos PostgreSQL
├── routes/                            # Rutas de la API 
│   ├── librosRoute.js                 # Rutas de libros
│   └── autoresRoute.js                # Rutas de autores
├── controllers/                       # Controladores de la API
│   ├── librosController.js            # Controladores de libros
│   └── autoresController.js           # Controladores de autores
├── db/                                # Consultas de la base de datos
│   ├── librosQuery.js                 # Consultas de libros
│   └── autoresQuery.js                # Consultas de autores
└── package.json                       # Dependencias del proyecto
```

## 🔒 Variables de Entorno

| Variable | Descripción |
|----------|-------------|
| DB_HOST  | Dirección del host de la base de datos |
| DB_USER  | Nombre de usuario de la base de datos |
| DB_PASSWORD | Contraseña de la base de datos |
| DB_NAME  | Nombre de la base de datos |
| DB_PORT  | Puerto de la base de datos (5432 para PostgreSQL) |
| PORT     | Puerto de la aplicación |

## 📝 Licencia

[MIT](./LICENSE)

## 👥 Colaboradores

- Madeling - Trabajo inicial
- Carlos Andres Perez Ubeda - Ajustes adicionales

---

⭐️ ¡Dale una estrella a este repositorio si lo encuentras útil! 