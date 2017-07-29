function Mostrar() {

    var monto = 0;
    var maximo = 0;
    var minimo = 0;
    var bandera = 0;

    for (i = 1; i < 25; i++) {
        alert("dia " + i);
        monto = prompt("Ingrese los montos de los 24 días habiles");
        monto = parseInt(monto);

        while (isNaN(monto)) {
            monto = prompt("Ingrese un numero correcto");
        }

        while (monto <= 0) {
            monto = prompt("Ingrese un numero correcto");
        }

        if (bandera == 0) {
            maximo = monto
            minimo = monto
            bandera++;
        }

        if (monto > maximo) {
            maximo = monto
        }
        if (monto < minimo) {
            minimo = monto
        }

    }
    document.writeln("El mayor monto del mes es: " + maximo);
    document.write("El monto mas bajo del mes es: " + minimo);
}
