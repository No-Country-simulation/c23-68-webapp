
import { useEffect, useState } from "react";
import DataTable from "./DataTable";

const MainData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/savingdata.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <DataTable data={data}/>
  );
};

export default MainData;
