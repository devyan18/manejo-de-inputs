const elAccept = document.getElementById("accept")

elAccept.addEventListener("click", () => {
  const elPassowrdError = document.getElementById("password-error")
  elPassowrdError.innerText = ""

  // Primeros inputs
  let elUsername = document.getElementById("username")
  let elEmail = document.getElementById("email")
  let elCheck = document.getElementById("check")

  // Contraseñas
  let elPassword = document.getElementById("password")
  let elConfirmPassword = document.getElementById("confirm-password")

  if (elPassword.value != elConfirmPassword.value) {

    elPassowrdError.innerText = "Las constraseñas no son iguales."

    console.log("Las constraseñas no son iguales.")

    return
  }

  // Mostramos por consola
  console.log(elUsername.value)
  console.log(elEmail.value)
  console.log(elCheck.checked)

})