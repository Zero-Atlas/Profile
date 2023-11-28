import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/global.css";
import "./Styles/large-screen.css";
import "./Styles/medium-screen.css";
import "./Styles/small-screen.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
