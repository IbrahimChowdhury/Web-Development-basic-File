let display=$(".displayTxt")
function numbers(x){
    let p=display.val()
    display.val(p+x)
}

function calculate(){
   let result=eval(display.val())
   display.val(result)
}
function deleteall()
{
    display.val("")
}

function deleteSingleNumber()
{
    let j=display.val()
    display.val(display.val().slice(0,-1))
}
