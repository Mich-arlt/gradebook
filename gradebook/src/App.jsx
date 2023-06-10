import SearchContextProvider from "./searchContext";
import "./App.css";
import "./styles.css";
import GBMenu from "./pages/menu";
import LoginForm from "./pages/LoginForm";
import { useEffect, useState } from "react";
import GetSubjects from "./Api/GetSubjects";
import GetGrades from "./Api/GetGrades";
import StudentInfo from "./pages/StudentInfo/StudentInfo";
import { message } from "antd";

function App() {
  const [openLog, setOpenLog] = useState(true);
  const [openMod, setOpenMod] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  //na 99% nie potrzebujesz tu tych stanow (username i password)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <>
    {contextHolder}
    <SearchContextProvider>
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
        {openMod === "searching" && <StudentInfo id={username} token={token} />}
        {openMod === "subjects" && <GetSubjects id={username} />}
        {openMod === "grades" && <GetGrades id={username} />}
      </div>
    </SearchContextProvider>
          </>
  );
}

export default App;
