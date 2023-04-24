export const fetchApi = (cep) => {
    const result = fetch(`https://viacep.com.br/ws/${cep}/json/`) 
    .then((resp)=> resp.json())
    .then((dados) => {
        console.log(dados)
        return dados
    });
    return result 
}




