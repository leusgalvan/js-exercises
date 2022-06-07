"use strict";

/*
Escribir un programa que:

- Almacene un entero en la variable 'x' (elegir cualquier entero)
- Almacene un entero en la variable 'y' (elegir cualquier entero)
- Si ambos enteros son mayores a 0 imprima 'Ambos numeros son positivos'
- Si uno de los enteros es mayor a 0 y el otro no, imprima 'Uno de los numeros es positivo'
- En cualquier otro caso, que imprima 'Ningun numero es positivo'

Sugerencia: ir cambiando el valor de las variables para probar que funcionen todos los casos
En particular probar cuando solo 'x' es positivo y cuando solo 'y' es positivo
*/

var x = 10; // probar con otros valores como 0 y -1
var y = 15; // probar con otros valores como 0 y -1

if (x > 0 && y > 0) {
  console.log("Ambos numeros son positivos");
} else if (x > 0 || y > 0) {
  console.log("Uno de los numeros es positivo");
} else {
  console.log("Ningun numero es positivo");
}
