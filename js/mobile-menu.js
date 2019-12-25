  // Mobile Navigation
    "use strict";

    if ($('.menu-custom').length) {
      var $mobile_nav = $('.menu-custom').clone().prop({
        class: 'mobile-nav d-lg-none'
      })
      $('body').append($mobile_nav);
      $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"></i></button>')
      $('body').append('<div class="mobile-nav-overly"></div>')
  
      $(document).on('click', '.mobile-nav-toggle', function(e) {
        $('body').toggleClass('mobile-nav-active')
        $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars')
        $('.mobile-nav-overly').toggle()
      })
  
      $(document).click(function(e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active')
            $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('.mobile-nav-overly').fadeOut()
          }
        }
      })
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
      $(".mobile-nav, .mobile-nav-toggle").hide()
    }

  