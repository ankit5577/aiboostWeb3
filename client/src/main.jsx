import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ContractsProvider } from "./context/ContractsContext";

ReactDOM.render(
  <BrowserRouter>
    <ContractsProvider>
      <App />
    </ContractsProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// https://play.tailwindcss.com/5fYcvWWuOx