var clock=document.querySelector("button")
var p=document.querySelector("p");

clock.addEventListener("click",settime)
function settime()
{
    var date= new Date()
    var hour=date.getHours()
    var minute=date.getMinutes()
    var second=date.getSeconds()

    minute=formate(minute)
    second=formate(second)

    var time = hour+":"+minute+":"+second;
    p.innerHTML=time;
    setInterval(settime,1000)
}


function formate(value)
{

    if(value<10){
        value="0"+value;
    }


    return value;
}


