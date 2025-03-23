# 📚 Biblioteca2025 API

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

A modern RESTful API for managing a library system, built with Node.js, Express, and MySQL.

## 🚀 Features

- **Secure Database Access**: Uses environment variables to protect sensitive credentials
- **Connection Pooling**: Efficient database connections using MySQL2 pool
- **RESTful API**: Well-structured endpoints for library resource management
- **Modern JavaScript**: ES6+ syntax with import/export

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/biblioteca2025.git
   cd biblioteca2025
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following structure:
   ```
   DB_HOST=localhost
   DB_USER=yourusername
   DB_PASSWORD=yourpassword
   DB_NAME=biblioteca2025
   DB_PORT=3306
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm start
   ```

## 🔌 API Endpoints

### Books (Libros)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /libros  | Get all books |
| GET    | /libros/:id | Get book by ID |
| POST   | /libros  | Create new book |
| PUT    | /libros/:id | Update a book |
| DELETE | /libros/:id | Delete a book |

## 📦 Project Structure

```
biblioteca2025/
├── config.js          # Database connection configuration
├── index.js           # Main application entry point
├── .env               # Environment variables (not in git)
├── routes/
│   └── librosRoute.js # Book routes
├── controllers/       # API controllers
├── models/            # Database models
└── package.json       # Project dependencies
```

## 🔒 Environment Variables

| Variable | Description |
|----------|-------------|
| DB_HOST  | Database host address |
| DB_USER  | Database username |
| DB_PASSWORD | Database password |
| DB_NAME  | Database name |
| DB_PORT  | Database port |
| PORT     | Application port |

## 📝 License

MIT

## 👥 Contributors

- Your Name - Initial work

---

⭐️ Star this repository if you find it useful! 