import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./ErrorPage";

import App from "./App";
import CreateTodos from "./Components/CreateTodos.js";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
  },
  { path: "create", Component: CreateTodos },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
