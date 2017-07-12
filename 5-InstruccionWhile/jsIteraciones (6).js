function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var promedio=0;

while (contador < 5)
{
	contador ++;
	numero = prompt ("ingrese un numero")
	numero = parseInt(numero);
	while(isNaN(numero))
	{
		numero = prompt("ingrese un numero");
		numero = parseInt (numero);
		
	}
	acumulador = acumulador + numero;

}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;


}//FIN DE LA FUNCIÓN