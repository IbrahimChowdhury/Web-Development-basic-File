
var frm=document.querySelector("form");
var firstname= document.querySelector("#name1")
var lastname=document.querySelector("#name2")
var Email=document.querySelector("#email");
var Password= document.querySelector("#password")

frm.addEventListener("submit", frmhandler)
function frmhandler(e)
{
e.preventDefault()
   console.log(firstname.value);
   console.log(lastname.value)
   console.log(Email.value)
   console.log(Password.value)
}

