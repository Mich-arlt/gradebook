import { useState, useEffect } from "react";
import axios from "axios";
import { Descriptions } from "antd";

export const GetGrades = ({ id, token, nameidentifier }) => {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      try {
        const response = await axios.get(
          `https://gradebook-api-app.azurewebsites.net/api/finalgrade/${nameidentifier}`
        );
        setStudentData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudentData();
  }, [id, token]);

  const generateDivs = (myObject) => {
    return myObject.map((obj, index) => (
      <Descriptions
        bordered
        size={"default"}
        className="StudentData"
        key={obj.name}
      >
        <Descriptions.Item label={obj.subjectName} span={1}>
          <p>{obj.value}</p>
        </Descriptions.Item>
      </Descriptions>
    ));
  };

  return (
    <>{studentData ? generateDivs(studentData) : <div>Loading data...</div>}</>
  );
};

export default GetGrades;
