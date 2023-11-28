'use strict'
/*
* Algoritmos para realizar 4 operaciones basicas
* 1. Inicio del algoritmo
* 2. Leer el primer número (num1)
* 3. Leer el segundo número (num2)
* 4. Calcular la suma: suma = num1 + num2
* 5. Mostrar "La suma es:", suma
* 6. Calcular la resta: resta = num1 - num2
* 7. Mostrar "La resta es:", resta
* 8. Calcular la multiplicación: multiplicacion = num1 * num2
* 9. Mostrar "La multiplicación es:", multiplicacion
* 10. Verificar que el segundo número no sea cero antes de la división
*     a. Si num2 no es cero, calcular la división: division = num1 / num2
*     b. Mostrar "La división es:", division
*     c. Si num2 es cero, mostrar "No es posible dividir por cero."
* 11. Fin del algoritmo
*/

// definir variables
let numero1 = 5;
let numero2 = 0;

// suma
const sumaNumeros = numero1 + numero2;
console.log("La suma es: "+sumaNumeros);

// resta
const restaNumeros = numero1 - numero2;
console.log("La resta es: "+restaNumeros);

// multiplicacion
const multiplicacionNumeros = numero1 * numero2;
console.log("La multiplicacion es: "+multiplicacionNumeros);

// division

if (numero2 != 0){
    const divisionNumeros = numero1 / numero2;
    console.log("La division es: "+divisionNumeros);
}else{
    console.log("No es posible dividir por cero.");
}
