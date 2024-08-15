document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.querySelector('#boton');
    const boton = document.querySelector('#miBoton');

    contenedor.style.padding = '5px';
    contenedor.style.backgroundColor = 'green';

    contenedor.addEventListener('click', function() {
        alert('¡Hola! Soy el div');
    });
});
