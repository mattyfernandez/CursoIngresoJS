function Mostrar()
{
for (i=0; i<1000000; i++)
{
    alert(i);

    if (!confirm("desea continuar?", false))
    {
        break;
    }

}



}//FIN DE LA FUNCIÓN