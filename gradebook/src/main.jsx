import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import background from "./prints/background.svg";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <img className="background-image" src={background} alt="React Logo"></img>
    <App />
  </React.StrictMode>
);
