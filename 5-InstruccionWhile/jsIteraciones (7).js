function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

while(respuesta != "si")
{
	contador++;
	numero = prompt ("ingrese un numero");
	numero = parseInt(numero);
	while (respuesta == "si")
	{
		document.getElementById('suma').value=acumulador;
		document.getElementById('promedio').value=acumulador/contador;
	}
	acumulador = acumulador + numero;

}



}//FIN DE LA FUNCIÓN