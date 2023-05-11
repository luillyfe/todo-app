import React, { useState } from "react";

import "./createTodos.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/reducers/todosReducer";
import { generateId } from "../../utils";

const initialState = {
  title: "",
  description: "",
  dueDate: "",
  priority: "",
  status: "",
};

function CreateTodos({ currentTodo }) {
  const [todo, setTodo] = useState(currentTodo || initialState);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    todo.id = generateId();
    dispatch(addTodo(todo));
    setTodo(initialState);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTodo({ ...todo, [name]: value });
  };

  return (
    <form method="post" onSubmit={handleSubmit} className="create-todo">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="Title"
          required
          minLength="5"
          value={todo.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          placeholder="Description"
          value={todo.description}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dueDate">Due Date</label>
        <input
          type="date"
          className="form-control"
          id="dueDate"
          name="dueDate"
          placeholder="Due Date"
          value={todo.dueDate}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="priority">Priority</label>
        <input
          type="number"
          className="form-control"
          id="priority"
          name="priority"
          placeholder="Priority"
          minLength="1"
          maxLength="5"
          value={todo.priority}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Status</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="status1"
            name="status"
            value="pending"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            pending
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="status2"
            name="status"
            value="completed"
            onChange={handleChange}
            checked
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Completed
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
}

export default CreateTodos;
