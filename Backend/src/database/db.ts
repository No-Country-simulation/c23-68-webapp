import mongoose from 'mongoose'
import { MONGO_URI } from '../config/config'

const connectDB = async (): Promise<void> => {
  try {
    const uri = MONGO_URI || ''
    await mongoose.connect(uri)
    console.log('mongoDB Conectado')
  } catch (error: any) {
    console.error('Error al conectar MongoDB:', error.message)
    process.exit(1)
  }
}

export default connectDB
