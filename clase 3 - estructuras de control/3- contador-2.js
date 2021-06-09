/* Sea una variable numerica entera y positiva 'limite':
Recorrer desde 0 hasta que se cumpla una de las siguientes condiciones:
Se llega a limite
La cantidad de numeros pares desde 0 hasta limite es mayor a una variable
anteriormente creada llamada final
Al final del recorrido imprimir la cantidad de numeros multiplos de 3
Al final del recorrido imprimir la suma de todos los numeros entre el 0 hasta que se
termine el recorrido */

let limite = 10;
let final = 11;
let aux = 0;
let pares = 0;
let multiplosTres = 0;
let suma = 0;

while (aux <= 10 && pares <= final){
    suma = suma + aux;

    if (aux % 2 === 0){
        pares++;
    }

    if (aux % 3 === 0){
        multiplosTres++;
    }

    aux++;
}

console.log("La cantidad de números múltiplos de tres es " + multiplosTres);
console.log("La suma de todos los números es " + suma);
