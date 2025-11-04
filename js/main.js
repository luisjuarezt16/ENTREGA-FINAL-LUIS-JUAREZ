let reservas = JSON.parse(localStorage.getItem("reservas")) || []

const nombre = document.getElementById ("nombreempresa")
const visita = document.getElementById ("fechavisita")
const hora = document.getElementById ("hora")
const problema = document.getElementById ("descripcionproblema")
const btnreserva = document.getElementById ("btnreservar")
const btnlog = document.getElementById ("btnlog")




btnlog.addEventListener ("click", ()=> {
   
    location.href = "./pages/login.html"

})

btnreserva.addEventListener ( "click" , () => {

    
    

    const reserva = {
        empresa: nombre.value,
        fecha: visita.value,
        hora: hora.value,
        problema: problema.value,
    }

    const existe = reservas.some(r => r.fecha === reserva.fecha && r.hora === reserva.hora)
                                                

    if (existe) {
    Swal.fire({
      title: "¡Fecha ya reservada!",
      text: "Ya existe una reserva registrada para esa fecha y hora.",
      icon: "warning",
      confirmButtonColor: "#000000",
      background: "#330000",
      color: "#ffffff"
    })
    return 
    }

    

    reservas.push (reserva)

    localStorage.setItem("reservas", JSON.stringify(reservas))

    nombre.value = ""
    visita.value = ""
    hora.value = ""
    problema.value = ""

    

    Swal.fire({
    title: "TU RESERVA FUE REGISTRADA!",
    text: "Puedes ingresar a tu cuenta y borrar o editar tu reserva.",
    icon: "success",
    confirmButtonColor: "#000000ff",
    background: "#330000ff",
    color: "#ffffffff",  
    });



})

