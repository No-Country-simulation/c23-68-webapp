import { Request, Response } from 'express'
import { TransactionModel } from '../models/Transaction'
import { getIdUser } from '../helpers/auth'
import { TransactionExpense, TransactionIncome } from '../interface/categorys'

// Obtener el ingreso total
export async function getTotalIncomeController(req: Request, res: Response) {
  try {
    const token = req.cookies.acces_token
    const dataUser = await getIdUser(token)

    if (!dataUser.data) {
      res.status(401).json({
        status: dataUser.status,
        message: dataUser.message,
      })
      return
    }

    const id = dataUser.data?.dataID

    const totalIncome = await TransactionModel.aggregate([
      { $match: { user: id, type: TransactionIncome } },
      { $group: { _id: null, total: { $sum: '$amount' } } },
    ])

    res.status(200).json({
      status: true,
      message: 'Datos obtenidos correctamente',
      data: totalIncome[0]?.total || 0,
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Error al obtener el ingreso total',
    })
  }
}

// Obtener el gasto total
export async function getTotalExpenseController(req: Request, res: Response) {
  try {
    const token = req.cookies.acces_token
    const dataUser = await getIdUser(token)

    if (!dataUser.data) {
      res.status(401).json({
        status: dataUser.status,
        message: dataUser.message,
      })
      return
    }

    const id = dataUser.data?.dataID

    const totalExpense = await TransactionModel.aggregate([
      { $match: { user: id, type: TransactionExpense } },
      { $group: { _id: null, total: { $sum: '$amount' } } },
    ])

    res.status(200).json({
      status: true,
      message: 'Datos obtenidos correctamente',
      data: totalExpense[0]?.total || 0,
    })
  } catch (_error) {
    res.status(500).json({
      status: false,
      message: 'Error al obtener el gasto total',
    })
  }
}

// Comparación de ingresos y gastos
export async function compareIncomeExpenseController(
  req: Request,
  res: Response
) {
  try {
    const token = req.cookies.acces_token
    const dataUser = await getIdUser(token)

    if (!dataUser.data) {
      res.status(401).json({
        status: dataUser.status,
        message: dataUser.message,
      })
      return
    }

    const id = dataUser.data?.dataID
    const transactions = await TransactionModel.find({ user: id }).sort({
      date: 1,
    })

    const groupedTransactions = transactions.reduce((acc, transaction) => {
      const date = transaction.date.toISOString().split('T')[0] // Formato YYYY-MM-DD

      if (!acc[date]) {
        acc[date] = { date, income: 0, expense: 0 }
      }

      if (transaction.type === 'Ingreso') {
        acc[date].income += transaction.amount
      } else if (transaction.type === 'Gasto') {
        acc[date].expense += transaction.amount
      }

      return acc
    }, {} as Record<string, { date: string; income: number; expense: number }>)

    const formattedTransactions = Object.values(groupedTransactions)

    res.status(200).json({
      status: true,
      message: 'Datos obtenidos correctamente',
      data: formattedTransactions,
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Error al obtener la comparación de ingresos y gastos',
    })
  }
}

// Obtener el porcentaje de gastos por categoría
export async function getExpensePercentageController(
  req: Request,
  res: Response
) {
  try {
    const token = req.cookies.acces_token
    const dataUser = await getIdUser(token)

    if (!dataUser.data) {
      res.status(401).json({
        status: dataUser.status,
        message: dataUser.message,
      })
      return
    }

    const id = dataUser.data?.dataID

    const expenses = await TransactionModel.aggregate([
      { $match: { user: id, type: TransactionExpense } },
      { $group: { _id: '$category', total: { $sum: '$amount' } } },
    ])

    const totalExpense = expenses.reduce((acc, item) => acc + item.total, 0)
    const percentageByCategory = expenses.map((expense) => ({
      category: expense._id,
      percentage: ((expense.total / totalExpense) * 100).toFixed(2),
      amount: expense.total,
    }))

    res.status(200).json({
      status: true,
      message: 'Datos obtenidos correctamente',
      data: percentageByCategory,
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Error al obtener el porcentaje de gastos',
    })
  }
}

// Obtener ingresos por categoría
export async function getIncomeByCategoryController(
  req: Request,
  res: Response
) {
  try {
    const token = req.cookies.acces_token
    const dataUser = await getIdUser(token)

    if (!dataUser.data) {
      res.status(401).json({
        status: dataUser.status,
        message: dataUser.message,
      })
      return
    }

    const id = dataUser.data?.dataID

    const incomes = await TransactionModel.aggregate([
      { $match: { user: id, type: TransactionIncome } },
      { $group: { _id: '$category', total: { $sum: '$amount' } } },
    ])

    res.status(200).json({
      status: true,
      message: 'Datos obtenidos correctamente.',
      data: incomes,
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Error al obtener los ingresos por categoría',
    })
  }
}
