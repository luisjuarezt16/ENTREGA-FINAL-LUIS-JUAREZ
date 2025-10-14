let reservas = JSON.parse(localStorage.getItem("reservas")) || []

const contenedor = document.getElementById("contenedor-reservas")

const crearnuevo = document.getElementById ("crearreserva")

const borrarbtn = document.getElementById ("borrartodo")




crearnuevo.addEventListener ("click", () => {

    location.href = "/index.html"

})




function mostrarReservas() {
    contenedor.innerHTML = ""

    reservas.forEach((r, i) => {
        contenedor.innerHTML += `
            <div class="col-lg-4 justify-content-center g-3">
                <div class="tarjeta-reserva">
                    <h3>Reserva #${i + 1}</h3>
                    <p>Empresa: ${r.empresa}</p>
                    <p>Fecha: ${r.fecha}</p>
                    <p>Hora: ${r.hora}</p>
                    <p>Problema: ${r.problema}</p>
                    </div>

        `
    })
    
}

mostrarReservas()


borrarbtn.addEventListener ("click" , () => {

    localStorage.removeItem("reservas")
    reservas = []
    mostrarReservas(reservas)
})

