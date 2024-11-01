import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({ todos, setTodos }) => {
  const handleClearAll = () => {
    setTodos([]);
  };

  const handleDeleteTodo = (todo) => {
    setTodos((prev) => prev.filter((t) => t !== todo));
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
    </>
  );
};

export default TodoList;
