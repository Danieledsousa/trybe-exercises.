const numbers = [19, 21, 30, 3, 45, 22, 15];

const divisibleNumbers = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
console.log(divisibleNumbers);


const names = ['João', 'Irene', 'Fernando', 'Maria'];

const fiveLetter = names.find((name) => name.length === 5);
console.log(fiveLetter);


const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const musicId = musicas.find((music) => music.id === '31031685');
console.log(musicId)

/* --------------------------------------------- */

const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];
const resultadFind = idades.find((element) => element < 20)
console.log(resultadFind)

const resultFind = idades.find((element) => element > 50 );
console.log(resultFind);

 const resul = idades.find((element) => element === 33 )
 console.log(resul)


 const numbers2 = [19, 21, 30, 3, 45, 22, 15];
 const resultDivisivel = numbers2.find((element) => element % 3 === 0 && element % 5 === 0)
 console.log(resultDivisivel);

 const names2 = ['João', 'Irene', 'Fernando', 'Maria'];
 const resultNames = names2.find((element) => element.length === 5);
 console.log(resultNames);

 const musicas2 = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
const resultMusicas = musicas2.find((element) => element.id === '31031685')
console.log(resultMusicas);
 