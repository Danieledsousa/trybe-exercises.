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


