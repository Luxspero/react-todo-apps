import React from "react";

const Todoitem = ({ todo, toggleCompleted }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleCompleted(todo.id)}
          className="checkbox checkbox-primary"
        />
        <p className={`ml-2 ${todo.completed ? "line-through" : ""}`}>
          {todo.title}
        </p>
        <span className="text-red-500 cursor-pointer">Del</span>
      </div>
    </>
  );
};

export default Todoitem;
