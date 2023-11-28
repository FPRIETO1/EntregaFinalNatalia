'use strict'
/*
* Algoritmo que calcule el valor a pagar por algunos galones de gasolina si sabemos que cada centilitro cuesta 25 pesos. Imprimir el valor a pagar y la cantidad de gasolina despachada en litros
* 1. Inicio del algoritmo
* 2. Leer la cantidad de galones de gasolina a comprar (galones)
* 3. Calcular la cantidad de gasolina en litros: litros = galones * 3.78541
* 4. Calcular el valor a pagar: valorAPagar = litros * 100 * 25
* 5. Mostrar "Cantidad de gasolina despachada:", litros, "litros"
* 6. Mostrar "Valor a pagar:", valorAPagar, "pesos"
* 7. Fin del algoritmo
*/

let galonesAComprar = 10;
const PRECIO = 25;

const cantidadGasolinaLitros = galonesAComprar * 3.78541;
const valorAPagar = cantidadGasolinaLitros * 100 * PRECIO;

console.log("Cantidad de gasolina despachada: "+cantidadGasolinaLitros+" litros");
console.log("Valor a pagar: "+valorAPagar+" pesos");
