import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Todoitem = ({ todo, toggleCompleted, deleteTodo }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleCompleted(todo.id)}
          className="checkbox checkbox-primary"
        />
        <p className={`ml-4 ${todo.completed ? "line-through" : ""}`}>
          {todo.title}
        </p>
        <button
          className="btn btn-ghost btn-sm"
          onClick={(e) => {
            deleteTodo(todo.id);
          }}
        >
          <FaTrashAlt className="text-red-500" />
        </button>
      </div>
    </>
  );
};

export default Todoitem;
