// Web storage API - Allows us to store and read data in browser
// Web storage API -LocalStorage,SessionStorage


// LocalStorage - Store,Read,Update and Remove data

// no expire date : data never gets lost even if u close the browser

// LocalStorage store data as key value pair -string




// how to set localstorage 
// setItem(key,value)

localStorage.setItem("userName","ibrahim")
localStorage.setItem("passWord","01233")

// how to get the value stored in localStorage 
// getItem(key)

let username = localStorage.getItem("userName")
let passWord = localStorage.getItem("passWord")
console.log(username,passWord)


// how to remove items
// removeItem(key)
// localStorage.removeItem("userName")


// How to store a array in the localStorage
let countries=["bangladesh","india","USA","Argentina"]
localStorage.setItem("country" ,JSON.stringify(countries))

// how we get array from the localStorage 
let country=JSON.parse(localStorage.getItem("country"))
console.log(country)



// session storage is same as localStorage and the  main difference is localStorage is  permanent  and sessionStorage is session wise.When we close the browser the localstorge is still remain and the sessionstroge is end when we close the browser  



