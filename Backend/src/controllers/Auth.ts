import { createUser, getUserByEmail } from '../database/User'
import { IResponse } from '../interface/reponse'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { createToken, verifyToken } from '../helpers/jwt'
import { NODE_ENV } from '../config/config'
import { validationsLogin, validationsRegister } from '../helpers/auth'

export interface IDataLogin {
  userId: string
  name: string
  email: string
  currency: string
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body
  const validate = validationsLogin(email, password)
  if (!validate.status) {
    res.status(400).json(validate)
    return
  }

  const user = await getUserByEmail(email)

  if (!user.status || !user.data) {
    const response: IResponse<undefined> = {
      status: false,
      message: 'Usuario no encontrado',
    }
    res.status(400).json(response)
    return
  }

  const isValidPassword = bcrypt.compareSync(password, user.data.password)

  if (!isValidPassword) {
    const response: IResponse<undefined> = {
      status: false,
      message: 'Contraseña incorrecta',
    }
    res.status(400).json(response)
    return
  }

  const dataPublicUser: IDataLogin = {
    userId: user.data.userId,
    name: user.data.name,
    email: user.data.email,
    currency: user.data.currency,
  }

  const token = createToken(dataPublicUser)

  const response = {
    status: true,
    message: 'Inicio de sesión exitoso',
    data: dataPublicUser,
  }
  res
    .cookie('acces_token', token, {
      httpOnly: true,
      secure: NODE_ENV === 'production',
      sameSite: 'none',
    })
    .status(200)
    .json(response)
}

export async function register(req: Request, res: Response) {
  const { email, password, name, currency } = req.body
  const validate = validationsRegister(email, password, name)
  if (!validate.status) {
    res.status(400).json(validate)
    return
  }

  const UserResponse = await createUser({ email, password, name, currency })

  if (!UserResponse.status) {
    res.status(400).json(UserResponse.message)
    return
  }

  const response: IResponse<{ token: string }> = {
    status: true,
    message: UserResponse.message,
  }
  res.status(200).json(response)
}

export async function isLogged(req: Request, res: Response) {
  const token = req.cookies.acces_token
  if (!token) {
    const response: IResponse<undefined> = {
      status: false,
      message: 'No se ha iniciado sesión',
    }
    res.status(400).json(response)
    return
  }

  const tokenDecoded = verifyToken(token)

  if (!tokenDecoded.status) {
    const response: IResponse<undefined> = {
      status: false,
      message: 'Sesión no válida',
    }
    res.status(400).json(response)
    return
  }

  const response = {
    status: true,
    message: 'Sesión iniciada',
    data: tokenDecoded.data,
  }
  res.status(200).json(response)
}

export function logout(_req: Request, res: Response) {
  res.clearCookie('acces_token')
  const response: IResponse<undefined> = {
    status: true,
    message: 'Cierre de sesión exitoso',
  }
  res.status(200).json(response)
}
