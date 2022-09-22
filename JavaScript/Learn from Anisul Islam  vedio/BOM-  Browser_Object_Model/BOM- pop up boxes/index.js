// popup boxes contain - confirm, prompt,alert 





// function fncn()
// {
//     var value = confirm("do u want to delete ?");
//     if(value==true){
//         console.log("deleted")
//     }
//     else if(value==false)
//     {
//         console.log("not deleted")
//     }
// }

// fncn();



var para= document.querySelector("h2");
var nme = prompt("enter your name : " );
if(nme=="" || nme==null){
    para.innerHTML="No name found"
}
else{
    para.innerHTML="welcome "+nme;
}


