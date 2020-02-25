
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverCampecino);


var xCampecino = 250;
var yCampecino = 250;

function moverCampecino(e)
{
	var movimiento = 64;
	var teclas =
	{
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
	}
	switch(e.keyCode)
	{
		case teclas.LEFT:
			xCampecino = xCampecino - movimiento;
			dibujar(xCampecino, yCampecino);
		break;
		case teclas.UP:
			yCampecino = yCampecino - movimiento;
			dibujar(xCampecino, yCampecino);
		break;
		case teclas.RIGHT:
			xCampecino = xCampecino + movimiento;
			dibujar(xCampecino, yCampecino);
		break;
		case teclas.DOWN:
			yCampecino = yCampecino + movimiento;
			dibujar(xCampecino, yCampecino);
		break;
	}
}


var campecino =
{
	url: "src/campecino.png",
	carga: false
}

var tile =
{
	url: "src/tile.png",
	carga: false
}


tile.imagen = new Image();
tile.imagen.src = tile.url;
tile.imagen.addEventListener("load", cargaCampecino);


campecino.imagen = new Image();
campecino.imagen.src = campecino.url;
campecino.imagen.addEventListener("load", cargaCampecino);

function cargaCampecino()
{
	campecino.carga = true;
	dibujar();
}

function cargaTile()
{
	tile.carga = true;
	dibujar();
}

function dibujar()
{
	
	if(campecino.carga)
	{
		papel.drawImage(tile.imagen, 0, 0)
		papel.drawImage(campecino.imagen, xCampecino, yCampecino)
	}
}
