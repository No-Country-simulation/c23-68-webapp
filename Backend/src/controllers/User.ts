import { Request, Response } from 'express'
import { UserModel } from '../models/User'

export function deleteUser(req: Request, res: Response) {
  const { id } = req.body

  if (!id) {
    res.status(400).json({
      status: false,
      message: 'Falta el campo id',
    })
    return
  }

  UserModel.findByIdAndDelete(id)
    .then((user) => {
      if (!user) {
        res
          .status(404)
          .json({ status: false, message: 'Usuario no encontrado' })
        return
      }
      res.json({ status: true, message: 'Usuario eliminado exitosamente' })
    })
    .catch((_err) => {
      res
        .status(500)
        .json({ status: false, message: 'Error al eliminar el usuario' })
    })
}

export function updateUser(req: Request, res: Response) {
  const { id, name, email } = req.body

  if (!id || !name || !email) {
    res.status(400).json({
      status: false,
      message: 'Faltan campos obligatorios',
    })
    return
  }

  UserModel.findByIdAndUpdate(id, { name, email })
    .then((user) => {
      if (!user) {
        res
          .status(404)
          .json({ status: false, message: 'Usuario no encontrado' })
        return
      }
      res.json({ status: true, message: 'Usuario actualizado exitosamente' })
    })
    .catch((_err) => {
      res
        .status(500)
        .json({ status: false, message: 'Error al actualizar el usuario' })
    })
}
