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
var cerdo = {
	url: "src/cerdo.png",
	cargaOk: false
}
var pollo = {
	url: "src/pollo.png",
	cargaOk: false
}

// Cargar al canvas la ruta.
fondo.imagen = new Image(); 
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

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

function cargarCerdo()
{
	cerdo.cargaOk = true;
	dibujar();
}

function cargarPollo()
{
	pollo.cargaOk = true;
	dibujar();
}

function dibujar()
{
	if(fondo.cargaOk == true)
	{
		papel.drawImage(fondo.imagen, 0, 0);
	}
	if(vaca.cargaOk == true)
	{	var cantidad = aleatorio(2, 7);
	 	
		for (i = 0; i<cantidad; i++)
		{
		var x = aleatorio(0, 420);
		var y = aleatorio(0, 420);
		papel.drawImage(vaca.imagen, x, y);		
		}
	console.log(cantidad);
	}
	if(cerdo.cargaOk == true)
	{	var cantidad = aleatorio(2, 7);
	 	
		for (i = 0; i<cantidad; i++)
		{
		var x = aleatorio(0, 420);
		var y = aleatorio(0, 420);
		papel.drawImage(cerdo.imagen, x, y);		
		}

	}
	if(pollo.cargaOk == true)
	{	var cantidad = aleatorio(2, 7);
	 	
		for (i = 0; i<cantidad; i++)
		{
		var x = aleatorio(0, 420);
		var y = aleatorio(0, 420);
		papel.drawImage(pollo.imagen, x, y);		
		}
	}
}

function aleatorio(min, maxi)
{
	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
}
