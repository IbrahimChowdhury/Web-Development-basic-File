// 4 ways to call api - XMLHttpRequest, fetch,axois, jquery
// axios is a js library
// it helps to make request from browsers(plain js / Vue/React/Angular),node.js



// positive side:
// + very eary to use 
// + it supports all modern browser including IE
// +  it returns promise 
// +  throws error brilliantly
// + no need to set header cause axios is brilliant






// ways to call:
// axios(config)
// axios(url,[config])

// axios.get(url,[config])
// axios.post(url,[config])
// axios.put(url,[config])
// axios.patch(url,[config])
// axios.delete(url,[config])

// axios returns response object - data ,status,statusText,headers,config








console.clear( )

// console.log(window)





// getting a file from url

// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err))




// posting a data/ sending a data to the database:

// axios.post("https://jsonplaceholder.typicode.com/posts",{
    
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     })
    
// })
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err))




// updating a whole data

// axios.put("https://jsonplaceholder.typicode.com/posts/4",{
    
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     })
    
// })
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err))







// updating a single data

// axios.patch("https://jsonplaceholder.typicode.com/posts/4",{
    
//     body: JSON.stringify({
//       title: 'hellow everyone ',
      
//     })
    
// })
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err))



//using  async await :

let makeRequest= async (config )=>{
    return await axios(config)
}



// getting data:

// let getData=()=>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=>console.log(res.data))
//     .catch((err)=>console.log(err))
// }
// getData() 



// post data:

// let createData=()=>{
//     makeRequest({
//         url:"https://jsonplaceholder.typicode.com/posts",
//         method:"POST",
//         data: JSON.stringify({
//             name:"Ibrahim",
//             class:"honours",
//             data:123233
//         })
//     }).then( (res)=>console.log(res.data) )
//     .catch((err)=>console.log(err))
// }

// createData()




// updating full data:

let createData=()=>{
    makeRequest({
        url:"https://jsonplaceholder.typicode.com/posts/3",
        method:"PUT",
        data: JSON.stringify({
            name:"Ibrahim",
            class:"honours",
            data:123233
        })
    }).then( (res)=>console.log(res.data) )
    .catch((err)=>console.log(err))
}

createData()







