"use strict";

/*
Escribir un programa que:

- Defina una clase CuentaBancaria con:
  + Un constructor que tome los siguientes parametros y los guarde en campos con el mismo nombre:
    * titular
    * balance
  + Un metodo 'depositar' que tome como unico parametro el monto a depositar, y modifique
    el valor del campo 'balance' sumando el monto
- Cree una instancia de CuentaBancaria con valores 'Pedro' para el titular y 1000 para el balance,
  y lo almacene en una variable llamada 'cuenta'
- Haga un deposito de 500 en la cuenta 
- Imprima el valor del balance de la cuenta en consola
*/

class CuentaBancaria {
  constructor(titular, balance) {
    this.titular = titular;
    this.balance = balance;
  }

  depositar(monto) {
    this.balance = this.balance + monto;
  }
}

var cuenta = new CuentaBancaria("Pedro", 1000);
cuenta.depositar(500);
console.log(cuenta.balance);
