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

if(number1 > number2){
    console.log(`O maior numero é ${number1} e o menor é ${number2}`)
}
else if (number2 > number1){
    console.log(`O maior numero é ${number2} e o menor é ${number1}`)
}


let number3 = 500;

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
