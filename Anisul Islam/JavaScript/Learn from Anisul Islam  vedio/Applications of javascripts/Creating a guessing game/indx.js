let input=document.querySelector(".inpt")
let btn=document.querySelector(".result_check")
let p1=document.querySelector(".p1")
let p2=document.querySelector(".p2")
let h2=document.querySelector(".result")
let i=5;
let win=0
let loss=0
    btn.addEventListener("click",()=>{
       
        i--
        let p= parseInt(input.value) 
        console.log(p)
        let random_Number=Math.floor(Math.random()*6)
        if(i==0)
        {
            input.disabled=true
            btn.disabled=true
        }

        else{

           
             if(p===random_Number)
             {
                 win++
                
                p1.innerHTML=`You won . the random Number was ${random_Number}`
               
                p2.innerHTML=`Remaining attempt : ${i}`
               
                h2.innerHTML=`Won : ${win} Lose : ${loss}`
     
               
             }
             else{
                 loss++
                
                p1.innerHTML=`You won . the random Number was ${random_Number}`
               
                p2.innerHTML=`Remaining attempt : ${i}`
               
                h2.innerHTML=`Won : ${win} Lose : ${loss}`
             }
             input.value=""
        }
    })

    





