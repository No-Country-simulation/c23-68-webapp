import { nameModal } from './config/nameModals'
import usePopups from './hooks/usePopups'
import Home from './pages/Home'

function App() {
  const { LoadingModalID, LoginModalID, RegisterModalID, LoginContraModalID } = nameModal
  const { show } = usePopups()

  const handleShowModal = (idModal) => {
    show({
      popUpId: idModal,
      metadata: { id: idModal },
      pushMethod: 'prepend',
    })
  }

  return (
    <>

      <div className='flex flex-col items-center justify-center h-screen gap-4'>
        <h1 className='text-xl text-orange-400'> Popus</h1>
      
      <Home />
      {/* <div className='flex flex-col items-center justify-center h-screen gap-4'>
        <h1 className='text-xl text-red-600'> Testing de modales</h1>

        <button
          className='px-2 py-1 border border-red-400 rounded-lg'
          //onClick={() => handleShowModal(LoadingModalID)}
          onClick={() => handleShowModal(LoginContraModalID)}
        >
          Show Login Contra Modal
        </button>
        <button
          className='px-2 py-1 border border-red-400 rounded-lg'
          onClick={() => handleShowModal(LoginModalID)}
        >
          Show Login Modal

        </button>
        <button
          className='px-2 py-1 border border-red-400 rounded-lg'
          onClick={() => handleShowModal(RegisterModalID)}
        >
          Show Register Modal
        </button>

      </div>
        </button> 
      </div>*/}
      
      </div>  

    </>
  )
}

export default App
