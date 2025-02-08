import { useForm } from 'react-hook-form'
import { Modal } from '../modals/Modal'
import { nameModal } from '../../config/nameModals'
import usePopups from '../../hooks/usePopups'
import usePopup from '../../hooks/usePopup'
import { useEffect } from 'react'
import { getSavingsGoals, updateSavingsGoal } from '../../service/savingGoals'

const AhorrosEditForm = () => {
  const { show, hide } = usePopups()
  const { DataSavedModalID, AhorrosEditFormModalID } = nameModal
  const { activePopup } = usePopup(AhorrosEditFormModalID)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      priority: '',
      name: '',
      targetAmount: '',
      createdAt: '',
      deadline: '',
    },
  })

  useEffect(() => {
    if (activePopup && activePopup?.metadata) {
      reset({
        priority: activePopup?.metadata?.data?.priority || '',
        name: activePopup?.metadata?.data?.name || '',
        targetAmount: activePopup?.metadata?.data?.targetAmount || '',
        createdAt: activePopup?.metadata?.data?.createdAt || '',
        deadline: activePopup?.metadata?.data?.deadline || '',
      })
    }
  }, [activePopup, reset])

  const onSubmit = async (data) => {
    const { priority, name, targetAmount, createdAt, deadline } = data
    const setData = activePopup?.metadata?.change
    const id = activePopup?.metadata?.idModal

    const response = await updateSavingsGoal(id, {
      priority: priority,
      name: name,
      targetAmount: targetAmount,
      createdAt: createdAt,
      deadline: deadline,
    })

    if (response) {
      show({
        popUpId: DataSavedModalID,
        metadata: { id: DataSavedModalID },
        pushMethod: 'prepend',
      })
      hide({
        popUpId: AhorrosEditFormModalID,
        metadataId: AhorrosEditFormModalID,
      })

      const newData = await getSavingsGoals()
      setData(newData.data)
    }

    reset()
  }

  const handleCancel = () => {
    reset()
    hide({
      popUpId: AhorrosEditFormModalID,
      metadataId: AhorrosEditFormModalID,
    })
  }

  return (
    <Modal
      id={AhorrosEditFormModalID}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white  sm:px-12 py-6 rounded-3xl shadow-lg w-[542px] h-[546px] sm:max-w-2xl space-y-6 font-onest'
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

        {/* Campo Prioridad */}
        <div className='flex items-center gap-4 pl-2'>
          <label className='w-1/3 font-medium text-gray-700 text-start'>
            Prioridad
          </label>
          <select
            id='priority'
            {...register('priority')}
            className='text-grisclaro w-[180px] sm:w-2/3 lg:w-3/4 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-grisclaro focus:outline-none sm:text-sm'
          >
            <option value=''>Elegir</option>
            <option value='Alta'>Alta</option>
            <option value='Media'>Media</option>
            <option value='Baja'>Baja</option>
          </select>
        </div>

        {/* Campo Objetivo/name */}
        <div className='flex items-center gap-4 pl-2'>
          <label className='w-1/3 font-medium text-gray-700 text-start'>
            Objetivo
          </label>
          <input
            type='text'
            id='name'
            {...register('name')}
            placeholder='Una laptop marca X'
            className='w-[180px] sm:w-2/3 lg:w-3/4 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-grisclaro focus:outline-none sm:text-sm'
          />
        </div>

        {/* Campo Monto */}
        <div className='flex items-center gap-4 pl-2'>
          <label className='w-1/3 font-medium text-gray-700 text-start'>
            Monto
          </label>
          <input
            type='number'
            id='targetAmount'
            {...register('targetAmount', { min: 0.01 })}
            placeholder='$1000.00'
            className='w-[180px] sm:w-2/3 lg:w-3/4 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-grisclaro focus:outline-none sm:text-sm'
          />
        </div>

        {/* Campo Fecha de Inicio */}
        <div className='flex items-center gap-4 pl-2'>
          <label className='w-1/3 font-medium text-gray-700 text-start'>
            Fecha Inicio
          </label>
          <input
            type='date'
            id='createdAt'
            {...register('createdAt')}
            className='text-grisclaro -[180px] sm:w-2/3 lg:w-3/4 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-grisclaro focus:outline-none sm:text-sm'
          />
        </div>

        {/* Campo Fecha de Fin */}
        <div className='flex items-center gap-4 pl-2'>
          <label className='w-1/3 font-medium text-gray-700 text-start'>
            Fecha Final
          </label>
          <input
            type='date'
            id='deadline'
            {...register('deadline')}
            className='text-grisclaro w-[180px] sm:w-2/3 lg:w-3/4 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-grisclaro focus:outline-none sm:text-sm'
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
        <div className='flex flex-col gap-3 font-bold sm:flex-row sm:justify-center'>
          <button
            type='submit'
            className='w-full sm:w-auto px-4 py-2 text-white bg-amarillo rounded-[30px] shadow-md hover:bg-gradient-to-r from-amarillo to-amarillooscuro'
          >
            Guardar
          </button>
          <button
            type='button'
            onClick={handleCancel}
            className='w-full sm:w-auto px-4 py-2 text-grisclaro bg-transparent border-2 border-grisclaro rounded-[30px] hover:bg-grisclaro hover:text-white hover:border-grisclaro'
          >
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default AhorrosEditForm
