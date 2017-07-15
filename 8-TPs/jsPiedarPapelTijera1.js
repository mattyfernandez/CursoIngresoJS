/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var ganadas=0;
var perdidas=0;
var empatadas=0;
var resultado;
var bandera=0;

function comenzar()
{
    if (ganadas > perdidas + empatadas && (ganadas + perdidas + empatadas) > 3)
{
    ganadas--;
    perdidas++;
    alert("perdiste");
}
	eleccionMaquina = Math.floor(Math.random()*(4-1))+1;
    console.log(eleccionMaquina);

}//FIN DE LA FUNCIÓN

function MostrarResultado()
{
    alert (resultado 
        + " | Gandadas: " + ganadas 
        + " Empatadas: " + empatadas
        + " Perdidas: " + perdidas);
}


function piedra()
{
    comenzar();
	switch (eleccionMaquina)
    {
        case 1:
        {
            empatadas++;
            resultado = "Empataste";
            MostrarResultado();
            break;
           
        }
        case 2:
        {
            perdidas++;
            resultado = "Perdiste";
            MostrarResultado();
            break;
        }
        case 3:
        {
            ganadas++;
            resultado = "Ganaste";
            MostrarResultado();
            break;
        }
    }
    

}
//FIN DE LA FUNCIÓN

function papel()
{
    comenzar();
	switch (eleccionMaquina)
    {
        case 1:
        {
            ganadas++;
            resultado = "Ganaste";
            MostrarResultado();
            break;
        }
        case 2:
        {
            empatadas++;
            resultado = "Empataste";
            MostrarResultado();
            break;
        }
        case 3:
        {
            perdidas++;
            resultado = "Perdiste";
            MostrarResultado();
            break;
        }
    }
}
//FIN DE LA FUNCIÓN

function tijera()
{
    comenzar();
	switch (eleccionMaquina)
    {
        case 1:
        {
            perdidas++;
            resultado = "Perdiste";
            MostrarResultado();
            break;
        }
        case 2:
        {
            ganadas++;
            resultado = "Ganaste";
            MostrarResultado();
            break;
        }
        case 3:
        {
            empatadas++;
            resultado = "Empataste";
            MostrarResultado();
            break;
        }
    }
}



//document.getElementById("FormIngreso")
//FIN DE LA FUNCIÓN