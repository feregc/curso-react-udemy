import { useEffect, useReducer } from "react";
import { todoReducer } from "./../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "add",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    const action = {
      type: "toggle",
      payload: todoId,
    };

    dispatch(action);
  };

  return {
    todos,
    todosCount: todos.length,
    penddingTodosCount: todos.filter( todo => !todo.done ).length,
    handleNewTodo,
    handleDelete,
    handleToggle,
  }
}
