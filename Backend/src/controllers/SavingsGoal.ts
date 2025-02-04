import { Request, Response } from 'express'
import { CategoryModel } from '../models/Category'
import {
  ISavingGoal,
  SavingsGoalModel,
  typeCategory,
} from '../models/SavingsGoal'
import { getCategories } from '../database/Category'
import {
  createSavingGoals,
  getSavingGoalsByUserID,
} from '../database/SavingsGoal'
import { getIdUser } from '../helpers/auth'

export async function createSavingGoalsController(req: Request, res: Response) {
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

    const { name, targetAmount, deadline, priority, currentAmount } = req.body
    if (!name || !targetAmount || !deadline || !priority || !currentAmount) {
      res.status(400).json({
        status: false,
        message: 'Complete todos los campos',
      })
      return
    }

    const category = await getCategories(typeCategory)

    if (!category.data) {
      res.status(400).json({
        status: false,
        message: category.message,
      })
      return
    }

    if (!category || !category.data.subcategories.includes(priority)) {
      res.status(400).json({
        status: false,
        message: `Prioridad Invalida. La prioridad deberia ser parte de: ${typeCategory}`,
      })
      return
    }

    const savingGoal = await createSavingGoals({
      name,
      targetAmount,
      currentAmount,
      deadline,
      userId: id,
      priority,
    })

    if (!savingGoal.data) {
      res.status(401).json({
        status: savingGoal.status,
        message: savingGoal.message,
      })
      return
    }

    res.status(201).json({
      status: true,
      message: 'creación exitosa del ahorro',
      data: savingGoal.data,
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'ha ocurrido algo dentro del servidor.',
    })
  }
}

export async function getSavingGoalsController(req: Request, res: Response) {
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

    const savingGoals = await getSavingGoalsByUserID(id)

    if (!savingGoals.data) {
      res.status(401).json({
        status: savingGoals.status,
        message: savingGoals.message,
      })
      return
    }

    res.status(200).json({
      status: true,
      message: 'datos obtenidos exitosamente',
      data: savingGoals.data,
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Ha ocurrido dentro del servidor',
    })
  }
}

export async function updateSavingGoalsController(req: Request, res: Response) {
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

    const { id, priority, name, targetAmount, currentAmount, deadline } =
      req.body

    if (!id) {
      res.status(400).json({
        status: false,
        message: 'Proporcione el ID del ahorro',
      })
      return
    }

    const updateFields: Partial<ISavingGoal> = {}
    if (name) updateFields.name = name
    if (targetAmount !== undefined) updateFields.targetAmount = targetAmount
    if (currentAmount !== undefined) updateFields.currentAmount = currentAmount
    if (deadline) updateFields.deadline = deadline

    if (priority) {
      const category = await CategoryModel.findOne({ type: typeCategory })
      if (!category || !category.subcategories.includes(priority)) {
        res.status(400).json({
          status: false,
          message: 'Prioridad Invalida.',
        })
        return
      }
      updateFields.priority = priority
    }

    if (Object.keys(updateFields).length === 0) {
      res.status(400).json({
        status: false,
        message: 'No se enviaron campos válidos para actualizar',
      })
      return
    }

    const savingGoal = await SavingsGoalModel.findByIdAndUpdate(
      id,
      updateFields,
      {
        new: true,
        runValidators: true,
      }
    )

    if (!savingGoal) {
      res.status(404).json({
        status: false,
        message: 'No se pudo guardar correctamente',
      })
      return
    }

    res.status(200).json({
      status: true,
      message: 'Se actualizó correctamente',
      data: savingGoal,
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'ha ocurrido algun error en el servidor',
    })
  }
}

export async function deleteSavingGoalsController(req: Request, res: Response) {
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

    const { id } = req.body
    if (!id) {
      res.status(400).json({
        status: false,
        message: 'ID parameter is required',
      })
      return
    }
    const savingGoal = await SavingsGoalModel.findByIdAndDelete(id)
    if (!savingGoal) {
      res.status(404).json({
        status: false,
        message: 'No se encontraron datos',
      })
      return
    }
    res.status(200).json({
      status: true,
      message: 'Se elimino correctamente',
      data: savingGoal,
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Ha ocurrido un error dentro del servidor',
    })
  }
}
