var indiceSiguiente = 1, indiceAnterior = 0, temp;
function fibonacci(k){
    var a = 1, b = 0, temp;
  
    while (k >= 0){
      temp = indiceSiguiente;
      indiceSiguiente = indiceSiguiente + indiceAnterior;
      indiceAnterior = temp;
      k--;
      document.write(indiceAnterior);
      document.write('<br>');
    }
  
    return indiceAnterior;
  }

var k = prompt('De un número tope para la serie de fibonacci');
  fibonacci(k);

