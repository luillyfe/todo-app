import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { render, screen } from "@testing-library/react";

import EditTodos from "./index";
import rootReducer from "../../redux/reducers";

it("Should find elments with its corresponding labels", () => {
  // arrange
  renderWithProviders(<EditTodos />, {});

  // assert
  screen.getByText("Title");
  screen.getByText("Description");
  screen.getByText("Due Date");
  screen.getByText("Priority");
  screen.getByText("Pending");
  screen.getByText("Completed");
});

function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: rootReducer, preloadedState }),
    ...renderOptions
  }
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
