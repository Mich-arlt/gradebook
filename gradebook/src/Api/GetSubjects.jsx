import { useState, useEffect } from "react";
import axios from "axios";
import { Descriptions } from "antd";

export const GetSubjects = ({ id, token, nameidentifier }) => {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      try {
        const response = await axios.get(
          `https://gradebook-api-app.azurewebsites.net/api/subjects/grades/${nameidentifier}`
        );
        setStudentData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudentData();
  }, [id, token]);
  const generateDivs = (myObject) => {
    return myObject.map((obj) => (
      <Descriptions
        bordered
        size={"default"}
        className="StudentData"
        key={obj.name}
      >
        <Descriptions.Item label={obj.name} span={1}>
          <ul>
            {obj.grades.map((grade, gradeIndex) => (
              <li key={gradeIndex}>
                <strong>Description:</strong> {grade.description}
                <br />
                <strong>Value:</strong> {grade.value}
              </li>
            ))}
          </ul>
        </Descriptions.Item>
      </Descriptions>
    ));
  };

  return (
    <>{studentData ? generateDivs(studentData) : <div>Loading data...</div>}</>
  );
};

export default GetSubjects;
