function producto(codigo, tipo_producto, precio_venta,precio_compra,descripcion_producto, stock) {
	this.Codigo = codigo;
	this.Tipo_producto = tipo_producto;
	this.Precio_venta = precio_venta;
	this.Precio_compra = precio_compra;
	this.Descripcion_producto = descripcion_producto;
	this.Stock = stock;
}

function dulce(){
	var producto = [];
	var ventas = [];

var opcion = prompt("Bienvenido que desea hacer" + " " +
"1) Agregando producto a la tienda" + " " +
"2) Modificar stock del producto" + " " + 
"3) Registrar venta y reducir stock" + " " +
"4) Mostrar promedio de ventas realizadas" + " " +
"5) Mostrar productos con stock 0" + " " +
"6)	Salir del sistema"
);

switch(opcion){
	case 1: 
	producto.push( new producto(prompt("Codigo del producto: "),
		prompt("Tipo de producto: "),
		prompt("Precio de venta: "),
		prompt("Precio de compra: "),
		prompt("Descripcion del producto: "),
		prompt("Stock: ")
		);
	break;
	case 2:
	console.log(producto);
	var cambio = prompt("Seleccione el Codigo a Modificar: ");
		 for(let i of productos){
		 	if( cambio == i.stock){
		 		 var modifica_stock= prompt("Ingrese el nuevo stock");
				 producto[i].producto.codigo = modifica_stock;

		 	}else{
		 		alert("Stock ingresado no se encuentra")
		 	}
		 }
	break;
	case 3:
	var contador = 0;
	for( let i of ventas){
		contador ++;
	}
	console.log("EL promedio de las ventas realizadas es: " + " " + contador / ventas.length );
	break;
	case 6:
	console.log("Vuelva pronto a la Tienda de Michelle");
	break;         
}





