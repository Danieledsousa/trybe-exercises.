const numbers = [19, 21, 30, 3, 45, 22, 15];

const divisibleNumbers = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
console.log(divisibleNumbers);


const names = ['João', 'Irene', 'Fernando', 'Maria'];

const fiveLetter = names.find((name) => name.length === 5);
console.log(fiveLetter);