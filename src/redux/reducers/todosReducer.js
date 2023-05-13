import {
  createAction,
  createAsyncThunk,
  createReducer,
  createSelector,
} from "@reduxjs/toolkit";
import firebaseAPI from "../../firebase";

// action creators
export const deleteTodo = createAction("todos/deleteTodo");

// async action creators (thunk)
export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  try {
    const docRefId = await firebaseAPI.createTodo(todo);
    return { ...todo, id: docRefId };
  } catch (e) {
    // TODO: handle error
    console.error(e);
  }
});

export const listTodos = createAsyncThunk("todos/listTodos", async () => {
  try {
    const todos = await firebaseAPI.listTodos();
    return todos;
  } catch (e) {
    // TODO: handle error
    console.error(e);
  }
});

// select from store
export const selectTodos = createSelector(
  (state) => state.todos,
  (todos) => (todos ? todos : {})
);

export const selectTodosById = createSelector(
  (state) => state.todos,
  (_, todoId) => todoId,
  (todos, todoId) => (todos ? todos[todoId] : {})
);

// Todos Reducer
const initialState = {};
export default createReducer(initialState, (builder) => {
  builder
    .addCase(listTodos.fulfilled, (todos, action) => {
      replaceTodos(todos, action.payload);
    })
    .addCase(addTodo.fulfilled, (todos, action) => {
      const id = action.payload.id;
      todos[id] = { ...action.payload };
    })
    .addCase(deleteTodo, (todos, action) => {
      delete todos[action.payload];
    });
});

function replaceTodos(currentTodos, todosFromPersistentStorge) {
  const todoIds = Object.keys(todosFromPersistentStorge);
  todoIds.forEach((id) => {
    currentTodos[id] = todosFromPersistentStorge[id];
  });
}
