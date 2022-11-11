const inputBuscar = document.querySelector("input#buscar") 



function filtrarDiscos(){
    if(inputBuscar.value.trim() !== "" ){
let resultado = discos.filter(disco => disco.artista.toUpperCase().includes(inputBuscar.value.toUpperCase().trim()))
if (resultado.length > 0){
   console.table(resultado)
   
   let totalCompra = resultado.reduce((total, disco) => total + disco.importe, 0)
    console.log("El total de la compra es: $", totalCompra)
}   else{
    alert("No se encontro artista")
} 
}
}


