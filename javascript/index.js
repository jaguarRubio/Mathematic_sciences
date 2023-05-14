// Botones
idImagenVisible="contenido1";
function mostrar(id)
{
    document.getElementById(idImagenVisible).style.display="none";

    document.getElementById(id).style.display="block";

    idImagenVisible=id;
}