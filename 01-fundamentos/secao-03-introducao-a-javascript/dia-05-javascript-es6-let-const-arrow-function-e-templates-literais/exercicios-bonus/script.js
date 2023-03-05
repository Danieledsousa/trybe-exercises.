function substituaX(nome){
    const frase = 'Tryber x aqui!';
    let result = frase.split('')
    let final = []
    for(let index = 0; index < result.length; index +=1){
        if(result[index]=="x"){
            final+=nome
        }else{
            final+=result[index]
        } 
    }
    return final
}
console.log(substituaX('Bebeto'))