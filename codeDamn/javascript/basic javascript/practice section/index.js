let counter = document.querySelector(".counter")
let increament = document.querySelector(".incr")
let decrement = document.querySelector(".dcr")
let un_list = document.querySelector(".ull")
let c = 0

increament.addEventListener("click", function () {
    c++
    counter.innerHTML=c
    

    let list=document.createElement("li")
    if(c%2==0)
    {
        list.style.backgroundColor='red'
    }
    else{
       list.style.backgroundColor='blue'    }
    list.setAttribute("data-counter",c)
    console.log(list)
    list.innerHTML="<b>Sentence is </b>"+c
    un_list.appendChild(list)
})

decrement.addEventListener("click",function(){
    // c--
    // counter.innerHTML=c
    // un_list.removeChild(un_list.firstElementChild)

let list_counter=document.querySelector('[data-counter="'+c+'"]')
let n=parseInt(list_counter.getAttribute("data-counter"))



console.log(typeof(n))

list_counter.remove()




    c--
    counter.innerHTML=c
})



// distructure 
let a1=[1,2,3]
let a2=[7,8,9]
let a3=[...a1,...a2]
console.log(a3)


let b1={
    name1:"ibrahim",
    age:22
}
let b2={
    name2:"chowdhury",
    age:11
}
let b3=[...b1,...b2]

