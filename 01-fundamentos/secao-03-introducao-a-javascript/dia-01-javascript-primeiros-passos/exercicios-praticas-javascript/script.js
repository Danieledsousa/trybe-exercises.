let a = 25;
let b = 15;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);


let number1 = 400;
let number2 = 3000;
let number3 = 500;

if(number1 > number2){
    console.log(`O maior numero é ${number1} e o menor é ${number2}`)
}
else if (number2 > number1){
    console.log(`O maior numero é ${number2} e o menor é ${number1}`)
}


if(number1 > number2 && number2 > number1){
    console.log(`O maior numero é ${number2} e o menor é ${number1}`)
}
else if(number1 > number3 && number3 > number1){
    console.log(`O maior numero é ${number3} e o menor é ${number1}`)
}
else if(number2 > number3 && number3 > number2){
    console.log(`O maior numero é ${number2} e o menor é ${number3}`)
}


let number4 = 'zzz';

if(number4 > 0){
    console.log('Positive');
}
else if(number4 < 0){
    console.log('Negative')
}
else{
    console.log('Zero')
}

let angle1 = 50;
let angle2 = 50;
let angle3 = 70;

let triangleResult = angle1 + angle2 + angle3;

if(triangleResult === 180){
    console.log('true')
}
else if(triangleResult !== 180){
    console.log('false')
}
else{
    console.log('resultado invalido')
}


let partName = 'rainha';

switch(partName.toLowerCase()){
    case 'peão':
        console.log('Peão -> Se move somente para frente, uma casa por vez, sendo movido pela primeira vez pode mover duas casas');
        break;
    case 'bispo':
        console.log('Bispo -> Se move em linha reta diagonalmente');
        break;
    case 'torre':
        console.log('Torre -> Se move em linha reta horizontalmente e verticalmente');
        break;
    case 'cavalo':
        console.log('Cavalo -> Unica peça que pode pular sobre outras peças, movendo-se horizontalmente e verticalmente, movendo-se em L');
        break;
    case 'rainha':
        console.log('Rainha -> Se move em qualquer número de casa em linha reta, verticalmente, horizontalmente e diagonalmente');
        break;
    case 'rei':
        console.log('Rei -> Se move em qualquer direção, horizontalmete, verticalmente e diagonalmente.');
        break;
    default:
        console.log('Peça não existente')
}


let gradeInPercentage = -50;

if(gradeInPercentage >= 90){
    console.log('A');
}else if(gradeInPercentage >= 80){
    console.log('B');
}else if(gradeInPercentage >= 70){
    console.log('C');
}else if(gradeInPercentage >= 60){
    console.log('D');
}else if(gradeInPercentage >= 50){
    console.log('E');
}else if(gradeInPercentage < 50){
    console.log('F');
}else if(gradeInPercentage < 0 && gradeInPercentage > 100){
    console.log('Numero inválido!');
}


let number5 = 77;

if(number1 % 2 == 1 || number3 % 2 == 1 || number5 % 2 == 1){
    console.log('true')
}else{
    console.log('false')
}


if(number1 % 2 == 0 || number3 % 2 == 0 || number5 % 2 == 0){
    console.log('true')
}else{
    console.log('false')
}


let costValue = 500;
let saleValue = 1000;
let costTax = costValue * 0.2


if (costValue >= 0 && saleValue >= 0) {
    let totalCost = costTax
    let profit = (saleValue - totalCost) * 1000;
    console.log(profit);
} else {
    console.log("Os valores não podem ser negativos!");
};












