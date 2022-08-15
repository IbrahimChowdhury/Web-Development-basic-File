var num=12;
console.log(typeof(num));

num = "12";
console.log(typeof(num));

num = parseInt(num);
console.log(typeof(num));

num= parseFloat(num);
console.log(typeof(num));

console.log("toFixed method:")
// tofixed method: দশমিক এর পরে কত ঘর নিব সেতা দেখানোর জন্য ব্যাবহার করা হয়
num=12.2344567789;
console.log(num.toFixed());
console.log(num.toFixed(1));
console.log(num.toFixed(2));
console.log(num.toFixed(3));
console.log(num.toFixed(4));
console.log(num.toFixed(5));



// toPrecision method : এইটা পুরা সংখ্যা নিয়ে কাজ করে 
 
console.log("toprecision  method:");
num=243.22461769;
console.log(num.toPrecision());
console.log(num.toPrecision(1));
console.log(num.toPrecision(2));
console.log(num.toPrecision(3));
console.log(num.toPrecision(4));
console.log(num.toPrecision(5));
console.log(num.toPrecision(6));



// String concatenation and string add
console.log("String Concatenation and String add :");
var first_name ="ibrahim ";
var last_name="chowdhury";
var full_name=first_name + last_name;
console.log("My name is "+full_name);






