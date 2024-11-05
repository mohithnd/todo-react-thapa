import { MdCheck, MdDeleteForever } from "react-icons/md";
import { setLocalStorageTodo } from "./TodoLocalStorage";

const TodoList = ({ todos, setTodos }) => {
  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all tasks?")) {
      setTodos([]);
      setLocalStorageTodo([]);
    }
  };

  const handleDeleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const updatedTodos = todos.filter((t) => t.id !== id);
      setTodos(updatedTodos);
      setLocalStorageTodo(updatedTodos);
    }
  };

  const handleCheckTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
    setLocalStorageTodo(updatedTodos);
  };

  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-gray-500">No Todos Yet.</p>
      ) : (
        <div>
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex justify-between items-center p-2 border-b ${
                  todo.checked ? "bg-green-100" : "bg-white"
                }`}
              >
                <span
                  className={`${
                    todo.checked ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todo.content}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleCheckTodo(todo.id)}
                    className={`p-1 rounded ${
                      todo.checked ? "bg-yellow-300" : "bg-green-300"
                    } hover:bg-opacity-80`}
                  >
                    <MdCheck size={20} />
                  </button>
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    <MdDeleteForever size={20} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={handleClearAll}
            disabled={todos.length === 0}
            className={`mt-4 w-full p-2 rounded ${
              todos.length === 0 ? "bg-gray-300" : "bg-red-500 hover:bg-red-600"
            } transition duration-200`}
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoList;
