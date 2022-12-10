// increment and decrement of a counter list and add some stuff


let increment = document.querySelector(".incr")
let decrement = document.querySelector(".decr")

let ulElement = document.querySelector(".ull")

let c = 0
increment.addEventListener('click', function () {
    let counter = document.querySelector(".counter")
    c++
    counter.innerHTML = c
    // creating a element
    let list = document.createElement('li')
    // adding item to the list
    list.innerHTML = "<b>sentence </b>" + c

    // aadding attribute to the list of the ul
    // list.setAttribute("name",value)
    list.setAttribute("data-counter", c)
    console.log(list)
  

    // append child to the list 
    ulElement.appendChild(list)

})
decrement.addEventListener('click', function () {

    let count = ulElement.querySelector('[data-counter="' + c + '"]')


      // getting the value from the attribute
    let number = parseInt(count.getAttribute('data-counter'))
    console.log(number)


    // target the counter value 
    let counter = document.querySelector(".counter")
    counter.innerHTML = c
    c--

    // making a condition
    if (number % 2 == 0) {

        // removing the element from the list
        count.remove()
    }


    
    //  ulElement.removeChild(ulElement.lastElementChild)

})








































































