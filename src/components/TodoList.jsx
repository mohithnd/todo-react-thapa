import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({ todos, setTodos }) => {
  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all tasks?")) {
      setTodos([]);
    }
  };

  const handleDeleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTodos((prev) => prev.filter((t) => t.id !== id));
    }
  };

  const handleCheckTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <>
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No Todos Yet.</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-300">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between p-4 hover:bg-gray-100 transition duration-150"
              >
                <span
                  className={`flex-grow text-gray-800 ${
                    todo.checked ? "line-through text-gray-400" : ""
                  }`}
                  aria-label={
                    todo.checked ? "Completed task" : "Incomplete task"
                  }
                >
                  {todo.content}
                </span>
                <div className="flex space-x-3">
                  <button
                    className="text-green-500 hover:text-green-600 transition duration-200"
                    aria-label={`Mark ${
                      todo.checked ? "incomplete" : "complete"
                    }: ${todo.content}`}
                    onClick={() => handleCheckTodo(todo.id)}
                  >
                    <MdCheck size={24} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-600 transition duration-200"
                    aria-label={`Delete task: ${todo.content}`}
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    <MdDeleteForever size={24} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={handleClearAll}
            disabled={todos.length === 0}
            className={`mt-4 w-full py-2 rounded-md transition duration-200 ${
              todos.length === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-red-500 text-white hover:bg-red-600"
            }`}
          >
            Clear All
          </button>
        </div>
      )}
    </>
  );
};

export default TodoList;
