import {
  createAction,
  createAsyncThunk,
  createReducer,
  createSelector,
} from "@reduxjs/toolkit";
import firebaseAPI from "../../firebase";

export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  try {
    const docRefId = await firebaseAPI.createTodo(todo);
    return { ...todo, id: docRefId };
  } catch (e) {
    // TODO: handle error
    console.log(e);
  }
});
export const deleteTodo = createAction("todos/deleteTodo");

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
  builder
    .addCase(addTodo.fulfilled, (todos, action) => {
      const id = action.payload.id;
      todos[id] = { ...action.payload };
    })
    .addCase(deleteTodo, (todos, action) => {
      delete todos[action.payload];
    });
});
