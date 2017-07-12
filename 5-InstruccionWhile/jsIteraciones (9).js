function Mostrar()
{

	var contador=0;
	var minimo;
	var maximo;
	var bandera=true;

	respuesta = confirm ("Desea continuar?")

	while(confirm ('desea continuar?', true))
	{
		numero = prompt ("ingrese un numero");
		numero = parseInt(numero);

		while (isNaN (numero))
			{
				numero = prompt("ingrese un numero");
				numero = parseInt (numero);
			}

		if(bandera)
		{
			minimo = numero;
			maximo = numero;
			bandera = false; 
		}
		else 
			{
				if (numero > maximo)
				{
					maximo = numero;
				}
				if (numero < minimo)
				{
					minimo = numero;
				}

		}
			document.getElementById('minimo').value=minimo;
			document.getElementById('maximo').value=maximo;

	}




}//FIN DE LA FUNCIÓN