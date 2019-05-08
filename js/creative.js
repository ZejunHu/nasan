(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  $('.service-trip-box-content').height($('.service-trip-box-content').first().height()+5);

  //////////     For Mobile Swipe    ////////////
  // var touchStartX = null;

  // $('.carousel').each(function () {
  //     var $carousel = $(this);
  //     $(this).on('touchstart', function (event) {
  //         var e = event.originalEvent;
  //         if (e.touches.length == 1) {
  //             var touch = e.touches[0];
  //             touchStartX = touch.pageX;
  //         }
  //     }).on('touchmove', function (event) {
  //         var e = event.originalEvent;
  //         if (touchStartX != null) {
  //             var touchCurrentX = e.changedTouches[0].pageX;
  //             if ((touchCurrentX - touchStartX) > 60) {
  //                 touchStartX = null;
  //                 $carousel.carousel('prev');
  //             } else if ((touchStartX - touchCurrentX) > 60) {
  //                 touchStartX = null;
  //                 $carousel.carousel('next');
  //             }
  //         }
  //     }).on('touchend', function () {
  //         touchStartX = null;
  //     });
  //   });
//////////     For Mobile Swipe    ////////////

  $('#carouselPartner').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
  });


  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict
