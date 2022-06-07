"use strict";

/*
Escribir un programa que:

- Defina una funcion llamada 'sumaArreglo' que reciba un arreglo como parametro.
  La funcion calcula la suma de todos los elementos del arreglo y lo devuelve.
  Por ejemplo, si pasamos el arreglo [2, 3, 5] la funcion deberia devolver 10 (porque 2 + 3 + 5 = 10)
- Llame a la funcion con el arreglo [1, 2, 3] y almacene el resultado en una variable 'resultado'
- Imprima el valor de la variable 'resultado' en la consola
*/

function sumaArreglo(arreglo) {
  var resultadoSuma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    resultadoSuma = resultadoSuma + arreglo[i];
  }
  return resultadoSuma;
}

var resultado = suma([1, 2, 3]);

console.log(resultado);
