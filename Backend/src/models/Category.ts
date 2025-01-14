import { Schema, model, Document } from 'mongoose'

interface Category extends Document {
  name: string
  type: 'income' | 'expense'
}

const CategorySchema = new Schema<Category>({
  name: { type: String, required: true },
  type: { type: String, enum: ['income', 'expense'], required: true },
})

export const CategoryModel = model<Category>('Category', CategorySchema)
