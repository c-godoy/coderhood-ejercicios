var huevo = 3;
var barraChocolate = 1;
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