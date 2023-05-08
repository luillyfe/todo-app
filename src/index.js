import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./ErrorPage";

import App from "./App";
import CreateTodos from "./Components/CreateTodos";
import ListTodos from "./Components/ListTodos";

import "./index.css";
import store from "./redux";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      { path: "todos/add", element: <CreateTodos /> },
      { path: "", element: <ListTodos /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </ReduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
