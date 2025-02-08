import { SavingsGoalModel } from '../models/SavingsGoal'

interface ICreateSaving {
  name: string
  targetAmount: number
  currentAmount: number
  deadline: Date
  userId: unknown
  priority: string
  createdAt: Date
}

export async function createSavingGoals({
  name,
  targetAmount,
  deadline,
  userId,
  priority,
  currentAmount,
  createdAt,
}: ICreateSaving) {
  try {
    if (!name || !targetAmount || !deadline || !userId || !priority) {
      return {
        status: false,
        message: 'Complete todos los campos',
      }
    }

    if (typeof name !== 'string') {
      return {
        status: false,
        message: 'El nombre debe ser alfanumerico',
      }
    }

    if (typeof targetAmount !== 'number') {
      return {
        status: false,
        message: 'El monto final debe ser numerico',
      }
    }

    if (currentAmount && typeof currentAmount !== 'number') {
      return {
        status: false,
        message: 'El monto debe ser numerico',
      }
    }

    const savingGoal = new SavingsGoalModel({
      name,
      targetAmount,
      deadline,
      userId,
      priority,
      currentAmount,
      createdAt,
    })

    await savingGoal.save()

    return {
      status: false,
      message: 'Se ha creado con exito',
      data: savingGoal,
    }
  } catch (_err) {
    return {
      status: false,
      message: 'ha ocurrido un error al insertar en base de datos',
    }
  }
}

export async function getSavingGoalsByUserID(userID: unknown) {
  try {
    if (!userID) {
      return {
        status: false,
        message: 'Falta el ID del usuario',
      }
    }

    const savingGoals = await SavingsGoalModel.find({ userId: userID })

    return {
      status: true,
      message: 'Se han obtenido con exito los ahorros',
      data: savingGoals,
    }
  } catch (_err) {
    return {
      status: false,
      message: 'ha ocurrido algun error',
    }
  }
}
