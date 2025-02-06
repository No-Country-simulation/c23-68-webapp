import { Router } from 'express'
import { routes } from './routes'
import {
  compareIncomeExpenseController,
  getExpensePercentageController,
  getIncomeByCategoryController,
  getTotalExpenseController,
  getTotalIncomeController,
} from '../controllers/Dashboard'

const router: Router = Router()

const {
  getTotalIncome,
  getTotalExpense,
  getExpensePercentage,
  getIncomeByCategory,
  compareIncomeExpense,
} = routes.dashboard

router.get(getTotalIncome.relative, getTotalIncomeController)
router.get(getTotalExpense.relative, getTotalExpenseController)
router.get(getExpensePercentage.relative, getExpensePercentageController)
router.get(getIncomeByCategory.relative, getIncomeByCategoryController)
router.get(compareIncomeExpense.relative, compareIncomeExpenseController)

export default router
