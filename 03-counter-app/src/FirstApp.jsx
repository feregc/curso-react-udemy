import PropTypes from 'prop-types' 

export const FirstApp = ( { title, subTitle } ) => {


  return (
    <>
      <h1>{ title }</h1> 
      {/* <code>{ JSON.stringify(nombre)  }</code> */}
      <p>{subTitle}</p>
    </>
  )
}

FirstApp.protoTypes = {
  subTitle: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  
}

FirstApp.defaultProps = {
  subTitle: "No hay subtítulo",
  title: "No hay Título",
}