import React, { Children } from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../../redux/reducers";
import CreateTodos from "./index";

it("It should render a form", () => {
  // arrange
  renderWithProps(<CreateTodos />, {});

  // assert
  expect(screen.getByLabelText("Title")).toBeRequired();
  expect(screen.getByLabelText("Description")).toBeInTheDocument();
  expect(screen.getByText("Create")).toBeEnabled();
});

function renderWithProps(
  ui,
  {
    preloadedState = {},
    store = configureStore({ reducer: rootReducer, preloadedState }),
    ...renderOptions
  }
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
