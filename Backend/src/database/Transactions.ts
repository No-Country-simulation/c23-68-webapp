import { TransactionType } from '../interface/categorys'
import { TransactionModel } from '../models/Transaction'
import { getCategories } from './Category'

interface ITransaction {
  userId: unknown
  amount: number
  type: TransactionType
  category: string
  date: Date
  description?: string
}

export async function createTransaction({
  userId,
  amount,
  type,
  category,
  description,
  date,
}: ITransaction) {
  if (!amount || !type || !category || !date) {
    return {
      status: false,
      message: 'Por favor, complete todos los campos',
    }
  }
  try {
    const response = await TransactionModel.create({
      user: userId,
      amount,
      type,
      category,
      description,
      date,
    })

    return {
      status: true,
      message: 'Transacción creada exitosamente',
      data: {
        id: response._id,
        amount: response.amount,
        type: response.type,
        category: response.category,
        description: response.description,
        date: response.date,
      },
    }
  } catch (_error) {
    return {
      status: false,
      message: 'Error al crear la transacción en la base de datos',
    }
  }
}

export async function getTransactions(id: unknown, type: TransactionType) {
  try {
    const transactions = await TransactionModel.find({ user: id, type })

    if (!transactions.length) {
      return {
        status: false,
        message: 'Transacción no encontrada',
      }
    }

    return {
      status: true,
      message: 'Transacciones encontradas',
      data: transactions,
    }
  } catch (_error) {
    return {
      status: false,
      message: 'Error al obtener las transacciones',
    }
  }
}

export async function getTransactionsByID(id: unknown) {
  try {
    const transactions = await TransactionModel.findById({ id })

    if (!transactions) {
      return {
        status: false,
        message: 'Transacciones no encontradas',
      }
    }

    return {
      status: true,
      message: 'Transacciones encontradas',
      data: transactions,
    }
  } catch (_error) {
    return {
      status: false,
      message: 'Error al obtener las transacciones',
    }
  }
}

export async function editTransaction(
  id: unknown,
  updates: Partial<{
    amount: number
    type: TransactionType
    category: string
    description: string
  }>
) {
  try {
    if (!id) {
      return {
        status: false,
        message: 'ID de transacción inválido',
      }
    }

    const allowedFields = ['amount', 'type', 'category', 'description']
    const filteredUpdates: Record<string, unknown> = {}

    for (const key of allowedFields) {
      if (updates[key as keyof typeof updates] !== undefined) {
        filteredUpdates[key] = updates[key as keyof typeof updates]
      }
    }

    if (Object.keys(filteredUpdates).length === 0) {
      return {
        status: false,
        message: 'No hay campos válidos para actualizar',
      }
    }

    if (
      updates?.type !== undefined &&
      updates.type === ('' as unknown as TransactionType)
    ) {
      return {
        status: false,
        message: 'Ingrese bien el tipo',
      }
    }

    if (updates?.category !== undefined && updates.category === '') {
      return {
        status: false,
        message: 'Ingrese bien la categoria',
      }
    }

    if (updates.type && !updates.category) {
      return {
        status: false,
        message: 'Ingrese la categoria correspondiente',
      }
    }

    if (updates.category && !updates.type) {
      return {
        status: false,
        message: 'Ingrese el tipo correspondiente',
      }
    }

    if (updates.type) {
      const typeCategory = updates.type as TransactionType

      const responseCategories = await getCategories(typeCategory)

      if (!responseCategories.data) {
        return {
          status: false,
          message: 'Error al obtener las categorías',
        }
      }

      const subCategories = responseCategories.data.subcategories

      if (!updates.category) {
        return {
          status: false,
          message: 'Ingrese la categoria',
        }
      }

      if (!subCategories.includes(updates.category)) {
        return {
          status: false,
          message: `La categoría ${
            updates.category
          } no es válida. Las categorías permitidas son: ${subCategories.join(
            ', '
          )}`,
        }
      }
    }

    if (typeof updates.amount !== 'number') {
      return {
        status: false,
        message: 'El monto proporcionado debe ser un numero',
      }
    }

    const transaction = await TransactionModel.findByIdAndUpdate(
      id,
      { $set: filteredUpdates },
      { new: true }
    )

    if (!transaction) {
      return {
        status: false,
        message: 'Transacción no encontrada',
      }
    }

    return {
      status: true,
      message: 'Transacción actualizada',
      data: transaction,
    }
  } catch (error) {
    console.error('Error al actualizar la transacción:', error)
    return {
      status: false,
      message: 'Error al actualizar la transacción',
    }
  }
}

export async function deleteTransaction(id: unknown) {
  try {
    if (!id) {
      return {
        status: false,
        message: 'Envie un ID válido',
      }
    }

    const transaction = await TransactionModel.findByIdAndDelete(id)

    if (!transaction) {
      return {
        status: false,
        message: 'Transacción no encontrada',
      }
    }

    return {
      status: true,
      message: 'Transacción eliminada',
      data: transaction,
    }
  } catch (_error) {
    return {
      status: false,
      message: 'Error al eliminar la transacción',
    }
  }
}
