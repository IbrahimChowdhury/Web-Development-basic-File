
var check= document.querySelector("button")
check.addEventListener("click",function(){
    var num= document.querySelector("input").value;
console.log(num)
try {
    if(num>10){
        throw"the number is too high"
    }

    else if (num<5){
        throw " the number is too low"

    }
} catch (error) {
    console.log(error)
}
    
})