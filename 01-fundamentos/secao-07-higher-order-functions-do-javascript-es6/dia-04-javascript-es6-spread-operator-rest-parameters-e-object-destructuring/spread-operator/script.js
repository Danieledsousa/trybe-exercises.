/* const variavel = [...arrayOriginal, itemParaAdicionar]; */

// array original
const items = ['Camiseta', 'Carregador', 'Chinelo'];

// nova variável
const newItems = [...items, 'Meia'];
console.log(newItems);

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);


//Utilizando spread em objetos:
const product = {
    id: 1,
    name: 'Camiseta',
};
const newProduct = {...product, price: 45};
console.log(newProduct);

const product2 = {
    id: 1,
    name: 'Camiseta',
};

const productPrice = {
  price: 23
}

const productAlterado = {...product2, ...productPrice};
console.log(productAlterado);

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['manga', 'banana', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['laranja', 'creme de leite', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
    const frutas = [...fruit, ...additional];
    return frutas
};

console.log(fruitSalad(specialFruit, additionalItens));
