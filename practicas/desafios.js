/*  - Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , luego desarrollar las siguientes funciones:

nota : Se recomienda utilizar estructuras y conceptos vistos en la materia, pueden resolver con metodos pero tambien de forma imperativa (for if) */


let edad1 = [10, 3, 8, 8, 5,8]
let edad2 = [9, 5, 8, 27, 55, 1, 5, 64, 29, 10]
let edad3 = [10, 9, 7, 5, 60, 81, 5, 63, 28, 9]

//1 - Funcion que reciba un array de edades y retorne el promedio 

function promedio(array){
    let suma = 0
    for (let i = 0; i < array.length; i++){
        
        suma += array[i]
    }
    return (suma / (array.length))
}

// console.log(promedio(edad3))


//2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80

function mayorEdad(array){
    let mayor = array[0]
    for (let i = 0; i < array.length; i++){
        if (mayor < array[i]){
            mayor = array[i];
        }
    }
    return mayor
}

//console.log(mayorEdad(edad1))

//3 - Funcion que reciba un array de edades y retorne el menor elemento // 5


function menorEdad(array){
    let menor = array[0]
    for (let i = 0; i < array.length; i++){
        if (menor > array[i]){
            menor = array[i];
        }
    }
    return menor
}
//console.log(menorEdad(edad1))


//4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario
function repetido(array){
    let booleano = false //inicia booleano false
    for (let i = 0; i < array.length; i++){
        //2 for para recorrer el array: 1 for toma 1 nro en la posicion i, y el otro sirve para comparar con el nro de cada posicion j
        for (let j = 0; j < array.length; j++){
            //si el nro del indice i y el del indice j son iguales y además la posicion i es diferente de la j
            if (array[i] === array[j] && i != j){
                booleano = true //convierte booleano a true = hay repetidos
            }
        }
    }
    return booleano
}
//console.log("Hay edades repetidas?: " + repetido(edad1))


//     ----solución profesor
const duplicado = array => {//crea arrow function
    let edadRepetida = [] //array vacio para agregar edad

    for (let i = 0; i < array.length; i++) {

        const edad = array[i]; //vble edad la iguala al nro que hay en la posicion i del array

        if(edadRepetida.includes(edad)){ //ve si la lista contiene a edad
            return true //si la contiene devuelve true
            
        }
        console.log(edad)
        edadRepetida.push(edad) //sale del if, y agrega la edad de esa vuelta
        console.log(edadRepetida)
    }
    return false //devuelve falso si la lista no contiene a edad despues de vertificarlo en todas las vueltas
}
//console.log(duplicado(edad1));


//5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si encuentra coincidencia o null caso contrario

// SIN METODO DE ARRAY
function edadBuscada(array,edad){
    let primerIndice = null
    for (let i = 0; i < array.length; i++){
        if (array[i] === edad){
            primerIndice = i
            return primerIndice //acá return corta el loop, se queda con ese indice y sale del for   
        }
    }
    return primerIndice
}
//console.log(edadBuscada(edad2,5))


// CON METODO DE ARRAY
function edadBuscada2(array,edad){
    let primIndice = null
    if (array.indexOf(edad) != -1){ //!= -1 xq si es ese valor sería lo mismo que null debido a .indexOf
        primIndice = array.indexOf(edad)
    }
        
    return primIndice
}

//console.log(edadBuscada2(edad2,64))

/* 6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
{
    edadesMenor : "// edades menor a 18",  
    edadesMayor : "// edades menor a 18"
} */

function devuelveObjeto(array){
    let objeto = {};
    let mayores = [];
    let menores = [];

    for (let i = 0; i < array.length; i++){
        if (array[i] < 18){
            menores.push(array[i]);
        } else {
            mayores.push(array[i]);
        }

    }
    objeto.menor18 = menores;
    objeto.mayor18 = mayores;
    return objeto
}

//console.log(devuelveObjeto(edad3))

//------------------------DESAFIO 2

/* Parte 1: Crear Mi Objeto

Crea un Objeto nave con las siguientes Propiedades y Valores:
Tipo de nave: Un String que diga "Espacial".
País: Un String que indique de qué país es la nave.
Cantidad de tripulantes: Un número que indique la cantidad de tripulantes de la nave.
Tripulantes: Un Arreglo con los nombres de los tripulantes.
País de los tripulantes: Un arreglo con nombres de los países de los tripulantes
Estado: Un String que diga "Usada".

Despegar: a) Una Función que imprima en la consola el siguiente mensaje: "🚀 ¡Todo listo para el despegue! 

¡algo se rompió!" 
b) Y tire un Alert(ver que es un alert, si no lo conocen) que diga: ¡BOOOM!

*/

let nave = {
    tipo : "Espacial",
    pais : "USA",
    cantidadTripulantes : 3,
    nombresTripulacion : ["Maximiliano","John","Donatto"],
    nacionalidadTripulacion : ["Argentina","USA","Italia"],
    estado : "usada",
    despegar : () => "¡Todo listo para el despegue!", //arrow function
    // rotura : () => alert("¡BOOOM!"), en terminal no funciona alert, pero si por consola de inspeccionar
    rotura : () => "¡BOOOM!"
}

/* Parte 2: Acceso A Los Valores
Ahora desde la consola o su VSC seguí este paso a paso para extraer los valores del Objeto nave:

Extraé el país de la nave usando Dot notation.
Extraé el tipo de nave usando Bracket notation.
Extraé la cantidad de tripulantes usando Dot notation... ¿se puede?(pensar porque y dejar un comentario explicándolo) */

