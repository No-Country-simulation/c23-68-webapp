import { Schema, model, Document, Types } from 'mongoose'

interface Transaction extends Document {
  user: Types.ObjectId
  amount: number
  type: 'income' | 'expense'
  category: Types.ObjectId
  description?: string
  date: Date
}

const TransactionSchema = new Schema<Transaction>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ['income', 'expense'], required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  description: { type: String },
  date: { type: Date, default: Date.now },
})

export const TransactionModel = model<Transaction>(
  'Transaction',
  TransactionSchema
)
