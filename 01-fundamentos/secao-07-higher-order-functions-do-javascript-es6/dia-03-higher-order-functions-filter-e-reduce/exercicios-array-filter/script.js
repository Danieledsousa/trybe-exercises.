const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];
const filtraStrings = dados.filter((dado) => typeof dado === 'string');
console.log(filtraStrings);

const filtraNumbers = dados.filter((dado) => typeof dado !== 'string');
console.log(filtraNumbers);

const listaNumeros = [10, 20, 30, 40];
const numerosMaiores20 = listaNumeros.filter((number) => number > 20);
console.log(numerosMaiores20);

/* -------- */
// Utilizando filter em objetos:
const notaEstudantes = [
    {
        nome: 'Joyce',
        nota: 100
    },
    {
        nome: 'Ronald',
        nota: 50
    },
    {
        nome: 'Joel',
        nota: 80
    },{
        nome: 'Ana',
        nota: 90
    },
    {
        nome: 'Carol',
        nota: 70
    }
];

const pessoasAprovadas = notaEstudantes.filter((nota) => nota.nota >= 80);
console.log(pessoasAprovadas);