import SearchInput from "./SearchInput"
import { Badge } from '../common/Badge';

const MainData = () => {
  return (
    <div className="p-6 w-full h-screen bg-gray-200 font-onest" >

      <div className="flex justify-between mb-4">
      <SearchInput />
      <select name="" id="" className="border p-2 mb-4 rounded-lg">
      <option value="">Etiqueta</option>
        <option value="">Alta</option>
        <option value="">Media</option>
        <option value="">Baja</option>

      </select>
      </div>

      <h2 className="text-2xl font-bold mb-4">Historial</h2>
      <table className="w-full border-collapse bg-white">
        <thead>
          <tr >
            <th className="p-2">Prioridad</th>
            <th className="p-2">Objetivo</th>
            <th className="p-2">Monto</th>
            <th className="p-2">Fecha inicio</th>
            <th className="p-2">Fecha final</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, index) => (
            <tr key={index} className="">
              <td className="p-2 text-center"><Badge className="p-2 text-center" variant="error">Alta</Badge></td>

              <td className="p-2 text-center">Una laptop marca X</td>
              <td className="p-2 text-center">$1,100.00</td>
              <td className="p-2 text-center">13/01/2025</td>
              <td className="p-2 text-center">13/03/2025</td>
              <td className="p-2 flex gap-2 justify-center">
                <button className="bg-yellow-500 text-white px-2 py-1 rounded">Editar</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainData;
