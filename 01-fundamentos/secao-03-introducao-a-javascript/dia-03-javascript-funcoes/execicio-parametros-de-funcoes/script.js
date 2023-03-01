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
console.log(addCustomers('Daniele'));


function removeCustomers(customers) {
    let customerFound = false; 
    if (typeof customers === 'string') {
        for (let index = 0; index < clientesTrybeBank.length; index += 1) {
            if (customers === clientesTrybeBank[index]) {
                clientesTrybeBank.splice(index, 1);
                customerFound = true; 
                return 'Cliente excluída(o) com sucesso.';
            }
        }
    } else {
        return 'O parâmetro passado deve ser do tipo "string"';
    }
}
console.log(removeCustomers('Gus'))
console.log(clientesTrybeBank) 

