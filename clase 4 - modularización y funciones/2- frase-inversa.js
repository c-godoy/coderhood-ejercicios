/* Hacer una función que reciba una serie de palabras separadas por espacios y que imprima la misma frase pero en orden inverso. */
function invertir(frase) {
    let inverso = frase.split("").reverse().join("");
    console.log(inverso);
  }
  
  invertir("hola amigo");