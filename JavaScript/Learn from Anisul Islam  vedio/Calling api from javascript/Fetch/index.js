// 4 ways to call api-- XMLHttpRequest,fetch,axios,jquery

//fetch() has replaced to XMLHttpRequest 
// fetch() -  global method for making HTTP Request
// 2 ways to call - then , async wait


//+ fetch() is easy to use compare to XMLHttpRequest
//+ fetch() returns a promise
//- returned promise an only handle network error 
// -does not support all the older browser







//  how get data by Fetch api calling:

/*
fetch("https://jsonplaceholder.typicode.com/posts/101")
    .then((res)=>{
        if(!res.ok){
            let data = `error : ${res.status}`
            throw new Error(data)
        }
        return res.json()
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))

*/





// sending data to database using fetch api calling :
/*
fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",      //sending data
    body: JSON.stringify({
        title: 'fooma',
        body: 'barma',
        userId: 4,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})
.then((res)=>{
    if(!res.ok){
        let msg=`ERROR : ${res.status}`
        throw new Error(msg);
    }
    return res.json()
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))


*/




// now we will update a id using fetch api calling :
/*
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:"PUT",                     //updating  data
    body: JSON.stringify({
        id:1,
        title: 'fooma',
        body: 'barma',
        userId:1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})
.then((res)=>{
    if(!res.ok){
        let msg=`ERROR : ${res.status}`
        throw new Error(msg);
    }
    return res.json()
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
*/




// updating single data:
/*
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:'PATCH',                     //updating single   data
    body: JSON.stringify({
        
        title: 'foomaaaaaaa',
        
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})
.then((res)=>{
    if(!res.ok){
        let msg=`ERROR : ${res.status}`
        throw new Error(msg);
    }
    return res.json()
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
*/



// deleting a data :
/*
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:'DELETE',                     //updating single   data
   
})
.then((res)=>{
    if(!res.ok){
        let msg=`ERROR : ${res.status}`
        throw new Error(msg);
    }
    return res.json()
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
*/

















// async await method : 
 let makeRequest =async(url,con)=>{
    let res= await fetch(url,con)
    if(!res.ok){
        let msg= `ERROR : ${res.status}`
        throw new Error(msg);
    }
    let data = await res.json()
    return data;
    }

// getdata:


// let getdata = () => {
//         makeRequest("https://jsonplaceholder.typicode.com/posts")
//         .then((res)=>console.log(res))
//         .catch((err)=>console.log(err))
// }



// single data update:

// let Updatedata = () => {
//         makeRequest("https://jsonplaceholder.typicode.com/posts/3",{
//             method: 'PUT',
//             body: JSON.stringify({
//               id: 1,
//               title: 'fooma',
//               body: 'barma',
//               userId: 1,
//             }),
//             headers: {
//               'Content-type': 'application/json; charset=UTF-8',
//             },
//           })
//         .then((res)=>console.log(res))
//         .catch((err)=>console.log(err))
// }
// Updatedata()





// let UpdateSingledata = () => {
//         makeRequest("https://jsonplaceholder.typicode.com/posts/3",{
//             method: 'PATCH',
//             body: JSON.stringify({
             
//               title: 'foomaaaaaaaaaaaasdsdsa',
              
//             }),
//             headers: {
//               'Content-type': 'application/json; charset=UTF-8',
//             },
//           })
//         .then((res)=>console.log(res))
//         .catch((err)=>console.log(err))
// }
// UpdateSingledata()




// delete data:

let deleteData = () => {
        makeRequest("https://jsonplaceholder.typicode.com/posts/3",{
            method: 'DELETE',
                })
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
}
deleteData()






