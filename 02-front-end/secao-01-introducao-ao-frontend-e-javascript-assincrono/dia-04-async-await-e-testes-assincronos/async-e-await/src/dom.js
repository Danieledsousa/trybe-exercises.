const content = document.getElementById('resultado');

export function renderCep(data) {
    content.textContent = `${JSON.stringify(data, undefined, 2)}`
}