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
/**
 * Muestra u oculta un div según el valor dado
 * @method mostrar_ocultar
 * @param {string} valor - Valor que indica si se muestra u oculta el div
 */
let mostrar_ocultar = (valor) =>{
        if(valor==="val_mostrar"){
            document.getElementById("unDiv").style.display = 'block';
        } else if (valor==="val_ocultar"){
            document.getElementById("unDiv").style.display = 'none';
        }
    }
/**
 * Suma dos números y muestra el resultado
 * @method sumar
 */
let suma = () =>{
    const s1= Number(document.getElementById("nums1").value);
    const s2= Number(document.getElementById("nums2").value);
    document.getElementById("totalS").innerHTML= s1+s2;
}
/**
 * Resta dos números y muestra el resultado
 * @method restar
 */
let resta = () =>{
    const r1= Number(document.getElementById("numr1").value);
    const r2= Number(document.getElementById("numr2").value);
    document.getElementById("totalR").innerHTML= r1-r2;
}
/**
 * Multiplica dos números y muestra el resultado
 * @method multiplicar
 */
let multiplicacion = () =>{
    const m1= Number(document.getElementById("numm1").value);
    const m2= Number(document.getElementById("numm2").value);
    document.getElementById("totalM").innerHTML= m1*m2;
}
/**
 * Divide dos números y muestra el resultado
 * @method dividir
 */
let division = () =>{
    const d1= Number(document.getElementById("numd1").value);
    const d2= Number(document.getElementById("numd2").value);
    document.getElementById("totalD").innerHTML= d1/d2;
}
function cargarWeb(){
    var cant, unidad, urlComp;
    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp, "_self");
}
function cargarResultado(){
    var urlComp, cant, unidad;
    urlComp = window.location.href.split("#");
    cant = urlComp[1];
    unidad = urlComp[2];
    document.getElementById("dist").value = cant + " " + unidad;
}
function guardarLocalStorage(){
    let distancia, unidad;
    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName('unidades')[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadLS", unidad);
    window.open('2_web.html', "_self");
}

function cargarLocalStorage(){
    let cant, un;
    cant = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadLS");
    document.getElementById("dist").value = cant + " " + un;
}
function dibujarCiruloCuadrado(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var yMax = canvas.height;
    var xMax = canvas.width;
    var margen =5;
    ctx.fillStyle = "#af2565";
    ctx.fillRect(0 + margen,yMax - 40 - margen, 40, 40);
    ctx.arc(xMax/2,yMax/2, 30, 0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#486a56";
    ctx.fill();
}
var bandera;
function dibujar(event){
    var canvas = document.getElementById("canvaDibujo");
    var ctx = canvas.getContext("2d");
    var posx = event.clientX;
    var posy = event.clientY;
    console.log(posx, posy);
    canvas.onmousedown = function (){ bandera = true};
    canvas.onmouseup = function (){bandera = false};
    if (bandera){ctx.fillRect(posx, posy,5,5);
        ctx.fill;}
}
function limpiar(){
    var canvas = document.getElementById("canvaDibujo");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
}
function dibujarCuadriculado(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var altraMax= canvas.height;
    var anchoMax = canvas.width;
    ctx.beginPath();
    for (var i=20;i<altraMax; i+=20) {
        ctx.moveTo(0, i);
        ctx.lineTo(1000, i);
        ctx.strokeStyle = "#ff0000";
        ctx.stroke();
    }
    ctx.closePath();
    ctx.beginPath();
    for (var i=20;i<anchoMax; i+=20) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 600);
        ctx.strokeStyle = "#ff0000";
        ctx.stroke();
    }
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(0, altraMax/2);
    ctx.lineTo(anchoMax, altraMax/2);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(anchoMax/2, 0);
    ctx.lineTo(anchoMax/2, altraMax);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();
}
function dibujarImagen(posX, posY) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    console.log(posX, posY);
    const img = new Image();
    img.src = "images/auto.png";
    img.onload = function () {
        canvas.width = canvas.width;
        ctx.drawImage(img, posX, posY);
    }
    if (posX<0 || posY<0 || posX>canvas.width || posY>canvas.canvas.height){
        mostrarDialog();
    }else{
        img.onload=function (){
            ctx.drawImage(img,posX,posY);
        }
    }
}
