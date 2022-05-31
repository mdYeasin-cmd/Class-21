// jQuery Related Code Start

$(function () {
   'use strict'

   // Preloader Start

   $(window).on('load', function(){
      $('.preloader').fadeOut();
   });

   // Preloader End

   // Counter Up Plugin Activation Start
   $('.achievement_counter').counterUp({
      delay: 30,
      time: 2000
   });
   // Counter Up Plugin Activation End

   // Countdown Plugin Activation Start

   $('.count_down').countdown('2022/7/10', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<div class="count_down_item"><span>%D</span><span>days</span></div>'
        + '<div class="count_down_item"><span>%H</span><span>hrs</span></div>'
        + '<div class="count_down_item"><span>%M</span><span>mins</span></div>'
        + '<div class="count_down_item"><span>%S</span><span>secs</span></div>'));
    });

   // Countdown Plugin Activation End

   // On Scroll Method Start

   $(document).on('scroll', function(){
      var windowSize = $(window).scrollTop();

      // Back To Top Button Start

      if(windowSize > 500){
         $('#goTop').css({
            bottom: '40px',
            opacity: 1
         });
      }
      else{
         $('#goTop').css({
            bottom: '500px',
            opacity: 0
         });
      }

      // Back To Top Button End

      // Menu Drop Animation Start

      if(windowSize > 60){
         $('#header').addClass('menu_animation');
      }
      else{
         $('#header').removeClass('menu_animation');
      };

      // Menu Drop Animation End

   });

   // On Scroll Method End

   // On Click Menthod on Back To Top Button Start

   $('#goTop').on('click', function(){
      $('html, body').animate({
         scrollTop: 0
      }, 500);
   });

   // On Click Menthod on Back To Top Button End

   // Gallery Filterrizr Activation Start

   $('.filtr_container').filterizr();

   $('#gallery ul li').on('click', function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
   });

   // Gallery Filterrizr Activation End

   // Banner Slider Activation Start\
   $('.slider_container').slick({
      // arrows: false
      prevArrow: '<i class="fas fa-chevron-left slide_change_arrow"></i>',
      nextArrow: '<i class="fas fa-chevron-right slide_change_arrow"></i>',
      dots: true,
      dotsClass: 'slider_dots'
   });




   // Banner Slider Activation End

   var typed = new Typed('.typed_animation', {
      strings: [
         'Web Team',
         'Graphics Team',
         'Digital Marketing Team'
      ],
      smartBackspace: true, // Default value
      typeSpeed: 100,
      backSpeed: 10,
      loop: true
    });

})

// jQuery Related Code Start

// Vanila JavaScript Code Start

// VenoBox Activation Start
new VenoBox();
// VenoBox Activation End

function getMessageDate(id, min, max) {
   var select = document.getElementById(id);

   for(var i = min; i <= max; i++){
      var option = document.createElement('option');
      var text = document.createTextNode(i);

      option.appendChild(text);
      select.appendChild(option);
   }
}

getMessageDate('day', 1, 31);
getMessageDate('month', 1, 12);
getMessageDate('year', 1950, 2022);

// Vanila JavaScript Code End