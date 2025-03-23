import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// Load env variables
dotenv.config()

const app = express()

// Importar las rutas de los libros
import productosRouter from './routes/librosRoute.js';

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


//Usar las rutas
app.use('/libros', productosRouter); // LIBROS

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`)
})