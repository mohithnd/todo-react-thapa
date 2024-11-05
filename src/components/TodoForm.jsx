import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { setLocalStorageTodo } from "./TodoLocalStorage";

const TodoForm = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (!trimmedValue || todos.some((todo) => todo.content === trimmedValue)) {
      setInputValue("");
      return;
    }
    const updatedTodos = [
      ...todos,
      { id: uuidv4(), content: trimmedValue, checked: false },
    ];
    setTodos(updatedTodos);
    setLocalStorageTodo(updatedTodos);
    setInputValue("");
  };

  return (
    <form onSubmit={handleAddTask} className="mb-4 flex">
      <input
        type="text"
        autoComplete="off"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
        className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition duration-200"
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
