import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {

//   id: 123,
//   username: 'fergcx',
//   name: 'Fernando Garcia',
//   email: 'fergcx@example.com'

// }

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState();

  // const loginUser = () => {
      
  //     setUser({
  
  //       id: 123,
  //       username: 'fergcx',
  //       name: 'Fernando Garcia',
  //       email: ' 
  //     })
  // }

  return (
    // <UserContext.Provider value={{ hola: 'Mundo', user }} >
    <UserContext.Provider value={{ user, setUser }} >
      {children}
    </UserContext.Provider>
  )
}
