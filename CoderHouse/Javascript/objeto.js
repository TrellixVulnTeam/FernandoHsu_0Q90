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
        console.log("Tus puntos actuales son: " + this.puntos);
    }
    mostrarPuntos (){
        console.log("Tus puntos actuales son: " + this.puntos);
    }
}

 const usuarios = [];
 var id = 0;

function agregarUsuario(Nombre,Puntos,Liga){
    id += 1;
    usuarios.push(new usuario(id,Nombre,Puntos,Liga));
}

function mostrarUsuarios() {
    for (let i = 0; i < usuarios.length; i++) {
        console.log(usuarios[i].id + " - " + usuarios[i].nombre);
    }
}



