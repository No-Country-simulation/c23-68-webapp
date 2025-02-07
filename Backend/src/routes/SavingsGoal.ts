import { Router } from 'express'
import { routes } from './routes'
import {
  createSavingGoalsController,
  deleteSavingGoalsController,
  getSavingGoalsController,
  poblateSavings,
  updateSavingGoalsController,
} from '../controllers/SavingsGoal'

const router: Router = Router()

router.post(routes.savingsGoal.create.relative, createSavingGoalsController)
router.post(routes.savingsGoal.poblate.relative, poblateSavings)
router.get(routes.savingsGoal.get.relative, getSavingGoalsController)
router.patch(routes.savingsGoal.update.relative, updateSavingGoalsController)
router.delete(routes.savingsGoal.delete.relative, deleteSavingGoalsController)

export default router
