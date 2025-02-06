import { Schema, model, Document } from 'mongoose'
import { TransactionType } from '../interface/categorys'

interface Category extends Document {
  type: TransactionType
  subcategories: string[]
}

const CategorySchema = new Schema<Category>({
  type: {
    type: String,
    enum: ['Ingreso', 'Gasto'],
    required: true,
    unique: true,
  },
  subcategories: { type: [String], default: [] },
})

export const CategoryModel = model<Category>('Category', CategorySchema)
