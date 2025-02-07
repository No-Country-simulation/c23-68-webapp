import { useEffect } from 'react'
import { nameModal } from '../../config/nameModals'
import { authStore } from '../../store/auth.store'
import { Modal } from './Modal'
import usePopups from '../../hooks/usePopups'

export function LogoutModal() {
  const { showPopUp, setShowPopUp } = authStore()
  const { AlertLogut } = nameModal
  const { show, hide } = usePopups()

  useEffect(() => {
    if (!showPopUp) return
    show({ popUpId: AlertLogut, metadata: { id: AlertLogut } })
    setShowPopUp(false)
  }, [showPopUp, AlertLogut, show, setShowPopUp])

  const handleClose = () => {
    hide({
      popUpId: AlertLogut,
      metadataId: AlertLogut,
    })
  }
  return (
    <Modal id={AlertLogut}>
      <div className='w-full max-w-sm p-6 bg-white rounded-lg shadow-lg'>
        <h2 className='mb-4 text-xl font-bold text-gray-800'>
          Sesión Expirada
        </h2>
        <p className='mb-6 text-gray-600'>
          Tu sesión ha expirado. Por favor, inicia sesión nuevamente para
          continuar.
        </p>
        <div className='flex justify-end'>
          <button
            onClick={handleClose}
            className='m-auto flex justify-center items-center min-w-[171px] min-h-[44px] px-4 py-2 text-lg text-white font-bold bg-[#FF4049] rounded-full hover:bg-[#ad373d] gap-2'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' />
              <path d='M6 21v-2a4 4 0 0 1 4 -4h3.5' />
              <path d='M22 22l-5 -5' />
              <path d='M17 22l5 -5' />
            </svg>

            <span>Cerrar</span>
          </button>
        </div>
      </div>
    </Modal>
  )
}
