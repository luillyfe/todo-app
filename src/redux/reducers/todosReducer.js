import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";

import { generateId } from "../../utils";

export const addTodo = createAction("todos/addTodo");

export const selectTodos = createSelector(
  (state) => state.todos,
  (todos) => (todos ? todos : {})
);

export const selectTodosById = createSelector(
  (state) => state.todos,
  (_, todoId) => todoId,
  (todos, todoId) => (todos ? todos[todoId] : {})
);

const initialState = {};
export default createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (todos, action) => {
    const id = generateId();
    todos[id] = { ...action.payload, id };
  });
});
