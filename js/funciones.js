// Creación de la Máquina
class MaquinaExpendedora{
	constructor(){
		this.p1 = new Producto('10', 'Papa Margarita', 1700);
		this.p2 = new Producto('20', 'Jugo Hit', 2400);
		this.p3 = new Producto('30', 'Chocolatina Jet', 700);
		this.p4 = new Producto('40', 'Galletas Festival', 1000);
	}

	darProducto1(){
		// Retorna el producto 1
		return this.p1;
	}
	darProducto2(){
		// Retorna el producto 2
		return this.p2;
	}

	darProducto3(){
		// Retorna el producto 3
		return this.p3;
	}
	darProducto4(){
		// Retorna el producto 4
		return this.p4;
	}

	abastecerProducto1(pUnidades){
		//Invoca al metodo abastecer de la clase Producto 
		this.p1.abastecer(pUnidades);
	}

	abastecerProducto2(pUnidades){
		//Invoca al metodo abastecer de la clase Producto 
		this.p2.abastecer(pUnidades);
	}

	abastecerProducto3(pUnidades){
		//Invoca al metodo abastecer de la clase Producto 
		this.p3.abastecer(pUnidades);
	}
	abastecerProducto4(pUnidades){
		//Invoca al metodo abastecer de la clase Producto 
		this.p4.abastecer(pUnidades);
	}

	venderProducto1(){
		// Vender unidades del producto 1
		if(this.p1.darCantidadUnidadesDisponibles() > 0 ){
			// Verifica si hay unidades disponibles del producto 1
			// Y si esto es asi, se vende 1 unidad
			this.p1.vender();
		}
		else{
			// Si no hay unidades se envia un mensaje de alerta
			alert("No hay unidades del producto");
		}
	}

	venderProducto2(){
		// Vender unidades del producto 1
		if(this.p2.darCantidadUnidadesDisponibles() > 0 ){
			// Verifica si hay unidades disponibles del producto 1
			// Y si esto es asi, se vende 1 unidad
			this.p2.vender();
		}
		else{
			// Si no hay unidades se envia un mensaje de alerta
			alert("No hay unidades del producto");
		}
	}

	venderProducto3(){
		// Vender unidades del producto 1
		if(this.p3.darCantidadUnidadesDisponibles() > 0 ){
			// Verifica si hay unidades disponibles del producto 1
			// Y si esto es asi, se vende 1 unidad
			this.p3.vender();
		}
		else{
			// Si no hay unidades se envia un mensaje de alerta
			alert("No hay unidades del producto");
		}
	}

	venderProducto4(){
		// Vender unidades del producto 1
		if(this.p4.darCantidadUnidadesDisponibles() > 0 ){
			// Verifica si hay unidades disponibles del producto 1
			// Y si esto es asi, se vende 1 unidad
			this.p4.vender();
		}
		else{
			// Si no hay unidades se envia un mensaje de alerta
			alert("No hay unidades del producto");
		}
	}

	darCantidadTotalVentas(){
		let cantidadTotal = this.p1.darCantidadUnidadesVendidas() +
							this.p2.darCantidadUnidadesVendidas() +
							this.p3.darCantidadUnidadesVendidas() +
							this.p4.darCantidadUnidadesVendidas();
		return cantidadTotal;
	}

	darValorTotalVentas(){
		let valorVentas = this.p1.darCantidadUnidadesVendidas() * this.p1.darPrecio() +
						  this.p2.darCantidadUnidadesVendidas() * this.p2.darPrecio() +
						  this.p3.darCantidadUnidadesVendidas() * this.p3.darPrecio() +
						  this.p4.darCantidadUnidadesVendidas() * this.p4.darPrecio();
		return valorVentas;
	}
}

// ----------------------------------------------------

// Creación de la clase Producto
class Producto{
	constructor(id, nombre, precio){
		//Crear el constructor de la clase Producto
		this.id = id;
		this.nombre = nombre;
		this.precio = precio;
		this.cantidadUnidadesDisponibles = 0;
		this.cantidadUnidadesVendidas = 0;
	}

	darIdentificador(){
		//Metodo que retorna el id del producto
		return this.id;
	}

	darNombre(){
		//Metodo que retorna el nombre del producto
		return this.nombre;
	}

	darPrecio(){
		// Metodo que retorna el precio de un producto
		return this.precio;
	}

	darCantidadUnidadesDisponibles(){
		// Metodo que retorna las unidades disponibles del producto
		return this.cantidadUnidadesDisponibles;
	}

	darCantidadUnidadesVendidas(){
		// Metodo que retorna las unidades vendidas
		return this.cantidadUnidadesVendidas;
	}

	abastecer(pUnidades){
		// Metodo que abastece un producto
		this.cantidadUnidadesDisponibles = this.cantidadUnidadesDisponibles + pUnidades;
	}

	vender(){
		//Metodo que vende un producto(quita disponibles, suma ventas)
		this.cantidadUnidadesDisponibles = this.cantidadUnidadesDisponibles - 1;
		this.cantidadUnidadesVendidas = this.cantidadUnidadesVendidas + 1;
	}
}

let m = new MaquinaExpendedora();


function abastacer_papas(){
	let cant = prompt("Ingrese el número de unidades que abastecerá el producto");
	m.abastecerProducto1(parseInt(cant));
	let disponible = m.darProducto1().darCantidadUnidadesDisponibles();
	document.getElementById('disp_papa').innerHTML = 'Disponible: ' + disponible;
}