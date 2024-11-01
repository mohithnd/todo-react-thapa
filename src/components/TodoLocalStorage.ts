export const getLocalStorageTodo = () => {
  const todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(todos);
  }
  return [];
};

export const setLocalStorageTodo = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
