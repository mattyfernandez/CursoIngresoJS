function Mostrar() {

    var largo = parseInt(document.getElementById("alrgo").value);
    var ancho = parseInt(document.getElementById("ancho").value);
    alert("Para alambrar su terreno necesitaría: " + (((largo*2) + (ancho*2))*3) + " metros de alambre");
}

 
