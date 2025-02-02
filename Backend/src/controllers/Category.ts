import { Request, Response } from 'express'
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategories,
  updateCategory,
} from '../database/Category'

export async function createCategoryController(req: Request, res: Response) {
  try {
    const { type, subcategories } = req.body

    if (!type || typeof type !== 'string') {
      res.status(400).json({
        status: false,
        message: 'El tipo de categoría debe ser un string válido',
      })
      return
    }

    if (subcategories && !Array.isArray(subcategories)) {
      res.status(400).json({
        status: false,
        message: 'Las subcategorías deben ser un array de strings',
      })
      return
    }

    const updatedCategory = await createCategory({ type, subcategories })

    if (!updatedCategory.data) {
      res.status(500).json({
        status: false,
        message: updatedCategory.message,
      })
      return
    }
    const {
      id: _id,
      type: typeCategories,
      subcategories: subCategories,
    } = updatedCategory.data

    res.status(201).json({
      status: true,
      message: 'Categoría creada/actualizada exitosamente',
      data: { id: _id, type: typeCategories, subcategories: subCategories },
    })
  } catch (_error) {
    res.status(500).json({
      status: false,
      message: 'Error al crear la categoría',
    })
  }
}

export async function getCategoriesController(req: Request, res: Response) {
  try {
    const { type } = req.query

    const categories = await getCategories(type as string)

    if (!categories.data) {
      res.status(404).json({
        status: false,
        message: categories.message,
      })
      return
    }

    const cleanedCategories = categories.data

    res.status(200).json({
      status: true,
      message: 'categorías obtenidas exitosamente',
      data: cleanedCategories,
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Error al obtener categorías',
    })
  }
}

export async function getAllCategoriesController(_req: Request, res: Response) {
  try {
    const categories = await getAllCategories()
    if (!categories.data) {
      res.status(404).json({
        status: false,
        message: categories.message,
      })
      return
    }

    const cleanedCategories = categories.data.reduce((acc, category) => {
      const { type, subcategories } = category
      acc[type] = { type, subcategories }
      return acc
    }, {} as Record<string, { type: string; subcategories: string[] }>)
    res.status(200).json({
      status: true,
      message: 'categorías obtenidas exitosamente',
      data: cleanedCategories,
    })
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener categorías', error })
  }
}

export async function updateCategoryController(req: Request, res: Response) {
  try {
    const { type, subcategories } = req.body

    const updateData: any = { type }
    if (subcategories !== undefined) {
      updateData.$addToSet = { subcategories: { $each: subcategories } }
    }

    const category = await updateCategory({ type, subcategories })

    if (!category.data) {
      res.status(404).json({
        status: false,
        message: category.message,
      })
      return
    }
    const { data } = category

    res.status(200).json({
      status: true,
      message: 'Categoría actualizada correctamente',
      data: {
        id: data._id,
        type: data.type,
        subcategories: data.subcategories,
      },
    })
  } catch (error) {
    res.status(400).json({
      status: false,
      message: 'Error al actualizar la categoría',
    })
  }
}

export async function deleteCategoryController(req: Request, res: Response) {
  try {
    const { type } = req.params
    const category = await deleteCategory(type)
    if (!category.data) {
      res.status(404).json({
        status: false,
        message: category.message,
      })
      return
    }

    res.status(200).json({
      status: true,
      message: 'Categoría eliminada correctamente',
      data: {
        id: category.data._id,
        type: category.data.type,
        subcategories: category.data.subcategories,
      },
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Error al eliminar la categoría',
    })
  }
}
