
/* load, unload, scroll, resize, toggle */


window.addEventListener("load",function(){
    console.log("LOAD")
})


window.addEventListener("unload",function(){
    console.log("unload")
})

window.addEventListener("scroll",function(){
    console.log("Scroll")
})

window.addEventListener("resize",function(){
var height =window.outerHeight;
var width=window.outerWidth;
console.log("height :"+height+"   width :"+width);
})

var tggle= document.querySelector("details");
tggle.addEventListener("toggle",function(e){
    console.log(e.target.open);
})







