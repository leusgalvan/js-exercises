"use strict";

/*
Escribir un programa que:

- Defina una variable 'juan' que almacene un objeto con lo siguiente:
  + Un campo 'edad', con valor 31
  + Un campo 'nombre', con valor 'Juan'
- Defina una variable 'marcos' que almacene un objeto con lo siguiente:
  + Un campo 'edad', con valor 27
  + Un campo 'nombre', con valor 'Marcos'
- Defina una variable 'personas' que contenga un arreglo con las 
  dos personas definidas anteriormente
- Imprima la variable 'personas' en consola
*/

var juan = {
  edad: 31,
  nombre: "Juan",
};

var marcos = {
  edad: 27,
  nombre: "Marcos",
};

var personas = [juan, marcos];

console.log(personas);
