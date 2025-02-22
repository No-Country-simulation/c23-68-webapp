import { Schema, model, Document, Types } from 'mongoose'

interface SavingsGoal extends Document {
  user: Types.ObjectId
  name: string
  targetAmount: number
  savedAmount: number
  deadline: Date
  progress: number
}

const SavingsGoalSchema = new Schema<SavingsGoal>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  targetAmount: { type: Number, required: true },
  savedAmount: { type: Number, default: 0 },
  deadline: { type: Date, required: true },
  progress: { type: Number, default: 0 },
})

SavingsGoalSchema.pre('save', function (next) {
  this.progress = (this.savedAmount / this.targetAmount) * 100
  next()
})

export const SavingsGoalModel = model<SavingsGoal>(
  'SavingsGoal',
  SavingsGoalSchema
)

SavingsGoalSchema.index({ user: 1 })
SavingsGoalSchema.index({ deadline: 1 })
SavingsGoalSchema.index({ user: 1, progress: -1 })
