export async function fetchApi(cep) {
    try {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`) 
    const data = await result.json()
    return data
    } catch(error) {
        return error.message
    }

} 
/* 
export const fetchApi = (cep) => {
    const result = fetch(`https://viacep.com.br/ws/${cep}/json/`) 
    .then((resp)=> resp.json())
    .then((dados) => {
        return dados
        
    });
    return result 
}  */



