const carrito = []

const albums = [{id: 1, artista: "Korn", album: "Issues", importe: 50},
                   {id: 2, artista: "System of a Down", album: "Toxicity", importe: 143},
                   {id: 3, artista: "Muse", album: "The 2nd law", importe: 154.50},
                   {id: 4, artista: "Slipknot", album: "All Hope Is Gone", importe: 128.50},
                   {id: 5, artista: "Korn", album: "Follow the Leader", importe: 84.50},
                   {id: 6, artista: "System of a Down", album: "Mezmerize", importe: 60},
                   {id: 7, artista: "Muse", album: "Simulation Theory", importe: 70},
                   {id: 8, artista: "Slipknot", album: "The Subliminal Verses", importe: 50},]

class Compra {
    constructor(carrito) {
        this.carrito = carrito
    }
    obtenerSubtotal() {
        if (carrito.length > 0) {
            return this.carrito.reduce((subTotal, album) => subTotal + album.importe, 0).toFixed(2)
        } else {
            return 'No hay datos'
        }
    }
    confirmarCompra() {
        if (this.obtenerSubtotal() !== 'No hay datos') {
            return `👍 Confirmamos el pago de $ ${this.obtenerSubtotal()}. \n Gracias por su compra, vuelva pronto!`
        } else {
            return `🤦‍♂️ Error en la compra.`
        }
    }
}