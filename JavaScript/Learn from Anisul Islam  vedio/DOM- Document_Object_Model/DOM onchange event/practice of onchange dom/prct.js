var nme= document.querySelector("input[name=name]");

nme.addEventListener("change", nameHandler);

function nameHandler(e)
{
// console.log(e);
// console.log(e.target);
// console.log(e.target.value);
console.log("changed");
}


var prgm=document.querySelectorAll("input[name=program]");
console.log(prgm);
Array.from(prgm).map((program)=>{
    program.addEventListener("change", prgmhandler);

   function prgmhandler(e)
   {
    if(e.target.checked)
    {

        // console.log("Changed");
        console.log(e.target.value);
    }
   }
})




var seleect= document.querySelector("#dept");
seleect.addEventListener("change", selectHandler)
function selectHandler(x)
{
console.log(x.target.value);
}





