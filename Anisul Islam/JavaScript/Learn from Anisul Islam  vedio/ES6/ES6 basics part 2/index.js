

//regular function and arrow function:
// regular function:
function messege1()
{
    console.log("hellow i am regular function")

}




let messege2=()=>{
    console.log("hellow i am arrow function")
}

messege1();
messege2();


// adding in regular function:
function add1(x,y){
    return x+y;
}
console.log(add1(10,20))


//adding arrow function :
let add2=(x,y)=>x+y;
console.log(add2(2,3));









// filtering object from data :
let sttudents=[
    {
        id:1,
        name:"Ibrahim",
        age:23,
        country:"bangladesh",
        gpa:3.43
    },
   
    {
        id:2,
        name:"mahi",
        age:26,
        country:"canada",
        gpa:3.99

    },
   
    {
        id:3,
        name:"anika",
        age:27,
        country:"america",
        gpa:3.80

    },
   
    {
        id:4,
        name:"onindo",
        age:32,
        country:"canada",
        gpa:3.44
    },
   
    {
        id:5,
        name:"maasruf",
        age:1,
        country:"america",
        gpa:5

    },
   
] 




// find object which gpa mark is more than 3.5
// regular funtion:
function info()
{
    return sttudents.filter(function(x){
        return x.gpa>3.5
    }).map(function(x){
        return x.country;
    })
}

console.log(info())


// arrow function:
let info2=()=>{ 
    return sttudents.filter((x)=>x.gpa>3.5).map((y)=>y.name)
}
console.log(info2());





// destructuring arrey and objects
// arrey distructure:
let ary2 =[10,20,30,40,50];
let [a1,a2,a3,a4,a5]= ary2
console.log(a1)
console.log(a2)

let [b1,b2,...b3]=ary2
console.log(b3);

// swaping with distructure :
let    c=11,d=22;
[c,d]=[d,c]
console.log(c);
console.log(d);


//object distructure :
let stdntInfo={
    id:1,
    nme:"ibrahim",
    class:13,
    gpa:3.43,
    country:{
        birth_country: "bangladesh",
        living_country: "canada"
    }
}

let {id,nme,country}=stdntInfo;

console.log(id);
console.log(nme);
console.log(country);
console.log(country.birth_country)

