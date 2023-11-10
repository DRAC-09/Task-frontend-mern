import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className=" md:h-screen bg-gradient-to-tl from-red-950 via-indigo-950 via-60% to-sky-800 ...   ">
      <App />
    </div>
  </React.StrictMode>
);
