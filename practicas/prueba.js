const prompt = require("prompt-sync")({ sigint: true });


// ejercicio 1
function diezSiguientes(valor){
    for (let i = 1; i <= 10; i++){
        valor ++
        console.log(valor)
    }
}
diezSiguientes(5);

//ejercicio 2
for (i = 5; i <= 20; i++){
    i += 3;
    console.log(i)
}

//ejercicio 3
let sumatoria = 0
for (i = 0; i <= 100; i++){
    sumatoria += i;
}
console.log(sumatoria)

// ejercicio 4
let factorial = 1
for (i = 1; i <= 4; i++){
    factorial = factorial * i
    
}
console.log(factorial)

//ejercicio 5
function fibonacci(numero){
    let x = 0;
    let y = 1;
    console.log(x);
    do{
        console.log(y);
        z=x;
        x=y;
        y=z+y;


    }while (y<=numero)
}
fibonacci(8);