import { useForm } from 'react-hook-form'
import { Modal } from '../modals/Modal'
import { nameModal } from '../../config/nameModals'
import usePopups from '../../hooks/usePopups'
import usePopup from '../../hooks/usePopup'
import { useEffect } from 'react'

const DatosGastosEditForm = () => {
  const { show, hide } = usePopups()
  const { DataSavedModalID, DatosGastosEditFormModalID } = nameModal
  const { activePopup } = usePopup(DatosGastosEditFormModalID)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      targetAmount: '',
      category: '',
      description: '',
      createdAt: '',
    },
  })

  useEffect(() => {
    if (activePopup && activePopup?.metadata) {
      reset({
        targetAmount: activePopup?.metadata?.data?.targetAmount || '',
        category: activePopup?.metadata?.data?.category || '',
        description: activePopup?.metadata?.data?.description || '',
        createdAt: activePopup?.metadata?.data?.createdAt || '',
      })
    }
  }, [activePopup, reset])

  const onSubmit = () => {

    show({
      popUpId: DataSavedModalID,
      metadata: { id: DataSavedModalID },
      pushMethod: 'prepend',
    })
    hide({
      popUpId: DatosGastosEditFormModalID,
      metadataId: DatosGastosEditFormModalID,
    })
  }

  const handleCancel = () => {

    reset()
    hide({
      popUpId: DatosGastosEditFormModalID,
      metadataId: DatosGastosEditFormModalID,
    })
  }

  return (
    <Modal
      id={DatosGastosEditFormModalID}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white  sm:px-12 py-6 rounded-3xl shadow-lg w-[542px] h-[526px] sm:max-w-2xl space-y-6 font-onest'
      >
        {/* Botón de Cerrar */}
        <div className='flex justify-end'>
          <button
            type='button'
            className='text-lg text-gray-500 hover:text-gray-800'
            onClick={handleCancel}
          >
            ✕
          </button>
        </div>

        {/* Campo Monto */}
        <div className='flex items-center gap-4 pl-2'>
          <label className='w-1/3 font-medium text-gray-700 text-start'>
            Monto <span className='text-red-500'>*</span>
          </label>
          <input
            type='number'
            id='targetAmount'
            {...register('targetAmount', { required: true, min: 0.01 })}
            placeholder='$1000.00'
            className='w-[180px] sm:w-2/3 lg:w-3/4 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-grisclaro focus:outline-none sm:text-sm'
          />
        </div>

        {/* Campo Categoría */}
        <div className='flex items-center gap-4 pl-2'>
          <label className='w-1/3 font-medium text-gray-700 text-start'>
            Categoría <span className='text-red-500'>*</span>
          </label>
          <select
            {...register('category', { required: true })}
            className='text-grisclaro w-[180px] sm:w-2/3 lg:w-3/4 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-grisclaro focus:outline-none sm:text-sm'
          >
            <option value=''>Elegir</option>
            <option value='Alquiler'>Alquiler</option>
            <option value='Comida'>Comida</option>
            <option value='Transporte'>Transporte</option>
            <option value='Ocio'>Ocio</option>
            <option value='Salud'>Salud</option>
            <option value='Educación'>Educación</option>
          </select>
        </div>

        {/* Campo Descripción */}
        <div className='flex items-center gap-4 pl-2'>
          <label className='w-1/3 font-medium text-gray-700 text-start'>
            Descripción
          </label>
          <input
            type='text'
            {...register('description', {})}
            placeholder='Detallar(Opcional)'
            className='w-[180px] sm:w-2/3 lg:w-3/4 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-grisclaro focus:outline-none sm:text-sm'
          />
        </div>

        {/* Campo Fecha de Inicio */}
        <div className='flex items-center gap-4 pl-2'>
          <label className='w-1/3 font-medium text-gray-700 text-start'>
            Fecha Inicio<span className='text-red-500'>*</span>
          </label>
          <input
            type='date'
            id='createdAt'
            {...register('createdAt', { required: true })}
            className='text-grisclaro -[180px] sm:w-2/3 lg:w-3/4 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-grisclaro focus:outline-none sm:text-sm'
          />
        </div>

        {/* Mensaje de error general */}
        <div className='h-6 text-center'>
          {Object.keys(errors).length > 0 && (
            <div className='text-sm text-red-500'>
              Por favor completa el campo faltante.
            </div>
          )}
        </div>

        {/* Botones */}
        <div className='h-[60px] py-2 flex flex-col gap-5 font-bold sm:flex-row sm:justify-center'>
          <button
            type='submit'
            className='w-full sm:w-[143px] px-4 py-2 text-white bg-amarillo rounded-[30px] shadow-md hover:bg-gradient-to-r from-amarillo to-amarillooscuro'
          >
            Guardar
          </button>
          <button
            type='button'
            onClick={handleCancel}
            className='w-full sm:w-[143px] px-4 py-2 text-grisclaro bg-transparent border-2 border-grisclaro rounded-[30px] hover:bg-grisclaro hover:text-white hover:border-none'
          >
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default DatosGastosEditForm
