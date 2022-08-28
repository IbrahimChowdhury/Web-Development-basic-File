for(var i=0;i<3;i++)
{
    document.querySelectorAll(".btn")[i].addEventListener("click",function()
    {
        var txt=this.innerHTML;
        console.log(txt);
        switch(txt)
        {
            case "a":
                var audio=new Audio("audio/a.mp3");
                audio.play();
                break;
            case "b":
                var audio=new Audio("audio/b.mp3");
                audio.play();
                break;
            case "c":
                var audio=new Audio("audio/c.mp3");
                audio.play();
                break;
        }

    })




}