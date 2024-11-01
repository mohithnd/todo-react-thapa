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
    <form className="flex mb-6" onSubmit={handleAddTask}>
      <input
        type="text"
        autoComplete="off"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        placeholder="Add a new task"
        aria-label="New task input"
      />
      <button
        type="submit"
        className="p-3 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition duration-200"
        aria-label="Add task"
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
