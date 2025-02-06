import { getUserByEmail } from '../database/User'
import { IResponse } from '../interface/reponse'
import { getDataToken } from './jwt'

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

export async function getIdUser(token: string) {
  const dataToken = getDataToken(token)

  if (!dataToken.data) {
    return {
      status: false,
      message: dataToken.message,
    }
  }

  const { email } = dataToken.data

  const dataUser = await getUserByEmail(email)
  if (!dataUser.data) {
    return {
      status: false,
      message: dataUser.message,
    }
  }

  const { _id } = dataUser.data

  return {
    status: true,
    message: 'Usuario encontrado',
    data: {
      dataID: _id,
    },
  }
}
