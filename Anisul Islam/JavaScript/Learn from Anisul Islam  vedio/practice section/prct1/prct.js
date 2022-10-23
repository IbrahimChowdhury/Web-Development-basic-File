// var a=parseInt(prompt("enter the number :"));
// var b=parseInt(prompt("enter the number :"));
// var c=a+b;

// console.log(c)
// console.log(typeof(c))

// document.write(`A : ${a} <br> B : ${b} <br> = ${c}`);
// var text= "Bangladesh";
// document.write(text.slice(4,9));

// arrow function

// let getdata=()=>{
//     let xhr= new XMLHttpRequest()
//     xhr.open("get","https://jsonplaceholder.typicode.com/posts");
//     xhr.onload=()=>{
//         let data=xhr.response;
//         console.log(JSON.parse(data))
//     }

//     xhr.onerror=()=>{
//         console.log("link is error");
//     }
//     xhr.send()

// }
// getdata()


fetch("https://jsonplaceholdr.typicode.com/posts").then((res)=>{
    if(!res.ok)
    {
        let data =`Error is : ${res.status}`;
        throw new Error(data);

    }
    return res.json()
})
.then((res)=>console.log(res))
.catch((res)=>console.log(res));


