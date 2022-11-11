// function filtrarDiscos(){
//     if(inputBuscar.value.trim() !== "" ){
// let resultado = discos.filter(disco => disco.artista.toUpperCase().includes(inputBuscar.value.toUpperCase().trim()))
// if (resultado.length > 0){
//    console.table(resultado)
   
//    let totalCompra = resultado.reduce((total, disco) => total + disco.importe, 0)
//     console.log("El total de la compra es: $", totalCompra)
// }   else{
//     alert("No se encontro artista")
// } 
// }
// }

// const inputBuscar = prompt("Indica el artista a buscar")

function buscarArtista(){
    let art = prompt("Ingresa Artista a buscar:💽").toUpperCase()
 
    let resultado = discos.filter((disco) => disco.artista.toUpperCase().includes(art))
    if(resultado.length > 0){
        console.table(resultado)
   
           let totalCompra = resultado.reduce((total, disco) => total + disco.importe, 0).toFixed(2)
            alert("El total de la compra es: $ " + totalCompra)
           
    }else{
        alert("⛔ No se encontro el Artista", resultado)
    }
}


