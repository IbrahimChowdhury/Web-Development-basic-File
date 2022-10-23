
// adding event-listner : document.querySelector("id/class/header file name").addEventListner("what u want click,focus or something ", add function = it can be annonymous function(যে ফাংশন এর নাম নাই সেটাই annonymous function ))

document.querySelector("button").addEventListener("click",function()
{
    alert("i am alert!");
})

var p=document.querySelector("h1");
p.addEventListener("mouseover", function()
{
p.classList.add("c1");
});

p.addEventListener("mouseout", function()
{
p.classList.remove("c1");
});



var p2=document.querySelector("h2");
document.querySelector("#b1").addEventListener("click",function()
{
    p2.innerHTML=(" You have clicked button 1!");
})
document.querySelector("#b2").addEventListener("click",function()
{
    p2.innerHTML=("now  You  clicked button 2!");
})
document.querySelector("#b3").addEventListener("click",function()
{
    p2.innerHTML=("  You  clicked button 3 now!");
})







p2.addEventListener("mouseover",function()
{
    p2.classList.add("c2")
})

p2.addEventListener("mouseout",function()
{
    p2.classList.remove("c2")
})



var p3=document.querySelector("h3");
for(var i=0;i<3;i++){
document.querySelectorAll(".btn")[i].addEventListener("click",function()
{
    var txt=this.innerHTML;
    p3.innerHTML=txt+"   is cliked";
})
}







