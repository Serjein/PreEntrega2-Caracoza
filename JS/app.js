const mensajeInicial = "💽 Selecciona el album con el código:"

function buscarAlbum(id) {
    let resultado = albums.find(album => album.id === parseInt(id))
    return resultado
}

function comprar() {
    let id = prompt(mensajeInicial)
    if (!parseInt(id)) {
        alert("🤷‍♂️ Error en el código ingresado.")
        return
    }
    let albumElegido = buscarAlbum(id)
    carrito.push(albumElegido)
    let respuesta = confirm("¿Deseas llevar otro album?")
    if (respuesta) {
        comprar()
    } else {
        finalizarCompra()
    }
}

function verCarrito() {
    if (carrito.length > 0) {
        console.table(carrito)

        let totalCompra = carrito.reduce((total, album) => total + album.importe, 0).toFixed(2)
             console.log("El total de la compra es: $ " + totalCompra)
    } else {
        console.warn("El carrito está vacío!")
    }
}

function finalizarCompra() {
    if (carrito.length === 0) {
        console.warn("El carrito está vacío!")
        return
    }
    const compras = new Compra(carrito)
    alert(`El costo total es de $ ${compras.obtenerSubtotal()}`)
    let respuesta = confirm("¿Deseas confirmar tu compra?")
    if (respuesta) {
        alert(compras.confirmarCompra())
        carrito.length = 0
    }
}























// function buscarArtista(){
//     let art = prompt("Ingresa Artista a buscar:💽").toUpperCase()

//     let resultado = discos.filter((disco) => disco.artista.toUpperCase().includes(art))
//     if(resultado.length > 0){
//         console.table(resultado)

//            let totalCompra = resultado.reduce((total, disco) => total + disco.importe, 0).toFixed(2)
//             alert("El total de la compra es: $ " + totalCompra)

//     }else{
//         alert("⛔ No se encontro el Artista", resultado)
//     }
// }