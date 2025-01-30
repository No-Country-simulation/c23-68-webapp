import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/config'
import { IDataLogin } from '../controllers/Auth'

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
      message: 'Token válido',
      data: decoded,
    }
  } catch (error) {
    return {
      status: false,
      message: 'token inválido',
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

export function getDataToken(token: string) {
  if (!token) {
    return {
      status: false,
      message: 'Token no proporcionado',
    }
  }
  const decoded = verifyToken(token)

  if (!decoded.status) {
    return {
      status: false,
      message: decoded.message,
    }
  }

  return {
    status: true,
    message: 'Token válido',
    data: decoded.data as IDataLogin,
  }
}
