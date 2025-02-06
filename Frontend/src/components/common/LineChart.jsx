import { Card, LineChart, List, ListItem } from '@tremor/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const data = [
  {
    date: '2025-02-05',
    income: 4745,
    expense: 2467,
  },
]

const summary = [
  {
    name: 'income',
    value: 3273,
  },
  {
    name: 'expense',
    value: 120,
  },
]

const valueFormatter = (number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`

const statusColor = {
  income: 'bg-emerald-500',
  expense: 'bg-pink-600',
}

export default function Example() {
  return (
    <>
      <Card className=' pl-12 pr-16 py-8 w-[60%] h-auto bg-white rounded-3xl shadow-lg font-onest'>
        <h3 className='text-lg font-semibold text-negro'>
          Comparación entre gastos e ingresos
        </h3>
        <LineChart
          data={data}
          index='date'
          categories={['income', 'expense']}
          colors={['emerald-500', 'pink-600']}
          valueFormatter={valueFormatter}
          showLegend={false}
          showYAxis={true}
          showXAxis={false}
          startEndOnly={true}
          className='h-40 p-4 mt-6 bg-white'
        />
        <List className='flex justify-center mt-2 -space-x-64'>
          {summary.map((item) => (
            <ListItem
              key={item.name}
              className='flex flex-col items-center space-x-1'
            >
              <div className='flex items-center space-x-2'>
                <span
                  className={classNames(
                    statusColor[item.name],
                    'h-0.5 w-3 py-2 px-2 rounded-sm'
                  )}
                  aria-hidden={true}
                />
                <span>{item.name}</span>
              </div>
              <span className='font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                {valueFormatter(item.value)}
              </span>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  )
}
