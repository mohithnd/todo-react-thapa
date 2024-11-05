import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import { getLocalStorageTodo } from "./TodoLocalStorage";

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    return getLocalStorageTodo();
  });

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full glass-effect">
      <h1 className="text-xl font-semibold mb-4">Todo List</h1>
      <TodoDate />
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
