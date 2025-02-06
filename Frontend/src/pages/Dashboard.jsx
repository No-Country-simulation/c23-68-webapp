import { Card, Title } from '@tremor/react'
import '../styles/Home.css'
import LineChart from '../components/common/LineChart'
import DonutChart from '../components/common/DonutChart'
import BarChart from '../components/common/BarChart'

const Dashboard = () => {
  useEffect(() => {
    const getElements = async () => {
      const data = await getTotalIncome()
      console.log(data)
    }
    getElements()
  }, [])

  return (
    <div className='flex flex-col min-h-screen px-6 pt-3 bg-gray-100 font-onest'>
      {/* Encabezado */}
      <div className='flex items-center w-[95%] max-w-[1400px] mt-6'>
        <h2 className='ml-[6%] text-3xl text-negro font-normal'>
          ¡Buenos Días, Samir!
        </h2>
        <img
          src='/images/dashboard.png'
          alt='Logo'
          className='inline-block ml-3'
        />
      </div>

      {/* Tarjetas de resumen */}
      <div className='flex justify-between pl-10 mt-10 '>
        <LineChart />
        <div className='flex flex-col gap-4 mt-auto w-[30%] ml-auto mr-10'>
          <Card className='p-5 text-center text-white shadow-lg bg-verde rounded-3xl'>
            <Title className='text-2xl'>Ingreso Total</Title>
            <p className='text-2xl'>$2,200.00</p>
          </Card>
          <Card className='p-5 text-center text-white shadow-lg bg-rosa2 rounded-3xl'>
            <Title className='text-2xl'>Gasto Total</Title>
            <p className='text-2xl'>$400.00</p>
          </Card>
          <Card className='p-5 text-center text-white shadow-lg bg-amarillooscuro rounded-3xl'>
            <Title className='text-2xl'>Dinero Restante</Title>
            <p className='text-2xl'>$1,800.00</p>
          </Card>
        </div>
      </div>

      <div className='flex justify-between pl-10 pr-10 mt-10 '>
        <DonutChart />
        <BarChart />
      </div>
    </div>
  )
}
  )
}

export default Dashboard
export default Dashboard
