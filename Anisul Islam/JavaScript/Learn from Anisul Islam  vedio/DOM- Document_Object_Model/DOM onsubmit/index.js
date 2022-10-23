
// first find the form from the html
var form = document.querySelector("#form");
//then find the name,email,password from the form
var nme = form.querySelector("div #name")
var email = form.querySelector("div #email")
var password = form.querySelector("div #password")


//then add eventlistner to the form 
form.addEventListener("submit", formHandler)

function formHandler(e)
{
    
e.preventDefault();     //this is to delay thescreen of the console screen 
    var userinfo=
    {
        name:nme.value,
        email:email.value,
        password:password.value
    }
    console.log(userinfo)
}









