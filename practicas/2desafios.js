//Divisibles
//Debes crear una función llamada divisibles que reciba dos parámetros:
//un arreglo de números y un divisor. Esta deberá retornar un arreglo con
//los números que sean divisibles por el segundo parámetro.

//Ejemplo:

/* console.log(divisibles([1, 2, 3, 4, 5, 6], 2)); //debe retornar  [2, 4, 6]
console.log(divisibles([1, 2, 3, 4, 5, 6], 3)); //debe retornar  [3, 6] */


let numeros = [1,2,3,4,5,6,7,8,9,10]
let nros2 = [10,11,12,13,14,15,16]

function divisibles(array,divisor){
    let arrayDivisibles = []
    for (let i = 0; i <= array.length - 1; i++) {
        
        array[i] % divisor === 0 ? arrayDivisibles.push(array[i]) : false
        
    }
    return arrayDivisibles
}

//console.log(divisibles(nros2,3));


//Chequeador
//Debes crear una función llamada chequeador que reciba un arreglo y
//un elemento a chequear, esta deberá retornar true si el elemento se
//encuentra dentro del arreglo, sino, debe retornar false

//Ejemplo:

/* console.log(chequeador([1, 2, "hola", "chau", 10], "hola"));
//debe retornar true
console.log(chequeador([1, 2, "hola", "chau", 10], "plataforma5"));
//debe retornar false
 */

let lista = [1, 2, "hola", "chau", 10]

function chequeador (array,elemento){
    let chequea = false

    for (let index = 0; index <= array.length - 1; index++) {
        
        elemento === array[index] ? chequea = true : chequea

    }
    return chequea
}

//console.log(chequeador(lista,"jota"));


/*
Elements

Escribí una función llamada Elements que tenga dos parámetros, en primer lugar un arreglo de objetos y ademas el nombre de una propiedad. La función tendrá que devolver un arreglo que solamente contenga los valores dentro de la propiedad recibida.

Utilizar la siguiente variable:

let ecommerce = [{ nombre: "Samsung TV", precio: 6000}, { nombre: "DELL notbook", precio: 4000 }, {nombre:"Auriculares Sony", precio: 1500}, {nombre:"Monitor Philips", precio:12000}, {nombre:"Teclado logitech", precio: 3000}]

Ejemplo: 

Elements(ecommerce, 'nombre') // ["Samsung TV", "DELL notbook", "Auriculares Sony", "Monitor Philips", "Teclado logitech"]

*/

let ecommerce = [{ nombre: "Samsung TV", precio: 6000}, { nombre: "DELL notbook", precio: 4000 }, {nombre:"Auriculares Sony", precio: 1500}, {nombre:"Monitor Philips", precio:12000}, {nombre:"Teclado logitech", precio: 3000}]

function element(array,propiedad){
    let arrayPropiedad = []
    for (let index = 0; index <= array.length - 1; index++) {
        arrayPropiedad.push(array[index][propiedad])
        
        
    }
    return arrayPropiedad
}

//console.log(element(ecommerce,"nombre"));


/* ) Del siguiente array de “ceros” tenemos un intruso, carácter que no es
“cero” (cero entre comillas)
['0', '0', '0', '0', '0', 'O', '0', '0', '0']
nuestro trabajo será desarrollar una función que lo detecte
reemplazando por un “cero” y retorna él índice que se encontraba él
intruso
 */

let intruso = ['0', '0', '0', '0', '0', 'O', '0', '0', '0']

function detectaIntruso(array){
    let indice
    for (let index = 0; index < array.length; index++) {
        if (array[index] !== "0"){
            array[index] = "0"
            indice = index
        }
        
    }
    return "La posición del intruso era: " + indice
}

//console.log(detectaIntruso(intruso));

/* Ahora tenemos un caso similar, solo que esta vez tenemos más de un
intruso
['0', '0', '0', '0', '0', 'O', '0', '0', 'O', '0', 'O']
nuestro trabajo será crear una función que los reemplace por ceros y
retorna un array con las posiciones que se encontraban estos
 */

intruso = ['0', '0', '0', '0', '0', 'O', '0', '0', 'O', '0', 'O']

function masIntrusos(array){
    let indices = []
    for (let index = 0; index < array.length; index++) {
        if (array[index] !== "0"){
            array[index] = "0"
            indices.push(index)
        }
        
    }
    return "Las posiciones de los intrusos eran: " + indices
}

//console.log(masIntrusos(intruso));


