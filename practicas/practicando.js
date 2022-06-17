const prompt = require("prompt-sync")({ sigint: true });

//EJERCICIO 1
/* 
function imprime(frase){
    frase = prompt("Ingrese una frase: ");
    console.log(frase);
}
imprime()
 */

//EJERCICIO 2
/* 
function saludaNombre(nombre){
    nombre = prompt("Ingrese su nombre: ");
    console.log("Hola " + nombre + "!")
}
saludaNombre()
 */

//EJERCICIO 3
/* 
function sumaNros (nro1, nro2){
    nro1 = parseInt(prompt("Ingrese un número: "));
    nro2 = parseInt(prompt("Ingrese otro número: "));
    return nro1 + nro2
}

console.log(sumaNros()) */

//EJERCICIO 4
/* 
function calculadoraEdad (añoNacimiento,añoActual){
    añoNacimiento = parseInt(prompt("Ingrese su año de nacimiento: "))
    añoActual = parseInt(prompt("Ingrese el año actual si ya fue su cumpleaños, caso contrario, ingrese año anterior: "));
    if (añoNacimiento > 1900){
        return `Tienes ${añoActual - añoNacimiento} años.`;
    } else
        return `El año de nacimiento ingresado no es válido.`
}

console.log(calculadoraEdad()) */

//EJERCICIO 5

function adivinaNro (nroAleatorio, nroUsuario){
    nroAleatorio = Math.floor((Math.random() * 10) + 1);
    nroUsuario = parseInt(prompt("¿Cual es el numero entre 0 y 10?: "));
    if (nroUsuario === nroAleatorio){
        return "Felicitaciones, adivinaste!!!";
    } else 
        return "Intenta nuevamente. El número era " + nroAleatorio
}
console.log(adivinaNro())