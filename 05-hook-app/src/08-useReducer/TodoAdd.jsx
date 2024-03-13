import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

  const { description,onInputChange, onResetForm } = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="¿Qué hay que hacer?"
          className="form-control"
          value={description}
          onChange={onInputChange}
        />
        <button
          className="btn btn-outline-primary mt-1 btn-block"
          type="submit"
        >
          Agregar
        </button>
      </form>
    </>
  );
};
