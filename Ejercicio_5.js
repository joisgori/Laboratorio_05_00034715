//Validación del radio de un circulor
var rad = prompt('Ingrese un valor para el radio del círculo: ')

function circ(rad) {
    if (rad <= 0) {
        alert('¡ERROR DEBE SER UN VALOR SUPERIOR A CERO!');
    } else {
        var pi = 3.141516;
        var resultado;
        resultado = (pi * rad * rad);
        document.write(resultado);
    }
}

circ(rad);
