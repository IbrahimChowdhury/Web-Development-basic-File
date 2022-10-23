"use strict"

let x,y,z,sum;
x=10;
y=20;
z=30;
sum=x+y+z;
console.log("the sum is "+sum+" points");
console.log(`the sum is ${sum} points`)  // very efficient 


var name = "Ibrahim";
console.log(`my name is ${name}. And now i am studing in honours 1st year `);



k=24;
console.log(k);  // javascript  এ একটি veriable declare করার আগে ওইটাকে  use kora jay - এইটাকে  javascript  এর hoisting behaviour বলে
 var k;// if we use let insted of var then we can not access k and the console of the browser will say that reference error




// default and rest parameter

function messege(txt=" default text")
{
    console.log(txt)   //if we do not send any messege or txt then the " default text" will print in console
}
messege();
messege("hellow i am ibrahim");


// rest parameter:
function rst(x,y,z)
{
    console.log(`x=${x}, y=${y}, z=${z} `);
}
rst(10,20,30,40,50,60);



function rstpara(x,y,...z)
{
    console.log(`x=${x}, y=${y}, z=${z} `);
}
rstpara(10,20,30,40,50,60);



// spread operator 

function spread(x,y,z)
{
return x+y+z;
}

var arrey=[1,2,3];
console.log(spread(...arrey))


// concatinate two object using spread object
let p1={
    name: "ibrahim",
    age: 23
}
let p2={
    nationlity:  "bangladeshi",
    country: "bangladesh"
}

let p={...p1,...p2};
console.log(p);








// object letaral in ES6
   function stdnt(name,age)
   {
    return{name,age}
   }
console.log(stdnt("ibrahim", 23))



// object এর মধ্যে function declare করা 

let text={
    txt(){
        return `i am function in object`
    }
}
console.log(text.txt())






// for...of      and       for...in
console.log("for...of:")
let ary=["ibrahim","mahi","usuf","anika","masruf"];
for(let name of ary){
    console.log(name);
}

//for...in: object theke console log e print korbe
console.log("for...in:")

let stdnt2={
    id:72,
    name:"ibrahim",
    age:23
}

for(let x in stdnt2){
    //console.log(x+":"+stdnt2[x]);
    console.log(`${x} : ${stdnt2[x]}`)
}





// forloop and forEach loop
console.log("loop:")
let nums= [1,2,3,4,5];
for(let i=0;i<nums.length;i++)
{
    console.log(nums[i]);
}


// forEach loop
console.log("forEach loop:")

let nums2=[10,20,30,40,50,60,70];
nums2.forEach(function(x){
    console.log(x)
})



// making square from nums 
let square=[];
nums2.forEach(function(x){
    square.push(x*x);
})
console.log(square)



// making square numbers using map function------- 
let nums3=[2,3,4,5,6,7];
let sqare2=nums3.map(function(x){
    return x*x;
})
console.log(sqare2);


// filtering method using filter

console.log("filtering :")

let num4=[4,7,1,15,12,56,22,78,98,34,31];
let fltr=num4.filter(function(x){
    return x>40;
})
console.log(num4)
console.log(fltr)







