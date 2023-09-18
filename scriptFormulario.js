document.addEventListener("DOMContentLoaded", function () {
    const formularioClientes = document.getElementById("formularioClientes");
    const mensajeRegistro = document.getElementById("mensajeRegistro");
    let registros = JSON.parse(localStorage.getItem("clientes")) || [];

    formularioClientes.addEventListener("submit", function (e) {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const correo = document.getElementById("correo").value;

        if (!clienteRegistrado(nombre, apellido, registros)) {
            const cliente = { nombre, apellido, correo };
            registros.push(cliente);
            localStorage.setItem("clientes", JSON.stringify(registros));
            mensajeRegistro.textContent = "Cliente registrado con éxito.";
            mensajeRegistro.style.color = "green";
            limpiarFormulario(); // Limpia el formulario después de registrar al cliente
        } else {
            mensajeRegistro.textContent = "Cliente ya registrado.";
            mensajeRegistro.style.color = "red";
        }

        mensajeRegistro.style.display = "block";
    });

    function clienteRegistrado(nombre, apellido, registros) {
        return registros.some(cliente => cliente.nombre === nombre && cliente.apellido === apellido);
    }

    function limpiarFormulario() {
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("correo").value = "";
    }
});
