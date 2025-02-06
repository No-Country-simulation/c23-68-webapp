import { Card, BarChart, List, ListItem } from '@tremor/react';

const rawData = [
  { _id: 'Freelance', total: 1878 },
  { _id: 'Inversiones', total: 1250 },
  { _id: 'Bonos', total: 547 },
  { _id: 'Salario', total: 1070 },
];


const colorsMappingChart = {
  Freelance: 'emerald-500',
  Inversiones: 'black',
  Bonos: 'yellow',
  Salario: 'pink-600',
};


const colorsMappingLegend = {
  Freelance: 'bg-emerald-500',
  Inversiones: 'bg-black',
  Bonos: 'bg-yellow-500',
  Salario: 'bg-pink-600',
};

const transformedData = [
  {
    name: 'Ingresos',
    Freelance: 1878,
    Inversiones: 1250,
    Bonos: 547,
    Salario: 1070,
  },
];


const categories = rawData.map((item) => item._id);

const chartColors = rawData.map((item) => colorsMappingChart[item._id]);

const valueFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number)}`;

export default function Example() {
  return (
    <Card className="pl-12 pr-16 py-8 w-[50%] h-auto bg-white rounded-3xl shadow-lg font-onest">
      <h3 className="text-lg text-black font-semibold">Ingresos</h3>

      <BarChart
        data={transformedData}
        index="name"
        categories={categories} 
        colors={chartColors} 
        valueFormatter={valueFormatter}
        showLegend={false}
        showYAxis={false}
        showXAxis={false}
        showGrid={false}
        layout="vertical"
     
        className="mt-6 h-40 bg-white p-4"
      />

      <div className="mt-8 ml-5">
       
        <List className="mt-2">
          {rawData.map((item) => (
            <ListItem key={item._id} className="flex items-center justify-between ">
              <div className="flex items-center space-x-2">
                <span
                  className={`block h-4 w-4 ${colorsMappingLegend[item._id]}`}
                  aria-hidden="true"
                />
                <span className="text-black">{item._id}</span>
              </div>
              <span className="font-medium  text-tremor-content-strong">
                {valueFormatter(item.total)}
              </span>
            </ListItem>
          ))}
        </List>
      </div>
    </Card>
  );
}
