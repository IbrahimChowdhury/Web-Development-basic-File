var Input=document.querySelector("input")
var pp=document.querySelector("p")

Input.addEventListener("copy",function(){
    pp.innerHTML="you have copied the text";
})
Input.addEventListener("cut",function(){
    pp.innerHTML="you have cut the text";
})
Input.addEventListener("paste",function(){
    pp.innerHTML="you have paste the text";
})

