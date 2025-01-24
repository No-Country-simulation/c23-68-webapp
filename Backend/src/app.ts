import express, { Application } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routes'
import { validateApiKey } from './helpers/validator'
import cookieParser from 'cookie-parser'

const app: Application = express()

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

app.use(validateApiKey)
app.use(routes)

export default app
