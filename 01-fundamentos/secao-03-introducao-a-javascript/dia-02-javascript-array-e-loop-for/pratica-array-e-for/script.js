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
console.log(menor);


let array = []
for (let index = 1; index <= 25; index+=1) {
    array.push(index)
}
console.log(array)


for (let index = 0; index < numbers.length; index+=1) {
    console.log(numbers[index]/2)
}

let result = 1
for(let index = 10; index>0; index-=1){
    result = (result*index)
}
console.log(result)


let word = 'tryber';
let result2  = '';
for (let index = word.length - 1; index >= 0; index-=1) {
    result2 += word[index]
    
}
console.log(result2);


let array2 = ['java', 'javascript', 'python', 'html', 'css'];
let bigger = '';
let smaller = array2[0];

for (let index = 0; index < array2.length; index+=1) {
    if(array2[index].length > bigger.length){
        bigger = array2[index]
    }
    
}
console.log(bigger)

for (let index = 0; index < array2.length; index+=1) {
    if(array2[index].length < smaller.length){
        smaller = array2[index]
    }
    
}
console.log(smaller);


