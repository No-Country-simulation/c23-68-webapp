import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mt-4 mb-4'>
        <h1>LOGO FINANCE</h1>

        <button type="button" className='flex items-center justify-center w-56 h-10 text-white text-lg bg-[#2ECC71] rounded-2xl p-2'>
            Iniciar Sesion
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
</svg>

          </button>
    </div>
  )
}

export default Navbar