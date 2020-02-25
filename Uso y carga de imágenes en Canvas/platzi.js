var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
	url: "src/tile.png",
	cargaOk: false
}
var vaca = {
	url: "src/vaca.png",
	cargaOk: false
}

// Cargar al canvas la ruta.
fondo.imagen = new Image(); 
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

function cargarFondo()
{
	fondo.cargaOk = true;
	dibujar();
}
function cargarVaca()
{
	vaca.cargaOk = true;
	dibujar();
}
function dibujar()
{
	if(fondo.cargaOk == true)
	{
		papel.drawImage(fondo.imagen, 0, 0);
	}
	if(vaca.cargaOk == true)
	{	var cantidad = aleatorio(5, 25);
	 	
		for (i = 0; i<cantidad; i++)
		{
		var x = aleatorio(0, 420);
		var y = aleatorio(0, 420);
		papel.drawImage(vaca.imagen, x, y);		
		}
	console.log(cantidad);
	}
}

function aleatorio(min, maxi)
{
	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
}
