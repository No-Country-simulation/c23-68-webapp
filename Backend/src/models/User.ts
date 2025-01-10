import mongoose, { Document, Schema } from 'mongoose'

export interface IUser extends Document {
  name: string
  email: string
  password: string
  phone: string
  createdAt: number
  uuid: string
  isVerified: boolean
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  uuid: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    index: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Number,
    default: () => Math.floor(Date.now() / 1000),
  },
})

export default mongoose.model<IUser>('User', UserSchema)
