
const usuario = document.getElementById ("usuario")
const contraseña = document.getElementById ("contraseña")
const btnlogin = document.getElementById ("btningresar")



const URL = "../db/data.json"

async function obtenerUsuarios() {
  const response = await fetch(URL)
  const data = await response.json()
  return data
}


btnlogin.addEventListener ("click", async (e) => {


  try {
    const usuarios = await obtenerUsuarios()

    const userFound = usuarios.find(
      (u) =>
        String(u.usuario) === usuario.value &&
        String(u.contraseña) === contraseña.value
    )

    if (userFound) {
      location.href = "../pages/reservas.html"
    } else {
        Swal.fire({
            title: "Usuario o contraseña incorrectos",
            icon: "error",
            showConfirmButton: false,
            timer: 2000,
            background: "#330000",
            color: "#ffffff",
        })
    }

  } catch (error) {
    Swal.fire({
        title: "Error al validar usuario",
        text: "No se pudo conectar con el servidor, intenta mas tarde.",
        icon: "error",
        showConfirmButton: false,
        timer: 4000,
        background: "#330000",
        color: "#ffffff",
    })
  } 

})
