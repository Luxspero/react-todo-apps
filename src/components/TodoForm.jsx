import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  // Definisikan state "title"
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle("");
  };

  // Definisikan function "handleChangeTitle"
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <div className="flex gap-1">
          <label htmlFor="newtodo"></label>
          <input
            id="newtodo"
            onChange={(event) => {
              handleChangeTitle(event);
            }}
            type="text"
            className="input input-bordered w-full max-w-xs"
            placeholder="Input New Todo"
            value={title}
          />
          <button type="submit" className="btn btn-md btn-primary">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
