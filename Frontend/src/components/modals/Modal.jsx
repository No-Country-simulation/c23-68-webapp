/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef } from 'react'
import usePopup from '../../hooks/usePopup'

export function Modal({ id, children }) {
  const { isActive, hide } = usePopup(id)
  const modalRef = useRef(null)

  const handleClose = useCallback(() => {
    hide()
  }, [hide])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [handleClose, modalRef])

  if (!isActive) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div ref={modalRef} className='relative'>
        {children}
      </div>
    </div>
  )
}
