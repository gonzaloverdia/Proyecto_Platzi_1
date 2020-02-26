var Imagenes = [];
Imagenes["Cauchin"] = "src/vaca.png";
Imagenes["Pokacho"] = "src/pollo.png";
Imagenes["Tocinauro"] = "src/cerdo.png";

console.log(Imagenes);
class Pakiman
	{
		constructor(nombre, ataque, vida)
		{
			this.imagen = new Image();
			this.vida = vida;			
			this.ataque = ataque;	
			this.nombre = nombre;
			
			this.imagen.src = Imagenes[this.nombre];
			
		}
		hablar()
		{
			alert(this.nombre)
		}
		mostrar()
		{
			document.body.appendChild(this.imagen);		
			document.write("<p>");
			document.write("<strong>"+ this.nombre + "</strong>");
			document.write("<br>");
			document.write("Vida: "+ this.vida);
			document.write("<br>");
			document.write("Ataque: "+ this.ataque);
		}
	}

var coleccion = [];
coleccion.push(new Pakiman('Cauchin', 30, 100));
coleccion.push(new Pakiman('Pokacho', 30, 100));
coleccion.push(new Pakiman('Tocinauro', 30, 100));

console.log(coleccion);

for (p of coleccion)
{
	p.mostrar();
}






