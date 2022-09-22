// console.log("1")


// let l1=()=>{
//     console.log("2")
// }
// setTimeout(l1,2000);

// console.log("3")
// console.log("4")
// console.log("5")




/*
let p1=()=>{
    console.log("task1")
}



let p2=()=>
{
   setTimeout(() => {
    console.log("task2 was loading ");

   }, 3000);
}

let p3=()=>{
    console.log("task3")
}
let p4=()=>{
    console.log("task4")
}
let p5=()=>{
    console.log("task5")
}



p1();
p2();
p3();
p4();
p5();


*/





// function square(x)
// {
//     console.log(`square of ${x} : ${x*x}`);
// }


// // let y= square;
// // y(4);


// // callback and higher order function:

// function higherOrderFunction(num, callback){
//          callback(num);
// }
// higherOrderFunction( 7 ,square)





// callback function :

let p1=(callback)=>
{
    setTimeout(() => {
        console.log("one");
    callback();
    }, 500);
}
let p2=(callback)=>
{
    setTimeout(() => {
        console.log("two");
        callback()
    }, 500);
}
let p3=(callback)=>
{
    setTimeout(() => {
        console.log("three");
        callback()
    }, 500);
}
let p4=(callback)=>
{
    setTimeout(() => {
        console.log("four");
        callback()
    }, 500);
}
let p5=()=>
{
    setTimeout(() => {
        console.log("five");
    }, 500);
}


p1(function f1(){
    p2(function f2(){
        p3(function f3(){
            p4(function f4(){
                p5();
            })
        })
    })
})