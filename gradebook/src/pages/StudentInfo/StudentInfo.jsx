import axios from "axios";
import "../../styles.css";
import { Descriptions } from "antd";
import { useState, useEffect } from "react";

const StudentInfo = ({ id, token, nameidentifier }) => {
  const [size, setSize] = useState("default");
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      try {
        const response = await axios.get(
          `https://gradebook-api-app.azurewebsites.net/api/student/${nameidentifier}`
        );
        setStudentData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudentData();
  }, [id, token]);
  console.log(studentData);

  return (
    <>
      {studentData ? (
        <div className="StudentData">
          <Descriptions bordered size={"default"}>
            <Descriptions.Item label="First Name" span={3}>
              {studentData.firstName}
            </Descriptions.Item>
            <Descriptions.Item label="Last Name" span={3}>
              {studentData.surname}
            </Descriptions.Item>
            <Descriptions.Item label="Year of studies" span={3}>
              {studentData.yearOfStudies}
            </Descriptions.Item>
            <Descriptions.Item label="Contact email" span={3}>
              {studentData.contactEmail}
            </Descriptions.Item>
            <Descriptions.Item label="Degree course" span={3}>
              {studentData.degreeCourse}
            </Descriptions.Item>
          </Descriptions>
        </div>
      ) : (
        <div>Loading data...</div>
      )}
    </>
  );
};

export default StudentInfo;
