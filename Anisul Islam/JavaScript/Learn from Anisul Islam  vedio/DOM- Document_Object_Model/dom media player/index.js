// Media related things :  canplay, play, playing, pause, valumechange, waiting,ended, progress



var vedio=document.querySelector("video");
vedio.addEventListener("canplay",function(){
    console.log("canplay");
});


vedio.addEventListener("playing",function(){
    console.log("playing");
}); 


vedio.addEventListener("pause",function(){
    console.log("pause");
});


vedio.addEventListener("volumechange",function(){
    console.log("volumechange");
});


vedio.addEventListener("ended",function(){
    console.log("Thanks for watching");
});


// this is how we can see the change of playing vedio in  console
