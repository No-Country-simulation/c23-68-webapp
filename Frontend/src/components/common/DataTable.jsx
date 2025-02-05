import SearchInput from "./SearchInput";
import { Badge } from "../common/Badge";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { nameModal } from "../../config/nameModals";
import usePopups from "../../hooks/usePopups";

const DataTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(data);
  const [priorityFilter, setPriorityFilter] = useState("");
  const itemsPerPage = 8;

  const { show } = usePopups();
  const { AhorrosFormModalID, DatosEliminadosModalID, AhorrosEditFormModalID } = nameModal;

  const handleClick = () => {
    show({
      popUpId: AhorrosFormModalID,
      metadata: { id: AhorrosFormModalID, },
      pushMethod: "prepend",
    });
  };

  const handleCloseDelete = (idModal) => {
    show({
      popUpId: DatosEliminadosModalID,
      metadata: { id: DatosEliminadosModalID, idModal: idModal },
      pushMethod: "prepend",
    });
  };

  const handleEdit = (data) => {
    show({
      popUpId: AhorrosEditFormModalID,
      metadata: { id: AhorrosEditFormModalID, data: data },
      pushMethod: "prepend",
    });
  }
  useEffect(() => {

    setFilteredData(data);
  }, [data]);

  const handleSearch = (searchTerm) => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };


  const handlePriorityFilterChange = (event) => {
    const selectedPriority = event.target.value;
    setPriorityFilter(selectedPriority);


    const filtered = data.filter(
      (item) => selectedPriority === "" || item.priority === selectedPriority
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="p-10 w-full bg-gray-200 font-onest font-normal text-lg">
      <div className="flex justify-between mb-4">
        <SearchInput onSearch={handleSearch} />
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
        <button className="bg-verde hover:bg-verdeoscuro text-white px-6 py-2 rounded-lg flex items-center gap-2" onClick={handleClick}>
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
                    data.priority === "Alta"
                      ? "error"
                      : data.priority === "Media"
                      ? "warning"
                      : "info"
                  }>
                  {data.priority}
                </Badge>
              </td>
              <td className="px-2 text-center ">{data.name}</td>
              <td className="px-2 text-center ">${data.targetAmount}.00</td>
              <td className="px-2 text-center ">{data.createdAt}</td>
              <td className="px-2 text-center ">{data.deadline}</td>
              <td className="px-2  flex gap-2 items-center justify-center">
                <button className="w-[112px] h-[39px] bg-amarillo text-white px-2 rounded-lg flex justify-center items-center gap-2 hover:bg-amarillooscuro"
                onClick={()=>handleEdit(data)}>
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
                <button
                className="w-[112px] h-[39px] bg-rojo text-white px-2 rounded-lg flex justify-center items-center gap-2 hover:bg-rojooscuro"
                onClick={()=>handleCloseDelete(data.id)}>
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

DataTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      priority: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      targetAmount: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DataTable;
