// Variables
// Aqui el usuario digita los numeros en una lista de entrada
let listadoEntrada = [24, 150, 300, 660, 295, 1050, 50];

//--Programa--
// Funcion que retorna lista que cumplan condiciones
// 1. El número debe ser divisible por cinco
// 2. Si el número es mayor que 600, no se incluye en la salida
// 3. Si el número es mayor que 1000, detenga el procesamiento y retorne el resultado
function listaCumpleCondiciones(listado){
    let listadoNuevo = [];      //Ir armando la lista que contendrá el resultado
    
    // Ciclo para recorrer la lista inicial
    for (let numero of listado) {
        if (numero > 1000) {
            break; // Salir del ciclo y terminar si el número es mayor que 1000
        } 
        if (numero % 5 == 0 && numero <= 600) {
            listadoNuevo.push(numero);  //Cumple entonces agregarlo al final con .push
        }  
    }
    
    // Devolver el resultado que se obtuvo
    return listadoNuevo; 
}

console.log(listaCumpleCondiciones(listadoEntrada));