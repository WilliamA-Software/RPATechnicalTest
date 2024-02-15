// Variables
// Aqui el usuario coloca el numero y las veces
// numero = 3, terminos= 5
let num = 3;
let vec = 5;

//--Programa--
// Funcion para calcular la suma del numero repetido por las veces 
function calculoNumeroVeces(numero,veces){
    let otraCadena = numero.toString();     // Convertir a texto para repetirlo
    let sumatoria = 0;      // Almaceno la sumatoria

    for (let i = 1; i <= veces; i++) {
        let cadenaRepetida = otraCadena.repeat(i);  // Propiedad .repeat para que repita la cantidad de veces
        sumatoria = sumatoria + parseInt(cadenaRepetida);
    }
    
    // Retornar el resultado
    return sumatoria;
}

console.log(calculoNumeroVeces(num,vec));