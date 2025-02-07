import { createCategory } from '../database/Category'
import { Request, Response } from 'express'

export async function generateCategory(req: Request, res: Response) {
  try {
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

    res
      .status(200)
      .json({ status: true, message: 'Categorías creadas exitosamente' })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Error al crear las categorías',
    })
  }
}
