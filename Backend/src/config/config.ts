import * as dotenv from 'dotenv'
dotenv.config()

export const {
  PORT = 3001,
  MONGO_URI = '',
  API_KEY_RESEND = '',
  JWT_SECRET = 'SecretToken',
} = process.env
