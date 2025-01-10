// src/routes/barberRoutes.ts
import { Router } from 'express'

import { routes } from './routes'
import { logout } from '../controllers/Auth'

const router: Router = Router()

router.get(routes.auth.logout.relative, logout)
export default router
