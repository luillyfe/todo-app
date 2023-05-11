import React from "react";
import { configureStore } from "@reduxjs/toolkit";

import todosReducer, { addTodo, deleteTodo } from "./todosReducer";

describe("Creating todos", () => {
  it("Store: It should create a todo", () => {
    // arrange
    const store = configureStore({ reducer: { todos: todosReducer } });
    const todo = setupTodo();

    // act
    store.dispatch(addTodo(todo));

    // assert
    expect(store.getState()).toEqual({ todos: { [todo.id]: todo } });
  });

  it("Reducer: It should create a todo", () => {
    // arrange
    const todo = setupTodo();

    // act
    const newState = todosReducer({}, addTodo(todo));

    // assert
    expect(newState).toEqual({ [todo.id]: todo });
  });
});

describe("Deleting todos", () => {
  it("Store: it should delete a todo", () => {
    // arrange
    const todo = setupTodo();
    const store = configureStore({
      reducer: { todos: todosReducer },
      preloadedState: { todos: { [todo.id]: todo } },
    });

    // act
    store.dispatch(deleteTodo(todo.id));

    // assert
    expect(store.getState()).toEqual({ todos: {} });
  });

  it("Reducer: it should delete a todo", () => {
    // arrange
    const todo = setupTodo();

    // act
    const newState = todosReducer({ [todo.id]: todo }, deleteTodo(todo.id));

    // assert
    expect(newState).toEqual({});
  });
});

function setupTodo() {
  return {
    id: "sxkamsxkasmckms",
    title: "Buy groceries",
    dueDate: "Due: March 15, 2023",
    priority: "High",
    status: "Pending",
    notes: "Milk, eggs, bread, cheese",
  };
}
