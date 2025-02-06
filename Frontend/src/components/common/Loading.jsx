import { nameModal } from '../../config/nameModals'
import usePopup from '../../hooks/usePopup'
export function LoadingModal() {
  const { LoadingModalID } = nameModal
  const { isActive } = usePopup(LoadingModalID)
  if (!isActive) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='p-8 transition-all duration-300 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105'>
        <div className='flex flex-col items-center'>
          <div className='relative w-24 h-24'>
            <svg
              className='w-full h-full animate-spin-slow'
              viewBox='0 0 100 100'
              xmlns='http://www.w3.org/2000/svg'
            >
              <defs>
                <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                  <stop offset='0%' stopColor='#3B82F6' />
                  <stop offset='100%' stopColor='#93C5FD' />
                </linearGradient>
              </defs>
              <circle
                cx='50'
                cy='50'
                r='45'
                fill='none'
                stroke='#E5E7EB'
                strokeWidth='8'
              />
              <circle
                cx='50'
                cy='50'
                r='45'
                fill='none'
                stroke='url(#gradient)'
                strokeWidth='8'
                strokeLinecap='round'
                strokeDasharray='283'
                strokeDashoffset='200'
              />
              <path
                d='M50 25 L50 50 L65 65'
                fill='none'
                stroke='#1E40AF'
                strokeWidth='4'
                strokeLinecap='round'
              />
            </svg>
          </div>
          <h2 className='mt-4 text-2xl font-bold text-gray-800'>Cargando...</h2>
          <p className='mt-2 text-gray-600'>
            Preparando tu experiencia, por favor espera un momento.
          </p>
          <div className='flex mt-6 space-x-2'>
            <div className='w-3 h-3 bg-blue-400 rounded-full animate-bounce'></div>
            <div className='w-3 h-3 delay-100 bg-blue-500 rounded-full animate-bounce'></div>
            <div className='w-3 h-3 delay-200 bg-blue-600 rounded-full animate-bounce'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
