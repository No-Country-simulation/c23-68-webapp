import { CategoryModel } from '../models/Category'

interface Category {
  type: string
  subcategories: string[]
}

export async function createCategory({ type, subcategories }: Category) {
  try {
    const category = await CategoryModel.findOneAndUpdate(
      { type },
      {
        type,
        $addToSet: { subcategories: { $each: subcategories || [] } },
      },
      { upsert: true, new: true }
    )
    return {
      status: true,
      message: 'Categoría creada exitosamente',
      data: category,
    }
  } catch (_error) {
    return {
      status: false,
      message: 'Error al crear la categoría',
    }
  }
}

export async function getCategories(type: string) {
  try {
    const category = await CategoryModel.findOne({ type })

    if (!category) {
      return {
        status: false,
        message: 'Categoría no encontrada',
      }
    }

    return {
      status: true,
      message: 'Categoría encontrada',
      data: category,
    }
  } catch (_error) {
    return {
      status: false,
      message: 'Error al obtener la categoría',
    }
  }
}
export async function getAllCategories() {
  try {
    const categories = await CategoryModel.find()

    if (!categories) {
      return {
        status: false,
        message: 'Categorías no encontradas',
      }
    }

    return {
      status: true,
      message: 'Categorías encontradas',
      data: categories,
    }
  } catch (error) {
    return {
      status: false,
      message: 'Error al obtener las categorías',
    }
  }
}

export async function updateCategory({ type, subcategories }: Category) {
  try {
    const updatedCategory = await CategoryModel.findOneAndUpdate(
      { type },
      { type, subcategories },
      { new: true }
    )

    if (!updatedCategory) {
      return {
        status: false,
        message: 'Categoría no encontrada',
      }
    }

    return {
      status: true,
      message: 'Categoría actualizada exitosamente',
      data: updatedCategory,
    }
  } catch (_error) {
    return {
      status: false,
      message: 'Error al actualizar la categoría',
    }
  }
}

export async function deleteCategory(type: string) {
  try {
    const category = await CategoryModel.findOneAndDelete({ type })

    if (!category) {
      return {
        status: false,
        message: 'Categoría no encontrada',
      }
    }

    return {
      status: true,
      message: 'Categoría eliminada exitosamente',
      data: category,
    }
  } catch (_error) {
    return {
      status: false,
      message: 'Error al eliminar la categoría',
    }
  }
}
