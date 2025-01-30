import express, { Application } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routes'
import { validateApiKey } from './helpers/validator'
import cookieParser from 'cookie-parser'

const app: Application = express()

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174']

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true,
  })
)
app.use(bodyParser.json())
app.use(cookieParser())

app.use(validateApiKey)
app.use(routes)

export default app
