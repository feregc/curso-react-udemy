import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {


  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
  });

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr />

      <input 
        className="form-control" 
        type="text" 
        name="username" 
        placeholder="Username" 
        value={ username } 
        onChange={onInputChange} 
      />

      <input 
        className="form-control mt-2" 
        type="email" 
        name="email" 
        placeholder="Username@mail.com" 
        value={ email } 
        onChange={onInputChange} 
      />
      
      <input 
        className="form-control mt-2" 
        type="password" 
        name="password" 
        placeholder="Contraseña" 
        value={ password } 
        onChange={onInputChange} 
      />

      <button 
      className="btn btn-primary mt-2"
      onClick={ onResetForm }
      >Borrar</button>

    </>
  )
}
