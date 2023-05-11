import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { formatDate } from "../../utils";

import "./todoList.css";
import { selectTodos, deleteTodo } from "../../redux/reducers/todosReducer";

function ListTodos() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const todoIds = Object.keys(todos);

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <ul className="list-todos">
      {todoIds.map((id) => renderTodo(todos[id], handleDelete))}
    </ul>
  );
}

function renderTodo(
  { title, dueDate, priority, status, notes, id },
  handleDelete
) {
  return (
    <li key={title} className="todo">
      <div className="btn-delete">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDelete(id)}
        >
          X
        </button>
        <p>Delete</p>
      </div>
      <h4 className="todo-title">{title}</h4>
      <p className="todo-due-date">{formatDate(dueDate)}</p>
      <p className="todo-priority">{priority}</p>
      <p className="todo-status">{status}</p>
      <p className="todo-notes">{notes}</p>
      <Link to={`/todos/edit/${id}`} className="btn btn-primary btn-lg">
        Edit
      </Link>
    </li>
  );
}

export default ListTodos;
