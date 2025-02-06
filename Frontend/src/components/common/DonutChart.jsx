import { Card, DonutChart, List, ListItem } from '@tremor/react'
import { useEffect, useMemo, useState } from 'react'
import { getExpensePercentage } from '../../service/dashboard'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const currencyFormatter = (number) => {
  return '$' + Intl.NumberFormat('us').format(number).toString()
}

export default function Example() {
  const [dataExpense, setData] = useState([])
  const colors = useMemo(
    () => ['emerald-500', 'pink-600', 'yellow-500', 'black', 'sky-500'],
    []
  )
  useEffect(() => {
    const getElements = async () => {
      const data = await getExpensePercentage()
      const updatedData = data.data.map((item, index) => ({
        ...item,
        color: colors[index] ? `bg-${colors[index]}` : 'bg-gray-500',
      }))
      setData(updatedData)
    }
    getElements()
  }, [colors])

  return (
    <>
      <Card className='pl-12 pr-16 py-8 w-[45%] h-auto bg-white rounded-3xl shadow-lg font-onest  '>
        <DonutChart
          className='mt-2'
          data={dataExpense}
          category='amount'
          index='category'
          valueFormatter={currencyFormatter}
          showTooltip={false}
          colors={colors}
        />
        <p className='flex items-center justify-between mt-8 text-sm font-semibold text-black'>
          <span>Categoría</span>
          <span>Cantidad / Porcentaje</span>
        </p>
        <List className='mt-2 '>
          {dataExpense?.map((item) => (
            <ListItem key={item.category} className='space-x-6 font-medium'>
              <div className='flex items-center space-x-2.5 truncate'>
                <span
                  className={classNames(
                    item.color,
                    'size-2.5 shrink-0 rounded-sm'
                  )}
                  aria-hidden={true}
                />
                <span className='text-black truncate'>{item.category}</span>
              </div>
              <div className='flex items-center space-x-10'>
                <span className='font-normal text-black tabular-nums'>
                  {currencyFormatter(item.amount)}
                </span>
                <span className='rounded-tremor-small bg-tremor-background-subtle px-1.5 py-0.5 text-tremor-label font-medium tabular-nums text-tremor-content-emphasis dark:bg-yellow-500 dark:text-black '>
                  {Math.round(item.percentage)}%
                </span>
              </div>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  )
}
