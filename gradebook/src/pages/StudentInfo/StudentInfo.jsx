import axios from "axios";
import "../../styles.css";
import { Button, Descriptions, Radio } from "antd";
import { useState, useEffect } from "react";

const StudentInfo = ({ id, token }) => {
  const [size, setSize] = useState("default");
  const [studentData, setStudentData] = useState(null);

  const onChange = (e) => {
    console.log("size checked", e.target.value);
    setSize(e.target.value);
  };

  useEffect(() => {
    const fetchStudentData = async () => {
      const data = {
        headers: {
          Key: "Authorization",
          Value: `Bearer ${token}`,
        },
      };
      console.log(data);
      try {
        const response = await axios.get(
          `https://gradebook-api-app.azurewebsites.net/api/student/15`,
          data
        );
        setStudentData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudentData();
  }, [id, token]);
  console.log(studentData);
  // const { firstName, surname, contactEmail, degreeCourse, yearOfStudies } =
  //   studentData;

  return (
    <div className="StudentData">
      {/* <Radio.Group onChange={onChange} value={size}>
        <Radio value="default">default</Radio>
        <Radio value="middle">middle</Radio>
        <Radio value="small">small</Radio>
      </Radio.Group>
      <br />
      <br />
      <Descriptions bordered size={size}>
        <Descriptions.Item label="First Name" span={3}>
          {firstName}
        </Descriptions.Item>
        <Descriptions.Item label="Last Name" span={3}>
          {surname}
        </Descriptions.Item>
        <Descriptions.Item label="Year of studies" span={3}>
          {yearOfStudies}
        </Descriptions.Item>
        <Descriptions.Item label="Contact email" span={3}>
          {contactEmail}
        </Descriptions.Item>
        <Descriptions.Item label="Degree course" span={3}>
          {degreeCourse}
        </Descriptions.Item>
      </Descriptions> */}
    </div>
  );
};

export default StudentInfo;
