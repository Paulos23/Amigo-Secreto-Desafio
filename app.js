let nombresAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre !== "") {
        nombresAmigos.push(nombre);
        actualizarLista();
        input.value = ""; // Limpiar el campo de entrada
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    nombresAmigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${nombre}`;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombresAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    const nombreSorteado = nombresAmigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>El amigo secreto es: <strong>${nombreSorteado}</strong></p>`;
}