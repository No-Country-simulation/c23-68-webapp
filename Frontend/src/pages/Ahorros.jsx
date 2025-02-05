import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { nameModal } from "../config/nameModals";
import usePopups from "../hooks/usePopups";

const DataTable = ({ data = []}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [priorityFilter, setPriorityFilter] = useState("");
  const itemsPerPage = 5;

  const { show } = usePopups();
  const { DataFormModalID } = nameModal;

  const handleClick = () => {
    show({
      popUpId: DataFormModalID,
      metadata: { id: DataFormModalID },
      pushMethod: "prepend",
    });
  };


  useEffect(() => {

    setFilteredData(data || []);
  }, [data]);

  const handleSearch = (searchTerm) => {
    const filtered = data.filter((item) =>
      item.Objetivo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };


  const handlePriorityFilterChange = (event) => {
    const selectedPriority = event.target.value;
    setPriorityFilter(selectedPriority);


    const filtered = data.filter(
      (item) => selectedPriority === "" || item.Prioridad === selectedPriority
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = (filteredData || []).slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };




    // Componente Badge definido dentro del mismo archivo
    const Badge = ({ variant, children }) => {
        let colorClass;
        switch (variant) {
          case 'error':
            colorClass = 'bg-red-500 text-white';
            break;
          case 'warning':
            colorClass = 'bg-yellow-500 text-black';
            break;
          case 'info':
            colorClass = 'bg-blue-500 text-white';
            break;
          default:
            colorClass = 'bg-gray-500 text-white';
        }
    
        return (
          <span className={`inline-block px-2 py-1 rounded-full text-sm font-semibold ${colorClass}`}>
            {children}
          </span>
        );
      };





  return (
    <div className="p-10 w-full bg-gray-200 font-onest font-normal text-lg">
      <div className="flex justify-between mb-4">
      <div className="relative w-[65%] mr-4">
          <input
            type="text"
            placeholder="Buscador"
           // value={}
            onChange={handleSearch}
            className="text-gris4 text-lg p-2 pl-11 border rounded-lg w-full"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4.50003C6.93913 4.50003 5.92172 4.92146 5.17157 5.67161C4.42143 6.42175 4 7.43917 4 8.50003C4 9.5609 4.42143 10.5783 5.17157 11.3285C5.92172 12.0786 6.93913 12.5 8 12.5C9.06087 12.5 10.0783 12.0786 10.8284 11.3285C11.5786 10.5783 12 9.5609 12 8.50003C12 7.43917 11.5786 6.42175 10.8284 5.67161C10.0783 4.92146 9.06087 4.50003 8 4.50003ZM2 8.50003C1.99988 7.55574 2.22264 6.62475 2.65017 5.78278C3.0777 4.9408 3.69792 4.21163 4.4604 3.65456C5.22287 3.09749 6.10606 2.72825 7.03815 2.57687C7.97023 2.42549 8.92488 2.49625 9.82446 2.78338C10.724 3.07052 11.5432 3.56594 12.2152 4.22933C12.8872 4.89272 13.3931 5.70537 13.6919 6.60117C13.9906 7.49697 14.0737 8.45063 13.9343 9.38459C13.795 10.3185 13.4372 11.2064 12.89 11.976L17.707 16.793C17.8892 16.9816 17.99 17.2342 17.9877 17.4964C17.9854 17.7586 17.8802 18.0094 17.6948 18.1949C17.5094 18.3803 17.2586 18.4854 16.9964 18.4877C16.7342 18.49 16.4816 18.3892 16.293 18.207L11.477 13.391C10.5794 14.0293 9.52335 14.4082 8.42468 14.4862C7.326 14.5641 6.22707 14.3381 5.2483 13.833C4.26953 13.3279 3.44869 12.5631 2.87572 11.6224C2.30276 10.6817 1.99979 9.60147 2 8.50003Z"
              fill="#868B93"
            />
          </svg>
        </div>
       
        <select
          value={priorityFilter}
          onChange={handlePriorityFilterChange}
          className="border p-2 mb-4 rounded-lg text-gris2 font-bold">
          <option value="">Etiqueta</option>
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-normal text-gris">Historial</h2>
        <button className="bg-verde text-white px-6 py-2 rounded-lg flex items-center gap-2" onClick={handleClick}>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 18.5C12.1217 18.5 14.1566 17.6571 15.6569 16.1569C17.1571 14.6566 18 12.6217 18 10.5C18 8.37827 17.1571 6.34344 15.6569 4.84315C14.1566 3.34285 12.1217 2.5 10 2.5C7.87827 2.5 5.84344 3.34285 4.34315 4.84315C2.84285 6.34344 2 8.37827 2 10.5C2 12.6217 2.84285 14.6566 4.34315 16.1569C5.84344 17.6571 7.87827 18.5 10 18.5ZM11 7.5C11 7.23478 10.8946 6.98043 10.7071 6.79289C10.5196 6.60536 10.2652 6.5 10 6.5C9.73478 6.5 9.48043 6.60536 9.29289 6.79289C9.10536 6.98043 9 7.23478 9 7.5V9.5H7C6.73478 9.5 6.48043 9.60536 6.29289 9.79289C6.10536 9.98043 6 10.2348 6 10.5C6 10.7652 6.10536 11.0196 6.29289 11.2071C6.48043 11.3946 6.73478 11.5 7 11.5H9V13.5C9 13.7652 9.10536 14.0196 9.29289 14.2071C9.48043 14.3946 9.73478 14.5 10 14.5C10.2652 14.5 10.5196 14.3946 10.7071 14.2071C10.8946 14.0196 11 13.7652 11 13.5V11.5H13C13.2652 11.5 13.5196 11.3946 13.7071 11.2071C13.8946 11.0196 14 10.7652 14 10.5C14 10.2348 13.8946 9.98043 13.7071 9.79289C13.5196 9.60536 13.2652 9.5 13 9.5H11V7.5Z"
              fill="white"
            />
          </svg>
          <span>Agregar</span>
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
          {currentItems.map((data) => (
            <tr key={data.id}>
              <td className="p-2 text-center">
                <Badge
                  className="p-2 text-center"
                  variant={
                    data.Prioridad === "Alta"
                      ? "error"
                      : data.Prioridad === "Media"
                      ? "warning"
                      : "info"
                  }>
                  {data.Prioridad}
                </Badge>
              </td>
              <td className="p-2 text-center pb-4">{data.Objetivo}</td>
              <td className="p-2 text-center pb-4">${data.Monto}.00</td>
              <td className="p-2 text-center pb-4">{data.fecha_inicio}</td>
              <td className="p-2 text-center pb-4">{data.fecha_fin}</td>
              <td className="p-2 flex gap-2 justify-center pb-4">
                <button className="bg-yellow-500 text-white px-2 py-1 rounded flex items-center gap-2">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.664 2.58606C17.2889 2.21112 16.7803 2.00049 16.25 2.00049C15.7197 2.00049 15.2111 2.21112 14.836 2.58606L7.25 10.1721V13.0001H10.078L17.664 5.41406C18.0389 5.03901 18.2496 4.53039 18.2496 4.00006C18.2496 3.46973 18.0389 2.96112 17.664 2.58606Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.25 6C2.25 5.46957 2.46071 4.96086 2.83579 4.58579C3.21086 4.21071 3.71957 4 4.25 4H8.25C8.51522 4 8.76957 4.10536 8.95711 4.29289C9.14464 4.48043 9.25 4.73478 9.25 5C9.25 5.26522 9.14464 5.51957 8.95711 5.70711C8.76957 5.89464 8.51522 6 8.25 6H4.25V16H14.25V12C14.25 11.7348 14.3554 11.4804 14.5429 11.2929C14.7304 11.1054 14.9848 11 15.25 11C15.5152 11 15.7696 11.1054 15.9571 11.2929C16.1446 11.4804 16.25 11.7348 16.25 12V16C16.25 16.5304 16.0393 17.0391 15.6642 17.4142C15.2891 17.7893 14.7804 18 14.25 18H4.25C3.71957 18 3.21086 17.7893 2.83579 17.4142C2.46071 17.0391 2.25 16.5304 2.25 16V6Z"
                      fill="white"
                    />
                  </svg>
                  <span>Editar</span>
                </button>
                <button className="bg-[#FF4049] text-white px-2 py-1 rounded flex items-center gap-2">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.75 2C9.56434 2.0001 9.38237 2.05188 9.22447 2.14955C9.06658 2.24722 8.93899 2.38692 8.856 2.553L8.132 4H4.75C4.48478 4 4.23043 4.10536 4.04289 4.29289C3.85536 4.48043 3.75 4.73478 3.75 5C3.75 5.26522 3.85536 5.51957 4.04289 5.70711C4.23043 5.89464 4.48478 6 4.75 6V16C4.75 16.5304 4.96071 17.0391 5.33579 17.4142C5.71086 17.7893 6.21957 18 6.75 18H14.75C15.2804 18 15.7891 17.7893 16.1642 17.4142C16.5393 17.0391 16.75 16.5304 16.75 16V6C17.0152 6 17.2696 5.89464 17.4571 5.70711C17.6446 5.51957 17.75 5.26522 17.75 5C17.75 4.73478 17.6446 4.48043 17.4571 4.29289C17.2696 4.10536 17.0152 4 16.75 4H13.368L12.644 2.553C12.561 2.38692 12.4334 2.24722 12.2755 2.14955C12.1176 2.05188 11.9357 2.0001 11.75 2H9.75ZM7.75 8C7.75 7.73478 7.85536 7.48043 8.04289 7.29289C8.23043 7.10536 8.48478 7 8.75 7C9.01522 7 9.26957 7.10536 9.45711 7.29289C9.64464 7.48043 9.75 7.73478 9.75 8V14C9.75 14.2652 9.64464 14.5196 9.45711 14.7071C9.26957 14.8946 9.01522 15 8.75 15C8.48478 15 8.23043 14.8946 8.04289 14.7071C7.85536 14.5196 7.75 14.2652 7.75 14V8ZM12.75 7C12.4848 7 12.2304 7.10536 12.0429 7.29289C11.8554 7.48043 11.75 7.73478 11.75 8V14C11.75 14.2652 11.8554 14.5196 12.0429 14.7071C12.2304 14.8946 12.4848 15 12.75 15C13.0152 15 13.2696 14.8946 13.4571 14.7071C13.6446 14.5196 13.75 14.2652 13.75 14V8C13.75 7.73478 13.6446 7.48043 13.4571 7.29289C13.2696 7.10536 13.0152 7 12.75 7Z"
                      fill="white"
                    />
                  </svg>
                  <span>Eliminar</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <nav>
          <ul className="flex gap-2">
            {Array.from(
              { length: Math.ceil(filteredData.length / itemsPerPage) },
              (_, i) => (
                <li key={i + 1}>
                  <button
                    onClick={() => paginate(i + 1)}
                    className={`px-3 py-1 rounded ${
                      currentPage === i + 1
                        ? "bg-celeste text-white"
                        : "bg-white text-gris2"
                    }`}>
                    {i + 1}
                  </button>
                </li>
              )
            )}
            <li>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredData.length / itemsPerPage)
                }
                className={`px-3 py-1 rounded ${
                  currentPage === Math.ceil(filteredData.length / itemsPerPage)
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-white text-gris2"
                }`}>
                &gt;
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

DataTable.defaultProps = {
    data: [] // ✅ Valor por defecto explícito
  };


export default DataTable;
