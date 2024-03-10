import { string } from 'prop-types';
import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr.js';

describe('Pruebas en 07-deses-arr', () => {

    test ('debe de retornar un string y un número', () => {
      
      const [letters, numbers] = retornaArreglo();
      // console.log(retorno)
      
      expect (typeof letters).toBe('string');
      expect (typeof numbers).toBe('number');


      expect (letters).toEqual(expect.any(String));
      expect (numbers).toEqual(expect.any(Number));
      // const arr = ['hola', 1, 2, 3, 4
      // , 5];
      // const arr2 = ['hola', 1, 2, 3,
      // 4, 5];
      // const arr3 = ['hola', 1, 2, 3,
      // 4, 5];
    } );

});