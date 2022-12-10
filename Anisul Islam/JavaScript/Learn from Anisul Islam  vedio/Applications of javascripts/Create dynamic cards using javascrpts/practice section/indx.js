
// how to create a object and make a card using each of these object

// let a = [
//     {
//         name: "ibrahim",
//         age: 23
//     },
//     {
//         name: "anika ",
//         age: 29
//     },
//     {
//         name: "mahi",
//         age: 28
//     },
//     {
//         name: "maisa",
//         age: 28
//     },
//     {
//         name: "usuf",
//         age: 1
//     },
//     {
//         name: "masruf",
//         age: "6 month"
//     }
// ]

// // how to create element and and make multiple cards using javascript

// let postsElement = document.querySelector(".posts")

// let k = () => {
//     a.map(p => {
//         let postElement = document.createElement("div")
//         postElement.classList.add("post")
//         postElement.innerHTML = `
//             <h2>${p.name}</h2>
//             <p>${p.age}</p>
//         `
//         postsElement.appendChild(postElement)
//     })
// }

// k()









// Now we will make cards using api calling and make a cards using each of these data

let makeRequest= async()=>{
    try{
        let p= await axios("https://jsonplaceholder.typicode.com/posts")
        return p.data

    }
    catch(err)
    {
        console.log(err)
    }
}

let postsElement=document.querySelector(".posts")

let k= async()=>{
    let a=await makeRequest()
    a.map(g=>{
        let postElement=document.createElement("div")
        postElement.classList.add("post")
        postElement.innerHTML=`
        <h2>${g.id}</h2>
        <h2>${g.title}</h2>
        <p>${g.body}</p>
        `
        postsElement.appendChild(postElement)
    })
}
k()