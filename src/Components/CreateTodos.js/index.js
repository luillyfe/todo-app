import React from "react";

import "./createTodos.css";

function CreateTodos() {
  return (
    <form method="post">
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
        />
      </div>
      <div className="form-group">
        <label htmlFor="due_date">Due Date</label>
        <input
          type="date"
          className="form-control"
          id="due_date"
          name="due_date"
          placeholder="Due Date"
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
        />
      </div>
      <div className="form-group">
        <label>Status</label>
        <div className="form-option">
          <input
            className="form-control"
            type="radio"
            id="status1"
            name="status"
            value="pending"
          />
          <label htmlFor="status1">Pending</label>
        </div>
        <div className="form-option">
          <input
            type="radio"
            className="form-control"
            id="status2"
            name="status"
            value="completed"
          />
          <label htmlFor="status2">Completed</label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
}

export default CreateTodos;
