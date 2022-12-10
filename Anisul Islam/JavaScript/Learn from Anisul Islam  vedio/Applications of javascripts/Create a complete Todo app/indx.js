{/* <div class="todo_list">
                    <span>jaskjdsua</span>
                   <div class="logo">

        <button class="logo_button" ><i class="fa-solid fa-trash"></i></button>
                   </div>
                </div> */}


// this is a way to do all the sturff in javascript..
   
// let text=document.querySelector(".input_text")
// let button=document.querySelector(".todo_button")
// let todo_lists=document.querySelector(".todo_lists")
// button.addEventListener("click",()=>{
//     let p=text.value
//     let d=document.createElement("div")
//     d.classList.add("todo_list")

//     let s1=document.createElement("span")
//     s1.innerHTML=p
//     d.appendChild(s1)

//    let d1=document.createElement("div")
//    d1.classList.add("logo")

//    let b1=document.createElement("button") 
//    b1.classList.add("logo_button")
//    b1.innerHTML=`
//    <i class="fa-solid fa-trash"></i>
//    `

//    let lgo=document.createElement("i")
//    lgo.classList.add("fa-solid fa-trash")
//    b1.appendChild(lgo)

//    d1.appendChild(b1)

//    d.appendChild(d1)

//    todo_lists.appendChild(d)
// })



{/* <li class="todo_list"> <span>hellow every one </span> <button class="logo"><i class="fa-solid fa-trash"></i></button> </li> */}



// let create is simply

let input_text=document.querySelector(".input_text")
let todo_button=document.querySelector(".todo_button")
let todo_items=document.querySelector(".todo_lists")


let addTodoList=(p,id)=>{
      let newTodo=document.createElement("li")
      newTodo.id=id
      newTodo.classList.add("todo_list")
      newTodo.innerHTML=`
      <span> ${p} </span> <button class="logo" id="lgo"><i class="fa-solid fa-trash"></i></button>
      `

      
      console.log(id)
      todo_items.appendChild(newTodo)
      input_text.value=""

      let delete_button=newTodo.querySelector(".logo")
      delete_button.addEventListener("click",deleteButton)
      
}

// delete Todos 
let deleteButton=(e)=>{
   let l=e.target.parentElement.parentElement
 todo_items.removeChild(l)

 let toddos=gettodosFromLocalStorage()
 toddos= toddos.filter((tt)=>tt.id!=l.id)
 localStorage.setItem("todosKey",JSON.stringify(toddos))

}


let show_Message=document.querySelector("#msg")
let showMessage=()=>{
   show_Message.innerText="New Todo is added"
   show_Message.classList.add("showMassage")
   setTimeout(() => {
      show_Message.innerHTML=""
      show_Message.classList.remove("showMassage")
   }, 1000);
}

todo_button.addEventListener("click",(e)=>{
   e.preventDefault()
   let p=input_text.value
   let id=Date.now().toString()
   addTodoList(p,id)
   showMessage()




   // adding todos to localStorage
//  first, we check if there is some value on local storage or not after. if yes, then we can get the value from the local storage by using  json.parse. otherwise we just create a simple array that can store values under a key

let todos= gettodosFromLocalStorage()
todos.push({id,p})
localStorage.setItem("todosKey",JSON.stringify(todos))


})

// get todos from local storage
let gettodosFromLocalStorage=()=>{
  return  localStorage.getItem("todosKey") ? JSON.parse(localStorage.getItem("todosKey")) : []
}

let todosLoad=()=>{
   let tdos=gettodosFromLocalStorage()
   tdos.map((tdo)=>addTodoList(tdo.p,tdo.id))
}
window.addEventListener("DOMContentLoaded",todosLoad)





