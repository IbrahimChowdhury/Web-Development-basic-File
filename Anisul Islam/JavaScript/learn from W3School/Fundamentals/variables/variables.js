
// variable declare , initialization 
var msg="hellow world!";
console.log(msg);
var str="hey there i am ibrahim";
console.log(str);
var a,b,s;
a=23,b=44;
s=a+b;
console.log(s);


// object created:
let contact = {
first_name: "ibrahim",
last_name: "chowdhury",
email: "ibrahimchowdhury100@gmail.com",
phone:"01734935995",
address: {
    street:"north",
    builing : "4000",
    city: "menchester",
    Country: "Bangladesh",
}

}


console.log(contact.address); // it will show the address of the contact


// tofixed method:
var num= 13.0034;
console.log(num.toFixed(3)); // num= 13.003

// toExponential method to get the number in  exponential numbers
var x=10;
var y=100;
var z=1000;

console.log(x.toExponential()); //le+1
console.log(y.toExponential()); //le+2
console.log(z.toExponential()); //le+3
 
//  toPrecision method : 
var x=9.345238;

console.log("number is " + x );


console.log(x.toPrecision(1));
console.log(x.toPrecision(2));
console.log(x.toPrecision(3));
console.log(x.toPrecision(4));
console.log(x.toPrecision(5));
console.log(x.toPrecision(6));
console.log(x.toPrecision(7));


var y=123.654;
console.log(y.toPrecision(1))


var num = prompt("enter a number");
if(num>0){console.log("the number is positive!");}
else {console.log("the number is Negetive!");}


var i;
for(i=0;i<5;i++)
{
    console.log("hellow there"+i);
}