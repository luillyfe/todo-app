import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectTodosById } from "../../redux/reducers/todosReducer";
import CreateTodo from "../CreateTodos";

function EditTodos() {
  const { id } = useParams();
  const currentTodo = useSelector((state) => selectTodosById(state, id));
  return <CreateTodo currentTodo={currentTodo} />;
}

export default EditTodos;
