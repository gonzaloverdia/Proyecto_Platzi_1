document.addEventListener("keyup", dibujarTeclado); // agregamos una escucha de evento que ocurre en el documento. Cuando una tecla es soltada se dispara la funcion ¨dibujarTeclado¨.
var teclas = {
	UP: 38,
	DOWN: 40, 
	LEFT: 37,
	RIGHT: 39	
}
function dibujarTeclado(evento)
	{
		switch(evento.keyCode) {
			case teclas.UP:
				console.log("arriba");
				break;
			case teclas.DOWN:
				console.log("abajo");
				break;
				case teclas.LEFT:
				console.log("izquierda");
				break;
				case teclas.RIGHT:
				console.log("derecha");
				break;
			default: 
				console.log("Otra tecla");
				break
		}
	}
