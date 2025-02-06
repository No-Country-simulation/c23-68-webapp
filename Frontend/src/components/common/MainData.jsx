import { useEffect, useState } from 'react'
import DataTable from './DataTable'
import { getSavingsGoals } from '../../service/savingGoals'

const MainData = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getElements = async () => {
      const data = await getSavingsGoals()
      setData(data.data)
    }
    getElements()
  }, [])

  return <DataTable data={data} />
}

export default MainData
