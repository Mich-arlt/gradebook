import { useState, useEffect } from "react";
import axios from "axios";

export const GetSubjects = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gradebook-api-app.azurewebsites.net/api/subjects/grades/" +
            id
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <div>
          <div>Data:</div>
          <div>{JSON.stringify(data, null, 2)}</div>
        </div>
      ) : (
        <div>Loading data...</div>
      )}
    </>
  );
};

export default GetSubjects;
