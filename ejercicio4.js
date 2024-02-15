
// Datos del Inventario
let datos = {
    dairy: {
        products: ["Fairlife Milk", "Alta Dena Milk", "Queensland Butter"],
        stock: [28, 36, 50]
    },
    cleaning: {
        products: ["Shampoo", "Body Soap", "Powder Detergent"],
        stock: [72, 61, 54]
    },
    grain: {
        products: ["Beans", "Chickpeas", "Lentils"],
        stock: [25, 64, 81]
    }
};

// Funcion inicial para correr el programa
function main() {
    let preguntar = true;
    while (preguntar) {
        console.log("Sistema de inventario. Ingrese una opción: ");
        console.log("------------------------------------------");
        console.log("1. Agregar producto");
        console.log("2. Ver reporte de inventario");
        console.log("3. Salir");
        
        let opcionIngresada = prompt("Su opción:");     // Capturar opcion
        
        // Revisar cual opción se ingresa (Casteo antes para validar)
        switch (parseInt(opcionIngresada)) {
            case 1:
                console.log("Opción 1 seleccionada: Agregar producto");
                agregarProducto();      // Llamar a la funcion para agregar
                break;
            case 2:
                console.log("Opción 2 seleccionada: Ver reporte de inventario");
                verInventario();        // Llamar a la funcion para ver
                break;
            case 3:
                console.log("Opción 3 seleccionada: Programa finalizado");
                preguntar = false;      // Terminar el ciclo while
                break;
            default:
                console.log("La opción que has ingresado no es válida. Por favor, selecciona una opción válida.");
                preguntar=true;
                break;
        }
    }
}

// Funcion para agregar o actualizar productos
function agregarProducto(){
    let nombreAgregarProducto = prompt("Nombre del Producto:");
    let cantidadAgregarProducto = prompt("Cantidad del Producto:");
    console.log("Grupos: dairy, cleaning, grain");
    let grupoProducto = prompt("Nombre del Grupo al que pertenece en minúsculas:");
    
    //Verificar el grupo
    if (datos.hasOwnProperty(grupoProducto)) {
        let grupoActual = datos[grupoProducto];

        // Verificar si el producto ya existe en el grupo
        let index = grupoActual.products.indexOf(nombreAgregarProducto);
        
        // Si no existe la propiedad indexOf me devuelve un -1
        if (index === -1) {
            // El producto no existe en el grupo, agregarlo como nuevo
            grupoActual.products.push(nombreAgregarProducto);   // Nombre
            grupoActual.stock.push(cantidadAgregarProducto);    // Cantidad
            console.log("El producto '" + nombreAgregarProducto + "' ha sido agregado al grupo '" + grupoProducto + "'.");
        } else {
            //Cuando el producto ya existe en el grupo del inventario
            console.log("El producto '" + nombreAgregarProducto + "' ya existe en el grupo '" + grupoProducto + "'.");
            
            grupoActual.stock[index] += parseInt(cantidadAgregarProducto);  // Actualizo cantidad
            console.log("La cantidad del producto '" + nombreAgregarProducto + "' en el grupo '" + grupoProducto + "' ha sido actualizada.");
        }
    }else {
        //Cuando el grupo digitado no existe
        console.log("El grupo '" + grupoProducto + "' no existe.");
    }
}

// Funcion para listar o ver los productos y cantidades del inventario
function verInventario(){
    
    // Ciclo para recorrer sobre cada grupo en los datos
    for (let grupo in datos) {
        if (datos.hasOwnProperty(grupo)) {
            console.log("------------------------");
            console.log("GRUPO: " + grupo);
            console.log("NOMBRE Y EXISTENCIAS");
            
            // Obtener los productos y su stock para este grupo
            let productos = datos[grupo].products;
            let stock = datos[grupo].stock;
            
            // Ciclo para recorrer sobre cada producto y mostrar su nombre y stock
            for (let i = 0; i < productos.length; i++) {
                console.log(productos[i] + ": " + stock[i]);
            }
            
            console.log(""); // Agregar una línea en blanco entre grupos
        }
    }
}

main();