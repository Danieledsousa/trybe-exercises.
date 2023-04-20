
const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_');
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (functionCallback) => {
  const employees = {
    id1: functionCallback('Pedro Guerra'),
    id2: functionCallback('Luiza Drumond'),
    id3: functionCallback('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employeeGenerator));

/* ----------------------- */
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//exercise 1
const expectedResult = 'Stephen King';
const authorBornIn1947 = () => books.find((book) => book.author.birthYear === 1947).author.name
console.log(authorBornIn1947())

//exercise 2
const expectedResult2 = 'Duna';
const smallerName = () => {
  let nameBook = books[0].name
  books.forEach((book) => {
    if(book.name.length < nameBook.length){
      nameBook = book.name
    }
  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
console.log(smallerName())

//exercise 3
const expectedResult3 = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

const getNamedBook = () => books.find((book) => book.name.length === 26);

console.log(getNamedBook())

//exercise 4
const expectedResult4 = false;

function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear >= 1901 && book.author.birthYear < 2000)
}
console.log(everyoneWasBornOnSecXX());


//exercise 5
const expectedResult5 = true;

const someBookWasReleaseOnThe80s = () => {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990)
}
console.log(someBookWasReleaseOnThe80s())

//exercise 6
const expectedResult6 = false;

const authorUnique = () => {
  books.every((book) => 
    !books.some((bookSome) =>
    (bookSome.author.birthYear === book.author.birthYear)
    && (bookSome.author.name !== book.author.name)));

  }
