// Lista que da el usuario
// Aqui el usuario digita la lista que quiere evaluar de acuerdo al ejercicio
let listadoDeEntrada = [12, 25, 1, 1, 7, 25];

// Funcion que agrupa elementos similares
// Pide la lista como parámentro
function agruparElementosDeLista(lista) {
    let contador = {};      // Contar numero de veces repetida
    
    // Ciclo for each para recorrer cada uno de los elementos de la lista
    // voy sumando al contador las repeticiones
    lista.forEach(elemento => {
        contador[elemento] = (contador[elemento] || 0) + 1;
    });

    let listaAgrupadaSalida = [];       // Lista final donde voy guardando el resultado
    
    // Ciclo for de cada elemento
    for (let elemento in contador) {
        let cantidad = contador[elemento];
        
        //Validar si se repite su cantidad 1 o más veces
        if (cantidad === 1) {
            listaAgrupadaSalida.push(parseInt(elemento)); // Casteo el numero y agrego ya que solo está 1 vez
        } else {
            let agrupoRepetidos = [];
            for (let i = 0; i < cantidad; i++) {
                agrupoRepetidos.push(parseInt(elemento)); // Casteo y agrego el numero a la lista agrupada
            }
            
            // Agregar los agrupados a la lista final que se va a mostrar
            listaAgrupadaSalida.push(agrupoRepetidos);
        }
    }

    return listaAgrupadaSalida;
}

// Imprimir el resultado final de lista agrupada
console.log(agruparElementosDeLista(listadoDeEntrada));