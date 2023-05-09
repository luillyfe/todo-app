import React from "react";
import { configureStore } from "@reduxjs/toolkit";

import todosReducer, { addTodo } from "./todosReducer";

it("It should create a todo", () => {
  // arrange
  const store = configureStore({ reducer: { todos: todosReducer } });
  const todo = setupTodo();

  // act
  store.dispatch(addTodo(todo));

  // assert
  expect(store.getState()).toEqual({ todos: { [todo.title]: todo } });
});

function setupTodo() {
  return {
    title: "Buy groceries",
    dueDate: "Due: March 15, 2023",
    priority: "High",
    status: "Pending",
    notes: "Milk, eggs, bread, cheese",
  };
}
