// src/routes/barberRoutes.ts
import { Router } from 'express'

import { routes } from './routes'
import { logout } from '../controllers/Auth'
import { getAllTransactions, createTransaction, updateTransaction, deleteTransaction } from '../controllers/TransactionController';

const router: Router = Router()

router.get(routes.auth.logout.relative, logout)
router.get(routes.transactions.getAll.relative, getAllTransactions)
router.post(routes.transactions.create.relative, createTransaction)
router.put(routes.transactions.update.relative, updateTransaction)
router.delete(routes.transactions.delete.relative, deleteTransaction)
export default router
