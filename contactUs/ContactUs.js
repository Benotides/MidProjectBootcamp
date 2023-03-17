const formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", function(event) {
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const mensaje = document.getElementById("mensaje");

  if (!nombre.value || !email.value || !telefono.value || !mensaje.value) {
    event.preventDefault();
    alert("Faltan campos por rellenar.");
  }
});
