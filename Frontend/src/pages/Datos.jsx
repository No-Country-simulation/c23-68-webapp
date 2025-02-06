import React from 'react'
import { NavLink } from 'react-router-dom'
import { nameModal } from '../config/nameModals'
import usePopups from '../hooks/usePopups'

const Datos = () => {
  const { show } = usePopups() // Añadir hook
  const { DataFormModalID } = nameModal // Añadir

  // Añadir función para abrir el formulario
  const handleAddData = () => {
    show({
      popUpId: DataFormModalID,
      metadata: { id: DataFormModalID },
      pushMethod: 'prepend',
    })
  }

  return (
    <div className='min-h-screen pt-6 font-sans bg-gris3'>
      {/* Contenedor principal */}
      <div className='bg-white shadow-lg rounded-3xl border-b-2  w-[90%]  max-w-[1000px] my-6 mx-auto pl-12 pr-32'>
        <div className='flex items-center justify-between '>
          {' '}
          {/* Flexbox para alinear párrafo e imagen */}
          <p className='text-2xl font-semibold font-anybody'>
            En este espacio podrás
            <span className='text-verde'> agregar</span>,
            <span className='text-amarillo'>editar</span>,
            <span className='text-rosa'>eliminar </span>
            los datos de tus ingresos y gastos
          </p>
          <img
            src='/images/datos.png'
            className='w-[150px] ' // Tamaño de la imagen
            alt='datos'
          />
        </div>
      </div>

      {/* Botón "Agregar datos" */}
      <div className='flex justify-end pl-[20%] pt-6 pb-6'>
        <button
          onClick={handleAddData}
          className='flex items-center justify-center gap-2 px-6 py-3 mx-64 text-xl text-white bg-green-500 rounded-full shadow-lg font-onest hover:bg-green-600'
        >
          <svg
            width='17'
            height='16'
            viewBox='0 0 17 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.5 0C8.92435 0 9.33131 0.168571 9.63137 0.468629C9.93143 0.768688 10.1 1.17565 10.1 1.6V6.4H14.9C15.3243 6.4 15.7313 6.56857 16.0314 6.86863C16.3314 7.16869 16.5 7.57565 16.5 8C16.5 8.42435 16.3314 8.83131 16.0314 9.13137C15.7313 9.43143 15.3243 9.6 14.9 9.6H10.1V14.4C10.1 14.8243 9.93143 15.2313 9.63137 15.5314C9.33131 15.8314 8.92435 16 8.5 16C8.07565 16 7.66869 15.8314 7.36863 15.5314C7.06857 15.2313 6.9 14.8243 6.9 14.4V9.6H2.1C1.67565 9.6 1.26869 9.43143 0.968629 9.13137C0.668571 8.83131 0.5 8.42435 0.5 8C0.5 7.57565 0.668571 7.16869 0.968629 6.86863C1.26869 6.56857 1.67565 6.4 2.1 6.4H6.9V1.6C6.9 1.17565 7.06857 0.768688 7.36863 0.468629C7.66869 0.168571 8.07565 0 8.5 0Z'
              fill='white'
            />
          </svg>
          Agregar datos
        </button>
      </div>

      {/* Sección "Ver mis ingresos" - Hacemos clickeable el contenedor completo */}
      <NavLink
        to='/datos/ingresos' // Aquí se añade el enlace
        className='bg-white shadow-lg rounded-3xl border-b-2 p-8 w-[90%] max-w-[1000px] my-10 mx-auto block'
      >
        <div className='flex items-center justify-between'>
          <p className='text-2xl font-medium font-anybody'>Ver mis ingresos</p>
          <svg
            className='w-[12px] h-auto'
            width='16'
            height='28'
            viewBox='0 0 16 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2.75 2.91675L13.8333 14.0001L2.75 25.0834'
              stroke='#1E1E1E'
              strokeWidth='4'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </NavLink>

      {/* Sección "Ver mis gastos" - Hacemos clickeable el contenedor completo */}
      <NavLink
        to='/datos/gastos' // Aquí se añade el enlace
        className='bg-white shadow-lg rounded-3xl border-b-2 p-8 w-[90%] max-w-[1000px] my-10 mx-auto block'
      >
        <div className='flex items-center justify-between'>
          <p className='text-2xl font-medium font-anybody'>Ver mis gastos</p>
          <svg
            className='w-[12px] h-auto'
            width='16'
            height='28'
            viewBox='0 0 16 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2.75 2.91675L13.8333 14.0001L2.75 25.0834'
              stroke='#1E1E1E'
              strokeWidth='4'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </NavLink>
    </div>
  )
}

export default Datos
