class usuario{
    constructor(id,nombre,puntos,liga){
        this.id = id
        this.nombre = nombre;
        this.puntos = puntos;
        this.liga = liga;
    }
    sumarPuntos(cantidad){
        if (this.liga == 1){
            this.puntos = this.puntos + (15*cantidad);
        } else if (this.liga == 2){
            this.puntos = this.puntos + (10*cantidad);
        } else if (this.liga == 3){
            this.puntos = this.puntos + (5*cantidad);
        }
        alert("Los puntos actuales de " + this.nombre + "son :" + this.puntos);
    }
    mostrarPuntos (){
        alert("Los puntos actuales de " + this.nombre + "son :" + this.puntos);
    }
}

function agregarUsuario(Nombre,Puntos,Liga){
    id += 1;
    usuarios.push(new usuario(id,Nombre,Puntos,Liga));
}

function mostrarUsuarios() {
    mostrarUsuario = "";
    if ( usuarios.length != 0){
        for (let i = 0; i < usuarios.length; i++) {
            mostrarUsuario += usuarios[i].id + " - " + usuarios[i].nombre + "\n";
        }
        return mostrarUsuario;
    } else {
        mostrarUsuario = "Debe agregar mínimo un usuario primero.";
        return mostrarUsuario;
    }
}

const usuarios = [];
var id = 0;
var menu = parseInt(prompt("Seleccione la acción a realizar: \n1_Agregar Usuario. \n2_Mostrar usuarios. \n3_Sumar Puntos. \n4_Mostrar Puntos. \n0_Salir."))
var nombreLiga = "";

while (menu != 0){
    switch (menu){

        case 1: //Agregar Usuario
        var Nombre = prompt("Ingrese el nombre del usuario:");
        var Puntos = parseInt(prompt("Ingrese la cantidad de puntos iniciales del usuario:"));
        var Liga =  parseInt(prompt("Ingrese la liga actual del usuario: \n1_Oro \n2_Plata \n3_Bronce"));
        agregarUsuario(Nombre,Puntos,Liga);
        switch (Liga){
            case 1: nombreLiga = "Oro"; break;
            case 2: nombreLiga = "Plata"; break;
            case 3: nombreLiga = "Bronce"; break;
        }
        alert("El usuario ha sido creado exitosamente. \nNombre: " + Nombre + "\nPuntos: " + Puntos + "\nLiga: " + nombreLiga)
        break;

        case 2: //Mostrar usuarios
        alert("Listado de usuarios ordenados por ID: \n" + mostrarUsuarios());
        break;

        case 3: //Sumar Puntos 
        idUsuario = parseInt(prompt("Ingrese el ID del usuario: ")) - 1;
        usuarios[idUsuario].sumarPuntos(agregarPuntos = parseInt(prompt("Ingrese la cantidad de puntos a agregar:")));
        break;

        case 4: //Mostrar Puntos
        idUsuario = parseInt(prompt("Ingrese el ID del usuario: ")) - 1;
        usuarios[idUsuario].mostrarPuntos();

    }
    menu = parseInt(prompt("Seleccione la acción a realizar: \n1_Agregar Usuario. \n2_Mostrar usuarios. \n3_Sumar Puntos. \n4_Mostrar Puntos. \n0_Salir."))
}

