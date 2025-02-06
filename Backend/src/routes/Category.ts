import { Router } from 'express'
import { routes } from './routes'
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoriesController,
  getCategoriesController,
  updateCategoryController,
} from '../controllers/Category'

const router: Router = Router()

router.post(routes.category.create.relative, createCategoryController)
router.get(routes.category.getAll.relative, getAllCategoriesController)
router.get(routes.category.get.relative, getCategoriesController)
router.patch(routes.category.update.relative, updateCategoryController)
router.delete(routes.category.delete.relative, deleteCategoryController)

export default router
