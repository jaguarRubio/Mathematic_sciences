// Botones
idImagenVisible="contenido1";
function mostrar(id)
{
    document.getElementById(idImagenVisible).style.display="none";

    document.getElementById(id).style.display="block";

    idImagenVisible=id;
}

// Tablas
idTablaVisible="table-7op-arithmetic";
function mostrarT(id)
{
    document.getElementById(idTablaVisible).style.display="none";

    document.getElementById(id).style.display="inline-block";

    idTablaVisible=id;
}