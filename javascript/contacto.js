



function validator(){

    const camp = document.getElementsByTagName("form")[0];
    console.log(camp);

    const Name = camp[1].value;
    console.log(Name);

    var flag = false;




    const msgError = document.getElementById("error0");

    if(Name.length < 2 || Name.length >= 33){
        msgError.innerHTML = "Incorrect. send an inteligible name."
    }else{
        msgError.innerHTML = "Correct. it's inteligible name."
        flag = true
    };

    const electronicMail = camp[2].value;
    const ErrorMail = document.getElementById("error1");
    if (electronicMail.indexOf("@", 0) == -1){
        ErrorMail.innerHTML = "Error. Mail hasn't '@' invalid."
        var flag = false
    }else{
        ErrorMail.innerHTML = "Valid. Mail has '@'."
        flag = true
    }

    const LrgMessage = camp[3].value;
    const ErrorLrg = document.getElementById("error2");
    if(LrgMessage.length <= 1){
        ErrorLrg.innerHTML = "Negative, the message is too short."
        var flag = false
    }else{
        ErrorLrg.innerHTML= "Affirmative."
        flag = true
    }

    const sending = document.getElementById("sent");
    if(flag){
        sending.innerHTML = "Sent righfully" 
    }else{
        sending.innerHTML = "Couldn't send"
    }

    // if(x.indexOf("@") == -1){
    //     msgError1
    // }
}