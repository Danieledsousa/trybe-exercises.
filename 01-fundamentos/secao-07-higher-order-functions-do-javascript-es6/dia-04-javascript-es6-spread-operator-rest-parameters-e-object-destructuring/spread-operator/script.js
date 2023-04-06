// Faça uma lista com as suas frutas favoritas
const specialFruit = ['uva', 'manga', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['maçã', 'creme de leite', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const newArray = [...fruit, ...additional];
  return newArray;
};

console.log(fruitSalad(specialFruit, additionalItens));