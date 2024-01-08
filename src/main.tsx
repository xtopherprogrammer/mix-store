import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { AppRouter } from "./AppRouter.tsx";

// try to run this code

// okay sir
// I just ran it now it's showing the homepage

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
