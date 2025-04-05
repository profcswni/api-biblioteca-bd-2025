import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// Load env variables
dotenv.config()

const app = express()

// Importar las rutas de los libros
import productosRouter from './routes/librosRoute.js';
// Importar las rutas de los autores
import autorRouter from './routes/autoresRoute.js';

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


//Usar las rutas
app.use('/libros', productosRouter); // LIBROS
app.use('/autores', autorRouter); // AUTORES

const port =
    process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})