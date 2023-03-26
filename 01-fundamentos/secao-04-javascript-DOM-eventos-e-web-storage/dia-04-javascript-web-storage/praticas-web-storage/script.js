const backgroundColorBtn = document.querySelectorAll('#background-color>button');
const colorFont = document.querySelectorAll('#font-color>button');
const fontSize = document.querySelectorAll('#font-size>button');
const lineHeight = document.querySelectorAll('#line-height>button');
const fontFamily =document.querySelectorAll('#font-family>button');
const main = document.querySelector('main');

const changeBackgroundColor = (event) => {
    const color = event.target.innerText;
    main.style.background = color; 
    localStorage.setItem('backgroundColor', color);
}

const createEventBackground = () => {
    for (let index = 0; index < backgroundColorBtn.length; index += 1) {
        const curButton = backgroundColorBtn[index];
        curButton.addEventListener('click', changeBackgroundColor)
    }
}

const changeFontColor = (event) => {
    const fontColor = event.target.innerText;
    main.style.color = fontColor; 
    localStorage.setItem('fontColor', fontColor);
}

const creatEventFontColor = () => {
    for (let index = 0; index < colorFont.length; index += 1) {
        const curButton = colorFont[index];
        curButton.addEventListener('click', changeFontColor)
    } 
}

const changeFontSize = (event) => {
    const fontSize = event.target.innerText;
    main.style.fontSize = fontSize;
    localStorage.setItem('fontSize',fontSize);
}

const createEventFontSize = () => {
    for (let index = 0; index < fontSize.length; index +=1) {
        const curButton = fontSize[index];
        curButton.addEventListener('click',changeFontSize)
    }
}

const changeLineHeight = (event) => {
    const lineHeight = event.taget.innerText;
    main.style.lineHeight = lineHeight;
    localStorage.setItem('lineHeight', lineHeight)
}

const createEventlineHeight = () => {
    for (let index = 0; index < lineHeight.length; index += 1) {
        const curButton = lineHeight[index];
        curButton.addEventListener('click',changeLineHeight)
    }
}

const changeFontFamily = (event) => {
    const fontFamily = event.target.innerText;
    main.style.fontFamily = fontFamily;
    localStorage.setItem('fontFamily',fontFamily);
}

const createEventFontFamily = () => {
    for (let index = 0; index < fontFamily.length; index += 1) {
        const curButton = fontFamily[index];
        curButton.addEventListener('click',changeFontFamily)
    }
}

createEventFontFamily();
createEventlineHeight();
createEventFontSize();
creatEventFontColor();
createEventBackground();


window.onload = () => {
    const backgroundColor = localStorage.getItem('backgroundColor');
    main.style.background = backgroundColor;
    const fontColor = localStorage.getItem('fontColor');
    main.style.color = fontColor;
    const fontSize = localStorage.getItem('fontSize');
    main.style.fontSize = fontSize;
    const lineHeight = localStorage.getItem('lineHeight');
    main.style.lineHeight = lineHeight;
    const fontFamily = localStorage.getItem('fontFamily')
    main.style.fontFamily = fontFamily;
}