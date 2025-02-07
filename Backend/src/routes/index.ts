// src/routes/barberRoutes.ts
import { Router } from 'express'
import Auth from './Auth'
import { routes } from './routes'
import Transaction from './Transaccion'
import Category from './Category'
import SavingsGoal from './SavingsGoal'
import Dashboard from './Dashboard'
import { poblateBD } from '../controllers/Development'
import { generateCategory } from '../controllers/GenerateCategory'

const router: Router = Router()
router.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

router.get('/development/poblateBD', poblateBD)
router.get('/development/poblateCategory', generateCategory)

router.use(routes.auth.base, Auth)
router.use(routes.transaction.base, Transaction)
router.use(routes.category.base, Category)
router.use(routes.savingsGoal.base, SavingsGoal)
router.use(routes.dashboard.base, Dashboard)

export default router
