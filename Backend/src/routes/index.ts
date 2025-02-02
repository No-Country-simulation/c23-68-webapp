// src/routes/barberRoutes.ts
import { Router } from 'express'
import Auth from './Auth'
import { routes } from './routes'
import Transaction from './Transaccion'
import Category from './Category'
import SavingsGoal from './SavingsGoal'

const router: Router = Router()
router.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})
router.use(routes.auth.base, Auth)
router.use(routes.transaction.base, Transaction)
router.use(routes.category.base, Category)
router.use(routes.savingsGoal.base, SavingsGoal)
export default router
