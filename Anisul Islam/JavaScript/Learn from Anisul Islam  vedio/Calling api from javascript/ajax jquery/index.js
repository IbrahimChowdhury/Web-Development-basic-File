// Ajax jQuery:

// add cdn to the html

// console.log(window);



// making a formate: 

let makeRequest=(url, method, data)=>{
    let result = $.ajax({
            url: url,
            method: method,
            data: data
    })
    return result;
}


   
//getting  data: 


// let get=()=>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts","get")
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log("link is error "))
// }
// get()






// uploading data :


// let create=()=>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts","post",{       //uploading new data
//         name:"ibrahim chowdhury",
//         roll: 1918009,
//         status: "student ",
//         class: "honours" 
//     })
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log("link is error "))
// }
// create()










// uploading data :


let editData=()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/3","put",{      //updating a  data 
        name:"ibrahim chowdhury",
        roll: 1918009,
        status: "student ",
        class: "honours" 
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log("link is error "))
}
editData()