function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta;

	respuesta = confirm("desea continuar?")

	while(respuesta == true)
	{
		contador++
		numero = prompt ("ingrese un numero");
		numero = parseInt(numero);
		while (isNaN (numero))
			{
				numero = prompt("ingrese un numero");
				numero = parseInt (numero);
			}
		if (numero >= 0 )
			{ 
				positivo += numero;
			}
		else
			{
				negativo *= numero;
			}
			respuesta = confirm ("desea continuar")
			
		if (respuesta == false)
			{
				break
			}

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN