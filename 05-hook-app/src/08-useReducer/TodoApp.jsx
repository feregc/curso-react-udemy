import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {

  const {todos, todosCount, penddingTodosCount, handleDelete, handleNewTodo, handleToggle} = useTodo();

  return (
    <>
      <h1>
        TodoApp: { todosCount }, <small>pendientes: { penddingTodosCount }</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDelete}
            onToggleTodo={handleToggle}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
