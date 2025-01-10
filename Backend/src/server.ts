import app from './app'
import { PORT } from './config/config'
import connectDB from '../src/database/db'

const port = PORT || 4000

// Conectar a la base de datos
connectDB()

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando http://localhost:${port}`)
})