//console.log(nave.despegar())
//console.log(nave.rotura())
//console.log(nave.pais)
//console.log(nave["tipo"])
//console.log(nave.cantidadTripulantes)



// ----------------- DESAFIO 3

/* Arreglo de objetos 2
Debés crear una función llamada arregloDeObjetos que reciba un número y una
palabra como parámetro y devuelva un arreglo de objetos que tenga: una propiedad
llamada como la palabra pasada por parámetro y el valor del número y sus anteriores.
Ejemplo:
- arregloDeObjetos(5, “hola”) debe retornar [{hola: 1}, {hola: 2}, {hola: 3}, {hola: 4},
{hola: 5 }]
- arregloDeObjetos(3, “chau”) debe retornar [{chau: 1}, {chau: 2}, {chau: 3}]*/

function arregloDeObjetos (nro, palabra){
    let arrayNuevo = [];
    //let objeto = {}
    for (let i = 1; i <= nro; i++){
        //objeto[palabra] = i;
        
        arrayNuevo.push({[palabra] : i})
    }
    
    return arrayNuevo
}
//console.log(arregloDeObjetos(5,"hola"))



/* LOOP DE IMPARES CON PALABRA
Debés crear una función llamada loopDeImpares 

que reciba como parámetro un número y una palabra 

y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 

Ahora, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.
*/

function loop (nro, palabra){
    for (let i = 0; i <= 10; i++){
        return i
    }
}

//console.log(loopDeImpares(5))

function loopDeImpares (nro, palabra){
    let valor
    for (let i = 0; i <= 5; i++){
        
        if (((i + nro) % 2) === 1){
            console.log(palabra)
        } else if (((i + nro) % 2) === 0){
            console.log(i)
        }
        
    } 
}

//loopDeImpares(3, "Impar")



/* Deben crear una función llamada paresEimpares 
que recibe 3 parámetros 
los dos primeros que sean números y el tercero una palabra (string) 
la función tiene que mostrar en la consola los números entre el cero y el primer parámetro que recibe 
pero debe en primer lugar mostrar todos los números pares 
y luego los impares 
además, cuando el número sea divisible por el segundo parámetro pasado a la función, en vez de loggearlo, debe imprimir la palabra que recibe como tercer parámetro.  
Ejemplo: 
paresEImpares(10,7,’prueba’)
====> 
0
2
4
6
8
10
("---------------------------------------------------")
1
3
5
’Prueba’
9*/

function paresEImpares(nro1,nro2,palabra){
    for (let i = 0; i <= nro1; i++){
        if (i % 2 === 0){
            console.log(i)
        }
    }
    for (let i = 0; i <= nro1; i++){
        if ((i % 2 === 1) && (i % nro2 === 0)){
            console.log(palabra)
        } else if (i % 2 === 1){
            console.log(i)
        }
    }
}
    
//paresEImpares(5,3,"prueba")

function palindromo (palabra){
    let inverso = "";
    for (let i = palabra.length - 1; i >= 0; i--){
        inverso += palabra[i]
    }

    if (inverso === palabra){
        console.log(true);
    } else
        console.log(false)

    
}

//palindromo("maca")


/* 
Supongamos que tenemos un Arreglo llamado autos que tiene dos Objetos (un auto marca "Citroen" y otro marca "Honda").
*/

let autos = [
    {
    marca: "Citroen",
    modelo: "C3",
    año: 2013,
    dueño: "Juan",
    color: {
        capot: "gris",
        puertas: "negro",
    },
    dueñosAnteriores: [], // Lo compro 0KM
    },
    {
    marca: "Honda",
    modelo: "Fit",
    año: 2016,
    dueño: "Santiago",
    color: {
        capot: "rojo",
        puertas: "rojo",
    },
    dueñosAnteriores: ["Jorge", "Iván"],
    },
];

/* 
Santiago le compra el auto a Juan y le pinta el capot a negro.
¿Cómo harías para modificar esas Propiedades?
  */

autos[0].dueño = "Santiago"
autos[0]["color"]["capot"] = "negro"
autos[0].dueñosAnteriores = "Juan"

//console.log(autos)

/* 
//Crear un array VACÍO, que tenga el nombre de autos. 


// Usando estos 3 Objetos

let ford = {
    año	 : 2015,
    color	: "blanco",
    puertas: 5
}

let peugeot = {
año	 : 2010,
color	: "rojo",
puertas: 3
}

let volkswagen = {
año	 : 2012,
color	: "gris",
puertas: 4
}

//Estos 3 objetos, ahora tenes que pensar como podrias agregarlos al array. (utilizando un método JS, pensa cuál podrías utilizar)



// Mostrar por consola el array para ver que contenga esos objetos.




/* Tenes que crear una función que reciba el array autos como unico parámetro, e incremente en 3 la cantidad de puertas que van a tener los autos en el futuro con una modificacion, llámala futurosAutos. Debes utilizar una estructura de repetición. */

let ford = {
    año	 : 2015,
    color	: "blanco",
    puertas: 5
}

let peugeot = {
año	 : 2010,
color	: "rojo",
puertas: 3
}

let volkswagen = {
año	 : 2012,
color	: "gris",
puertas: 4
}

let arrayAutos = []

arrayAutos.push(ford,peugeot,volkswagen)

consol.log(arrayAutos)

function masPuertas(array){
    for (let i = 0; i <= array.length - 1; i++){
        array[i].puertas += 3
    }
    return array
}

console.log(masPuertas(arrayAutos))