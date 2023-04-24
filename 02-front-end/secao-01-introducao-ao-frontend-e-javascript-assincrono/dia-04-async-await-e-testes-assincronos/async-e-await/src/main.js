import { fetchApi } from "./api.js";
import { renderCep } from "./dom.js";

const inputForm = document.querySelector('input');
const buttonForm = document.querySelector('button');

async function handleSearch(event){
    event.preventDefault();
    const result = await fetchApi(inputForm.value);
    result.toString()
    renderCep(result)
}

buttonForm.addEventListener('click', handleSearch);


