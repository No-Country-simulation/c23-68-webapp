import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/config'

export function createToken(payload: any) {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '12h',
  })

  return token
}

export function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    return {
      status: true,
      data: decoded,
    }
  } catch (error) {
    return {
      status: false,
      message: 'Invalid token',
    }
  }
}

export function refreshToken(token: string) {
  const decoded = jwt.decode(token)

  if (!decoded) {
    return {
      status: false,
      message: 'Invalid token',
    }
  }

  const newToken = createToken(decoded)
  return {
    status: true,
    data: newToken,
  }
}
