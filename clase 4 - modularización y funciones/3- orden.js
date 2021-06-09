/* Hacer una función que reciba como parámetro tres números enteros y que lo ordene de
mayor a menor. */

function ordenar(a, b, c){
    let aux;
    let orden = [];
    if (a > b && a > c) {
        orden.push(a);
        if (b > c){
            orden.push(b, c);
        } else {
            orden.push(c, b);
        }
    }
    if (b > a && b > c){
        orden.push(b);
        if (a > c){
            orden.push(a, c);
        } else {
            orden.push(c, a);
        }
    }
    if (c > a && c > b){
        orden.push(c);
        if (b > a){
            orden.push(b, a);
        } else {
            orden.push(a, b);
        }
    }

    return orden;
}

console.log(ordenar(5, 7, 3));
