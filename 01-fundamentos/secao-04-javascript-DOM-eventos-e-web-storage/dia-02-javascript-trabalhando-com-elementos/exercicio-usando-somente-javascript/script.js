const accessingElements = document.getElementById('elementoOndeVoceEsta');

const father = accessingElements.parentElement;
father.style.color = 'red';

const sonsFirstChild = accessingElements.firstElementChild;
sonsFirstChild.innerText = 'primeiroFilhoDoFilho';

const firstSon = father.firstElementChild;

const firstSon2 = accessingElements.previousElementSibling;

const textElement = accessingElements.nextSibling;

const thirdSon = accessingElements.nextElementSibling;

const thirdSon2 = father.lastElementChild.previousElementSibling;