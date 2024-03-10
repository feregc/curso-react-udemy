test('Esta prueba no debe fallar', () => {
  if( 3 === 0 ){
    throw new Error('No puede dividir entre cero');
  }
})