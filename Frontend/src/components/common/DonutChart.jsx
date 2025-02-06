import { Card, DonutChart, List, ListItem } from '@tremor/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const data = [
    {
        "category": "Ocio",
        "percentage": "12.57",
        "amount": 310
    },
    {
        "category": "Transporte",
        "percentage": "28.21",
        "amount": 696
    },
    {
        "category": "Salud",
        "percentage": "40.62",
        "amount": 1002
    },
    {
        "category": "Alquiler",
        "percentage": "3.89",
        "amount": 96
    },
    {
        "category": "Comida",
        "percentage": "14.71",
        "amount": 363
    }
];

const currencyFormatter = (number) => {
  return '$' + Intl.NumberFormat('us').format(number).toString();
};

export default function Example() {
  return (
    <>
      <Card className="pl-12 pr-16 py-8 w-[45%] h-auto bg-white rounded-3xl shadow-lg font-onest  ">
        <DonutChart
          className="mt-2"
          data={data}
          category="amount"
          index="category"
          valueFormatter={currencyFormatter}
          showTooltip={false}
          colors={['emerald-500', 'pink-600', 'yellow', 'black','sky-500']}
        />
        <p className="mt-8 flex items-center justify-between  text-black text-sm font-semibold">
          <span>Categoría</span>
          <span>Cantidad / Porcentaje</span>
        </p>
        <List className="mt-2 ">
          {data.map((item) => (
            <ListItem key={item.category} className="space-x-6 font-medium">
              <div className="flex items-center space-x-2.5 truncate">
                <span
                  className={classNames(
                    item.color,
                    'size-2.5 shrink-0 rounded-sm',
                  )}
                  aria-hidden={true}
                />
                <span className="truncate text-black">
                  {item.category}
                </span>
              </div>
              <div className="flex items-center space-x-10">
                <span className="tabular-nums text-black font-normal">
                  {currencyFormatter(item.amount)}
                </span>
                <span className="rounded-tremor-small bg-tremor-background-subtle px-1.5 py-0.5 text-tremor-label font-medium tabular-nums text-tremor-content-emphasis dark:bg-yellow-500 dark:text-black ">
                {Math.round(item.percentage)}%
                </span>
              </div>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  );
}