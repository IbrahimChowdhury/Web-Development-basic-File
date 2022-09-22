//fetch method

fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    body:JSON.stringify({
        name:"ibrahim",
        id:112222,
        country: "bangladesh",
        class: " honours"
    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    }
})
    .then((res)=>{
        if(!res.ok)
        {
            let err = `ERROR : ${res.status}`
            throw new Error(err)
        }
        return res.json()
    })
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

