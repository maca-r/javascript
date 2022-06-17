
let x = 0
function noParesDeContarImparesHasta(numero){
    let x = 0
    for (let i = 0; i <= numero; i++) {
        if (i % 2 !== 0) {
            x += 1
        }
    }
    return x
}

console.log(noParesDeContarImparesHasta(10))


function tablaDeMultiplicar(numero) {
    //Escribí tu código aquí
    let i = 1
    while (i <= 10){
        rdo = numero * i
        console.log(numero + " * " + i + " = " + rdo)
        i ++
    }
}

tablaDeMultiplicar(1)

