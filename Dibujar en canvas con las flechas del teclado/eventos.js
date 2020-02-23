var teclas = {
	UP: 38,
	DOWN: 40, 
	LEFT: 37,
	RIGHT: 39	
}

document.addEventListener("keyup", dibujarTeclado); 
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel); // ilustramos el punto de arranque.


function dibujarLinea(color, xini, yini, xfin, yfin, lienzo)
 {
	lienzo.beginPath(); // Comenzamos a dibujar
	lienzo.strokeStyle = color; // color del trazo
	lienzo.lineWidth = 3; // ancho del trazo
	lienzo.moveTo(xini, yini); // posicion inicial
	lienzo.lineTo(xfin, yfin); // mover a... creando linea
	lienzo.stroke(); // cerramos linea
	lienzo.closePath(); // Terminamos de dibujar 
 }

function dibujarTeclado(evento)
	{
		var colorcito = "blue";
		var movimiento = 10;
		
		switch(evento.keyCode) {
			case teclas.UP:
				dibujarLinea(colorcito, x, y, x, y -movimiento, papel);
				y = y - movimiento;
				break;
			case teclas.DOWN:
				dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
				y = y + movimiento;
				break;
				case teclas.LEFT:
				dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
				x = x - movimiento;
				break;
				case teclas.RIGHT:
				dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
				x = x + movimiento;
				break;
			default: 
				console.log("Otra tecla");
				break
		}
	}
