var div = 0
var numero = 0

function Mostrar() {
    numero = prompt("ingrese un número")
    parseInt(numero);
    while (isNaN(numero)) {
        numero = prompt("ingrese un número")
    }

    for (i = 1; i != numero; i++) {
        if (numero % i == 0) {
            alert(i);
            div++;
        }
    }
    alert("Se han encontrado " + div + " números divisores.");



}//FIN DE LA FUNCIÓN