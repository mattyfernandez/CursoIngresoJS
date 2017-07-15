/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
    var cant;
    var marca;
    var descuento=0;
    var total;

function CalcularPrecio () 
{   
    cant = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;

    if (cant>= 6)
    {
        descuento = 0.5;
    }

    switch(marca)
    {
        case "ArgentinaLuz":
        
            if(cant==5)
            {
                descuento = 0.6;
            }
            else if (cant==4)
            {
                descuento = 0.75;
            }
            else if (cant == 3)
            {
                descuento = 0.85
            }
            break;
        
        case "FelipeLamparas":
        
            if(cant==5)
            {
                descuento = 0.7;
            }
            else if (cant==4)
            {
                descuento = 0.75;
            }
            else if (cant == 3)
            {
                descuento = 0.85
            }
            break;

        case "Jeluz":
        
            if(cant==5)
            {
                descuento = 0.7;
            }
            else if (cant==4)
            {
                descuento = 0.8;
            }
            else if (cant == 3)
            {
                descuento = 0.95
            }
            break;

        case "HazIluminacion":
        
            if(cant==5)
            {
                descuento = 0.7;
            }
            else if (cant==4)
            {
                descuento = 0.8;
            }
            else if (cant == 3)
            {
                descuento = 0.95
            }
            break;

        case "Osram":
        
            if(cant==5)
            {
                descuento = 0.7;
            }
            else if (cant==4)
            {
                descuento = 0.8;
            }
            else if (cant == 3)
            {
                descuento = 0.95
            }
            break;
    }
        document.getElementById("precioDescuento").value = cant * 35 * descuento;

        total = document.getElementById("precioDescuento").value = cant * 35 * descuento; 
        if (total > 120)
        {
            alert("IIBB usted pagó " + (total *1.1) + "siendo el impuesto al pago de " + (total*0.1 ))
        }
   

    
    

 	
}
