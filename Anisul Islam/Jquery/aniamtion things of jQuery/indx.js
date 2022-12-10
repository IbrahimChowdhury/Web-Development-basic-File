// Animation on jQuery
/*
.hide()  /  .hide(milisecond)
.show()   /  .show(milisecond)
.toggle()  /  .toggle(milisecond)
.hide().show() 


.fadeIn()    /  .fadeIn(milisecond)
.fadeOut()   /  .fadeOut(milisecond)
.fadeToggle()   /  .fadeToggle(milisecond)
.fadeTo(milisecond,opacityValue)


.slideUp()   /  .slideUp(milisecond)
.slideDown()   /  .slideDown(milisecond)
.slideToggle()   /  .slideToggle(milisecond)


animate({css styles}, miliseconds)

*/



$(".btn").on("click",function(){
  $(".para").slideToggle(500)
})


$(".btn2").on("click",function(){

  $(".p2").animate({width:"600px",padding:"25px",backgroundColor:"rgb(140, 232, 137)",fontSize:"1.3rem"},2000).fadeOut()
})
