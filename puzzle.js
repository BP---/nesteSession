

function puzzle() {
    const alternatives = ["Basilisk", "Ravn", "Orm", "Skarabe", "Rev", "Ulv", "Bjørn", "Fønix"];
    const solutions = [];
    for (let i=0; i<alternatives.length; i++) {
        for (let j = 0; j<alternatives.length; j++) {
            for (let k = 0; k<alternatives.length; k++) {
                for(let l = 0; l<alternatives.length; l++){
                    solutions.push([alternatives[i], alternatives[j], alternatives[k], alternatives[l]]);
                }
            }
        }
    }
    
    return solutions;
    
}