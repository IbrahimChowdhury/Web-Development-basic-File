// arrey related things

var names=["ibrahim","mijan","hridoy","utso","chowdhury"];
console.log(names);

//if we wish to add some data then we can push the data in the last of the arrey 
names.push("rokey","hrirttik","monkey");
console.log(names);

// length of the string :
console.log(names.length);

// delete the last Elementof the arrey
names.pop();
console.log(names);
console.log(names.length);


// shift() হচ্ছে pop এর বিপরীত । মানে pop পিছনের দিক থেকে element delete করে এবং shift সাম্নের দিক থেকে element delete করে 
names.shift();
console.log(names); 
console.log(names.length); 

//unshift() হচ্ছে push এর বিপরিত । মানে হচ্ছে  push পিছনের দিকে element add করে এবং unshift() সামনের দিক থেকে element add করে ।
names.unshift("Ibrahim ");
console.log(names);
console.log(names.length);

//splice এর মাধ্যমে arreyতে থেকে element add or remove করা যায় । 
//   names.splice(position at adding element , numbers of  removing element from front, "what element you want to add")
names.splice(2,0,"chhowa","mahi","anika");
console.log(names);
console.log(names.length);

names.splice(0,2);   //names.splice(adding , how many want to add, ); 
console.log(names);
console.log(names.length);

var nums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
console.log(nums);
console.log(nums.length);

// splice : 

nums.splice(3,4);
console.log(nums);
console.log(nums.length);

// sorting of strings or cherecter :
var txt=['g','e','f','a','l','d','j','k','m','i','l','c','n','b','h','o','p'];
txt.sort();
console.log(txt);

//reverse sorting of the arrey:
txt.reverse();
console.log(txt);

//these are the sorting of cherecter of strings or cherecters 

// sorting of the numbers from increasing orders :
var num=[5,4,6,7,3,2,8,1,9,10,14,11,12,15,13,18,16,19,17,20];
num.sort(function(a,b)
{
   return a-b;
})
console.log(num);

//sorting of numbers from decreasing orders:
num.sort(function(a,b)
{
    return b-a;
})
console.log(num);









