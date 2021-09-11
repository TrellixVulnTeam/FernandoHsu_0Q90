let tablaRanking = document.createElement("h2");
tablaRanking.innerHTML = "Este es el Ranking Actual Ordenado por ID"; 
document.body.appendChild(tablaRanking);

for (const usuario of usuarios){
    let jugador = document.createElement("div");
    jugador.innerHTML = `ID: ${usuario.id} | Nombre: ${usuario.nombre} | Liga ${usuario.liga} | Puntaje: ${usuario.puntos}`;
    document.body.appendChild(jugador);
}