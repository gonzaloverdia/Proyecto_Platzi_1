var d2 = document.getElementById("dibujito2");

var lienzo = d2.getContext("2d");
var lineas = 30;

var xfin, yini;

for (l = 0; l < lineas; l++)
 {
	yini = 10 * l;
	xfin = 10 * (l + 1);	
	dibujarLinea("#AAF", 0, yini, xfin, 300);      
	console.log("Linea " + l);	   
 }


function dibujarLinea(color, xini, yini, xfin, yfin)
 {

	lienzo.beginPath(); // Comenzamos a dibujar
	lienzo.strokeStyle = color; // color del trazo
	lienzo.moveTo(xini, yini); // posicion inicial
	lienzo.lineTo(xfin, yfin); // mover a... creando linea
	lienzo.stroke(); // cerramos linea
	lienzo.closePath(); // Terminamos de dibujar 
	
 }


