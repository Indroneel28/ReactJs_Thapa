
const todoKey= "tasks";
export const GetLocalStorageTodoData = () => {
  const rawTodos = localStorage.getItem(todoKey);
  return JSON.parse(rawTodos) || [];
};

export const SetLocalStorageTodoData = (task) => {
  //Add data to local storage
  return localStorage.setItem(todoKey, JSON.stringify(task));
};
