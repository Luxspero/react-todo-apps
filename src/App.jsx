import { useState } from "react";
import reactLogo from "./assets/react.svg";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import viteLogo from "/vite.svg";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish Progate React Course",
      completed: false,
    },
    {
      id: 2,
      title: "Have lunch with Guru Domba",
      completed: true,
    },
    {
      id: 3,
      title: "Study React with Ninja Ken",
      completed: false,
    },
  ]);

  const toggleCompleted = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const addTodo = (todoTitle) => {
    if (todoTitle === "") {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-base-200">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="items-center text-xl mb-2 ">Todo List</h2>
            <TodoForm addTodo={addTodo} />
            <Todos
              todos={todos}
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
