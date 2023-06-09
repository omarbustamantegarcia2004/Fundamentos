function generarSecuencia() {
    let secuencia = [];
    let numero = 1;
  
    for (let i = 1; i <= 11; i++) {
      secuencia.push(numero);
      numero += i;
    }
  
    return secuencia.join(',');
  }
  
  // Ejemplo de uso
  const secuenciaGenerada = generarSecuencia();
  console.log(secuenciaGenerada);