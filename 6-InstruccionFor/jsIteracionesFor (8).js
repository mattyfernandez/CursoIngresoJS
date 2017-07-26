numero = 0;


function Mostrar() {
    numero = prompt("ingrese un número")
    parseInt(numero);
    while (isNaN(numero)) {
        numero = prompt("ingrese un número")
    }
    var div = 0;
    for (i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            div++;
            if (div > 2) {
                break;
            }
        }
    }
    if (div == 2) {
        alert("El numero es primo")
    }
    else {
        alert("El número no es primo")
    }
    div = 0;
}