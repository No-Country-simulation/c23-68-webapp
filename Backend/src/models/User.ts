import { Schema, model, Document } from 'mongoose'
import crypto from 'crypto'

export interface User extends Document {
  userId: string
  name: string
  email: string
  password: string
  registrationDate: Date
  currency: string
}

const UserSchema = new Schema<User>({
  userId: { type: String, default: crypto.randomUUID, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now },
  currency: { type: String, default: 'USD' },
})

UserSchema.index({ registrationDate: -1 })

export const UserModel = model<User>('User', UserSchema)
