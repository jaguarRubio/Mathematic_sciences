//reference
const aplicacion = document.querySelector('.container')

const getURL = new URLSearchParams(window.location.search)
id = getURL.get('id')
console.log(id)

const url = 'https://jsonplaceholder.typicode.com/users'
if(id != null){ //if it catch value: print
fetch(`${url}/${id}`)

    .then(res => res.json())
    .then(data => {
        const name = document.createElement('p')
        const email = document.createElement('p')
        const phone= document.createElement('p')
        name.innerHTML = data.name
        email.innerHTML = data.email
        phone.innerHTML = data.phone
        aplicacion.appendChild(name)
        aplicacion.appendChild(email)
        aplicacion.appendChild(phone)
    })
    .catch(err => console.log(err))
}



//validacion
function validator(){

    const camp = document.getElementsByTagName("form")[0];
    console.log(camp);

    const Name = camp[1].value;
    console.log(Name);

    var flag = false;
    var cont = 0;

    var arti = document.querySelectorAll('form fieldset article');
    var redMsg = '#ff0000'; //it will be added VUE interactive real time it'll be far better.
    var btnError = '#999900';

    const msgError = document.getElementById("error0");

    if(Name.length < 2 || Name.length >= 33){
        msgError.innerHTML = "Incorrect. send an inteligible name."
        msgError.style.backgroundColor = redMsg;
        arti[0].style.backgroundColor = redMsg;
    }else{
        msgError.innerHTML = "Correct. it's inteligible name."
        flag = true
        cont += 1;
    };



    const electronicMail = camp[2].value; 
    const ErrorMail = document.getElementById("error1");
    if (electronicMail.indexOf("@", 0) == -1){
        ErrorMail.innerHTML = "Error. Mail hasn't '@' invalid."
        var flag = false
        ErrorMail.style.backgroundColor = redMsg;
        arti[1].style.backgroundColor = redMsg;
    }else{
        ErrorMail.innerHTML = "Valid. Mail has '@'."
        flag = true
        cont += 1;
    }

    const LrgMessage = camp[3].value;
    const ErrorLrg = document.getElementById("error2");
    if(LrgMessage.length <= 1){
        ErrorLrg.innerHTML = "Negative, the message is too short."
        var flag = false
        ErrorLrg.style.backgroundColor = redMsg;
        arti[2].style.backgroundColor = redMsg;
    }else{
        ErrorLrg.innerHTML= "Affirmative."
        flag = true
        cont += 1;
    }

    const sending = document.getElementById("sent");
    var btn = document.querySelector('button')
    var fieldset = document.querySelector('fieldset')

    if(flag && cont == 3){
        sending.innerHTML = "Sent righfully"
    }else{
        sending.innerHTML = "Couldn't send"
        sending.style.backgroundColor = redMsg;
        arti[3].style.backgroundColor = redMsg;
        btn.style.backgroundColor = btnError;
        btn.style.animation = 'none';
        fieldset.style.gap = '4px 0px';
    }

    // if(x.indexOf("@") == -1){
    //     msgError1
    // }
}