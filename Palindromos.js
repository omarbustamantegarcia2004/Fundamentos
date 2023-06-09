// el siguiente programa debera leer una frase aleatoria y debera verificar si es palindromo o no.
function polindrome (frase) { 
    frase = frase.toLowerCase().replace(/\s/g, '');
      let fraseOriginal = frase;
       frase = frase.split('').reverse().join('');
       if(frase === fraseOriginal){
        return true;
       } else {
           return false;
            
       }
        
      }
       
       // verficar si las siguientes frases son palindromos
      console.log(polindrome("eye"));
      console.log(polindrome("mundo"));
      // imprimir la primera letra de la frase 
      console.log("eye"[0]);
      // imprimir la primera letra de la mitad de la frase
      console.log("mundo"[2]);