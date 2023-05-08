import { createAction, createReducer } from "@reduxjs/toolkit";

export const addTodo = createAction("todos/addTodo");

const initialState = {};
export default createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (todos, action) => {
    const { title } = action.payload;
    todos[title] = action.payload;
  });
});
