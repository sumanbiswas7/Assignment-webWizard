import "@mantine/core/styles.css";
import "./index.css";
import React from "react";
import { routes } from "./routes";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const brandColors: any = new Array(10).fill("#ffa88e");
const router = createBrowserRouter(routes);

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
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
