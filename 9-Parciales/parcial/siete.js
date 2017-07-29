var nota = 0;
var promedio = 0;
var sexo;
var min = 11;
var aprobados = 0;
var contador = 0;

function Mostrar() {

    while (contador < 5) {
        contador++;

        sexo = prompt("Ingrese su sexo eligiendo entre f y m.");

        while (sexo != "f" && sexo != "m") {
            sexo = prompt("Ingrese su sexo eligiendo entre f y m.");

        }

        nota = parseInt(prompt("Ingrese su nota"));

        while (isNaN(nota)) {
            nota = parseInt(prompt("Ingrese su nota"));
        }

        while (nota < 0 || nota > 10) {
            nota = parseInt(prompt("Ingrese su nota (del 1 al 10)"));
        }

        promedio += nota;

        if (nota < min) {
            min = nota;
        }

        if (nota >= 6 && sexo == "m") {
            aprobados++
        }
    }
    document.write(
        "a) El promedio de las notas totales es igual a: " + (promedio / contador) + "<br>"
        + "b)La nota mas baja es: " + min + "<br>"
        + "c)La cantidad de varones aprobados es: " + aprobados)

}

