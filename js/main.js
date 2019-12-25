//Initiate WOW plugin
new WOW().init();

//Show Whatsapp Screen
let whatsapp =  document.querySelector(".whatsapp")
let showWhatsapp = document.querySelector(".show-whatsapp")
whatsapp.addEventListener("click", event => {
    event.preventDefault()
    if(showWhatsapp.style.display = "none"){
        showWhatsapp.style.display = "block"
    }else {
        showWhatsapp.style.display = ""
    }
    
})

//Close Whatsapp Screen
let closeWhatsapp = document.querySelector("#close-whatsapp")
closeWhatsapp.addEventListener("click", event => {
    event.preventDefault()
    showWhatsapp.style.display = "none"

})


// Back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });