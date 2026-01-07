let grades = [[20, 10], [15, 20], [13, 18]];
let totalsum = 0; /* la somme de tout les élements*/
let totalelements = 0; /* nombres d'éléments dans le tableau */
let average = 0; /* la moyenne*/

for(let i = 0; i < grades.length; i++){
    for(let j = 0; j < grades[i].length; j++){
           totalsum += grades[i][j]
           totalelements++ 
    }
}

if(totalelements > 0){
    average = totalsum / totalelements;
} else {
    average = 0;
}

console.log("la somme total est = " + totalsum)
console.log("le nombres d'elements est = " + totalelements)
console.log("la moyenne est de = " + average)

