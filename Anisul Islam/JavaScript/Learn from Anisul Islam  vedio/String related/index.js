//how to concatenate strings 
var firsh_name="ibrahim ";
var last_name="chowdhury";
var full_name=firsh_name+last_name;

document.write("my name is : "+ full_name );

var txt1="hellow ";
var txt2="i am here";
document.write( "<br>"+  txt1.concat(txt2));


//get the length of the strings
var nme ="usuf";
var len=nme.length;
document.write("<br> length of the name is : " + len + "<br>");


//get the name as input

/* let naame = prompt("enter your name : ");
document.write(" <b>length of name : <b> " + naame.length);  */


//getting the cherecter in a string 
var naame="ibrahim chowdhury";
document.write("cherecter at the naame at point 4 is : "+ naame.charAt(4));

//naame at uppercase letter.
document.write("<br> Uppercase of the naame is :" + naame.toUpperCase());

// naame at lowercase 
document.write("<br> lower case of the naame is : " + naame.toLowerCase() +"<br>");


// slice of the text 
var text= "Bangladesh";
document.write(text.slice(0,5));



