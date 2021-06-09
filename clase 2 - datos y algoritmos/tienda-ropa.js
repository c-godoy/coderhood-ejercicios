/* Emanuel quiere cocinar galletitas y quiere un programa que lo ayude a saber que debe
comprar y en caso que cuente con todos los ingredientes, informar que puede cocinar las
galletas. La receta pide los siguientes ingredientes
3 huevos
1 barra de chocolate
0.5 kilos de harina
5 cucharadas de azucar
Los ingredientes que tiene Ema tienen que ser variables al inicio del programa que sean
faciles de editar */

var precioDePrenda = 5500;
var porcentajeDeAumento = 25;
var precioFinal;

precioFinal = (precioDePrenda * porcentajeDeAumento) / 100 + precioDePrenda;

if (precioFinal >= 4000){
    console.log("Precio excedido: " + precioFinal)
} else {
    console.log("Precio final: " + precioFinal);
}