//what is XMLHttpRequest :----
//front-end থেকে backend er kono jinis call korar jonno othoba backend er database e notun data upload/update korar jnno api calling use kora hoy . that means api hocche ekta URL jar maddhome backend er sthe relation kora jay . r ei API calling er sobcheye puraton maddhom hocce XMLHttpRequest.  



//event- onload(), onerror()
//property- response, resposeText,responseType, responseURL, status, statusText
//function- open(),send(),setRequestHeader()


//GET- data ke backend theke front end e niye ane 
//POST-- data send korar jnno
//PUT-- pura data update korar jnno
//PATCH- single data update korar jnno






// this is how we get data from api calling using XMLHttpRequest:

/*x      
let getdata=()=>{
    let xhr= new XMLHttpRequest()
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts')
    xhr.onload=()=>{
        let data = xhr.response;
        console.log(JSON.parse(data));
    }

    xhr.onerror=()=>
    {
        console.log("link is error")
    }
    xhr.send()
}
getdata()

*/




// now we create a make request function and use it as much as we can:

let makerequest=(method,url,data)=>{
    let xhr= new XMLHttpRequest()
    xhr.open(method,url);

    xhr.setRequestHeader("Content-type","application/json")
    xhr.onload=()=>{
        let data=xhr.response
        console.log(JSON.parse(data))
    }
    xhr.onerror=()=>{
        console.log("link is error");
    }
    xhr.send(JSON.stringify(data));
}

let getdata=()=>{
    makerequest("GET","https://jsonplaceholder.typicode.com/posts");
}

// now we make a send deta:
let senddata=()=>{
    makerequest("POST","https://jsonplaceholder.typicode.com/posts",{       //post-- data send korar jnno
        name:"ibrahim",
        class:11,
        roll:8,
        country:"bangladesh",
    })
}

let updatedata=()=>{
    makerequest("PUT","https://jsonplaceholder.typicode.com/posts/1",{      //put-- pura data update korar jnno
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,

    })
}

let updateSingleData=()=>{
    makerequest("PATCH","https://jsonplaceholder.typicode.com/posts/1",{   //patch- single data update korar jnno
        title:"title has been changed"   
    })
}


let deleteData=()=>{
    makerequest("DELETE","https://jsonplaceholder.typicode.com/posts/1");
}
deleteData()