import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import "./index.css";

const brandColors: any = new Array(10).fill("#dac0ad");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        colors: {
          brand: brandColors,
        },
        primaryColor: "brand",
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
