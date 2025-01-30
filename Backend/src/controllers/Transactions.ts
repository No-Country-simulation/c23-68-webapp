import { Request, Response } from 'express'
import {
  createTransaction,
  deleteTransaction,
  editTransaction,
  getTransactions,
} from '../database/Transactions'
import { getUserByEmail } from '../database/User'
import { getDataToken } from '../helpers/jwt'
import { TransactionType } from '../interface/categorys'
import { getCategories } from '../database/Category'

export async function createControllerTransaction(req: Request, res: Response) {
  const { amount, type, category, description } = req.body
  const token = req.cookies.acces_token

  const dataToken = getDataToken(token)

  if (!dataToken.data) {
    res.status(401).json({
      status: false,
      message: 'No se ha iniciado sesión',
    })
    return
  }

  const { email } = dataToken.data

  const dataUser = await getUserByEmail(email)
  if (!dataUser.data) {
    res.status(404).json({
      status: false,
      message: 'Usuario sin registro',
    })
    return
  }

  const { _id } = dataUser.data

  if (!amount || !type || !category) {
    res.status(400).json({
      status: false,
      message: 'Por favor, complete todos los campos',
    })
    return
  }
  const typeCategory = type as TransactionType

  const responseCategories = await getCategories(typeCategory)

  if (!responseCategories.data) {
    res.status(500).json({
      status: false,
      message: 'Error al obtener las categorías',
    })
    return
  }

  const subCategories = responseCategories.data
    .filter((item) => item.type === typeCategory)
    .flatMap((item) => item.subcategories)

  if (!subCategories.includes(category)) {
    res.status(400).json({
      status: false,
      message: `La categoría ${category} no es válida. Las categorías permitidas son: ${subCategories.join(
        ', '
      )}`,
    })
    return
  }

  const response = await createTransaction({
    userId: _id,
    amount,
    type,
    category,
    description,
  })

  if (!response) {
    res.status(500).json({
      status: false,
      message: 'Error datos no encontrados',
    })
    return
  }

  const { status, message, data } = response
  if (!data) {
    res.status(500).json({ status, message })
    return
  }

  res.status(201).json({
    status: true,
    message: 'Transacción creada exitosamente',
    data: {
      id: data.id,
      amount: data.amount,
      type: data.type,
      category: data.category,
      description: data.description,
    },
  })
}

export async function getControllerTransaction(req: Request, res: Response) {
  const { type } = req.body
  const token = req.cookies.acces_token

  const dataToken = getDataToken(token)
  if (!dataToken.data) {
    res.status(401).json({
      status: false,
      message: 'No se ha iniciado sesión',
    })
    return
  }

  const { email } = dataToken.data
  const dataUser = await getUserByEmail(email)
  if (!dataUser.data) {
    res.status(404).json({
      status: false,
      message: 'Usuario sin registro',
    })
    return
  }

  const { _id } = dataUser.data

  if (type && typeof type !== 'string') {
    res.status(400).json({
      status: false,
      message: 'El tipo de transacción debe ser una cadena de texto',
    })
    return
  }

  if (type !== 'Ingreso' && type !== 'Gasto') {
    res.status(400).json({
      status: false,
      message: `Tipo de transacción inválido. Los tipos permitidos son: Ingreso, Gasto`,
    })
  }

  const transactions = await getTransactions(_id, type as TransactionType)

  if (!transactions.status) {
    res.status(500).json({
      status: false,
      message: 'Error al obtener las transacciones',
    })
    return
  }

  res.status(200).json({
    status: true,
    message: 'Transacciones obtenidas',
    data: transactions.data,
  })
}

export async function editControllerTransaction(req: Request, res: Response) {
  const { amount, type, category, description, id } = req.body
  const token = req.cookies.acces_token

  if (!id) {
    res.status(400).json({
      status: false,
      message: 'Por favor, proporcione el ID de la transacción',
    })
    return
  }

  const dataToken = getDataToken(token)

  if (!dataToken.data) {
    res.status(401).json({
      status: false,
      message: 'No se ha iniciado sesión',
    })
    return
  }

  const transaction = await editTransaction(id, {
    amount,
    type,
    category,
    description,
  })

  if (!transaction.data) {
    res.status(404).json({
      status: false,
      message: transaction.message,
    })
    return
  }

  const { data } = transaction

  res.status(200).json({
    status: true,
    message: 'Transacción actualizada correctamente',
    data: {
      id: data._id,
      amount: data.amount,
      type: data.type,
      category: data.category,
      description: data.description,
    },
  })
}

export async function deleteControllerTransaction(req: Request, res: Response) {
  const { id } = req.body
  const token = req.cookies.acces_token

  if (!id) {
    res.status(400).json({
      status: false,
      message: 'Por favor, proporciona el ID de la transacción',
    })
    return
  }

  const dataToken = getDataToken(token)

  if (!dataToken.data) {
    res.status(401).json({
      status: false,
      message: 'No se ha iniciado sesión',
    })
    return
  }

  const transaction = await deleteTransaction(id)

  if (!transaction.data) {
    res.status(404).json({
      status: false,
      message: transaction.message,
    })
    return
  }

  res.status(200).json({
    status: true,
    message: 'Transacción eliminada correctamente',
    data: {
      id: transaction.data._id,
      amount: transaction.data.amount,
      type: transaction.data.type,
      category: transaction.data.category,
      description: transaction.data.description,
    },
  })
}
