import { createReducer, isAnyOf, createSelector } from "@reduxjs/toolkit";

import { addTodo } from "./todosReducer";

export const selectOngoingAPICalls = createSelector(
  (state) => state.ongoingAPICalls,
  (ongoingAPICalls) => (ongoingAPICalls ? ongoingAPICalls.count : 0)
);

const initialState = { count: 0 };
const ongoingAPICallsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo.pending, (ongoingAPICalls) => {
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
