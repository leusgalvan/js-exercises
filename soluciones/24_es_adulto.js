"use strict";

/*
Escribir un programa que:

- Defina una funcion 'esAdulto' que tome como parametro una persona y devuelva
  true si la persona tiene 21 años o mas y false si no
- Defina una variable 'alicia' que almacene un objeto con lo siguiente:
  + Un campo 'edad', con valor 15
  + Un campo 'nombre', con valor 'Alicia'
- Defina una variable 'bob' que almacene un objeto con lo siguiente:
  + Un campo 'edad', con valor 22
  + Un campo 'nombre', con valor 'Bob'
- Imprima el resultado de llamar a 'esAdulto' con la variable 'alicia'
- Imprima el resultado de llamar a 'esAdulto' con la variable 'bob'
*/

function esAdulto(persona) {
  if (persona.edad >= 21) {
    return true;
  } else {
    return false;
  }
}

/* Definicion alternativa 
function esAdulto(persona) {
  return persona.edad >= 21;
} 
*/

var alicia = {
  edad: 15,
  nombre: "Alicia",
};

var bob = {
  edad: 22,
  nombre: "Bob",
};

console.log(esAdulto(alicia));
console.log(esAdulto(bob));
