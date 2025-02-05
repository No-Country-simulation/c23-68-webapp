import { Request, Response } from 'express'
import { UserModel } from '../models/User'
import bcrypt from 'bcrypt'
import { createCategory } from '../database/Category'
import { createTransaction } from '../database/Transactions'
import { TransactionType } from '../interface/categorys'
import { createSavingGoals } from '../database/SavingsGoal'
import { NODE_ENV } from '../config/config'

export async function poblateBD(req: Request, res: Response) {
  try {
    const { development } = req.body

    if (development !== true) {
      res.status(400).json({
        status: false,
        message: 'Este endpoint esta deshabilitado.',
      })
    }

    console.log({ NODE_ENV })
    const isProduction = NODE_ENV === 'production'

    if (isProduction) {
      res.status(400).json({
        status: false,
        message: 'Endpoint no valido en production',
      })
    }

    console.log('poblando base de datos')

    const password = 'Hola1234*'

    const hashedPassword = await bcrypt.hash(password, 7)

    // Crear usuario de prueba
    const user = new UserModel({
      name: 'testing',
      email: 'testing@example.com',
      password: hashedPassword,
    })

    await user.save()

    console.log('usuario creado', user)
    // Crear categorías y subcategorías
    const categories = [
      {
        type: 'Ingreso',
        subcategories: ['Salario', 'Freelance', 'Inversiones', 'Bonos'],
      },
      {
        type: 'Gasto',
        subcategories: [
          'Alquiler',
          'Comida',
          'Transporte',
          'Ocio',
          'Salud',
          'Educación',
        ],
      },
      { type: 'Ahorro', subcategories: ['Alta', 'Media', 'Baja'] },
    ]

    categories.map(async (data) => {
      await createCategory({
        type: data.type,
        subcategories: data.subcategories,
      })
    })

    console.log('Categoria creadas')

    const ingresos = Array.from({ length: 12 }, () => ({
      user: user._id,
      amount: Math.floor(Math.random() * 500) + 100,
      type: 'Ingreso' as TransactionType,
      category:
        categories[0].subcategories[
          Math.floor(Math.random() * categories[0].subcategories.length)
        ],
      description: 'Ingreso generado automáticamente',
      date: new Date(),
    }))
    const totalIngresos = ingresos.reduce((sum, t) => sum + t.amount, 0)

    const gastos = Array.from({ length: 10 }, () => ({
      user: user._id,
      amount: Math.floor(Math.random() * (totalIngresos / 10)) + 10,
      type: 'Gasto' as TransactionType,
      category:
        categories[1].subcategories[
          Math.floor(Math.random() * categories[1].subcategories.length)
        ],
      description: 'Gasto generado automáticamente',
      date: new Date(),
    }))

    ingresos.map(async (data) => {
      await createTransaction({
        userId: data.user,
        amount: data.amount,
        type: data.type,
        category: data.category,
        description: data.description,
      })
    })
    console.log('Ingresos Creados')

    gastos.map(async (data) => {
      await createTransaction({
        userId: data.user,
        amount: data.amount,
        type: data.type,
        category: data.category,
        description: data.description,
      })
    })

    console.log('Gastos Creados')

    console.log('transacciones creadas')

    // Crear datos de ahorro
    const ahorros = Array.from({ length: 15 }, () => ({
      userId: user._id,
      name: `Ahorro ${Math.floor(Math.random() * 100)}`,
      targetAmount: Math.floor(Math.random() * 1000) + 500,
      currentAmount: Math.floor(Math.random() * 500),
      deadline: new Date(
        new Date().setMonth(
          new Date().getMonth() + Math.floor(Math.random() * 12)
        )
      ),
      priority:
        categories[2].subcategories[
          Math.floor(Math.random() * categories[2].subcategories.length)
        ],
    }))

    ahorros.map(async (datos) => {
      await createSavingGoals({
        name: datos.name,
        targetAmount: datos.targetAmount,
        deadline: datos.deadline,
        userId: datos.userId,
        priority: datos.priority,
        currentAmount: datos.currentAmount,
      })
    })
    console.log('ahorros creados')

    res.status(200).json({
      status: true,
      message: 'Base de datos poblada exitosamente.',
    })
  } catch (_err) {
    res.status(500).json({
      status: false,
      message: 'Ocurrio algo dentro del servidor',
    })
  }
}
