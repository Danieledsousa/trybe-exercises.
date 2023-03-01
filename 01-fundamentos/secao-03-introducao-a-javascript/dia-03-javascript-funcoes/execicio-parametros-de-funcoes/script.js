let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function addCustomers(customers) {
    for (let index = 0; index < clientesTrybeBank.length; index+=1) {
        if(typeof customers === 'string'){
            clientesTrybeBank.push(customers)
            return clientesTrybeBank
        }else{
            return 'Esse dado não é uma string'
        }
    }
}
console.log(addCustomers('Daniele'))