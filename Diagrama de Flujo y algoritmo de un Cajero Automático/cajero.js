
class Billete
	{
		constructor(v, c)
		{
			this.valor =  v;
			this.cantidad = c;			
		}
	
	}

function entregarDinero() 
{
	 var dinero = document.getElementById("dinero");
	 var dinero = parseInt(dinero.value);
	for(var bi of caja)
	{
		
 		if (dinero > 0)
		{
			div = Math.floor(dinero / bi.valor);
			if (div > bi.cantidad){
				papeles = bi.cantidad

			} 
			else
			{
				papeles = div;
			}
			entregado.push(new Billete(bi.valor, papeles));
			dinero = dinero - (bi.valor * papeles);
				
		}
	}
	if(dinero > 0)
	{
			resultado.innerHTML = "No tengo ese dinero";

	}
	else 
	{
			console.log(entregado);
			for(var e of entregado)
			{
				if(e.cantidad > 0)
				{
								resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br>";	

				}
			}
	}
		  
	

 }


var caja = [];
var entregado = [];

caja.push(new Billete(50, 50));
caja.push(new Billete(20, 20));
caja.push(new Billete(10, 50));


var papeles = 0;

var resultado = document.getElementById("resultados"); 
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);