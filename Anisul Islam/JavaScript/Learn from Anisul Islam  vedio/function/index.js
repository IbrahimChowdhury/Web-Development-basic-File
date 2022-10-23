// creating function for adding two numbers:

function addition(x,y)
{
    var z=x+y;
    document.write("Sum = "+ z + "<br>" );
}

//creating function for substraction:

function substraction(x,y)
{
    var z=x-y;
    document.write("Substraction = " + z +"<br>");
}



// calling the function
addition(20,40);
substraction(60,20);

document.write("<br><br><br><br>");

//IIFEs (Immidiately invokable Function Expression) এইটার মানে হচ্ছে আমরা যে function টা তৈরি করব সেটা সাথেসাথেই print করবে

// creating IIFEs:

(function IIFEs(msg)
{
   document.write("This is <b> IIFEs </b>(Immidiately Invokable function expression ) <br> <br>")
}) ();


// task1: creating a iifes function to add two numbers.
(function add(num1,num2)
{
    var num=num1+num2;
    document.write("sum Of the two numbers : "+num1+" + "+num2+" = " +num + "<br>  <br>  <br>" );
})(2,4);





//function expression : functionটাকে একটা variable এর মধ্যে রাখলে সেটা function expression হয়ে যায়

 var  exp =  function display()
{

document.write("This is Function Expresion <br> <br> <br> ");

}

exp(); //thats how calling a expression




