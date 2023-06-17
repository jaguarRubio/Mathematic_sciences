//reference
const aplicacion = document.querySelector('.container')

//petition
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url) //haces peticion
.then(res => res.json()) //capturar respuesta - parsear a .json para mostrarla. //recoges la respuesta y la pasas a formato json
.then(data => {
    data.forEach(usuario => {
        const p = document.createElement('p')
        p.setAttribute('id', usuario.id)
        p.innerHTML = usuario.name
        p.addEventListener('click', function(){
            window.location.href = `../contacto.html?id=${usuario.id}`
        })
        aplicacion.appendChild(p)      //iterar objeto data
    });
})
.catch(err => console.log(err))