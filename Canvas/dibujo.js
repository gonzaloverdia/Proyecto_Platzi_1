var d = document.getElementById("dibujito")
var lienzo = d.getContext("2d");

lienzo.beginPath(); // Comenzamos a dibujar
lienzo.strokeStyle = "red"; // color del trazo
lienzo.moveTo(100, 100); // posicion inicial
lienzo.lineTo(200, 200); // mover a... creando linea
lienzo.stroke(); // cerramos linea
lienzo.closePath(); // Terminamos de dibujar 

