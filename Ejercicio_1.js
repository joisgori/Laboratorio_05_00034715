/*VERIFICAR SI UNA PALABRA ES PALÍNDROMA*/
var pa = prompt('Escriba una palabra a continuación: ');
var tam = pa.length;
var inver = '';

function Palindrom(tam) {
    while (tam >= 0) {
        inver = inver + pa.charAt(tam);
        tam--;
    }
    if (pa == inver) {
        document.write('Las palabras son palindromas');
        document.write('\n');
    } else {
        document.write('Las palabras NO son palindromas');
        document.write('\n');
    }
}

Palindrom(tam);
document.write('\n');
document.write(pa);
document.write('\n');
document.write(inver);
document.write('\n');

//Con esto mando la palabra al arreglo...

