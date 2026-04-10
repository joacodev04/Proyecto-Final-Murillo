//Validacion de Formulario
const enviar = document.querySelector(".form-contacto")
enviar.addEventListener("submit", (event) => {
   event.preventDefault();
   Swal.fire({
   title: "Enviado correctamente!",
   icon: "success",
   draggable: true
});
});