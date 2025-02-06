import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { BiFontFamily } from 'react-icons/bi'
import { RiFontFamily } from 'react-icons/ri'
import { format } from '@formkit/tempo'

const Gastos = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 7

  const [data, setData] = useState([
    {
      _id: '67a2f32527ed8f9d7e543785',
      user: '67a2f32527ed8f9d7e543772',
      amount: 363,
      type: 'Gasto',
      category: 'Comida',
      description: 'Gasto generado automáticamente',
      date: '2025-02-05T05:12:05.502Z',
      __v: 0,
    },
    {
      _id: '67a2f32527ed8f9d7e543786',
      user: '67a2f32527ed8f9d7e543772',
      amount: 310,
      type: 'Gasto',
      category: 'Ocio',
      description: 'Gasto generado automáticamente',
      date: '2025-02-05T05:12:05.502Z',
      __v: 0,
    },
    {
      _id: '67a2f32527ed8f9d7e543787',
      user: '67a2f32527ed8f9d7e543772',
      amount: 394,
      type: 'Gasto',
      category: 'Salud',
      description: 'Gasto generado automáticamente',
      date: '2025-02-05T05:12:05.502Z',
      __v: 0,
    },
    {
      _id: '67a2f32527ed8f9d7e543788',
      user: '67a2f32527ed8f9d7e543772',
      amount: 130,
      type: 'Gasto',
      category: 'Transporte',
      description: 'Gasto generado automáticamente',
      date: '2025-02-05T05:12:05.502Z',
      __v: 0,
    },
    {
      _id: '67a2f32527ed8f9d7e543789',
      user: '67a2f32527ed8f9d7e543772',
      amount: 390,
      type: 'Gasto',
      category: 'Transporte',
      description: 'Gasto generado automáticamente',
      date: '2025-02-05T05:12:05.502Z',
      __v: 0,
    },
    {
      _id: '67a2f32527ed8f9d7e543784',
      user: '67a2f32527ed8f9d7e543772',
      amount: 473,
      type: 'Gasto',
      category: 'Salud',
      description: 'Gasto generado automáticamente',
      date: '2025-02-05T05:12:05.502Z',
      __v: 0,
    },
    {
      _id: '67a2f32527ed8f9d7e543780',
      user: '67a2f32527ed8f9d7e543772',
      amount: 96,
      type: 'Gasto',
      category: 'Alquiler',
      description: 'Gasto generado automáticamente',
      date: '2025-02-05T05:12:05.501Z',
      __v: 0,
    },
    {
      _id: '67a2f32527ed8f9d7e543781',
      user: '67a2f32527ed8f9d7e543772',
      amount: 36,
      type: 'Gasto',
      category: 'Salud',
      description: 'Gasto generado automáticamente',
      date: '2025-02-05T05:12:05.502Z',
      __v: 0,
    },
    {
      _id: '67a2f32527ed8f9d7e543782',
      user: '67a2f32527ed8f9d7e543772',
      amount: 99,
      type: 'Gasto',
      category: 'Salud',
      description: 'Gasto generado automáticamente',
      date: '2025-02-05T05:12:05.502Z',
      __v: 0,
    },
    {
      _id: '67a2f32527ed8f9d7e543783',
      user: '67a2f32527ed8f9d7e543772',
      amount: 176,
      type: 'Gasto',
      category: 'Transporte',
      description: 'Gasto generado automáticamente',
      date: '2025-02-05T05:12:05.502Z',
      __v: 0,
    },
  ])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredData = data.filter(
    (item) =>
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.date.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const offset = currentPage * itemsPerPage
  const currentItems = filteredData.slice(offset, offset + itemsPerPage)
  const pageCount = Math.ceil(filteredData.length / itemsPerPage)

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
  }

  const getTotalAmount = () => {
    return currentItems.reduce((total, item) => total + item.amount, 0)
  }

  const optionStyles = {
    backgroundColor: '#ffffff',
    color: '#1E1E1E',
    fontSize: '12px',
    BiFontFamily: 'Onest',
  }

  return (
    <div className='flex flex-col min-h-screen pt-3 font-onest bg-gris3'>
      <div className='flex items-center justify-between relative ml-[5%] my-9 w-[90%] max-w-[1400px]'>
        <div className='relative w-[65%] mr-4'>
          <input
            type='text'
            placeholder='Buscador'
            value={searchTerm}
            onChange={handleSearch}
            className='w-full p-2 text-lg border rounded-lg text-gris4 pl-11'
          />
          <svg
            className='absolute transform -translate-y-1/2 left-3 top-1/2'
            width='20'
            height='21'
            viewBox='0 0 20 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8 4.50003C6.93913 4.50003 5.92172 4.92146 5.17157 5.67161C4.42143 6.42175 4 7.43917 4 8.50003C4 9.5609 4.42143 10.5783 5.17157 11.3285C5.92172 12.0786 6.93913 12.5 8 12.5C9.06087 12.5 10.0783 12.0786 10.8284 11.3285C11.5786 10.5783 12 9.5609 12 8.50003C12 7.43917 11.5786 6.42175 10.8284 5.67161C10.0783 4.92146 9.06087 4.50003 8 4.50003ZM2 8.50003C1.99988 7.55574 2.22264 6.62475 2.65017 5.78278C3.0777 4.9408 3.69792 4.21163 4.4604 3.65456C5.22287 3.09749 6.10606 2.72825 7.03815 2.57687C7.97023 2.42549 8.92488 2.49625 9.82446 2.78338C10.724 3.07052 11.5432 3.56594 12.2152 4.22933C12.8872 4.89272 13.3931 5.70537 13.6919 6.60117C13.9906 7.49697 14.0737 8.45063 13.9343 9.38459C13.795 10.3185 13.4372 11.2064 12.89 11.976L17.707 16.793C17.8892 16.9816 17.99 17.2342 17.9877 17.4964C17.9854 17.7586 17.8802 18.0094 17.6948 18.1949C17.5094 18.3803 17.2586 18.4854 16.9964 18.4877C16.7342 18.49 16.4816 18.3892 16.293 18.207L11.477 13.391C10.5794 14.0293 9.52335 14.4082 8.42468 14.4862C7.326 14.5641 6.22707 14.3381 5.2483 13.833C4.26953 13.3279 3.44869 12.5631 2.87572 11.6224C2.30276 10.6817 1.99979 9.60147 2 8.50003Z'
              fill='#868B93'
            />
          </svg>
        </div>
        <select className=' w-[18%] ml-4 text-gris4 text-lg px-6 py-3 border rounded-lg'>
          <option style={optionStyles} value=''>
            Fecha
          </option>
          <option style={optionStyles} value='opcion1'>
            13/01/2025
          </option>
          <option style={optionStyles} value='opcion2'>
            14/01/2025
          </option>
          <option style={optionStyles} value='opcion3'>
            15/01/2025
          </option>
        </select>
      </div>

      <div className='flex items-center justify-between w-[95%] max-w-[1400px] mt-11'>
        <h2 className=' ml-[6%] text-3xl text-gris'>Historial</h2>
        <button className='px-5 py-2 text-lg text-white rounded-lg shadow-lg  bg-verde font-onest hover:bg-green-600'>
          <svg
            className='inline-block mr-2'
            width='20'
            height='21'
            viewBox='0 0 20 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M10 18.5C12.1217 18.5 14.1566 17.6571 15.6569 16.1569C17.1571 14.6566 18 12.6217 18 10.5C18 8.37827 17.1571 6.34344 15.6569 4.84315C14.1566 3.34285 12.1217 2.5 10 2.5C7.87827 2.5 5.84344 3.34285 4.34315 4.84315C2.84285 6.34344 2 8.37827 2 10.5C2 12.6217 2.84285 14.6566 4.34315 16.1569C5.84344 17.6571 7.87827 18.5 10 18.5ZM11 7.5C11 7.23478 10.8946 6.98043 10.7071 6.79289C10.5196 6.60536 10.2652 6.5 10 6.5C9.73478 6.5 9.48043 6.60536 9.29289 6.79289C9.10536 6.98043 9 7.23478 9 7.5V9.5H7C6.73478 9.5 6.48043 9.60536 6.29289 9.79289C6.10536 9.98043 6 10.2348 6 10.5C6 10.7652 6.10536 11.0196 6.29289 11.2071C6.48043 11.3946 6.73478 11.5 7 11.5H9V13.5C9 13.7652 9.10536 14.0196 9.29289 14.2071C9.48043 14.3946 9.73478 14.5 10 14.5C10.2652 14.5 10.5196 14.3946 10.7071 14.2071C10.8946 14.0196 11 13.7652 11 13.5V11.5H13C13.2652 11.5 13.5196 11.3946 13.7071 11.2071C13.8946 11.0196 14 10.7652 14 10.5C14 10.2348 13.8946 9.98043 13.7071 9.79289C13.5196 9.60536 13.2652 9.5 13 9.5H11V7.5Z'
              fill='white'
            />
          </svg>
          Agregar
        </button>
      </div>

      <div className='bg-white shadow-lg rounded-3xl border-b-2 p-2 w-[90%] max-w-[1400px] my-8 ml-[5%]'>
        <div className='w-full my-2 bg-white border-collapse rounded-xl'>
          <table className='min-w-full'>
            <thead>
              <tr className='bg-white'>
                <th className='p-2 pt-4 text-2xl font-semibold font-onest text-negro'>
                  Tipo
                </th>
                <th className='p-2 pt-4 text-2xl font-semibold font-onest text-negro'>
                  Monto
                </th>
                <th className='p-2 pt-4 text-2xl font-semibold font-onest text-negro'>
                  Categoría
                </th>
                <th className='p-2 pt-4 text-2xl font-semibold font-onest text-negro'>
                  Descripción
                </th>
                <th className='p-2 pt-4 text-2xl font-semibold font-onest text-negro'>
                  Fecha
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index} className='hover:bg-gray-50'>
                  <td className='p-2 pb-4 text-lg font-normal text-center font-onest text-negro'>
                    {item.type}
                  </td>
                  <td className='p-2 pb-4 text-lg font-normal text-center font-onest text-negro'>
                    ${item.amount}
                  </td>
                  <td className='p-2 pb-4 text-lg font-normal text-center font-onest text-negro'>
                    {item.category}
                  </td>
                  <td className='p-2 pb-4 text-lg font-normal text-center font-onest text-negro'>
                    {item.description}
                  </td>
                  <td className='p-2 pb-4 text-lg font-normal text-center font-onest text-negro'>
                    {format(new Date(item.date), 'DD/MM/YYYY')}
                  </td>
                  <td className='flex justify-center gap-2 p-2 pb-4'>
                    <button className='px-4 py-2 text-white bg-yellow-500 rounded'>
                      <svg
                        className='inline-block mr-2'
                        width='21'
                        height='20'
                        viewBox='0 0 21 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M17.914 2.58606C17.5389 2.21112 17.0303 2.00049 16.5 2.00049C15.9697 2.00049 15.4611 2.21112 15.086 2.58606L7.5 10.1721V13.0001H10.328L17.914 5.41406C18.2889 5.03901 18.4996 4.53039 18.4996 4.00006C18.4996 3.46973 18.2889 2.96112 17.914 2.58606Z'
                          fill='white'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M2.5 6C2.5 5.46957 2.71071 4.96086 3.08579 4.58579C3.46086 4.21071 3.96957 4 4.5 4H8.5C8.76522 4 9.01957 4.10536 9.20711 4.29289C9.39464 4.48043 9.5 4.73478 9.5 5C9.5 5.26522 9.39464 5.51957 9.20711 5.70711C9.01957 5.89464 8.76522 6 8.5 6H4.5V16H14.5V12C14.5 11.7348 14.6054 11.4804 14.7929 11.2929C14.9804 11.1054 15.2348 11 15.5 11C15.7652 11 16.0196 11.1054 16.2071 11.2929C16.3946 11.4804 16.5 11.7348 16.5 12V16C16.5 16.5304 16.2893 17.0391 15.9142 17.4142C15.5391 17.7893 15.0304 18 14.5 18H4.5C3.96957 18 3.46086 17.7893 3.08579 17.4142C2.71071 17.0391 2.5 16.5304 2.5 16V6Z'
                          fill='white'
                        />
                      </svg>
                      Editar
                    </button>

                    <button className='px-3 py-2 text-white bg-red-500 rounded'>
                      <svg
                        className='inline-block mr-2'
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M9 2C8.81434 2.0001 8.63237 2.05188 8.47447 2.14955C8.31658 2.24722 8.18899 2.38692 8.106 2.553L7.382 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H12.618L11.894 2.553C11.811 2.38692 11.6834 2.24722 11.5255 2.14955C11.3676 2.05188 11.1857 2.0001 11 2H9ZM7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8V14C9 14.2652 8.89464 14.5196 8.70711 14.7071C8.51957 14.8946 8.26522 15 8 15C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V8ZM12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7Z'
                          fill='white'
                        />
                      </svg>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex justify-between items-center w-[90%] max-w-[1400px] mt-[1%] mb-[4%] ml-[5%]'>
        <div className='bg-white shadow-lg rounded-xl border-b-2 p-3 w-[22%] max-w-[1400px]  font-onest text-negro text-lg'>
          <strong className='font-light text-black'>
            Gasto Total: ${getTotalAmount()}
          </strong>
        </div>
        <ReactPaginate
          previousLabel={null}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName='flex justify-center space-x-2 mt-4'
          pageClassName='px-3 py-1 border rounded-lg cursor-pointer bg-white text-celeste2 hover:bg-celeste2 hover:text-white'
          pageLinkClassName=''
          previousClassName='hidden'
          nextClassName='px-3 py-1 border rounded-lg cursor-pointer bg-white text-celeste2 hover:bg-celeste2 hover:text-white'
          breakClassName='px-3 py-1 border rounded-lg cursor-pointer bg-white text-gray-700'
          disabledClassName='opacity-50 cursor-not-allowed'
          activeClassName='!bg-celeste2 !text-white !border !border-celeste2'
        />
      </div>
    </div>
  )
}

export default Gastos
