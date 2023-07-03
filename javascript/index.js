// Botones
idImagenVisible="contenido1";
function mostrar(id)
{
    document.getElementById(idImagenVisible).style.display="none";

    document.getElementById(id).style.display="flex";

    idImagenVisible=id;
}

var buttonSelected = document.querySelectorAll('button');
buttonSelected.forEach(function(butt){
    butt.addEventListener("click", function(){
        butt.classList.add('button-selected');

        buttonSelected.forEach(function(otherbutt){
            if (otherbutt!==butt){
                otherbutt.classList.remove('button-selected');
            };
        });
    });
});

// Tablas
idTablaVisible="table-7op-arithmetic";
function mostrarT(id)
{
    document.getElementById(idTablaVisible).style.display="none";

    document.getElementById(id).style.display="inline-block";

    idTablaVisible=id;
}