// html manipulation
// html
// text
// append
// prepend
// before 
// after




// this is how we  can make a text
$(".h1").text("hellow there how are u")


// how to manipulate html element
$(".p1").html("<b>hellow<b>")




// append

$(".p2").append(" <b>append</b>")





// prepend
$(".p3").prepend("<b>prepend </b>")




// making a new element and add it to the start and end of the document

// before,after
let txt=$("<b></b>").text("tihs is a after paragraph")
$(".p4").after(txt)







// manipulating attribute-->
// getting=                   .attr("name")
// set attribute =            .attr("name","work")  
// remove=                    .removeAttr("name")


// set/adding attribute-->
$("a").attr("href","https://www.google.com")
$("a").attr("target","_blank")

// get attribute-->
let x=$("a").attr("href")
console.log(x)

// remove attribute
// $("a").removeAttr("href")









//........................................................................................................



// manipulating Css-->



//js style= .css("css element","css property")


// multiple adding=                                                   .css({"element1":"property1",     "element2":"property2","element3":"property3"})



// adding css class into javascript=
//   .addClass("class_name in css")


$(".css_manipulating1").css("color","red")
$(".css_manipulating1").css("font-size","1.9rem")
$(".css_manipulating1").css("font-style","italic")



// multiple adding
$(".css_manipulating2").css({"color":"blue","font-size":"1.3rem","font-style":"italic"})



// adding css class into js 
$(".css_manipulating3").addClass("style")


// we can add multiple css class in the jQuery css manipulator  =  .addclass("style1 style2 style3")





// .......................................................................................................

// EventListner manipulating 




// event Listner manipulating using jQuery

$(".btn2").click(()=>{
    $(".hh2").toggleClass("style2")
})








// what we have done when we use vanilla JavaScript

/*
let btn_length=document.querySelectorAll(".btn").length
for(let i=0;i<btn_length;i++)
{
  document.querySelectorAll(".btn")[i].addEventListener("click",function(){
    var txt=this.innerHTML
    document.querySelector(".h2").innerHTML=txt+" is clicked"
  })
}
*/




// When We use jquery in this simple button click project
$(".btn").mouseover(function(){
    let l=this.innerHTML
    $(".h2").text(l+" you have click")
})




$(".login").on("click",function(){
  let p1=$(".pass1").val()
  let p2=$(".pass2").val()
  if(p1!="" && p2!="")
  {
    if(p1==p2)
    {
        alert("Log In successfully")
    }
    else {
        alert("passWord Missmatch")
    }

  }
  else {
    alert("Please enter the password")
  }

})































