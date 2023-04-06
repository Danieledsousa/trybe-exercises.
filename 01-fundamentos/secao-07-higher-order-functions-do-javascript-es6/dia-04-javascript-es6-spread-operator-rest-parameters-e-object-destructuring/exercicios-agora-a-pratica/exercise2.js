// exercise 2
const sum = (...args) => {
    let soma = 0;
    args.forEach((element) => soma+= element )
    return soma;
}
console.log(sum(4,5,6));