document.addEventListener("keyup", dibujarTeclado); // agregamos una escucha de evento que ocurre en el documento. Cuando una tecla es soltada se dispara la funcion ¨dibujarTeclado¨.
var teclas = {
	UP: 38,
	DOWN: 40, 
	LEFT: 37,
	RIGHT: 39	
}
function dibujarTeclado(evento)
	{
		if(evento.keyCode == teclas.UP){
			console.log("Vamo' pa' arriba");
		}
		if(evento.keyCode == teclas.DOWN){
			console.log("Vamo' pa' abajo");
		}
		if(evento.keyCode == teclas.LEFT){
			console.log("Vamo' pa' la izquierda");
		}
		if(evento.keyCode == teclas.RIGHT){
			console.log("Vamo' pa' la derecha");
		}
	}
