var pares = 0;
var numero = 0;

function Mostrar() {
    numero = prompt("ingrese un número")
    parseInt(numero);
    while (isNaN(numero)) {
        numero = prompt("ingrese un número")
    }

    for (i = 1; i != numero; i++) {
        if (i % 2 == 0) {
            alert(i);
            pares++;
        }
    }
    alert("Se han encontrado " + pares + " números pares.");


}//FIN DE LA FUNCIÓN