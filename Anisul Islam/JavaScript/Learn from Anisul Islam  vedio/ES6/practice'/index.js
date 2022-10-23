
let student = [
    {
        id: 1,
        name: "ibrahim",
        class: 9,
        gpa: 3.43
    },
    {
        id: 2,
        name: "mahi",
        class: 12,
        gpa: 3.99
    },
    {
        id: 3,
        name: "anika",
        class: 12,
        gpa: 3.88
    },
    {
        id: 1,
        name: "chhowa",
        class: 9,
        gpa: 3.67
    }
]


// regular function:
console.log("using regular function :")

function info() {
    return student.filter(function (x) { 
        return x.gpa > 3.5
     }).map(function(x){
        return x.name;
     })
}
console.log(info());



// arrow function: 
console.log("using arrow  function :")


let info2=()=>{
    return student.filter((x)=>x.gpa>3.5).map((x)=>x.name)
}
console.log(info2());



