# 📚 API Biblioteca2025

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Una API RESTful moderna para gestionar un sistema de biblioteca, construida con Node.js, Express y MySQL.

## 🚀 Características

- **Acceso Seguro a Base de Datos**: Utiliza variables de entorno para proteger credenciales sensibles
- **Agrupación de Conexiones**: Conexiones eficientes a la base de datos utilizando el pool de MySQL2
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

3. Crear un archivo `.env` en el directorio raíz con la siguiente estructura:
   ```
   DB_HOST=localhost
   DB_USER=tunombredeusuario
   DB_PASSWORD=tucontraseña
   DB_NAME=tubasededatos
   DB_PORT=3306
   PORT=3000
   ```

4. Iniciar el servidor:
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

## 📦 Estructura del Proyecto

```
api-biblioteca-bd-2025/
├── config.js                          # Configuración de conexión a la base de datos
├── index.js                           # Punto de entrada principal de la aplicación
├── .env                               # Variables de entorno (no incluido en git)
├── routes/                            # Rutas de la API 
│   └── librosRoute.js                 # Rutas de libros
├── controllers/                       # Controladores de la API
│   └── librosController.js            # Controladores de libros
├── db/                                # Consultas de la base de datos
│   └── librosQuery.js                 # Consultas de libros
└── package.json                       # Dependencias del proyecto
```

## 🔒 Variables de Entorno

| Variable | Descripción |
|----------|-------------|
| DB_HOST  | Dirección del host de la base de datos |
| DB_USER  | Nombre de usuario de la base de datos |
| DB_PASSWORD | Contraseña de la base de datos |
| DB_NAME  | Nombre de la base de datos |
| DB_PORT  | Puerto de la base de datos |
| PORT     | Puerto de la aplicación |

## 📝 Licencia

[MIT](./LICENSE)

## 👥 Colaboradores

- Madeling - Trabajo inicial
- Carlos Andres Perez Ubeda - Ajustes adicionales

---

⭐️ ¡Dale una estrella a este repositorio si lo encuentras útil! 