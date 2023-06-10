function solveQuadraticEquation(a, b, c) {
    // Calcula el discriminante
    var discriminante = b ** 2 - 4 * a * c;
  
    // Comprueba si existen soluciones reales
    if (discriminante >= 0) {
      // Calcula las soluciones
      var x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      var x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
  
      // Devuelve las soluciones
      return [x1, x2];
    } else {
      // No hay solucion
      return "No existen solucion.";
    }
  }
  
  // resultado final
  var a = 1;
  var b = -6;
  var c = 9;
  
  var solutions = solveQuadraticEquation(a, b, c);
