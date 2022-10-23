
// setInterval = it will repeat for a certain time
// setTimeout = it will end after a certain time



// setTimeout(()=>{
//     console.log("Hellow ")
// },2000);




// setTimeout(task,2000);
// function task(){
//     console.log("u have done")
// }






var save= document.querySelector("button");
var p=document.querySelector("p");
// save.addEventListener("click", userlog);

// function userlog()
// {
//     p.innerHTML="Your ragistration has been successfully done";
//     setTimeout(()=>
//     {
//         p.innerHTML="";
//     },1000)
// }


// setInterval(() => {
//    console.log("heeey"); 
// }, 1000);



save.addEventListener("click",displayCount)
function displayCount()
{
    var n=0;
    p.innerHTML=n;
    setInterval(() => {
        n++;
        p.innerHTML=n;
        
    }, 1000);
}


