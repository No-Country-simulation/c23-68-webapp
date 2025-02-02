import mongoose, { Schema, Document, model } from 'mongoose'

export interface ISavingGoal extends Document {
  name: string
  targetAmount: number
  currentAmount: number
  deadline: Date
  userId: mongoose.Types.ObjectId
  priority: string
}

export const typeCategory = 'Ahorro'

const SavingsGoalSchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    targetAmount: { type: Number, required: true, min: 1 },
    currentAmount: { type: Number, default: 0, min: 0 },
    deadline: { type: Date, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    priority: { type: String, required: true },
  },
  { timestamps: true }
)

export const SavingsGoalModel = model<ISavingGoal>(
  'SavingsGoal',
  SavingsGoalSchema
)

SavingsGoalSchema.index({ userId: 1 })
SavingsGoalSchema.index({ deadline: 1 })
SavingsGoalSchema.index({ userId: 1, deadline: 1 })
