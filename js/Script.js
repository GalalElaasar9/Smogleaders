lightGallery(document.querySelector(".Gallery .gallery-container"));

$(document).ready(function(){
    $('button.top').click(function(){
        $("html , body").animate({
            scrollTop:0,  
    },1000); 
});

$(window).scroll(function(){
  if($(this).scrollTop() > 300){
        $('button.top').fadeIn();  
  }else{
        $('button.top').fadeOut();  
  }  
}); 
});




let scrolling = $(window).scrollTop();

  $(window).scroll(function () {
    if (scrolling < $(window).scrollTop()) {
      $(".navbar").slideUp();
    } else {
      $(".navbar").slideDown();
    }
    scrolling = $(window).scrollTop();
  });

function counterUp(element , limit , speed){
  let counter = 0;

  let x = setInterval(function(){
    counter++
    $(element).html(counter)
    if(counter == limit){
      clearInterval(x)
    }
  },speed);
}
function startCounter(){
  counterUp("#repairsDone" , 200 , 1000)
  counterUp("#awardsWon" , 25 , 1000)
  counterUp("#happyClients" , 250 , 1000)
  counterUp("#activeWorkers" , 45 , 1000)
}
