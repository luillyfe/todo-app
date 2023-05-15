import { createReducer, isAnyOf } from "@reduxjs/toolkit";

import { addTodo } from "./todosReducer";

const initialState = { count: 0 };

const ongoingAPICallsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo.pending, (ongoingAPICalls) => {
      debugger;
      ongoingAPICalls.count += 1;
    })
    .addMatcher(
      isAnyOf(addTodo.fulfilled, addTodo.rejected),
      (ongoingAPICalls) => {
        ongoingAPICalls.count -= 1;
      }
    );
});

export default ongoingAPICallsReducer;
