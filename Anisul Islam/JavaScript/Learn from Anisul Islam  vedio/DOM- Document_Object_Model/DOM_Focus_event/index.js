// Focus event object
// not working on- <br>, <title>,<html>,<iframe>, <meta>, <>param>, <script>, <style>,<base>,<bdo>

// 1. onblur
// 2.onfocus
// 3.onfocusin
// 4. onfocusout

var element=document.querySelector("input");


// element.addEventListener("focus",function(){
// element.style.backgroundColor="orange";
// })



// element.addEventListener("blur",function(){
// element.style.backgroundColor="white";
// })

element.addEventListener("focusin",function(){
console.log("focusin is occured ")
})

element.addEventListener("focusout",function(){
    console.log("focusOUT is occured ")
})




// when the input is out of focus or blur the text of the input value will be in uppercase
element.addEventListener("blur",function(){
element.value=element.value.toUpperCase();
})