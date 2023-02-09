class Libro {
	constructor(id, titulo, precio, cantidad, genero) {
		this.id = id;
		this.titulo = titulo;
		this.precio = Number(precio);
		this.cantidad = Number(cantidad);
		this.genero = genero;
		this.vendido = false;
		this.Total = 0;
	}

	sumaIva() {
		this.precio = this.precio * 1.21;
	}
}

const carrito = [];

const agregarLibro = (libro) => {
    carrito.push (libro)
}



const calcularTotal = () => {
    let total = 0
    for (const libro of carrito){
        total+=libro.precio;
    }
    return total;

}

const libro1 = new Libro(1, 'El Principito', '2000', '10', 'Narrativa');
const libro2 = new Libro(2, 'Mi planta de naranja lima', '2100', '5', 'Novela');
const libro3 = new Libro(3, 'Don quijote de la mancha', '6000', '6', 'Novela');

alert("¡Bienvenido a La libreria!");

let seguirComprando = true;

while (seguirComprando && seguirComprando != 7) {
    const operacion= prompt("Ingrese el libro que desee: \n1)- El Principito, \n2)- Mi planta de naranja lima, \n3)- Don quijote de la mancha. \n4)- salir del programa");


    switch(operacion) {

        case "1":
			agregarLibro(libro1); 
            alert(`El libro ${libro1.nombre} tiene el precio de ${libro1.precio}.`);
            console.log(`El libro ${libro1.nombre} tiene el precio: ${libro1.precio}.`)
			break;

        case "2":
			agregarLibro(libro2); 
            alert(`El libro ${libro2.nombre} tiene el precio de ${libro2.precio}.`);
            console.log(`El libro ${libro2.nombre} tiene el precio: ${libro2.precio}.`)
			break;


        case "3":
			agregarLibro(libro3); 
            alert(`El libro ${libro3.nombre} tiene el precio de ${libro3.precio}.`);
            console.log(`El libro ${libro3.nombre} tiene el precio: ${libro3.precio}.`)
			break;

		case "4":
			seguirComprando = false;
			alert("Gracias por comprar!");


        default:
            alert("Por favor, elija una opción válida. \n\n Ingrese el libro que desee: \n1)- El Principito, \n2)- Mi planta de naranja lima, \n3)- Don quijote de la mancha. \nEscriba Salir si quiere salir del programa ");
            break;
    }

}


let total = 0;
for (let libro of carrito) {
    total += libro.precio;
    console.log(libro.nombre + " - Precio:" + libro.precio);
}

console.log("Total a pagar:" + total);