import React from "react";
import { useSelector } from "react-redux";

import { formatDate } from "../../utils";

import "./todoList.css";
import { selectTodos } from "../../redux/reducers/todosReducer";

function ListTodos() {
  const todos = useSelector(selectTodos);
  const keys = Object.keys(todos);

  return (
    <ul className="list-todos">{keys.map((key) => renderTodo(todos[key]))}</ul>
  );
}

function renderTodo({ title, dueDate, priority, status, notes }) {
  return (
    <li key={title} className="todo">
      <h4 className="todo-title">{title}</h4>
      <p className="todo-due-date">{formatDate(dueDate)}</p>
      <p className="todo-priority">{priority}</p>
      <p className="todo-status">{status}</p>
      <p className="todo-notes">{notes}</p>
    </li>
  );
}

export default ListTodos;
