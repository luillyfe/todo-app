import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

import todosReducer, { addTodo, deleteTodo } from "./todosReducer";

jest.mock("../../firebase", () => {
  const createTodo = () => "sxkamsxkasmckms";
  const deleteTodo = () => ({});
  return {
    createTodo,
    deleteTodo,
  };
});

describe("Creating todos", () => {
  it("Store: It should create a todo", async () => {
    // arrange
    const store = configureStore({ reducer: { todos: todosReducer } });
    const todo = setupTodo();

    // act
    await act(async () => {
      await store.dispatch(addTodo(todo));
    });

    // assert
    expect(store.getState()).toEqual({ todos: { [todo.id]: todo } });
  });
});

describe("Deleting todos", () => {
  it("Store: it should delete a todo", async () => {
    // arrange
    const todo = setupTodo();
    const store = configureStore({
      reducer: { todos: todosReducer },
      preloadedState: { todos: { [todo.id]: todo } },
    });

    // act
    await act(async () => {
      await store.dispatch(deleteTodo(todo.id));
    });

    // assert
    expect(store.getState()).toEqual({ todos: {} });
  });

  xit("Reducer: it should delete a todo", () => {
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
