import { React } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ListTodos from "./Components/ListTodos";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: ListTodos,
  },
]);
function App() {
  return (
    <RouterProvider router={router}>
      <div className="container"></div>
    </RouterProvider>
  );
}

export default App;
