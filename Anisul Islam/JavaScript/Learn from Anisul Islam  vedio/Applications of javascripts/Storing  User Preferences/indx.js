let fontChange=document.getElementById("fnt")
let bgChnage=document.getElementById("bg")
let bgColor=document.querySelector(".bg2")
let reset=document.querySelector(".reset")
bgChnage.addEventListener("change",(e)=>{
    let p= e.target.value
    localStorage.setItem("bg-color",p)
    bgColor.style.backgroundColor=p
})

fontChange.addEventListener("change",(e)=>{
    let f=e.target.value
    localStorage.setItem("font_size",f)
    bgColor.style.fontSize=f
})
reset.addEventListener('click',()=>{
    bgColor.style.fontSize="16px"
    localStorage.setItem("bg-color","aqua")
    bgColor.style.backgroundColor="aqua"
    localStorage.setItem("font_size","16px")
  let x=localStorage.getItem("bg-color")
  let y=localStorage.getItem("font_size")
  fontChange.value=y
  bgChnage.value=x
})

let ff=localStorage.getItem("font_size")
bgColor.style.fontSize=ff
let bbgg=localStorage.getItem("bg-color")
bgColor.style.backgroundColor=bbgg
fontChange.value=ff
bgChnage.value=bbgg


