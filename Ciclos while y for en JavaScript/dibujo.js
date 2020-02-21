var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var xfin, yini;

while (l < lineas)
 {
	yini = 10 * l;
	xfin = 10 * (l + 1);	
	dibujarLinea("#AAF", 0, yini, xfin, 300);   
	l = l + 1;	   
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

