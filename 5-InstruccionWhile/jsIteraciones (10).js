function Mostrar()
{

	var positivos=0;
	var contpos=0;
	var negativos=1;
	var contneg=0;
	var ceros=0;
	var pares=0;
	var promediopositivos;
	var promedionegativos;
	var diferencia;
	//declarar contadores y variables 
	
	

	while(confirm ("¿Desea continuar?", true))
	{
		numero = prompt ("ingrese un numero");
		numero = parseInt(numero);

		while (isNaN (numero))
		{
				numero = prompt("ingrese un numero");
				numero = parseInt (numero);
		}
		
		if (numero < 0)
		{
			negativos += numero;
			contneg ++;

  			if (numero % 2 == 0)
			  {
				  pares++;
			  }
			
		}
		else
		{
			if (numero > 0)
			{
				positivos += numero;
				contpos ++;

				if (numero % 2 == 0)
			  		{
				  		pares++;
			  		}
				
			}
			else
				{
					ceros ++;
				}
		} 
	
	}
	
	promediopositivos = positivos/contpos;
	promedionegativos = negativos/contneg;
	diferencia = contpos - contneg;

	document.write('1) La suma de todos los positivos es = ' + positivos + '<br>');
	document.write('2) La cantidad de números positivos es = ' + contpos + '<br>');
	document.write('3) La suma de todos los negativos es = ' + negativos + '<br>');
	document.write('4) La cantidad de números negativos es = ' + contneg + '<br>');
	document.write('5) La cantidad de ceros es = ' + ceros + '<br>');
	document.write('6) La cantidad de nùmeros pares es = ' + pares + '<br>');
	document.write('7) El promedio de los números positivos es = ' + promediopositivos + '<br>');
	document.write('8) El promedio de los números negativos es = ' + promedionegativos + '<br>');
	document.write('9) La diferencia entre la cantidad de números positivos y negativos es de = ' + diferencia + '<br>');

	



}//FIN DE LA FUNCIÓN