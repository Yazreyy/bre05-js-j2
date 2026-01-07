function add(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}
function mult(a, b){
    return a * b;
}
function div(a, b){
    return a / b;
}
function mod(a, b){
    return a % b;
}

function askUserOperation(){
    let operation = prompt("Quelle opération souhaitez-vous effectuer ? (+ , - , * , /)");
    return operation;
}
function askUserFirstNumber(){
    let FirstNumber = prompt("Veuilez choisir votre premier nombre");
    return parseInt(FirstNumber);
}
function askUserSecondNumber(){
    let SecondNumber = prompt("Veuillez choisir un second nombre");
    return parseInt(SecondNumber);
}

function calculator(){
   const operator = askUserOperation();
    const num1 = askUserFirstNumber();
    const num2 = askUserSecondNumber();

let result;

if (operator === '+'){
    result = add(num1, num2);
} else if (operator === '-'){
    result = sub(num1, num2);
} else if (operator === '*'){
    result = mult(num1, num2);
} else if (operator === '/'){
    if(num2 === 0){
        result = "Erreur : Division par zéro impossible"
    } else {
        result = div(num1, num2);
    }
} else if(operator === '%'){
    result = mod(num1, num2);
} else {
    result = "operation non reconnue"
}

  console.log(`Le résultat de ${num1} ${operator} ${num2} = ${result}`);
}
calculator();