const prompt = require("prompt-sync")({ sigint: true });
/* 
// totalAPagar

let vehiculo = prompt("Ingrese vehiculo: ")
let ltsConsumidos = parseInt(prompt("Ingrese lts consumidos: "))

function totalAPagar(vehiculo, ltsConsumidos){
    
    if (vehiculo === "coche"){
        let totalCoche = ltsConsumidos * 86;
        if (0 <= ltsConsumidos && ltsConsumidos <= 25){
            totalCoche = totalCoche + 50
        } else if (25 < ltsConsumidos){
            totalCoche = totalCoche + 25}
        return ("El precio por el total de lts consumidos es $" + totalCoche);

    } else if (vehiculo === "moto") {
        let totalMoto = ltsConsumidos * 70;
        if (0 <= ltsConsumidos && ltsConsumidos <= 25){
            totalMoto = totalMoto + 50
        } else if(25 < ltsConsumidos){
            totalMoto = totalMoto + 25}
        return ("El precio por el total de lts consumidos es $" + totalMoto);

    } else (vehiculo === "autobus") 
        let totalAutobus = ltsConsumidos * 55;
        if (0 <= ltsConsumidos && ltsConsumidos <= 25){
            totalAutobus = totalAutobus + 50
        } else if (25 < ltsConsumidos) {
            totalAutobus = totalAutobus + 25 }
        return ("El precio por el total de lts consumidos es $" + totalAutobus);
}

//uso de la fx totalAPagar
let automotor = totalAPagar(vehiculo,ltsConsumidos)
console.log(automotor)


 */


//Fx local de sandwiches


let base = prompt("Que tipo de base desea para su sandwich: ")
let pan = prompt("Que tipo de pan quiere para su sandwich: ")



function tipoSandwich(base, pan, adicionales){

    if (base === "pollo"){
        let totalPollo = 150;
        if (pan === "blanco"){
            totalPollo += 50;
        } else if (pan === "negro"){
            totalPollo += 60;
        } else if (pan === "s/gluten"){
            totalPollo += 75;
        }
        console.log(totalPollo);

    } else if (base === "carne"){
        let totalCarne = 200;
        if (pan === "blanco"){
            totalCarne += 50;
        } else if (pan === "negro"){
            totalCarne += 60;
        } else if (pan === "s/gluten"){
            totalCarne += 75;
        }
        console.log(totalCarne);

    } else if (base === "veggie"){
        let totalVeggie = 100;
        if (pan === "blanco"){
            totalVeggie += 50;
        } else if (pan === "negro"){
            totalVeggie += 60;
        } else if (pan === "s/gluten"){
            totalVeggie += 75;
        }
        console.log(totalVeggie)
    }




}

tipoSandwich(base, pan)

