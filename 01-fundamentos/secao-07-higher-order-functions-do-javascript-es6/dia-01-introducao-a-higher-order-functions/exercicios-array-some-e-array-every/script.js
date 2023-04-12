const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
    return arr.some((listName) =>  listName === name);
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));


const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, number) => {
    return arr.every((allName) => allName.age >= number)
  }
  
  console.log(verifyAges(people, 18));
  console.log(verifyAges(people, 14));


  /* ------------------------------------------------ */
//some
  const pessoas = [
  { nome: 'Ana', cargo: 'Analista' },
  { nome: 'João', cargo: 'Gerência' },
  { nome: 'Aline', cargo: 'Analista' },
  { nome: 'Joana', cargo: 'Gerência' },
];

const resultPessoas = pessoas.some((element) => element.cargo.toLowerCase() === 'gerência')
console.log(resultPessoas)

const resultPessoas2 = pessoas.some((element) => element.cargo.toLowerCase() === 'product owner' )
console.log(resultPessoas2)


const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('X', listNames)); // false


const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName2 = (arr, name) => arr.some((element) => element === name )

console.log(hasName2(names2, 'Ana'));
console.log(hasName2(names2, 'Pedro'));


const propSome = (prop, value) => data.cards.some((card) => card[prop] > value)

console.log(propSome('atk', 4499))
/* -------------------------------------------------- */
//every
const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado'); // false

console.log(verifyGrades);


const people2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges2 = (arr , age) => arr.every((element) => element < age )

console.log(verifyAges2(people2, 18));
console.log(verifyAges2(people2, 14));

const everyVerify = (prop) => data.cards.every((card) => card[prop] !== undefined)
console.log(everyVerify('name'))
