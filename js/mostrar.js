/*function mostrar(idseccion){
//ocultar sesiones
var secciones=document.getElementsByTagName('section');
            for (var i=0; i < secciones.length; i++) 
            {
                secciones[i].style.display = 'none';
            }
//visualice las sesiones
            var sesion=document.getElementById(idseccion);
            sesion.style.display='block';
        }*/
function mostrar(idseccion){
            //ocultar sesiones
    var secciones=document.getElementsByTagName('section');
        for (var i=0; i < secciones.length; i++) 
        {
        secciones[i].style.display = 'none';
        }
            //visualice las sesiones
    var sesion=document.getElementById(idseccion);
    sesion.style.display='block';
}