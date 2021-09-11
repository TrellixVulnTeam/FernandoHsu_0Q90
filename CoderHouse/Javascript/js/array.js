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