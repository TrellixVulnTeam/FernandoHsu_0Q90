
// ------------------------------ Variables ------------------------------
const usuarios = [];
let id = 0;
let nombreLiga = "";

// ------------------------------ Buscar datos previos ------------------------------
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

if (localStorage.getItem("IdCount") != null) {
    id = parseInt(localStorage.getItem("IdCount"));

    for (let i = 1 ; i <= id ; i++){
        const usuario = JSON.parse(localStorage.getItem(i));
        usuarios.push(usuario);
    }
}


// ------------------------------ Tabla ------------------------------

let tablaRanking = document.createElement("div");
tablaRanking.className = "tabble"; 
document.body.appendChild(tablaRanking);
for (const usuario of usuarios){
    let jugador = document.createElement("div");
    jugador.innerHTML = `ID: ${usuario.id} | Nombre: ${usuario.nombre} | Liga ${usuario.liga} | Puntaje: ${usuario.puntos}`;
    let element = document.getElementById("table");
    element.appendChild(jugador);
}

// ------------------------------ Clases ------------------------------
class usuario{
    constructor(id,nombre,puntos,liga){
        this.id = id;
        this.nombre = nombre;
        this.puntos = puntos;
        this.liga = liga;
    }
}

// ------------------------------ Funciones ------------------------------
function agregarUsuario(Nombre,Puntos,Liga){  
    id += 1;  
    guardarLocal("IdCount",id); 
    usuarios.push(new usuario(id,Nombre,Puntos,Liga));
    guardarLocal(id, JSON.stringify(new usuario(id,Nombre,Puntos,Liga)));
}

function mostrarUsuarios() {
    if (usuarios) {
      let listaUsuarios = usuarios.map((usuario) => {return `${usuario.id} - ${usuario.nombre}`; });
      return listaUsuarios.join('\n');
    } else {
      return "Debe agregar mínimo un usuario primero.";
    }
  }

function sumarPuntos(id,cantidad){
    if (usuarios[id].liga == 1){
        usuarios[id].puntos = usuarios[id].puntos + (15*cantidad);
    } else if (usuarios[id].liga == 2){
        usuarios[id].puntos = usuarios[id].puntos + (10*cantidad);
    } else if (usuarios[id].liga == 3){ 
        usuarios[id].puntos = usuarios[id].puntos + (5*cantidad);
    }
    guardarLocal(id + 1, JSON.stringify(usuarios[id]))
    alert(`Los puntos actuales de ${usuarios[id].nombre} son : ${usuarios[id].puntos}`);
}

function mostrarPuntos(id){
    alert(`Los puntos actuales de ${usuarios[id].nombre} son : ${usuarios[id].puntos}`);
}

// ------------------------------ Main ------------------------------

function buttonOne(){
    let Nombre = prompt("Ingrese el nombre del usuario:");
    let Puntos = parseInt(prompt("Ingrese la cantidad de puntos iniciales del usuario:"));
    let Liga =  parseInt(prompt("Ingrese la liga actual del usuario: \n1_Oro \n2_Plata \n3_Bronce"));
    agregarUsuario(Nombre,Puntos,Liga);
    switch (Liga){
            case 1: nombreLiga = "Oro"; break;
            case 2: nombreLiga = "Plata"; break;
            case 3: nombreLiga = "Bronce"; break;
        }
    alert("El usuario ha sido creado exitosamente. \nNombre: " + Nombre + "\nPuntos: " + Puntos + "\nLiga: " + nombreLiga)
} 
bu
function buttonTwo(){
sumarPuntos(parseInt(prompt("Ingrese el ID del usuario:")) - 1 , parseInt(prompt("Ingrese la cantidad de puntos a agregar:")))
}

function buttonThree(){
    mostrarPuntos(parseInt(prompt("Ingrese el ID del usuario: ")) - 1);
}









