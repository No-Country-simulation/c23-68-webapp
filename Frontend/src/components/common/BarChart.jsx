import { Card, BarChart, List, ListItem } from '@tremor/react'
import { useEffect, useState } from 'react'
import { getIncomeByCategory } from '../../service/dashboard'

const colorsMappingChart = {
  Freelance: 'emerald-500',
  Inversiones: 'black',
  Bonos: 'yellow',
  Salario: 'pink-600',
}

const colorsMappingLegend = {
  Freelance: 'bg-emerald-500',
  Inversiones: 'bg-black',
  Bonos: 'bg-yellow-500',
  Salario: 'bg-pink-600',
}

const transformData = (rawData) => {
  return rawData.reduce(
    (acc, { _id, total }) => {
      acc[0][_id] = total
      return acc
    },
    [{ name: 'Ingresos' }]
  )
}

const valueFormatter = (number) => `$${Intl.NumberFormat('us').format(number)}`

export default function Example() {
  const [rawData, setRawData] = useState([])
  const [transformedData, setTransformedData] = useState([])

  useEffect(() => {
    const getElements = async () => {
      const data = await getIncomeByCategory()
      setRawData(data.data)
      setTransformedData(transformData(data.data))
    }
    getElements()
  }, [])

  const categories = rawData?.map((item) => item._id)

  const chartColors = rawData?.map((item) => colorsMappingChart[item._id])
  return (
    <Card className='pl-12 pr-16 py-8 w-[50%] h-auto bg-white rounded-3xl shadow-lg font-onest'>
      <h3 className='text-lg font-semibold text-black'>Ingresos</h3>

      <BarChart
        data={transformedData}
        index='name'
        categories={categories}
        colors={chartColors}
        valueFormatter={valueFormatter}
        showLegend={false}
        showYAxis={false}
        showXAxis={false}
        layout='vertical'
        className='h-40 p-4 mt-6 bg-white'
      />

      <div className='mt-8 ml-5'>
        <List className='mt-2'>
          {rawData?.map((item) => (
            <ListItem
              key={item._id}
              className='flex items-center justify-between '
            >
              <div className='flex items-center space-x-2'>
                <span
                  className={`block h-4 w-4 ${colorsMappingLegend[item._id]}`}
                  aria-hidden='true'
                />
                <span className='text-black'>{item._id}</span>
              </div>
              <span className='font-medium text-tremor-content-strong'>
                {valueFormatter(item.total)}
              </span>
            </ListItem>
          ))}
        </List>
      </div>
    </Card>
  )
}
