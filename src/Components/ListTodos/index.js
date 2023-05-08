import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { formatDate } from "../../utils";

import "./todoList.css";
import { selectTodos } from "../../redux/reducers/todosReducer";

function ListTodos() {
  const todos = useSelector(selectTodos);
  const todoIds = Object.keys(todos);

  return (
    <ul className="list-todos">{todoIds.map((id) => renderTodo(todos[id]))}</ul>
  );
}

function renderTodo({ title, dueDate, priority, status, notes, id }) {
  return (
    <li key={title} className="todo">
      <h4 className="todo-title">{title}</h4>
      <p className="todo-due-date">{formatDate(dueDate)}</p>
      <p className="todo-priority">{priority}</p>
      <p className="todo-status">{status}</p>
      <p className="todo-notes">{notes}</p>
      <Link to={`/todos/edit/${id}`} className="btn btn-primary btn-lg"></Link>
    </li>
  );
}

export default ListTodos;
