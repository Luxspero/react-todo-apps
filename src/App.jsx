import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import viteLogo from "/vite.svg";

function App() {
  // Fungsi untuk memuat data dari localStorage
  const loadTodos = () => {
    const storedTodos = localStorage.getItem("todolist");
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  // State todos diinisialisasi dengan memanggil loadTodos
  const [todos, setTodos] = useState(loadTodos());

  // Efek samping untuk menyimpan data ke localStorage setiap kali todos berubah
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todos));
  }, [todos]);

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

    // Cari ID maksimal dari todos saat ini
    const maxId =
      todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) : 0;
    const newTodo = {
      id: maxId + 1,
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
