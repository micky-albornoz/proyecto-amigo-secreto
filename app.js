// Declara un array para almacenar los nombres de los amigos.
// Este será nuestro "almacén" de datos principal.
let amigos = [];

/**
 * Agrega un amigo a la lista.
 * Esta función se llama cuando el usuario hace clic en el botón "Añadir".
 */
function agregarAmigo() {
    // Obtiene el elemento input donde el usuario escribe el nombre. 
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;

    // Valida que el campo de entrada no esté vacío.
    if (nombreAmigo === '') {
        // Si está vacío, muestra una alerta al usuario.
        alert('Por favor, inserte un nombre válido.');
        // Detiene la ejecución de la función para no agregar un nombre vacío.
        return;
    }

    // Agrega el nombre del amigo al array 'amigos' usando el método push. 
    amigos.push(nombreAmigo);
    
    // Muestra en la consola del navegador el estado actual del array (útil para depuración).
    console.log(amigos);

    // Limpia el campo de entrada para que el usuario pueda escribir otro nombre. 
    inputAmigo.value = '';

    // Llama a la función para actualizar la lista visible en la pantalla.
    actualizarListaAmigos();
}

/**
 * Actualiza la lista de amigos que se muestra en la pantalla.
 * Esta función refresca la lista cada vez que se agrega un nuevo amigo.
 */
function actualizarListaAmigos() {
    // Obtiene el elemento <ul> donde se mostrarán los nombres.
    let lista = document.getElementById('listaAmigos');

    // Limpia la lista actual para evitar nombres duplicados al actualizar.
    lista.innerHTML = '';

    // Recorre el array 'amigos' para agregar cada nombre a la lista en el HTML.
    for (let i = 0; i < amigos.length; i++) {
        // Por cada amigo, crea un elemento de lista <li>.
        let item = document.createElement('li');
        // Asigna el nombre del amigo al texto del elemento <li>.
        item.textContent = amigos[i];
        // Agrega el nuevo elemento <li> a la lista <ul>.
        lista.appendChild(item);
    }
}

/**
 * Realiza el sorteo del amigo secreto.
 * Esta función se llama cuando el usuario hace clic en el botón "Sortear amigo".
 */
function sortearAmigo() {
    // Valida que haya al menos 2 amigos en la lista para que el sorteo tenga sentido. 
    if (amigos.length < 2) {
        alert('Debes agregar al menos 2 amigos para realizar el sorteo.');
        // Detiene la ejecución si no hay suficientes amigos.
        return;
    }

    // Genera un índice aleatorio basado en el tamaño del array 'amigos'. 
    // Math.random() genera un número decimal entre 0 y 1.
    // Al multiplicarlo por la longitud del array, obtenemos un número entre 0 y la longitud-1.
    // Math.floor() redondea hacia abajo para obtener un índice de array válido (0, 1, 2, ...).
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtiene el nombre del amigo secreto usando el índice aleatorio. 
    let amigoSecreto = amigos[indiceAleatorio];

    // Obtiene el elemento donde se mostrará el resultado del sorteo.
    let resultado = document.getElementById('resultado');
    
    // Muestra el nombre del amigo secreto en la pantalla. 
    resultado.innerHTML = `¡El amigo secreto es: <strong>${amigoSecreto}</strong>!`;
}
