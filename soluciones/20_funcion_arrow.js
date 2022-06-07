"use strict";

/*
Escribir un programa que:

- Defina las funciones de los ejercicios 16 a 19 con la sintaxis de arrow
*/

var suma = (x, y) => x + y;
var imprimir = (x) => console.log("El resultado es:", x);
var sumaArreglo = (arreglo) => {
  var resultadoSuma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    resultadoSuma = resultadoSuma + arreglo[i];
  }
  return resultadoSuma;
};
