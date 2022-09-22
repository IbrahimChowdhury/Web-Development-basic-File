
// for loop for select all the  audio clips and play the button as a aniamtion
for(var i=0;i<6;i++)
{
    document.querySelectorAll(".button")[i].addEventListener("click",function(){
            var txt = this.innerHTML;
            console.log(txt);
     audio_play(txt)

animation(txt);

    })
}


// function for playing the audio clips 
function audio_play(txt)
{
    switch(txt)

    {
        case "a":
            var audio = new Audio("audio/a.mp3")
            audio.play();
            break;
        case "b":
            var audio = new Audio("audio/b.mp3")
            audio.play();
            break;
        case "c":
            var audio = new Audio("audio/c.mp3")
            audio.play();
            break;
        case "d":
            var audio = new Audio("audio/d.mp3")
            audio.play();
            break;
        case "e":
            var audio = new Audio("audio/e.mp3")
            audio.play();
            break;
        case "f":
            var audio = new Audio("audio/f.mp3")
            audio.play();
            break;


    }
}



// play the audio  by pressing the keyboard key

document.addEventListener("keypress",function(event){
    var txt= event.key;
    audio_play(txt)
    animation(txt)
})



//when clicked the button the  button is going tobe red 
function animation(txt)
{
      var selected = document.querySelector("."+txt);
      selected.classList.add("anim");

      setTimeout(function(){
        selected.classList.remove("anim");
      },1000);


}



