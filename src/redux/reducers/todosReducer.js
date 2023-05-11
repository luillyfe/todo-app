import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";

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
    const id = action.payload.id;
    todos[id] = { ...action.payload };
  });
});
