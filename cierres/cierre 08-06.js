let arrayCuentas = [
    {
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
    },
    {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
    },
    {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
    },
    {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
    },
    {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
    },
];



/* Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
propiedad llamada “clientes” que estará compuesta de la lista de objetos
obtenidos en el punto anterior. */

/* 3)
Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
objeto cliente que corresponda con ese nombre ingresado.
Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”); */

/* 4) Crear otro método llamado depósito que recibirá dos parámetros: el titular de
cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
nuevo saldo es: XXXX”. 

5. Crear un último método llamado extracción que recibirá también dos parámetros:
el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
saldo es: XXXX”.
*/

banco = {
    clientes : arrayCuentas,
    consultarCliente : function (nombreTitular){
        let clienteEncontrado;
        let error;
        for (let i = 0; i <= 5 - 1; i ++){
            if (nombreTitular === banco.clientes[i].titularCuenta){
                clienteEncontrado = banco.clientes[i].titularCuenta;
            } else {
                error = "El nombre del titular no coincide con ninguna cuenta, vuelva a intentar."
            }
        }
        
        /* return clienteEncontrado ? clienteEncontrado : error; */   // if ternario
        if (clienteEncontrado === nombreTitular){
            return clienteEncontrado;
        } else
            return error;
    },

    deposito : function (titular, dineroADepositar){
        let titularDeposito = this.consultarCliente(titular);
        
        let nuevoSaldo;
        for (let i = 0; i <= 5 - 1; i ++){
            
            if (titularDeposito === banco.clientes[i].titularCuenta) { //compara titular que encuentra en la fx consultarCliente con el titular
                
                nuevoSaldo = banco.clientes[i].saldoEnPesos += dineroADepositar;
            
            }
        
        
        }
        return "Déposito realizado, su nuevo saldo es: " + "$" + nuevoSaldo
    },

    extraccion : function (titular, montoExtraccion){
        let titularDeposito = this.consultarCliente(titular);
        let nuevoSaldo;
        for (let i = 0; i <= 5 - 1; i ++){
            
            if (titularDeposito === banco.clientes[i].titularCuenta) { //compara titular que encuentra en la fx consultarCliente con el titular
                
                nuevoSaldo = banco.clientes[i].saldoEnPesos -= montoExtraccion;
            
            }
        }
        if (nuevoSaldo >= 0){
            return "Extracción realizada, su nuevo saldo es: " + "$" + nuevoSaldo
        } else
            return "Fondos insuficientes"
    },
}

// ------ PRUEBAS --------- 

/* console.log(banco.clientes[1].titularCuenta)
console.log(banco.consultarCliente("Ansel Ardley"))
console.log(banco.consultarCliente("Jack"))
console.log(banco.deposito("Ansel Ardley", 2000))
console.log(banco.extraccion("Ansel Ardley", 3000))
console.log(banco.deposito("Abigael Natte", 5000))
console.log(banco.extraccion("Abigael Natte", 2000))
console.log(banco.clientes) */





// -------- propiedad unica FUNCIONA!!!

/* function propiedadUnica(arrayObjetos,string){
    let nuevoArray = [];
    let valor;
    //2 for para obtener 2 posiciones: i es el iterador del objeto y j itera sobre las claves del objeto que se encuentra en cada posicion del array
    for (let i = 0; i < arrayObjetos.length; i++){
        
        for (let j = 0; j < Object.keys(arrayObjetos[i]).length; j++){
            // compara el string ingresado con la clave del objeto en cada posición, si son estrictamente iguales
            if (string === (Object.keys(arrayObjetos[i])[j])){
                //obtiene el par [key,value] de esa posicion
                valor = Object.entries(arrayObjetos[i])[j];
                // se agrega valor a un array nuevo
                nuevoArray.push(valor);
            } 
        }
    }
    return nuevoArray;
}

let array = [{pais : "argentina", edad : 27, sexo : "M", area: "fullstack", nombre:"Bautista"},
{pais : "brasil", edad : 30, sexo: "F", area: "big data", nombre: "Marcia"}, 
{pais: "francia", edad: 4, sexo: "M", area: "security", nombre: "Jean Paul"}]

console.log(propiedadUnica(array, "edad"))

let arrayObjetos = propiedadUnica(array, "edad");
let arrayFinal = []
let objetoNuevo;
for (let i = 0; i < arrayObjetos.length; i++){
    
    objetoNuevo = Object.fromEntries(arrayObjetos[i]);
    arrayFinal.push(objetoNuevo);
}

console.log(arrayFinal) */

//------------------------------------DEVUELVE ARRAY CON OBJETOS QUE SON REPITEN EL ULTIMO VALUE

function propiedadUnica(arrayObjetos,string){
    let nuevoArray = [];
    let clave;
    let valor;
    let objetoNuevo = {}
    //2 for para obtener 2 posiciones: i es el iterador del objeto y j itera sobre las claves del objeto que se encuentra en cada posicion del array
    for (let i = 0; i < arrayObjetos.length; i++){
        
        for (let j = 0; j < Object.keys(arrayObjetos[i]).length; j++){
            // compara el string ingresado con la clave del objeto en cada posición, si son estrictamente iguales
            if (string === (Object.keys(arrayObjetos[i])[j])){
                //obtiene el par [key,value] de esa posicion

                clave = (Object.keys(arrayObjetos[i])[j])
                
                valor = (Object.values(arrayObjetos[i])[j])
                
                objetoNuevo[clave] = valor

                console.log(objetoNuevo) //solo para comprobar que se genera cada objeto
                
                nuevoArray.push(objetoNuevo)
            }
        }
    }
    return nuevoArray;
}

let array = [{pais : "argentina", edad : 27, sexo : "M", area: "fullstack", nombre:"Bautista"},
{pais : "brasil", edad : 30, sexo: "F", area: "big data", nombre: "Marcia"}, 
{pais: "francia", edad: 40, sexo: "M", area: "security", nombre: "Jean Paul"}]

//console.log(propiedadUnica(array, "edad"))


/* Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como
parámetro la propiedad que fue pasada como string.
Ejemplo:
let array = [ { nombre: “Lean”, edad: 27 }, { nombre: “Eze”, edad: 49} ]
propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ] */

//----------------------USA SOLUCION DE DESAFIO FUNCIONA!!!!

function propiedadUnica(arrayObjetos,string){
    let nuevoArray = [];
    let clave;
    let valor;
    //2 for para obtener 2 posiciones: i es el iterador del objeto y j itera sobre las claves del objeto que se encuentra en cada posicion del array
    for (let i = 0; i < arrayObjetos.length; i++){
        
        for (let j = 0; j < Object.keys(arrayObjetos[i]).length; j++){
            // compara el string ingresado con la clave del objeto en cada posición, si son estrictamente iguales
            if (string === (Object.keys(arrayObjetos[i])[j])){
                //obtiene el par [key,value] de esa posicion

                clave = (Object.keys(arrayObjetos[i])[j])
                
                valor = (Object.values(arrayObjetos[i])[j])
                
                nuevoArray.push({[clave] : valor})
            }
        }
    }
    return nuevoArray;
}

//arrayNuevo.push({[palabra] : i})

//console.log(propiedadUnica(array, "pais"))


/* Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:
● Nombre
● Número de legajo
● Lista de notas
Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una
nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses
todos los métodos y propiedades que puedan hacer falta para que el programa funcione
correctamente de la manera solicitada. */

