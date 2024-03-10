import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {


  const [formState, setFormState] = useState({
    username: 'ferg',
    email: 'fernando@google.com'
  });

  const { username, email } = formState;

  const onInputChange = ({target}) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value
    })
  }

  useEffect(() => {
    //console.log('formState Changed');
  
    // return () => {
      
    // }
  }, [formState])
  


  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input className="form-control" type="text" name="username" placeholder="Username" value={ username } onChange={onInputChange} />

      <input className="form-control mt-2" type="email" name="email" placeholder="Username@mail.com" value={ email } onChange={onInputChange} />


      {username == 'fergc' && <Message/>}

    </>
  )
}
