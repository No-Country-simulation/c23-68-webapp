import app from './app'
import { PORT } from './config/config'
import connectDB from '../src/database/db'

const port = PORT || 4000

connectDB()

app.listen(port, () => {
  console.log(`Servidor escuchando http://localhost:${port}`)
})
