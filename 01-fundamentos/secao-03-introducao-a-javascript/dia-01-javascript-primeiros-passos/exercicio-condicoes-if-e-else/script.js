let note = 88;

if (note >= 80) {
    console.log("Parabéns, você faz parte do grupo de pessoas aprovadas!");
} else if (note < 80 && note >= 60) {
    console.log("Você está na nossa lista de espera.");
} else if (note < 60) {
    console.log("Infelizmente, você reprovou.");
}
