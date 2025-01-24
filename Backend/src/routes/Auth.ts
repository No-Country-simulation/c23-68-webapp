import { Router } from 'express'
import { routes } from './routes'
import { isLogged, login, logout, register } from '../controllers/Auth'

const router: Router = Router()

router.post(routes.auth.login.relative, login)
router.post(routes.auth.register.relative, register)
router.post(routes.auth.logout.relative, logout)
router.get(routes.auth.getDataCurrentUser.relative, isLogged)

export default router
