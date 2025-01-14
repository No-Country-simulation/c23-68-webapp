import { Schema, model, Document } from 'mongoose'

interface User extends Document {
  name: string
  email: string
  password: string
  registrationDate: Date
  currency: string
}

const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now },
  currency: { type: String, default: 'USD' },
})

export const UserModel = model<User>('User', UserSchema)
