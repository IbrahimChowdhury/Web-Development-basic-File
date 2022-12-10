{/* <div class="post">
            <h2>trial version 1</h2>
            <p>hellow i am trial 1</p>
         </div>   */}
// let a=[
//     {
//         name:"ibrahim",
//         age:23
//     },
//     {
//         name:"chhowa",
//         age:21
//     },
//     {
//         name:"mahi",
//         age:27
//     },
//     {
//         name:"anika",
//         age:28
//     },
//     {
//         name:"onindo",
//         age:32
//     },
//     {
//         name:"usuf",
//         age:1
//     },
//     {
//         name:"mijan",
//         age:23

//     },
//     {
//         name:"masruf",
//         age:"6 month"

//     }
// ]






// let posts_element=document.querySelector(".posts")
// let k=()=>{
//     a.map(p=>{
//         let post_element=document.createElement("div")
//         post_element.classList.add("post")
//         post_element.innerHTML=`
//         <h2>${p.name}</h2>
//         <p>${p.age}</p>
//         `
//         posts_element.appendChild(post_element)
//     })
// }

// k()




// calling api from the url and see it to our website

let fetchdata=async ()=>{
try{
    let res=await axios("https://jsonplaceholder.typicode.com/posts")
    return res.data
}
catch(err)
{
    throw Error("data is error");
}
}

let posts_element=document.querySelector(".posts")
let k= async()=>{
    let a=await fetchdata()
    a.map(p=>{
        let post_element=document.createElement("div")
        post_element.classList.add("post")
        post_element.innerHTML=`
        <h2>${p.body}</h2>
        <p>${p.title}</p>
        `
        posts_element.appendChild(post_element)
    })
}

k()




