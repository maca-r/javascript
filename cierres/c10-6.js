
const alicia = [10, 80, 75];
const bob = [90, 20, 25];

let concurso = {
    etapas : [],
    ganador : " ",
    encontrarGanador : function(a,b){
        let puntosAlicia = 0;
        let puntosBob = 0; 

        for(i = 0; i <= 3; i ++){
            if (a[i] > b[i]){
                puntosAlicia ++;
                this.etapas[i] = "Rdo parcial: GANÓ Alicia"
            } else if (a[i] < b[i]){
                puntosBob ++;
                this.etapas[i] = "Rdo parcial: GANÓ Bob"
            } else if (a[i] === b[i]){
                this.etapas[i] = "Rdo parcial: empate"
            }
        }
    
        if (puntosAlicia > puntosBob){
            this.ganador = "Alicia"
            console.log("Ganó Alicia con " + puntosAlicia + " puntos.")
        } else if (puntosAlicia < puntosBob) {
            this.ganador = "Bob"
            console.log("Ganó Bob con " + puntosBob + " puntos.")
        } else {
            this.ganador = "Empate"
            console.log("Los participantes empataron.")
        }
            
    }
    
    
}
concurso.encontrarGanador(alicia,bob)
console.log(concurso)



