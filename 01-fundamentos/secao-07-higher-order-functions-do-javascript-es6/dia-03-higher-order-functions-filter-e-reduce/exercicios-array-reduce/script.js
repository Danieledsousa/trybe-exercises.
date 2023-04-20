const array = [1,2,3,4,4]

array.reduce((acc, curr) => {

}, 0)//valor inicial

const valorItens = [1, 32, 44, 2, 3];

valorItens.reduce((acc, curr) => {
  console.log(`acumulador - acc:`, acc);
  console.log(`valorAtual - curr:`, curr);
}, 0);
//Como a callback não está retornando nada, o valor se torna undefined, porque ele não acumulou nenhum resultado.


valorItens.reduce((acc, curr) => {
    console.log(`acc:`, acc);
    console.log(`curr:`, curr);
    console.log('a soma atual é', acc + curr);
  
    return acc + curr;
  }, 0);


const numbers = [1, 32, 44, 2, 3];
const soma = numbers.reduce((acc,curr) => acc + curr, 30)

console.log(soma)

const numbers2 = [50, 85, -30, 3, 15];
const maior = numbers2.reduce((acc, curr) => acc < curr ? acc : curr, 0)

console.log(maior)


const numbers3 = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const pares = numbers3.reduce((acc, curr) => {
  return curr % 2 === 0 ? acc + curr : acc
})
console.log(pares)


const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const getBestClass = (acc, materia) => (acc.nota > materia.nota) ? acc : materia;

const reportBest = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getBestClass).name,
}));

console.log(reportBest(estudantes));