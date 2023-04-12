const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
];
emailListInData.forEach((email) => {
    console.log(`O email ${email} está cadastrado em nosso banco de dados!.`)
})
 /* -------------------------------------------------- */

/* function sum(arr) {
  let result = 0;
  for(let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}; */
const sumu = [1,-2,3,-4,5,6];
let soma = 0;

sumu.forEach((element) => soma+= element);
console.log(soma)

function sum(arr) {
    let result = 0;
    arr.forEach((element) => result+= element)
    return result;
  };
  console.log(sum(sumu))



function findMax(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
      if(arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
}
console.log(findMax(sumu))

let max = sumu[0]
sumu.forEach((element) => {
    element > max 
    max = element
})
console.log(max)

function areAllPositive(arr) {
    let allPositive = true;
    arr.forEach((num) => {
      if(num < 0) {
        allPositive = false;
      }
    });
    return allPositive;
  }
  console.log(areAllPositive(sumu))

  let allPositive = true;
sumu.forEach((element) =>  {
    element < 0
    allPositive = false
})

console.log(allPositive)

const emailListInData2 = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];

emailListInData2.forEach((email) => console.log(`O email ${email} está cadastrado em nosso banco de dados!.`))

const forEachFor = (key, value) => data.cards.forEach((card) => card[key] = value)
console.log(forEachFor('trybe', 'xabalu'))
