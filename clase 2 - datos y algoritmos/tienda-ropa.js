var precioDePrenda = 5500;
var porcentajeDeAumento = 25;
var precioFinal;

precioFinal = (precioDePrenda * porcentajeDeAumento) / 100 + precioDePrenda;

if (precioFinal >= 4000){
    console.log("Precio excedido: " + precioFinal)
} else {
    console.log("Precio final: " + precioFinal);
}