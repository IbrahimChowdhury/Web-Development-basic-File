// change event কার সাথে কাজ করে  --  input tag, select tag, textarea tag


// this is how we select a tag 
var input=document.querySelector("input");
// var input=document.querySelector("input[name=name]");       this is how we can select the name of the input 
input.addEventListener("change", changehandler)
function changehandler(e)
{
    // console.log(e);
    // console.log("name changed");
    // console.log(e.target)
    // console.log(e.target.id)           this show the id name of the target html element 
    // console.log(e.target.className)            this show the classname of the target html element 
    console.log(e.target.value)                /*this show the value of the value of the target */
}





var language=document.querySelectorAll("input[name=program]")
console.log(language);

Array.from(language).map((program)=>{
    program.addEventListener("change", programHandler)
})

function programHandler(e)
{
    if(e.target.checked)
    {
        // console.log("changed");
        console.log(e.target.value);
    }
}




// this is how can select the selective value
var dept=document.querySelector("#d");
dept.addEventListener("change", dept_name);

function dept_name(e)
{
// console.log("changed");
console.log(e.target.value);
}

