//Valor absoluto de un número;
var m = prompt('Ingrese un valor: ')
function abs (m) {
    var tempora;
    if (m > 0) {
        tempora = m;
        return tempora;
    } else if ( m == 0 ){
        return m;
    } else {
        tempora = (-1) * m;
        return tempora; 
    }
}

document.write(abs(m));