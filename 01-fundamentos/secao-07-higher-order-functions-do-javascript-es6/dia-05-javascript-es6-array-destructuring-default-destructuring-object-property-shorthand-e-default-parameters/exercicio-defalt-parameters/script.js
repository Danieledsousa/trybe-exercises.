const multiply = (number, value = 1) => number * value

console.log(multiply(8));


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((element,index) => {
    numbers[index] = numbers[index] * 2 // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
  });
console.log(numbers)