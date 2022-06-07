"use strict";

/*
Escribir un programa que:

- Defina una funcion llamada 'imprimir' que reciba un unico parametro y que
  imprima la cadena 'El resultado es: ', seguido del valor del parametro, en la consola.
  Dicha funcion no deberia devolver ningun valor.
- Llame a la funcion 'imprimir' con el entero 5
- Llame a la funcion 'imprimir' con la cadena "hola"
*/

function imprimir(x) {
  console.log("El resultado es:", x);
}

imprimir(5);
imprimir("hola");
