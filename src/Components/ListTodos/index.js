import React from "react";

import "./todoList.css";

const todos = createTodos();
function ListTodos() {
  return <ul className="list-todos">{todos.map(renderTodo)}</ul>;
}

function renderTodo({ title, dueDate, priority, status, notes }) {
  return (
    <li key={title} className="todo">
      <h4 className="todo-title">{title}</h4>
      <p className="todo-due-date">{dueDate}</p>
      <p className="todo-priority">{priority}</p>
      <p className="todo-status">{status}</p>
      <p className="todo-notes">{notes}</p>
    </li>
  );
}

function createTodos() {
  let todos = [];
  for (let index = 0; index < 10; index++) {
    todos = [
      ...todos,
      {
        title: "Buy groceries",
        dueDate: "Due: March 15, 2023",
        priority: "High",
        status: "Pending",
        notes: "Milk, eggs, bread, cheese",
      },
    ];
  }
  return todos;
}

export default ListTodos;
