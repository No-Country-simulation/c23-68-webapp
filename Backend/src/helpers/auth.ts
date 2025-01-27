import { IResponse } from '../interface/reponse'

export function validationsLogin(
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

export function validationsRegister(
  email: string,
  password: string,
  name: string
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

  if (!name) {
    const reponse = {
      status: false,
      message: 'El nombre es requerido',
    }
    return reponse
  }

  return {
    status: true,
    message: 'OK',
  }
}
