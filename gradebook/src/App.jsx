import SearchContextProvider from "./searchContext";
import "./App.css";
import "./styles.css";
import GBMenu from "./pages/menu";
import Logging from "./pages/LogSite";
import { useEffect, useState } from "react";
import GetSubjects from "./Api/GetSubjects";
import GetGrades from "./Api/GetGrades";
import StudentInfo from "./pages/StudentInfo/StudentInfo";

function App() {
  const [openLog, setOpenLog] = useState(true);
  const [openMod, setOpenMod] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  useEffect(() => {
    console.log(token);
  }, [token]);
  return (
    <SearchContextProvider>
      <div className="searching">
        {openLog && (
          <Logging
            closeLogSite={setOpenLog}
            Login={setUsername}
            Password={setPassword}
            Token={setToken}
          />
        )}
        {!openLog && <GBMenu openModal={setOpenMod} />}
        {openMod === "searching" && <StudentInfo id={username} token={token} />}
        {openMod === "subjects" && <GetSubjects id={username} />}
        {openMod === "grades" && <GetGrades id={username} />}
      </div>
    </SearchContextProvider>
  );
}

export default App;
