let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

function addShiftKey(obj, key, value) {
    obj[key] = value;
}
addShiftKey(lesson2, 'turno', 'noite');
console.log(lesson2);

function listKeys(obj) {
    return Object.keys(obj);
}
console.log(listKeys(lesson3));

function listObjectSize(obj) {
    return Object.keys(obj).length;
}
console.log(listObjectSize(lesson1));

