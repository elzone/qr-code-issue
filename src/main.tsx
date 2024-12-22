import React from "react";
import { createRoot } from "react-dom/client";
import AppInit from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <AppInit />
  </React.StrictMode>,
);
