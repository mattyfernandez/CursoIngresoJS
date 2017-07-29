function Mostrar() {
    var num1 = 0;
    var num2 = 0;
    num1 = prompt("ingrese un numero");
    num1 = parseInt(num1);

    num2 = prompt("ingrese otro numero");
    num2 = parseInt(num2);

    if (num1 == num2) {
        document.writeln("el resultado es " + (num1 * num2));

    }

    if (num1 > num2) {
        document.writeln("el resultado es " + (num1 - num2));

    }

    if (num1 < num2) {
        document.writeln("el resultado es " + (num1 + num2));

    }
}
