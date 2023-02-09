class Producto {
	constructor(id, titulo, precio, cantidad, genero) {
		this.id = id;
		this.titulo = titulo;
		this.precio = Number(precio);
		this.cantidad = Number(cantidad);
		this.genero = genero;
		this.vendido = false;
		this.subtotal = 0;
	}

	sumaIva() {
		this.precio = this.precio * 1.21;
	}
}

const productos = [];

productos.push(new Producto(1, 'El Principito', '2000', '10', 'Narrativa'));
productos.push(new Producto(2, 'Mi planta de naranja lima', '2100', '5', 'Novela'));
productos.push(new Producto(3, 'Don quijote de la mancha', '6000', '6', 'Novela'));


subtotal();
for (const producto of productos) {
	console.log(`ID: ${producto.id}\nNombre: ${producto.titulo}\nPrecio: ${producto.precio}\nCantidad: ${producto.cantidad}\nDescripción: ${producto.genero}\n\n`);}


function subtotal() {
	for (const producto of productos) {
		producto.sumaIva();
		producto.subtotal = producto.precio * producto.cantidad;
		producto.vendido = true;
	}
}



function retirar () {

let montoARetirar = parseFloat(prompt("Ingrese el monto a retirar"));
	while(montoARetirar <= cantidad) {
        montoARetirar = parseFloat(prompt("Ingrese el monto a retirar"));

		cliente1.ejecutarOperacion("Retirar", montoARetirar);
    }
}


let operacion = prompt("Ingrese el libro que desee: \n1)- El Principito, \n2)- Mi planta de naranja lima, \n3)- Don quijote de la mancha. \nEscriba Salir si quiere salir del programa");

while(operacion !== "Salir") {

    switch(operacion) {

        case "1":
            retirar();
            break;

        case "2":
            retirar();
            break;

        case "3":
            retirar();
            break;

        default:
            alert("Opción desconocida");
            break;
    }


    operacion = prompt("Ingrese el libro que desee: (1- El Principito, 2- Mi planta de naranja lima, 3- Don quijote de la mancha. Escriba Salir si quiere salir del programa");
}
