import { Modal } from '../modals/Modal'
import usePopups from '../../hooks/usePopups'
import { nameModal } from '../../config/nameModals'
import usePopup from '../../hooks/usePopup'
import { deleteTransaction, getTransactions } from '../../service/transactions'
import { deleteSavingsGoal, getSavingsGoals } from '../../service/savingGoals'
// import usePopup from "../../hooks/usePopup";

function DatosEliminadosModal() {
  const { DatosEliminadosModalID } = nameModal
  const { hide } = usePopups()
  const { activePopup } = usePopup(DatosEliminadosModalID)

  const handleClose = () => {
    hide({
      popUpId: DatosEliminadosModalID,
      metadataId: DatosEliminadosModalID,
    })
  }

  const handleDelteItem = async () => {
    const id = activePopup?.metadata?.idModal
    const setData = activePopup?.metadata?.change
    const type = activePopup?.metadata?.type

    if (type === 'Ingreso' || type === 'Gasto') {
      const response = await deleteTransaction(id)
      if (response) {
        hide({
          popUpId: DatosEliminadosModalID,
          metadataId: DatosEliminadosModalID,
        })

        const newData = await getTransactions(type)
        setData(newData.data)
      }
      return
    }

    if (type === 'Ahorro') {
      const response = await deleteSavingsGoal(id)
      if (response) {
        hide({
          popUpId: DatosEliminadosModalID,
          metadataId: DatosEliminadosModalID,
        })

        const newData = await getSavingsGoals()
        setData(newData.data)
      }
    }
  }

  return (
    <Modal
      id={DatosEliminadosModalID}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
    >
      <div className='bg-white p-6 rounded-3xl shadow-lg text-center space-y-4 w-[500px] font-onest'>
        <div className='flex justify-end'>
          <button
            type='button'
            className='text-lg text-gray-500 hover:text-gray-800'
            onClick={handleClose}
          >
            ✕
          </button>
        </div>
        <h2 className='text-2xl font-medium'>
          ¿Estás seguro de eliminar esta fila?
        </h2>
        <p className='text-gray-600'>
          Esta acción no se puede deshacer. Si eliminas esta fila, perderás toda
          la información asociada a ella.
        </p>
        <div className='flex flex-col gap-3 font-bold sm:flex-row sm:justify-center'>
          <button
            onClick={handleDelteItem}
            type='submit'
            className='w-full sm:w-[143px] px-4 py-2 text-white bg-rojo rounded-[30px] shadow-md hover:bg-rojooscuro'
          >
            Eliminar
          </button>
          <button
            type='button'
            onClick={handleClose}
            className='w-full sm:w-[143px] px-4 py-2 text-grisclaro bg-transparent border-2 border-grisclaro rounded-[30px] hover:bg-grisclaro hover:text-white hover:border-grisclaro'
          >
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default DatosEliminadosModal
