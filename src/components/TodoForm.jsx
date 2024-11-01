import { useState } from "react";

const TodoForm = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (trimmedValue.length === 0 || todos.includes(trimmedValue)) {
      setInputValue("");
      return;
    }
    setTodos((prev) => [...prev, trimmedValue]);
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
      />
      <button
        type="submit"
        className="p-3 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition duration-200"
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
