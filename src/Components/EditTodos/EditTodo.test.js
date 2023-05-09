import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { render, screen } from "@testing-library/react";

import EditTodos from "./index";
import rootReducer from "../../redux/reducers";

const store = configureStore({ reducer: rootReducer });
it("It should find elments with its corresponding labels", () => {
  // arrange
  render(
    <Provider store={store}>
      <EditTodos />
    </Provider>
  );

  // assert
  screen.getByText("Title");
  screen.getByText("Description");
  screen.getByText("Due Date");
  screen.getByText("Priority");
  screen.getByText("Pending");
  screen.getByText("Completed");
});
