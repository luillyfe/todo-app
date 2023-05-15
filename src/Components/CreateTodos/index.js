import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { addTodo, updateTodo } from "../../redux/reducers/todosReducer";

import "./createTodos.css";

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

  const notify = () => {
    toast.success("Todo added!", {
      position: toast.POSITION.TOP_CENTER,
      toastId: "Todo added!",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (todo.id) {
      dispatch(updateTodo(todo));
    } else {
      await dispatch(addTodo(todo));
      notify();
    }

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
            checked={todo.status === "pending"}
          />
          <label className="form-check-label" htmlFor="status1">
            Pending
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
            checked={todo.status === "completed"}
          />
          <label className="form-check-label" htmlFor="status2">
            Completed
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        {/* TODO: Edit button must come from Edit Component */}
        {todo.id ? "Edit" : "Create"}
      </button>
    </form>
  );
}

export default CreateTodos;
