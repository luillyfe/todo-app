import { React } from "react";
import { Outlet, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <div id="sidebar">
        <h1>Todo App: </h1>
        <nav>
          <ul className="list-group">
            <li className="list-group-item">
              <Link to={`/`}>List todos</Link>
            </li>
            <li className="list-group-item">
              <Link to={`/todos/add`}>Add a Todo</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
