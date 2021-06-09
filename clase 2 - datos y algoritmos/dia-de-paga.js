/* En una pizzeria requieren un programa que calcule cuanto cobraran neto los repartides al
final del dia (Todos cobran igual)
Se tienen los siguientes datos obligatorios
repartidores (Cantidad de repartidores, puede ser cualquier numero entero)
esFeriado (true si es Feriado, false si no)
gananciaDelDia (Cuanto recaudo la pizzeria para distribuir a los empleados)
porcentajeParaSueldos (Un porcentaje de gananciaDelDia)
sueldoNetoDeRepartidor (Cuanto gana en bolsillo el repartidor)
gananciaDelComercioFinal (Cuanto gana el comercio una vez pagados los sueldos y
demas)
Se sabe que:
En feriados: porcentajeParaSueldos es del 80% de gananciaDelDia mientras que en
dias normales, es del 65% */

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


