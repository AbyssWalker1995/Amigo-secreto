// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener('DOMContentLoaded', function() {
    const amigoInput = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');
    let amigos = [];

    window.agregarAmigo = function() {
        const nombre = amigoInput.value.trim();
        if (nombre === '') {
            alert('Por favor, ingresa un nombre válido.');
            return;
        }
        amigos.push(nombre);
        const li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);
        amigoInput.value = '';
    };

    window.sortearAmigo = function() {
        if (amigos.length === 0) {
            alert('No hay nombres en la lista.');
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];
        resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
    };
});