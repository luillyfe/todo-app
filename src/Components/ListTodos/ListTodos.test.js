import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, screen, act, fireEvent } from "@testing-library/react";

import rootReducer from "../../redux/reducers";
import { createTodos } from "../../utils";
import ListTodos from "./index";

describe("DeleteTodos:", () => {
  const todos = createTodos(1);

  it("Should have a delete button", () => {
    // arrange
    renderWithProps(<ListTodos />, {
      preloadedState: { todos },
    });

    // assert
    screen.getByText("X");
  });

  xit("When click in delete, it should delete the todo", async () => {
    // arrange
    renderWithProps(<ListTodos />, { preloadedState: { todos } });

    // act
    // const button = screen.getByText("X");
    fireEvent.click(screen.getByText("X"));

    // assert
    expect(await screen.findByRole("list")).toBeEmptyDOMElement();
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
      <MemoryRouter initialEntries={["/todos/edit/todo0"]}>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
