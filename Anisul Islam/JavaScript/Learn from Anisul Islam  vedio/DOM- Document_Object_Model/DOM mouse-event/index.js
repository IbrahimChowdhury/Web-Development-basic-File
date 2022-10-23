// mouse event dont work at---- <html>,<head>,<meta>,<title>,<br>,<syle>,<script>,<iframe>,<param>,<base>,<bdo>
// 1.click
// 2.dblclck
// 3.mousedown
// 4.mouseup
// 5.mouseenter
// 6.mouseleave
// 7.mousemove
// 8.mouseover

// main progress:
/*
var div= document.querySelector("div");
div.addEventListener("click",function(){
console.log("clcked");
})
div.addEventListener("dblclick",function(){
console.log("dblclcked is occured");
})
div.addEventListener("mouseup",function(){
console.log("mouseup  is occured");
})
div.addEventListener("mousedown",function(){
console.log("mousedown  is occured");
})
div.addEventListener("mousemove",function(x){
console.log("X = " + x.offsetX + " Y = "+x.offsetY);
})
*/



// adding button and how the enteract with each others
var btn=document.querySelectorAll("button");
console.log(btn);

Array.from(btn).map((button)=>{
    button.addEventListener("click",function(e){
        console.log(e.target.innerHTML);
    })
})





