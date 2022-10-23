// callback function:

// let p1=(callback)=>{
//     setTimeout(() => {
//         console.log("task one")
//         callback();
//     }, 1000);
// }
// let p2=(callback)=>{
//     setTimeout(() => {
//         console.log("task two")
//         callback();
//     }, 1000);
// }
// let p3=(callback)=>{
//     setTimeout(() => {
//         console.log("task three")
//         callback();
//     }, 1000);
// }
// let p4=(callback)=>{
//     setTimeout(() => {
//         console.log("task four")
//         callback();
//     }, 1000);;
// }
// let p5=()=>{
//     setTimeout(() => {
//         console.log("task five")
//     }, 1000);
// }

// p1(()=>{
//     p2(()=>{
//         p3(()=>{
//             p4(()=>{
//                 p5();
//             })
//         })
//     })
// })


// promise chaining:


let pr1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("task one is completed!")
        }, 1000);
    })
}
let pr2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("task two is completed!")
        }, 1000);
    })
}
let pr3=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("task three is   completed!")
        }, 1000);
    })
}
let pr4=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           resolve("task four  is completed!")
        }, 1000);
    })
}
let pr5=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("task five is completed!")
        }, 1000);
    })
} 


// this is how we call the function using promise chaining:



/*
pr1()
    .then((res)=>{
        console.log(res);
    })
    .then(pr2)
    .then((res)=>{console.log(res);})
    .then(pr3)
    .then((res)=>{console.log(res);})
    .then(pr4)
    .then((res)=>{ console.log(res);})
    .then(pr5)
    .then((res)=>{console.log(res);})
    .catch((err)=>{console.log(err)})

*/


async function callall()
{

    try{
        let t1=await pr1();
        console.log(t1);
        let t2=await pr2();
        console.log(t2);
        let t3=await pr3();
        console.log(t3);
        let t4=await pr4();
        console.log(t4);
        let t5=await pr5();
        console.log(t5);    
    }catch(e)
    {
        console.log(e);
    }
    
}
callall()










