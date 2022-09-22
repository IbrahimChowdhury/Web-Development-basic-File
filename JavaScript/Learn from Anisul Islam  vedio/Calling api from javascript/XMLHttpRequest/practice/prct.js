let makeRequest=(method,link,data)=>{
    let xhr=new XMLHttpRequest()
    xhr.open(method,link,data)
    xhr.onload=()=>{
        let data=xhr.response
        console.log(JSON.parse(data));
    }
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')

    xhr.send(JSON.stringify(data))
}

let sendData=()=>{
    makeRequest("POST","https://jsonplaceholder.typicode.com/posts",{
        name:"ibrahim",
        class:"honours",
        roll:2333,
        country:"bangladesh"
    });
}
sendData();





