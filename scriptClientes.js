document.addEventListener("DOMContentLoaded", function () {
    const listaClientes = document.getElementById("listaClientes");
    let registros = JSON.parse(localStorage.getItem("clientes")) || [];

    function actualizarListaClientes() {
        listaClientes.innerHTML = "";
        registros.forEach((cliente, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${cliente.nombre} ${cliente.apellido} - ${cliente.correo}`;
            const mostrarButton = document.createElement("button");
            mostrarButton.textContent = "Mostrar";
            mostrarButton.addEventListener("click", () => mostrarCliente(index));
            const editarButton = document.createElement("button");
            editarButton.textContent = "Editar";
            editarButton.addEventListener("click", () => editarCliente(index));
            const borrarButton = document.createElement("button");
            borrarButton.textContent = "Borrar";
            borrarButton.addEventListener("click", () => borrarCliente(index));
            listItem.appendChild(mostrarButton);
            listItem.appendChild(editarButton);
            listItem.appendChild(borrarButton);
            listaClientes.appendChild(listItem);
        });
    }

    function mostrarCliente(index) {
        const cliente = registros[index];
        alert(`Nombre: ${cliente.nombre}\nApellido: ${cliente.apellido}\nCorreo: ${cliente.correo}`);
    }

    function editarCliente(index) {
        const cliente = registros[index];
        const nuevoNombre = prompt("Editar nombre:", cliente.nombre);
        const nuevoApellido = prompt("Editar apellido:", cliente.apellido);
        const nuevoCorreo = prompt("Editar correo:", cliente.correo);

        if (nuevoNombre !== null && nuevoApellido !== null && nuevoCorreo !== null) {
            registros[index] = {
                nombre: nuevoNombre,
                apellido: nuevoApellido,
                correo: nuevoCorreo,
            };
            localStorage.setItem("clientes", JSON.stringify(registros));
            actualizarListaClientes();
        }
    }

    function borrarCliente(index) {
        const confirmacion = confirm("¿Estás seguro de que deseas borrar este cliente?");
        if (confirmacion) {
            registros.splice(index, 1);
            localStorage.setItem("clientes", JSON.stringify(registros));
            actualizarListaClientes();
        }
    }

    actualizarListaClientes();
});

