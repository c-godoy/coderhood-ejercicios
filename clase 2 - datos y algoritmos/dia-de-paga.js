var repartidores = 8;
var esFeriado = false;
var gananciaDelDia = 30000;
var porcentajeParaSueldos;
var sueldoNetoRepartidor;
var gananciaComercioFinal;

if (esFeriado){
    porcentajeParaSueldos = 0.8 * gananciaDelDia;
} else {
    porcentajeParaSueldos = 0.65 * gananciaDelDia;
}

sueldoNetoRepartidor = porcentajeParaSueldos / repartidores;
gananciaComercioFinal = gananciaDelDia - porcentajeParaSueldos;

console.log("El sueldo neto para cada repartidor es: " + sueldoNetoRepartidor);
console.log("Una vez pagados los sueldos, la pizzeria gana " + gananciaComercioFinal);


