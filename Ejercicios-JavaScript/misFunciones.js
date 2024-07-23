/**
 * conversor de unidades
 * @method cambiar unidades
 * @param {string}id-el id de los inputs 
 * @param {number}valor-el valor de los inputs
 */
let convertirUnidades = (id, value) => {
    let metro,pie,yarda,pulgada;
    if (isNaN(value)) {
        alert("Ingrese numeros unicamente");
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    } else if (id === "metro") {
        metro = value;
        pulgada = value * 39.3701;
        pie = value * 3.28084;
        yarda = value * 1.09361;
    } else if (id === "pulgada") {
        pulgada = value;
        metro = value * 0.0254;
        pie = value * 0.0833333;
        yarda = value * 0.0277778;
    } else if (id === "pie") {
        pie = value;
        metro = value * 0.3048;
        pulgada = value * 12;
        yarda = value * 0.333333;
    } else if (id === "yarda") {
        yarda = value;
        metro = value * 0.9144;
        pulgada = value * 36;
        pie = value * 3;
    }
    document.getElementById("metro").value = metro;
    document.getElementById("pulgada").value = pulgada;
    document.getElementById("pie").value = pie;
    document.getElementById("yarda").value = yarda;
}
/**
 * Conversor de grados a radianes
 * @method cambiar grados a radianes
 * @param {String}id - grados - radianes
 */
convertirGR = (id) => {
    let grad, rad;
    //TODO: agregar mensaje de error
    //TODO: admitir numeros con coma
    if (id === "grados") {
        grad = document.getElementById("grados").value;
        rad = grad * Math.PI / 180;
        document.getElementById("radianes").value = rad;
    } else {
        rad = document.getElementById("radianes").value;
        grad = rad * 180 / Math.PI;
        document.getElementById("grados").value = grad;
    }
}
