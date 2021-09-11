

var menu = parseInt(prompt("Seleccione la funcionalidad: \n1_Calcular promedio. \n0_Salir"))

while (menu != 0){
    switch (menu) {
        case 1:
            let materiasTotal = preguntarMaterias();
            let notaTotal = 0;
            let nota = 0;
            for(let i = 1; i <= materias ; i++){
                notaTotal = notaTotal + preguntarNota(i);
            }
            alert("Tu promedio de nota es de: " + calcularProm(notaTotal,materias));
            break;
        
        case 0:
            break;  
    }
    menu = parseInt(prompt("Seleccione la funcionalidad: \n1_Calcular promedio. \n0_Salir"));
}

function preguntarNota(i){
    nota = parseInt(prompt("Ingrese la nota de la materia " + i));
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