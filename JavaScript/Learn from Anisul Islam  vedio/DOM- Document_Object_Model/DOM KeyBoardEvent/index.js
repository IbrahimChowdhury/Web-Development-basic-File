// Keyboardevent Object
// 1. keydown- pressing a  key, can repeat
//  2. keypress (may not supported by some browsers)
//3. keyup
// some properties- key,keyCode,code,shiftKey,crtlKey,repeat

var txtarea= document.querySelector("textarea");


// keydown will show in the conlose panel when any key is down

// txtarea.addEventListener("keydown", function(){
//     console.log("keydown");
// });






// keypress will show in the console panel when any key is pressed 

// txtarea.addEventListener("keypress", function(){
//     console.log("keypress");
// });







// keyup will show when key is pressed and it goes up

// txtarea.addEventListener("keyup", function(){
//     console.log("keyup");
// });






// this will show the  keycode of a key like code of a is 97

// txtarea.addEventListener("keyup", function(e){
//     console.log(e.keyCode);
// });









// any key is pressed and the keyname will show in the console panel

// txtarea.addEventListener("keyup", function(e){
//     console.log(e.code);
// });









// any key is pressed and the key-name will show in the console panel


// txtarea.addEventListener("keyup", function(e){
//     console.log(e.key);
// });







// this will show the true or false of the shift key. If any key is pressed without the help of Shift-key the console panel will show false and if he key is pressed like shift+key the console will show true

// txtarea.addEventListener("keyup", function(e){
//     console.log(e.shiftKey);
// });







txtarea.addEventListener("keydown",function(e){
    if(e.repeat)
    {
        alert("do not repeat the key next time ");
    }
})




