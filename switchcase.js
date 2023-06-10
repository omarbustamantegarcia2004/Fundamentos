function jugarRocaPapelTijeras(jugador1, jugador2) {
    // Convierte las opciones a minúsculas para hacer la comparación insensible a mayúsculas
    jugador1 = jugador1.toLowerCase();
    jugador2 = jugador2.toLowerCase();
  
    // Verifica si es un empate
    if (jugador1 === jugador2) {
      return "Empate";
    }
  
    // Determina el resultado según las reglas del juego
    switch (jugador1) {
      case "roca":
        if (jugador2 === "tijeras") {
          return "Roca rompe tijeras, gana el jugador 1";
        } else {
          return "Papel cubre roca, gana el jugador 2";
        }
      case "papel":
        if (jugador2 === "roca") {
          return "Papel cubre roca, gana el jugador 1";
        } else {
          return "Tijeras cortan papel, gana el jugador 2";
        }
      case "tijeras":
        if (jugador2 === "papel") {
          return "Tijeras cortan papel, gana el jugador 1";
        } else {
          return "Roca rompe tijeras, gana el jugador 2";
        }
      default:
        return "Opción inválida. Ingresa 'roca', 'papel' o 'tijeras'.";
    }
  }
  
  // Ejemplo de uso
  var jugador1 = "roca";
  var jugador2 = "tijeras";
  
  var resultado = jugarRocaPapelTijeras(jugador1, jugador2);
  console.log(resultado); // Roca rompe tijeras, gana el jugador 1s
