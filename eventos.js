document.addEventListener('DOMContentLoaded', function() {
    const divBoton = document.querySelector('#boton');
    const boton = document.querySelector('#miBoton');

    divBoton.style.padding = '5px';
    divBoton.style.backgroundColor = 'green';

    function mostrarAlerta() {
        alert('¡Hola!');
    }

    boton.addEventListener('click', mostrarAlerta);
});
