import "./App.css";
import "./styles.css";
import GBMenu from "./pages/menu";
import LoginForm from "./pages/LoginForm";
import { useEffect, useState } from "react";
import GetSubjects from "./Api/GetSubjects";
import GetGrades from "./Api/GetGrades";
import StudentInfo from "./pages/StudentInfo/StudentInfo";
import { message } from "antd";
import jwtDecode from "jwt-decode";
import { Button } from "antd";

function App() {
  const [openLog, setOpenLog] = useState(true);
  const [openMod, setOpenMod] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [nameidentifier, setNI] = useState("");

  useEffect(() => {
    if (token !== "")
      setNI(
        jwtDecode(token)[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        ]
      );
  }, [token]);

  const LogOut = () => {
    setOpenLog(true);
    setOpenMod("");
    setToken("");
  };

  return (
    <>
      {contextHolder}
      <div className="searching">
        {openLog && (
          <LoginForm
            closeLogSite={setOpenLog}
            setUsername={setUsername}
            setPassword={setPassword}
            setToken={setToken}
            messageApi={messageApi}
          />
        )}
        {!openLog && <GBMenu openModal={setOpenMod} />}

        {openMod === "searching" && (
          <StudentInfo
            id={username}
            token={token}
            nameidentifier={nameidentifier}
          />
        )}
        {openMod === "subjects" && (
          <GetSubjects
            id={username}
            token={token}
            nameidentifier={nameidentifier}
          />
        )}
        {openMod === "grades" && (
          <GetGrades
            id={username}
            token={token}
            nameidentifier={nameidentifier}
          />
        )}
        {!openLog && (
          <Button type="primary" block onClick={LogOut}>
            log out
          </Button>
        )}
      </div>
    </>
  );
}

export default App;
