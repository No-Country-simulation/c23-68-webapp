import { Schema, model, Document, Types } from 'mongoose'
import { TransactionType } from '../interface/categorys'

export interface Transaction extends Document {
  user: Types.ObjectId
  amount: number
  type: TransactionType
  category: string
  description?: string
  date: Date
}

const TransactionSchema = new Schema<Transaction>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ['Ingreso', 'Gasto'], required: true },
  category: { type: String, required: true },
  description: { type: String },
  date: { type: Date, default: Date.now },
})

export const TransactionModel = model<Transaction>(
  'Transaction',
  TransactionSchema
)

TransactionSchema.index({ user: 1, date: -1 })
TransactionSchema.index({ user: 1, type: 1 })
TransactionSchema.index({ category: 1 })
TransactionSchema.index({ user: 1, category: 1 })
