let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers)

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multipliedNumbers = [];
for (let index = 0; index < numbers2.length; index+=1) {
    if (index < numbers2.length - 1) {
        multipliedNumbers.push(numbers2[index] * numbers2[index+1]);
    } else {
        multipliedNumbers.push(numbers2[index] * numbers2[index]);
    }
}
console.log(multipliedNumbers)



let naturalNumber = 5;

for (let index = 0; index < naturalNumber; index+=1) {
    let squareNumber = "";
    for (let indexSquare = 0; indexSquare < naturalNumber; indexSquare+=1) {
        squareNumber += "*";
    }
    console.log(squareNumber);
}



for (let index = 0; index < naturalNumber; index+=1) {
    let triangleNumber = "";
    for (let indexTriangle = 0; indexTriangle <= index; indexTriangle+=1) {
        triangleNumber += "*";
    }
    console.log(triangleNumber);
}