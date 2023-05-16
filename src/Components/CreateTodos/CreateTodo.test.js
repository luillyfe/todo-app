import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../../redux/reducers";
import firebaseAPI from "../../firebase";
import CreateTodos from "./index";

jest.mock("../../firebase");

describe("CreateTodos:", () => {
  it("Should render a form", () => {
    // arrange
    renderWithProps(<CreateTodos />, {});

    // assert
    expect(screen.getByLabelText("Title")).toBeRequired();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
    expect(screen.getByText("Create")).toBeEnabled();
  });
});

beforeAll(() => firebaseAPI.createTodo.mockResolvedValue("docRefId"));
test("create a todo after clicking the create button", async () => {
  renderWithProps(<CreateTodos />, {});

  const createButton = screen.getByRole("button", { name: /Create/i });
  expect(createButton).toBeEnabled();
  await act(async () => {
    fireEvent.click(createButton);
  });

  expect(createButton).toBeEnabled();
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
