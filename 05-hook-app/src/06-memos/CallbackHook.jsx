import { useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);
  const incrementFhater = () => {
    setCounter(counter + 1)
  }

  return (
    <>
    
    <h1>Callback Hook : {counter}</h1>
    <hr />

    <ShowIncrement increment={incrementFhater}/>
    
    </>
  )
}
