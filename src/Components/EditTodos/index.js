import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { SyncLoader } from "react-spinners";

import { selectTodosById } from "../../redux/reducers/todosReducer";
import CreateTodo from "../CreateTodos";

function EditTodos() {
  const { id } = useParams();
  const currentTodo = useSelector((state) => selectTodosById(state, id));
  const showSpinner = useSelector((store) => store?.ongoingAPICalls?.count > 0);

  if (showSpinner)
    return (
      <SyncLoader
        color="#0d6efd"
        cssOverride={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      />
    );
  return <CreateTodo currentTodo={currentTodo} />;
}

export default EditTodos;
