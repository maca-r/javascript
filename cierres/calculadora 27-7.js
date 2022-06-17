const prompt = require("prompt-sync")({ sigint: true });

// Calculadora: nivel I
function sumar(num1, num2){
    return num1 + num2
}

function restar(num1, num2){
    return num1 - num2
}

function multiplicar(num1, num2){
    return num1 * num2
}

function dividir(num1, num2){
    return num1 / num2
}

//Calculadora: nivel II
console.log("-----------Testeo de operaciones / Calculadora -------------")
/* 
//ejercicio 2
let nro1 = prompt("Ingrese un numero: ")
let nro2 = prompt("Ingrese otro numero: ")

let suma = sumar(parseInt(nro1), parseInt(nro2))
console.log("El resultado de la suma es: ",suma)

let resta = restar(parseInt(nro1), parseInt(nro2))
console.log("El resultado de la resta es: ",resta)

//ejercicio 3
let nro3 = prompt("Ingrese un numero: ") //guarda nro ingresado por el usuario en vble
let nro4 = prompt("Ingrese otro numero: ")
let multiplica = multiplicar(parseInt(nro3), parseInt(nro4)) //ejecuta la fx multiplica
console.log("El resultado de la multiplicacion es: ",multiplica) //consologuea el rdo

//ejercicio 4
let nro5 = prompt("Ingrese un numero: ") //guarda nro ingresado por el usuario en vble
let nro6 = prompt("Ingrese otro numero: ")
let divide = dividir(parseInt(nro5), parseInt(nro6)) //ejecuta la fx divide
console.log("El resultado de la division es: ",divide) //consologuea el rdo

//ejercicio 5
let nro7 = prompt("Ingrese un numero: ") //guarda nro ingresado por el usuario en vble
let nro8 = 0
let divide2 = dividir(parseInt(nro7), nro8) //ejecuta la fx divide
console.log("El resultado de la division es: ",divide2) //consologuea el rdo

 */
//Calculadora: nivel III

//ejercicio 1
function cuadradoDeUnNumero(nro){
    let alCuadrado = nro //guarda el parametro en un nro
    return multiplicar(alCuadrado,alCuadrado) //usa la fx multiplicar con la vble guardada
}

let alCuadrado2 = cuadradoDeUnNumero(25)
console.log(alCuadrado2)

//ejercicio 2
function promedioDeTresNumeros(nro1, nro2, nro3){
    let rdoSuma = nro1+nro2+nro3
    return dividir(rdoSuma,3).toFixed(2) //.toFixed, redondea un nro con la Q de decimales que le indiquemos
}

let promedio = promedioDeTresNumeros(5,9,2)
console.log(promedio)

//ejercicio 3
function calcularPorcentaje(total, porcentaje){
    let porciento = dividir(porcentaje, 100)
    return multiplicar(total, porciento).toFixed(2)
}

let porcentaje = calcularPorcentaje(30, 25)
console.log(porcentaje)

//ejercicio4
/* function generadorDePorcentaje */