/* Hacer una función que reciba un numero y que retorne verdadero si es par o falso en caso contrario. */

function esPar(numero){
    if (numero % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

console.log(esPar(2));