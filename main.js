$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
      if (scroll > 300) {
        $(".main-header").css({"background": "white"});
        $(".nav-bt").css({"background":"green"});
      }

      else{
        $(".main-header").css("background" , "#FFC017");   
        $(".nav-bt").css({"background":"black"});
      }
  })
})