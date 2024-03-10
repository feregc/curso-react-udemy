import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {

  const [number, setNumber] = useState( value );

  const handleAdd = () => {
    setNumber(number + 1);
  }
  const handleReset = () => {
    setNumber(value);
  }
  const handleSubtratc = () => {
    setNumber(number - 1);
  }

  return (
    <>
      <h1 className='text-center'>Juego de Números <i className="fa-solid fa-calculator"></i></h1>
      <h2 className='text-center'> { number } </h2>
      <div className="d-flex justify-content-center">
        <button className="btn mx-1 btn-primary text-center" onClick={ handleAdd } ><i className="fa-solid fa-plus"></i><i className="fa-solid fa-1"></i></button>
        <button className="btn mx-1 btn-primary text-center" onClick={ handleReset } ><i className="fa-solid fa-rotate-right"></i></button>
        <button className="btn mx-1 btn-primary text-center" onClick={ handleSubtratc } ><i className="fa-solid fa-minus"></i><i className="fa-solid fa-1"></i></button>
      </div>
        
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

