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


let naturalNumber2 = 5;

for (let index = 1; index <= naturalNumber2; index+=1) {
    let invertedTriangleNumber = "";
    for (let indexInvertedTriangle = 1; indexInvertedTriangle <= naturalNumber2; indexInvertedTriangle +=1) {
        if(indexInvertedTriangle <= naturalNumber2 - index){
            invertedTriangleNumber += " ";
        }else{
            invertedTriangleNumber += "*";
        }
    }
    console.log(invertedTriangleNumber);
} 


let naturalNumber3 = 5;  

for (let index = 0; index < naturalNumber3; index+=1) {
    let pyramid = "";
    for (let indexPyramid = 0; indexPyramid < naturalNumber3 - index - 1; indexPyramid+=1) {  // itera de 0 a n-i-2
        pyramid += " ";  
    }
    for (let indexPyramid = 0; indexPyramid < 2 * index + 1; indexPyramid+=1) {  // itera de 0 a 2*i
        pyramid += "*";  
    }
    console.log(pyramid); 
}







