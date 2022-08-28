
var p=["image/1.jpg","image/2.jpg","image/3.jpg"];
var image=document.querySelector("#img");
var  c=0;

function nxt() 
{
c++;
if(c==p.length)
{
c=0;
}
image.src=p[c];
}


function pre() 
{
c--;
if(c<0)
{
c=p.length-1;
}
image.src=p[c];
}


