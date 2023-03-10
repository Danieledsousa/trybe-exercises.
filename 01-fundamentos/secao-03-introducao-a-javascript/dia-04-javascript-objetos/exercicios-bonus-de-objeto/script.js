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

function objectValue(obj) {
    return Object.values(obj);
}
console.log(objectValue(lesson3))

const allLessons = Object.assign({}, { 
    lesson1: lesson1, 
    lesson2: lesson2, 
    lesson3: lesson3, 
});
console.log(allLessons);

function getNumberOfStudents(obj) {
    let sum = 0;
    let key = Object.keys(obj);
    for(let index in key){
        sum+= obj[key[index]].numeroEstudantes;
    }
    return sum
}
console.log(getNumberOfStudents(allLessons));

function keyPosition(obj, number) {
    return Object.values(obj)[number];
}
console.log(keyPosition(lesson2 , 2));

function verifyPair(obj, key, value) {
    let entries = Object.entries(obj);
    let isEqual = false;
    for (let index in entries) {
        if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
    }
    return isEqual;
}
console.log(verifyPair(lesson3,'materia','História'));