

export const ShowIncrement = ({increment}) => {


  console.log('Me volví a generar :(');

  return (
    <>

      <button
      className="btn btn-primary my-2"
      onClick={()=>{
        increment()
      }}
      >
        Incrementar
      </button>
    
    </>
  )
}
