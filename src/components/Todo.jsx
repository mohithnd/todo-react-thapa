import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
        Todo List
      </h1>
      <TodoDate />
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
