function copiarCorreo() {
    const correo = document.getElementById("email").value;
    navigator.clipboard.writeText(correo)
      .then(() => {
        alert("Correo copiado al portapapeles: " + correo);
      })
      .catch(err => {
        console.error('Error al copiar al portapapeles', err);
        alert("Hubo un error al copiar el correo al portapapeles.");
      });
  }
  