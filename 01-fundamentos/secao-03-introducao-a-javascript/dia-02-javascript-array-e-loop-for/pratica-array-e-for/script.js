let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index+=1) {
    console.log(numbers[index]);
}

let sum = 0;
for (let index = 0; index < numbers.length; index+=1) {
    sum+=numbers[index];
}
console.log(sum)

let average = 0;
for (let index = 0; index < numbers.length; index+=1) {
    average+=numbers[index] / numbers.length;
}
console.log(average)


if(average > 20){
    console.log('Valor maior que 20')
}else{
    console.log('Valor menor ou igual a 20')
}


let maior = 0;
for (let index = 0; index < numbers.length; index+=1) {
    if(numbers[index] > maior){
        maior = numbers[index]
    }
    
}
console.log(maior)


let oddNumbers = []
for (let index = 0; index < numbers.length; index+=1) {
    if(numbers[index] % 2 == 1){
        oddNumbers.push(numbers[index])
    }
}
console.log(oddNumbers.length)

if(oddNumbers === 0){
    console.log('Nenhum valor impar encontrado')
}else{
    console.log(oddNumbers);
}


let menor = numbers[0];
for (let index = 0; index < numbers.length; index+=1) {
    if(numbers[index] < menor){
        menor = numbers[index]
    }
    
}
console.log(menor)