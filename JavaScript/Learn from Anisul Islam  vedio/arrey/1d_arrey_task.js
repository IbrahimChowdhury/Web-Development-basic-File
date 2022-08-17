/*   task: create a function called highestScore that will 
       -receive a 1d arrey called scores
       -return the highest score                        */


function highestScore(n)
{
   var x=[];
document.write("value of the arrey is :  <br>");
     for (var i=0;i<n;i++)
     {
        var p=parseFloat(prompt("enter the value : "));
        x.push(p);
        document.write(x[i] +"<br>");
     }

     x.sort(function(a,b)
     {
        return a-b;
     });
     document.write("The HighestScore is : "+ x[n-1]);

}

highestScore(5);





































