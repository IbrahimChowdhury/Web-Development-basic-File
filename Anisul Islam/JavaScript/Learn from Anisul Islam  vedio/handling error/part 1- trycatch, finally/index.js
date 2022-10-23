// alert("hellow ")
// alert(x)
// alert("everyone")

// after showing hellow the alert does not show everyone because there is a error 

try{
    alert("hellow ");
   alert(x);
}
catch(err)
{
   console.log(err);
}
finally{
    alert("everyone");
}