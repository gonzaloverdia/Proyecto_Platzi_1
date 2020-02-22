var texto = document.getElementById("texto_lineas"); // definimos variable que contiene objeto input text
var boton = document.getElementById("botoncito"); //definimos variable que contiene objeto boton
boton.addEventListener("click", dibujarPorClick); // creamos un escuchador de evento.


var d = document.getElementById("dibujito"); // definimos variable que contiene objeto canvas

var ancho = d.width; // ancho del canvas
var lienzo = d.getContext("2d"); // creamos lienzo




function dibujarLinea(color, xini, yini, xfin, yfin)
 {

	lienzo.beginPath(); // Comenzamos a dibujar
	lienzo.strokeStyle = color; // color del trazo
	lienzo.moveTo(xini, yini); // posicion inicial
	lienzo.lineTo(xfin, yfin); // mover a... creando linea
	lienzo.stroke(); // cerramos linea
	lienzo.closePath(); // Terminamos de dibujar 
	
 }


function dibujarPorClick()
{
	
 	var x = texto.value // creamos variable que contiene el valor del input text 
	var lineas = x; // definimos en la variable "lineas" el valor que tiene la variable x
	var l = 0; // definimos el valor de la variable "l" en 0 para luego iterar
	var xfin, yini; // creamos las variables xfin y yini
	var colorcito = "#FAA" // definimos la variable colorcito con el valor del color que usaremos 
	var espacio = ancho / lineas; // definimos la variable "espacio" que tomara el valor de la division entre ancho y lineas.
	
	
	//Creamos un bucle para iterar y asi dibujar la cantidad de lineas asignadas por el usuario 
	while (l < lineas)
 {
	yini = espacio * l;
	xfin = espacio * (l + 1);	
	dibujarLinea("#AAF", 0, yini, xfin, 300);   
	l = l + 1;	   
	
 }
	
	// Creamos un margen para proporcionar antialiasing al trazo.
	dibujarLinea(colorcito, 1,1,1,299);
	dibujarLinea(colorcito, 1,299,299,299);
	
}