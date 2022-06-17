/* let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function entrenarHoras (cantidadHoras){
        this.energia -= (cantidadHoras * 5 );
        this.experiencia += (cantidadHoras * 2);
        return this.energia, this.experiencia;
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);

 */
/* 
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



const banco = {
    clientes: arrayCuentas,
    consultarCliente: function (nombre) {
    let mensajeError =
        "No se encontro ninguna coincidencia, por favor verifique los datos ingresados.";
    let clienteEncontrado;
    for (let i = 0; i < this.clientes.length; i++) {
        if (this.clientes[i].titularCuenta === nombre) {
    clienteEncontrado = this.clientes[i];
        }
    }
      //antes de retornar pregunto si clienteEncontrado existe, es decir si contiene un objeto, si lo contiene va a ser true ya que existe algo, y lo envio, si no existe, es decir no contiene un objeto estara undefined lo cual resultara en false, en ese caso envio el mensaje de error
    return clienteEncontrado ? clienteEncontrado : mensajeError;
    },

    deposito: function (nombre, cantDeposito) {
      // Reutilizamos el metodo de consultar cliente para no repetirnos, y lo guardamos en una variable auxiliar
    let clienteEncontrado = this.consultarCliente(nombre);
    console.log(clienteEncontrado)
      //generamos una variable aux de mensaje para el retorno final
    let mensaje;
      // consultamos si el resultado de encontrar a un cliente fue un objeto con la cuenta o si fue un mensaje, lo que significaria que no se encontro ningun cliente con ese nombre
    if (typeof clienteEncontrado !== "string") {
        //si el cliente fue localizado realizamos la suma al saldo actual y la guardamos (es lo mismo realizar clienteEncontrado.saldoEnPesos = clienteEncontrado.saldoEnPesos + cantDeposito) y guardamos el mensaje de deposito realizado en la variable mensaje
        
        
        clienteEncontrado.saldoEnPesos += cantDeposito;
        mensaje =
        "Deposito realizado correctamente. su nuevo saldo es: " +
        clienteEncontrado.saldoEnPesos;
        console.log(clienteEncontrado.saldoEnPesos)
    } else {
        mensaje = "No se encontro ninguna coincidencia, por favor verifique los datos ingresados.";
    }
    return mensaje;
}
}

console.log(banco.consultarCliente("Abigael Natte"))

// console.log(banco.deposito("Abigael Natte", 2000))

 */



/* function sumador (comienzo, final, contador){
    let array = [];
    for(let i = comienzo; i <= final; i += contador ){
        array.push(i)
    }
    return array;
}

console.log(sumador(1,10,3)) */

/* 
5 - 

Arreglo de objetos
Debés crear una función llamada `arregloDeObjetos` que reciba un número como
parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor`
que contenga el valor del número y sus anteriores.
Ejemplo:
- arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4},
{valor: 5}]
- arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]*/

/*


function arregloDeObjetos (num){

    let array = []; 
    for(let i=1 ; i<=num ; i ++) {

        let objeto = {valor: i}; 
        array.push(objeto); 

    }
    return array; 

}

*/

/* 
// FUNCIONA!! 

function digitalHouse (n1,n2){
    for (let i = 1; i <= 100; i ++){
        if ((i % n1 === 0) && (i % n2 === 0)){
            console.log("Digital House")
        } else if (i % n1 === 0){
            console.log("Digital")
        } else if (i % n2 === 0){
            console.log("House")
        } else
            console.log(i)
    }
}

digitalHouse(3,5) */


/* 
// FUNCIONA !
function sumArray (array){
    let suma = 0;
    for (let i = 0; i < array.length; i++){
        suma += array[i];
    }
    
    return `El rdo es: ${ suma}`
}

console.log(sumArray([1,2,3,6,9]))
 */

/*
// FUNCIONA !

function joineando(array){
    let string = " "
    for (let i = 0; i < array.length; i++){
        string += array[i]
    }
    return string
}

console.log(joineando(["h","o","l","i"]))
*/