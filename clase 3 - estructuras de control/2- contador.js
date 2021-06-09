/* Sea una variable numerica entera y positiva 'limite':
Recorrer desde 0 hasta limite
Imprimir al final del programa la cantidad de numeros impares
Imprimir al final del programa la cantidad de numeros menores de limite / 2 */

let limite = 10;
let cantImpares = 0;
let cantMenoresLimite = 0;

for (let i = 0; i <= limite; i++){
    if (i % 2 !== 0){
        cantImpares++;
    }
    if(i < limite){
        cantMenoresLimite++;
    }
}

console.log("La cantidad de números impares es " + cantImpares);
console.log("La cantidad de números menores es " + cantMenoresLimite/2);