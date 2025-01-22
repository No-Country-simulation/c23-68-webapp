import { Request, Response, NextFunction } from 'express'
import { API_KEY } from '../config/config'

const PUBLIC_ROUTES = ['/health']

export function validateApiKey(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const apiKey = req.header('x-api-key')
  const validApiKey = API_KEY

  if (PUBLIC_ROUTES.includes(req.path)) {
    return next()
  }

  if (!apiKey) {
    res.status(401).json({ message: 'API key is required' })
    return
  }

  if (apiKey !== validApiKey) {
    res.status(403).json({ message: 'Invalid API key' })
    return
  }

  next()
}
