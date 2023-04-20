const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const sortPeopleCres = people.sort((a, b) => a.age - b.age);
const sortPeopleDecres = people.sort((a, b) => b.age - a.age) 

console.log(sortPeopleCres);
console.log(sortPeopleDecres); 

/* ------------------------------ */
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food)

const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory.sort((a, b) => a - b);
console.log(inventory);


const people12 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people12.sort((a, b) => a.age - b.age);

console.log(people12);

/* ----------------------------------------- */
//MAP
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}
console.log(fullNames);


const retornaFullnames = () => persons.map((element) => `${element.firstName} ${element.lastName}`);
console.log(retornaFullnames())

const numbers = [1, 2, 3, 4, -5];
const numbersNegatives = numbers.map((element) => element < 0 ? element : element * -1)
console.log(numbersNegatives)


const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);


const students = [
  {
    firstName: 'João',
    lastName: 'Silva',
    age: 14,
    period: 'Manhã',
    subjects: [
      { name: 'Matemática', grade: 67 },
      { name: 'Português', grade: 79 },
      { name: 'Química', grade: 70 },
      { name: 'Biologia', grade: 65 },
    ],
  },
  {
    firstName: 'Mario',
    lastName: 'Ferreira',
    age: 15,
    period: 'Tarde',
    subjects: [
      { name: 'Matemática', grade: '59' },
      { name: 'Português', grade: '80' },
      { name: 'Química', grade: '78' },
      { name: 'Biologia', grade: '92' },
    ],
  },
  {
    firstName: 'Jorge',
    lastName: 'Santos',
    age: 15,
    period: 'Manhã',
    subjects: [
      { name: 'Matemática', grade: '76' },
      { name: 'Português', grade: '90' },
      { name: 'Química', grade: '70' },
      { name: 'Biologia', grade: '80' },
    ],
  },
  {
    firstName: 'Maria',
    lastName: 'Silveira',
    age: 14,
    period: 'Manhã',
    subjects: [
      { name: 'Matemática', grade: '91' },
      { name: 'Português', grade: '85' },
      { name: 'Química', grade: '92' },
      { name: 'Biologia', grade: '90' },
    ],
  },
  {
    firstName: 'Natalia',
    lastName: 'Castro',
    age: 14,
    period: 'Manhã',
    subjects: [
      { name: 'Matemática', grade: '70' },
      { name: 'Português', grade: '70' },
      { name: 'Química', grade: '60' },
      { name: 'Biologia', grade: '50' },
    ],
  },
  {
    firstName: 'Wilson',
    lastName: 'Martins',
    age: 14,
    period: 'Manhã',
    subjects: [
      { name: 'Matemática', grade: '80' },
      { name: 'Português', grade: '82' },
      { name: 'Química', grade: '79' },
      { name: 'Biologia', grade: '75' },
    ],
  },
];
const allNameStudents = [];

for (let index = 0; index < students.length; index += 1 ) {
  if(students[index].period === 'Manhã') {
    allNameStudents.push(`${students[index].firstName} ${students[index].lastName}`)
  }
}
console.log(allNameStudents);


const arrVazio = []
students.forEach((element) => {
  if (element.period.toLowerCase() === 'manhã'){
    arrVazio.push (`${element.firstName} ${element.lastName}`)
  }
  return arrVazio
})
console.log(arrVazio);

const allNameStudents2 = students.filter((student) => (
  student.period === 'Manhã')).map((student) => `${student.firstName} ${student.lastName}`);

console.log(allNameStudents2); 

/* ---------------------------- */
const findStudent = (name, students) => {
  for (let index = 0; index < students.length; index += 1) {
    if (students[index].firstName === name) {
      return students[index];
    }
  }
};

const reportStatus = (name, students) => {
  const getStudent = findStudent(name, students);
  const report = [];
  for (let index = 0; index < getStudent.subjects.length; index += 1) {
    if (getStudent.subjects[index].grade >= 60) {
      report.push(`${getStudent.subjects[index].name} - Aprovado`);
    } else {
      report.push(`${getStudent.subjects[index].name} - Reprovado`);
    }
  }
  return report;
};

console.log(reportStatus('Natalia', students));

const findStudent2 = (name, students) => {
 const info =  students.find((student) => student.firstName === name)
 return info.subjects.map((subject) => subject.grade >= 60 ? `${subject.name} - Aprovado` : `${subject.name} - Reprovado` 
  )
}

console.log(findStudent2('Natalia', students))

/* --------------------------------- */
const arrayNumbers = [1,2,3,4,5]
let sum = 0

arrayNumbers.forEach((number) => sum += number)
console.log(sum)







