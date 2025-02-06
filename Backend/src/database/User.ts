import { FilterQuery } from 'mongoose'
import { User, UserModel } from '../models/User'
import bcrypt from 'bcrypt'

export interface ICreateUser {
  name: string
  email: string
  password: string
  currency?: string
}

export async function createUser(userData: ICreateUser) {
  try {
    const existingUser = await UserModel.findOne({ email: userData.email })
    if (existingUser) {
      return {
        status: false,
        message: 'El correo electrónico ya está en uso por otro usuario',
      }
    }

    if (typeof userData.name !== 'string' || !userData.name) {
      return {
        status: false,
        message: 'El nombre es requerido',
      }
    }

    if (userData.currency !== undefined && userData.currency === '') {
      return {
        status: false,
        message: 'Ingrese el campo de una forma correcta',
      }
    }
    if (
      userData.currency !== undefined &&
      typeof userData.currency === 'number'
    ) {
      return {
        status: false,
        message: 'El campo currency debe ser un valor campo de texto',
      }
    }
    if (userData.currency) {
      const allowedCurrencies = ['USD', 'EUR', 'CLP', 'PEN', 'VEF']
      if (!allowedCurrencies.includes(userData.currency)) {
        return {
          status: false,
          message: `Moneda no permitida, las monedas permitidas son: ${allowedCurrencies.join(
            ','
          )}`,
        }
      }
    }

    if (userData.password.length <= 6) {
      return {
        status: false,
        message: 'La contraseña debe tener al menos 6 caracteres',
      }
    }

    if (userData.name.length < 3) {
      return {
        status: false,
        message: 'El nombre debe tener al menos 3 caracteres',
      }
    }

    if (
      !userData.password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W]{6,}$/
      )
    ) {
      return {
        status: false,
        message:
          'La contraseña debe tener al menos 6 caracteres, una letra mayúscula, una letra minúscula y un número',
      }
    }

    if (!userData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return {
        status: false,
        message: 'El correo electrónico no es válido',
      }
    }

    const hashedPassword = await bcrypt.hash(userData.password, 7)

    const user = new UserModel({
      ...userData,
      password: hashedPassword,
    })

    await user.save()
    return {
      status: true,
      message: 'Usuario creado exitosamente',
      data: user,
    }
  } catch (error) {
    return {
      status: false,
      message: 'Error al crear el usuario',
    }
  }
}

export async function getUserByEmail(email: string) {
  try {
    const user = await UserModel.findOne({ email })
    if (!user) {
      return {
        status: false,
        message: 'Usuario no encontrado',
      }
    }
    return {
      status: true,
      message: 'Usuario encontrado',
      data: user,
    }
  } catch (error) {
    return {
      status: false,
      message: 'Error al obtener el usuario',
    }
  }
}

export async function getUsers(
  filters: FilterQuery<User> = {},
  limit = 10,
  skip = 0
) {
  try {
    const users = await UserModel.find(filters).limit(limit).skip(skip)
    return {
      status: true,
      message: 'Usuarios encontrados',
      data: users,
    }
  } catch (error) {
    return {
      status: false,
      message: 'Error al obtener los usuarios',
    }
  }
}

export async function updateUser(
  userId: string,
  updateData: Partial<{
    name: string
    email: string
    password: string
    currency: string
  }>
) {
  try {
    if (updateData.email) {
      const existingUser = await UserModel.findOne({
        email: updateData.email,
        userId: { $ne: userId },
      })
      if (existingUser) {
        return {
          status: false,
          message: 'El correo electrónico ya está en uso por otro usuario',
        }
      }
    }

    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10)
    }

    const updatedUser = await UserModel.findOneAndUpdate(
      { userId },
      updateData,
      {
        new: true,
        runValidators: true,
      }
    )

    if (!updatedUser) {
      return {
        status: false,
        message: 'Usuario no encontrado',
      }
    }

    return {
      status: true,
      message: 'Usuario actualizado exitosamente',
      data: updatedUser,
    }
  } catch (error) {
    return {
      status: false,
      message: 'Error al actualizar el usuario',
    }
  }
}

export async function deleteUser(userId: string) {
  try {
    const deletedUser = await UserModel.findOneAndDelete({ userId })
    if (!deletedUser) {
      return {
        status: false,
        message: 'Usuario no encontrado',
      }
    }
    return {
      status: true,
      message: 'Usuario eliminado exitosamente',
      data: deletedUser,
    }
  } catch (error) {
    return {
      status: false,
      message: 'Error al eliminar el usuario',
    }
  }
}
