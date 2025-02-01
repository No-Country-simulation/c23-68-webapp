import SearchInput from "./SearchInput";
import { Badge } from "../common/Badge";
import PropTypes from "prop-types";

const DataTable = ({data}) => {
  return (
    <div className="p-6 w-full h-screen bg-gray-200 font-onest">
      <div className="flex justify-between mb-4">
        <SearchInput />
        <select name="" id="" className="border p-2 mb-4 rounded-lg">
          <option value="">Etiqueta</option>
          <option value="">Alta</option>
          <option value="">Media</option>
          <option value="">Baja</option>
        </select>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Historial</h2>
        <button className="bg-verde text-white px-6 py-2 rounded-lg">
          Agregar
        </button>
      </div>
      <table className="w-full border-collapse bg-white rounded-xl">
        <thead>
          <tr className="text-xl">
            <th className="p-2 pt-4">Prioridad</th>
            <th className="p-2 pt-4">Objetivo</th>
            <th className="p-2 pt-4">Monto</th>
            <th className="p-2 pt-4">Fecha inicio</th>
            <th className="p-2 pt-4">Fecha final</th>
            <th className="p-2 pt-4"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={data.id} className="">
              <td className="p-2 text-center">
                <Badge className="p-2 text-center" variant="error">
                  {data.Prioridad}
                </Badge>
              </td>

              <td className="p-2 text-center pb-4">{data.Objetivo}</td>
              <td className="p-2 text-center pb-4">{data.Monto}</td>
              <td className="p-2 text-center pb-4">{data.fecha_inicio}</td>
              <td className="p-2 text-center pb-4">{data.fecha_fin}</td>
              <td className="p-2 flex gap-2 justify-center pb-4">
                <button className="bg-yellow-500 text-white px-2 py-1 rounded">
                  Editar
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      prioridad: PropTypes.string.isRequired,
      objetivo: PropTypes.string.isRequired,
      monto: PropTypes.number.isRequired,
      fecha_inicio: PropTypes.string.isRequired,
      fecha_final: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default DataTable;
