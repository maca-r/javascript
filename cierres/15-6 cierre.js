const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

/* Obtener en un nuevo array las edades menores a 18 */
let nuevoArray = []

function menores(array){
    for (let i = 0; i <= array.length - 1; i++){
        if (array[i] < 18){
            nuevoArray.push(array[i])
        }
    }
    return nuevoArray
}
//console.log(menores(edades))

/* Obtener en un nuevo array las edades mayor o igual a 18.
 */
function mayores(array){
    for (let i = 0; i <= array.length - 1; i++){
        if (array[i] >= 18){
            nuevoArray.push(array[i])
        }
    }
    return nuevoArray
}

//console.log(mayores(edades))

/* Obtener en un nuevo array las edades igual a 18. */
function igual(array){
    for (let i = 0; i <= array.length - 1; i++){
        if (array[i] === 18){
            nuevoArray.push(array[i])
        }
    }
    return nuevoArray
}

//console.log(igual(edades))


/* Obtener el menor. */
function menor(array){
    let elMenor = array[0]
    for (let i = 0; i <= array.length - 1; i++){
        if (elMenor > array[i]){
            elMenor = array[i]
        }
    }
    return elMenor
}

//console.log(menor(edades))


/* Obtener el mayor.  */
function mayor(array){
    let elMayor = array[0]
    for (let i = 0; i <= array.length - 1; i++){
        if (elMayor < array[i]){
            elMayor = array[i]
        }
    }
    return elMayor
}

//console.log(mayor(edades))


/* Obtener el promedio de edades. */
function promedioEdades(array){
    let sumador = 0
    for (let i = 0; i <= array.length - 1; i++){
        sumador += array[i]
    }
    return sumador / array.length
}

//console.log(promedioEdades(edades))


/* Incrementar en 1 todas las edades. */
function incremento(array){
    let nuevasEdades = []
    for (let i = 0; i <= array.length - 1; i++) {
        nuevasEdades.push(array[i] += 1)
    }
    return nuevasEdades
}

//console.log(incremento(edades));

const arrayCuentas =
[
    {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: "$3,253.40",
    edadTitular: 33,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: "$3,229.45",
    edadTitular: 27,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: "$1,360.19",
    edadTitular: 34,
    tipoCuenta: "corriente"
    },
    {
    titular: "Daniel Malone",
    estaHabilitada: false,
    saldo: "$3,627.12",
    edadTitular: 30,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: "$1,616.52",
    edadTitular: 34,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: "$1,408.68",
    edadTitular: 25,
    tipoCuenta: "corriente"
    }
]

/* Obtener un nuevo array de cuentas cuyas edades sean menores a 30. */

let cuentasMenores = []
for (let i = 0; i <= arrayCuentas.length - 1; i++) {
    if (arrayCuentas[i]["edadTitular"] < 30){
        cuentasMenores.push(arrayCuentas[i])
    };
    
}

//console.log(cuentasMenores);

/* Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30. */

let cuentasMayores = []
for (let i = 0; i <= arrayCuentas.length - 1; i++) {
    if (arrayCuentas[i]["edadTitular"] >= 30){
        cuentasMayores.push(arrayCuentas[i])
    };
    
}

//console.log(cuentasMayores)

/* Obtener un nuevo array de cuentas cuyas edades sean igual a 30. */

let cuentasTreinta = []
for (let i = 0; i <= arrayCuentas.length - 1; i++) {
    if (arrayCuentas[i]["edadTitular"] === 30){
        cuentasTreinta.push(arrayCuentas[i])
    };
    
}

//console.log(cuentasTreinta);

/* Obtener la cuenta con el titular de la misma más joven. */

function titularJoven(array){
    let menor = array[0]["edadTitular"]
    let objMenorEdad;
    for (let i = 0; i <= array.length - 1; i++) {
        
        if (menor >= (array[i]["edadTitular"])){
            
            menor = array[i]["edadTitular"] //sirve para ir cambiando el valor de menor y que en cada iteración varie la condición
            objMenorEdad = array[i];
        }
    }
    return objMenorEdad
}    

//console.log(titularJoven(arrayCuentas))

/* Obtener un nuevo array por cada tipo de cuenta. */

function arrayTipoCuentas(array){
    let tipoDeCuentas = []
    for (let i = 0; i <= array.length - 1; i++) {
        tipoDeCuentas.push(array[i]["tipoCuenta"])
        
    }
    return tipoDeCuentas
}

//console.log(arrayTipoCuentas(arrayCuentas));

/* Obtener un nuevo array con las cuentas habilitadas y deshabilitadas. */

let habilitadas = []
let inhabilitadas = []

function estadoCuentas(array) {
    
    for (let i = 0; i <= array.length - 1; i++) {
        
        array[i]["estaHabilitada"] === true ? habilitadas.push(array[i]) : inhabilitadas.push(array[i]) //if ternario
        
    }
    console.log(habilitadas)
    console.log(inhabilitadas)
}


//console.log(estadoCuentas(arrayCuentas));

/* Obtener la cuenta con el menor saldo. */


function menorSaldo(array){
    let saldoMenor = array[0]["saldo"]
    let objSaldoMenor 
    

    for (let i = 0; i <= array.length - 1; i++) {
        
        if (saldoMenor > array[i]["saldo"]){
            saldoMenor = array[i]["saldo"] //sirve para ir cambiando el valor de saldoMenor y que en cada iteración varie la condición
            objSaldoMenor = array[i]
        }
        
    }
    return objSaldoMenor
}

//console.log(menorSaldo(arrayCuentas));


/* Obtener la cuenta con el mayor saldo. */

function mayorSaldo(array){
    let saldoMayor = array[0]["saldo"]
    let objSaldoMayor
    for (let i = 0; i <= array.length - 1; i++) {
        
        if (saldoMayor < array[i]["saldo"]){
            saldoMayor = array[i]["saldo"] //sirve para ir cambiando el valor de saldoMayor y que en cada iteración varie la condición
            objSaldoMayor = array[i]
        }
        
    }
    return objSaldoMayor
}

//console.log(mayorSaldo(arrayCuentas));