//let selector = parseInt(prompt("Seleccione la función a utilizar: \n1)Calcular promedio de notas \n0) Salir"));
let materiasTotal = preguntarMaterias()
let notaTotal = 0;
let nota = 0;

for(let i = 1; i <= materias ; i++){
    notaTotal = notaTotal + preguntarNota(i);
}

alert("Tu promedio de nota es de: " + calcularProm(notaTotal,materias));
console.log(notaTotal);






function preguntarNota(i){
    nota = parseInt(prompt("Ingrese la nota de la materia " + i));
    console.log(nota);
    return nota;
}

function calcularProm(notaTotal,cantMaterias){
    promedio = notaTotal / cantMaterias;
    return promedio;
}

function preguntarMaterias(){
    materias = parseInt(prompt("Cuántas materias tenés"));
    return materias;
}