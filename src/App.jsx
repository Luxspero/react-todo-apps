import { useState } from "react";
import reactLogo from "./assets/react.svg";
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
      completed: false,
    },
    {
      id: 3,
      title: "Study React with Ninja Ken",
      completed: false,
    },
  ]);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-base-200">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="items-center text-xl mb-2 ">Todo List</h2>
            <div className="list"></div>
            {/* Method Map untuk memanggil todo-item */}
            {todos.map((todo) => {
              return (
                <p className="list-item" key={todo.id}>
                  {todo.title}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
