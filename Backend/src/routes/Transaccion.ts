import { Router } from 'express'
import { routes } from './routes'
import {
  createControllerTransaction,
  deleteControllerTransaction,
  editControllerTransaction,
  getControllerTransaction,
} from '../controllers/Transactions'

const router: Router = Router()

router.post(routes.transaction.create.relative, createControllerTransaction)
router.get(routes.transaction.get.relative, getControllerTransaction)
router.patch(routes.transaction.update.relative, editControllerTransaction)
router.delete(routes.transaction.delete.relative, deleteControllerTransaction)

export default router
