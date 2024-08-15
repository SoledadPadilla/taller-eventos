document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.querySelector('boton');
    contenedor.style.padding = '5px';
    contenedor.style.backgroundColor: "green";

    // Agregar manejador de eventos para el click en el div
    contenedor.addEventListener('click', function() {
        alert('¡Hola! Soy el div');
    });
});
