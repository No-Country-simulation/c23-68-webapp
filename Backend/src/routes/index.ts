// src/routes/barberRoutes.ts
import { Router } from 'express'
import Auth from './Auth'
import { routes } from './routes'

const router: Router = Router()
router.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})
router.use(routes.auth.base, Auth)
export default router
