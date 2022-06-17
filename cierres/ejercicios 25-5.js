/*  1. Fx pulgadas a centimetros */
function pulgadasCentimetros(pulgadas){
    return pulgadas * 2.54
}

let numeros = pulgadasCentimetros(15)
console.log(numeros)

//Fx pulgadasCentrimetros EXPRESADA
let inCm = function pulgadasCentimetros(pulgadas){
    return pulgadas * 2.54
}
// console.log(inCm(10))


//Fx pulgadasCentrimetros ARROW
let inCm2 = pulgadas => pulgadas * 2.54
// console.log(inCm2(15))

/* 2. Fx recibe str y lo convierte en url */
function stringUrl(str){
    return "https://www." + `${str}` + ".com"
}

let string = stringUrl("buddah")
console.log(string)

// Fx stringUrl EXPRESADA
let urlString = function stringUrl(str){
    return "https://www." + `${str}` + ".com"
}
// console.log(UrlString("latin"))


// Fx stringUrl ARROW
let urlString2 = str => "https://www." + `${str}` + ".com"
// console.log(urlString2("tucan"))



/* 3. Fx recibe str y devuelve frase con admiracion */
function admiracion(str){
    return str + "!!!"
}

let frase = admiracion("Hola, qué tal")
console.log(frase)

// Fx admiracion EXPRESADA
let admira = function admiracion(str){
    return str + "!!!"
}

// Fx admiracion ARROW
let admira2 = str => str + "!!!"



/* 4. Fx calcula edad de los perros */
function edadPerros(nro){
    return nro * 7
}

let perro = edadPerros(3)
console.log(perro)

// Fx calculadora edad perro EXPRESADA
let calculadoraPerro = function edadPerros(nro){
    return nro * 7
}

// Fx calculadora edad perro ARROW
let calculadoraPerro2 = nro => nro * 7

/* 5. Fx calculo hora de trabajo */
function horaTrabajo(sueldoMensual){
    return sueldoMensual / 40
}

let sueldo = horaTrabajo(115000)
console.log(sueldo)

// Fx hora de trabajo EXPRESADA
let calculadoraHora = function horaTrabajo(sueldoMensual){
    return sueldoMensual / 40
}

// Fx hora de trabajo ARROW 
let calculadoraHora2 = sueldoMensual => sueldoMensual / 40

/* 6. Calculadora IMC */
function calculadoraImc(altura, peso){
    return (peso / ((altura)**2))
}

let imc = calculadoraImc(1.54, 49)
console.log(imc)


//Fx calculadora IMC EXPRESADA
let imcCalculadora = function calculadoraImc(altura, peso){
    return (peso / ((altura)**2))
}
//Fx calculadora IMC ARROW
let imcCalculadora2 = (altura, peso) => (peso / (altura**2))


/* 7. Fx minuscula a mayusc */
let aMayuscula = function minusMayus(str){
    return str.toUpperCase() //metodo que convierte un str a mayusculas
}

console.log(aMayuscula("lorem ipsum"))

/* 8. Fx tipo de dato (expresada)*/
let tipoDato = function tipoDeDato(dato){
    return typeof dato
}
console.log(tipoDato(5.3))


/* Fx calculo circunferencia */
function circunferencia(radio){
    return (radio * (2 * Math.PI))
}

let calcCircunferencia = circunferencia(3)
console.log(calcCircunferencia)

// Fx calculo circunferencia EXPRESADA
let calcCircunferencia2 = function circunferencia(radio){
    return (radio * (2 * Math.PI))
}
console.log(calcCircunferencia2(2))

// Fx calculo circunferencia ARROW
let calcCircunferencia3 = radio => (radio * (2 * Math.PI))

console.log(calcCircunferencia3(3.5))