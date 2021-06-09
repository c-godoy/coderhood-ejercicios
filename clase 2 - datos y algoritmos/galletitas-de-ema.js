var huevo = 3;
var barraChocolate = 1;
/* Una tienda de ropa desea tener un programa que le permita calcular los aumentos a sus
prendas, para eso se tienen los datos
precioDePrenda (que ronda entre los 1500 y 3000 pesos)
porcentajeDeAumento (que ronda entre el 25-100% )
precioFinal (precioDePrenda con el aumento agregado)
Ademas, implementar las siguiente funcionalidades:
El programa debe informar en pantalla el precio final
El programa debe informar en pantalla 'Precio excedido' cuando el precio final supere los
$4000 */

var harina = 0.5;
var cucharadasAzucar = 3;

if (huevo >= 3 && barraChocolate >= 1 && harina >= 0.5 && cucharadasAzucar >= 5){
    console.log("Se pueden cocinar las galletitas");
} else {
    if (huevo < 3) {
        console.log("Hay que comprar huevos");
    }
    if (barraChocolate < 1){
        console.log("Hay que comprar barras de chocolate");
    }
    if (harina < 0.5){
        console.log("Hay que comprar harina");
    }
    if (cucharadasAzucar < 5){
        console.log("Hay que comprar azúcar");
    }
}