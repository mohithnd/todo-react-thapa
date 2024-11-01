import { useEffect, useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [dateAndTime, setDateAndTime] = useState("");

  useEffect(() => {
    setDateAndTime(getFormattedDate());

    const intervalId = setInterval(() => {
      setDateAndTime(getFormattedDate());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getFormattedDate = () => {
    const date = new Date();
    return `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;
  };

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

  const handleClearAll = () => {
    setTodos([]);
  };

  const handleDeleteTodo = (todo) => {
    setTodos((prev) => prev.filter((t) => t !== todo));
  };

  return (
    <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
        Todo List
      </h1>
      <div className="text-center text-gray-600 mb-4">{dateAndTime}</div>
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
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No Todos Yet.</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-300">
            {todos.map((todo) => (
              <li
                key={todo}
                className="flex items-center justify-between p-4 hover:bg-gray-100 transition duration-150"
              >
                <span className="flex-grow text-gray-800">{todo}</span>
                <div className="flex space-x-3">
                  <button
                    className="text-green-500 hover:text-green-600 transition duration-200"
                    aria-label="Mark as complete"
                  >
                    <MdCheck size={24} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-600 transition duration-200"
                    aria-label="Delete task"
                    onClick={() => handleDeleteTodo(todo)}
                  >
                    <MdDeleteForever size={24} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={handleClearAll}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-200"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;
