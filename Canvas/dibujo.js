var d = document.getElementById("dibujito")
var lienzo = d.getContext("2d");

dibujarLinea("pink", 10, 300, 220, 10);
dibujarLinea("yellow", 300, 10, 10, 220);

function dibujarLinea(color, xini, yini, xfin, yfin)
{

lienzo.beginPath(); // Comenzamos a dibujar
lienzo.strokeStyle = color; // color del trazo
lienzo.moveTo(xini, yini); // posicion inicial
lienzo.lineTo(xfin, yfin); // mover a... creando linea
lienzo.stroke(); // cerramos linea
lienzo.closePath(); // Terminamos de dibujar 
	
}

