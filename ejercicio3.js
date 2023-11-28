'use strict'
/*
* Algoritmos para convertir grados centígrados en Fahrenheit y viceversa
* 1. Inicio del algoritmo
* 2. Leer la opción de conversión (Centígrados a Fahrenheit o Fahrenheit a Centígrados)
* 3. Si la opción es Centígrados a Fahrenheit:
*     a. Leer la temperatura en grados Centígrados (tempC)
*     b. Calcular la temperatura en Fahrenheit: tempF = (tempC * 9/5) + 32
*     c. Mostrar "La temperatura en Fahrenheit es:", tempF
* 4. Si la opción es Fahrenheit a Centígrados:
*     a. Leer la temperatura en grados Fahrenheit (tempF)
*     b. Calcular la temperatura en Centígrados: tempC = (tempF - 32) * 5/9
*     c. Mostrar "La temperatura en Centígrados es:", tempC
* 5. Fin del algoritmo
*/

// tipo de conversion puede ser:
// "Centigrados a Fahrenheit" o "Fahrenheit a Centigrados"
// seleccionar un tipo y pegarlo en la variable tipoConversion
let tipoConversion = "Fahrenheit a Centigrados";
let vTempC = 20;
let vTempF = 68;

if(tipoConversion === "Centigrados a Fahrenheit"){
    const tempF = (vTempC * 9/5) + 32;
    console.log("La temperatura en Fahrenheit es: ", tempF);
}else{
    if(tipoConversion === "Fahrenheit a Centigrados"){
        const tempC = (vTempF - 32) * 5/9;
        console.log("La temperatura en Centigrados es: ", tempC);
    }
}