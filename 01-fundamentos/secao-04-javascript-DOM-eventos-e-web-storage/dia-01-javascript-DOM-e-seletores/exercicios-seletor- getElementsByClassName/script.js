const paragraph = document.getElementById('paragraph');
paragraph.style.color = 'red';

const paragraphClass = document.getElementsByClassName('paragraphClass');
paragraphClass[0].innerText = 'Mudando o paragrafo atraves do seletor getElementByClassName.';
paragraphClass[0].style.color = 'orange';

const retrieveSubtitleClass = document.getElementsByClassName('subtitleClass');
retrieveSubtitleClass[0].style.color = 'green';