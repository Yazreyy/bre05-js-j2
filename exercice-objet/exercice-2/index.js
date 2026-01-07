let student = {
	name : "Steven",
	age : 19,
	grades : [12, 14, 8],
	average : 0
};

let numbertable = student.grades.length;
let somme = 0;

for(let i = 0; i < numbertable; i++){
    somme += student.grades[i];
}
if(numbertable > 0){
    let average = somme / numbertable
    student.average = average
}

console.log(student);
console.log(`La moyenne de ${student.name} est de ${student.average}`);