import { IResponse } from '../interface/reponse'
import { Request, Response } from 'express'

function validationsLogin(
  email: string,
  password: string
): IResponse<undefined> {
  if (!email) {
    const reponse = {
      status: false,
      message: 'El email es requerido',
    }
    return reponse
  }

  if (!password) {
    const reponse = {
      status: false,
      message: 'La contraseña es requerida',
    }
    return reponse
  }

  return {
    status: true,
    message: 'OK',
  }
}

export async function logout(_req: Request, res: Response) {
  res.clearCookie('token')
  const response: IResponse<undefined> = {
    status: true,
    message: 'Cierre de sesión exitoso',
  }
  res.status(200).json(response)
}
