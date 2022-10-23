//Dragevent Objects
// ondragstart
// ondrag
//ondragend
//ondragenter
//ondragleave
//ondragover
//ondrop

var div=document.querySelector("div");
var p=document.querySelector("p");

p.addEventListener("dragstart", function(e){
e.dataTransfer.setData("text",e.target.id);
})

div.addEventListener("dragover",function(e){
e.preventDefault();
})

div.addEventListener("drop", function(e){
    var id = e.dataTransfer.getData("text");
    div.appendChild(document.getElementById(id));
} )
