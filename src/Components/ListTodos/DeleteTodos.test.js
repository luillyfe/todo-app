import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import rootReducer from "../../redux/reducers";
import { createTodos } from "../../utils";
import ListTodos from "./index";

const todos = createTodos(1);
describe("DeleteTodos:", () => {
  it("Should have a delete button", () => {
    // arrange
    renderWithProps(<ListTodos />, {
      preloadedState: { todos },
    });

    // assert
    screen.getByText("X");
  });
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
    return (
      <MemoryRouter>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
