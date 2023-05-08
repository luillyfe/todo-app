import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";

export const addTodo = createAction("todos/addTodo");

export const selectTodos = createSelector(
  (state) => state.todos,
  (todos) => (todos ? todos : {})
);

const initialState = {};
export default createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (todos, action) => {
    const { title } = action.payload;
    todos[title] = action.payload;
  });
});
