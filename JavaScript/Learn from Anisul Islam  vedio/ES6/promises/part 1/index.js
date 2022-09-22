// how to make Promise:
let promise1 = new Promise((resolve, reject)=>
{
    let completedpromise1= true ;
    if(completedpromise1){
        resolve("promise1 is completed");
    }
    else{
        reject("promise1 is not completed");
    }
})

// promise in console:
promise1.then((res)=>{
    console.log(res);
}).catch((rejct)=>{
    console.log(rejct);
})


//another promise created :
let promise2 = new Promise((resolve,reject)=>
{
    resolve("promise-2 is completed")
})
promise2.then((res)=>{
    console.log(res)
})


// use multiple promises:
Promise.all([promise1,promise2]).then(([res1,res2])=>{
    console.log(res1,res2);
})




// now we will understand Promise.race এর মানে settimeout function এ যে সবচেয়ে আগে কাজ শেষ করবে সেটাই console e dekhabe

let promise3 =new Promise((resolve)=>
{
setTimeout(() => {
    resolve("promise3 is completed");
}, 2000);
})

let promise4 = new Promise((resolve)=>{
setTimeout(() => {
    resolve("promise-4 is completed")
}, 1000);
})

Promise.race([promise3,promise4]).then((res)=>{
    console.log(res);
})








