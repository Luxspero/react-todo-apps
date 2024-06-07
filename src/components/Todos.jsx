import React from "react";
import Todoitem from "./TodoItem";

const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <div className="space-y-2">
      {/* Method Map untuk memanggil todo-item */}
      {todos.map((todo) => {
        return (
          <Todoitem
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default Todos;
