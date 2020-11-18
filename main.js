const mySwiper1 = new Swiper('.swiper-container', {
  
  autoplay: {
    delay: 4000,
  },
  
  loop: true,
  effect: 'fade',


})

$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});

$(window).innerWidth(function(){
  //windowの幅をxに代入
  var x = $(window).width();
  //windowの分岐幅をyに代入
  var y = 900;
  if (x <= y) {
      $('#cc-1').addClass('globalMenuSp');
      $('#cc-2').removeClass('sliding1');
      $('#cc-2').addClass('sliding2');
  }else{
      $('#cc-1').removeClass('globalMenuSp');
      $('#cc-2').removeClass('sliding2');
      $('#cc-2').addClass('sliding1');
  }
});

$(window).resize(function(){
  //windowの幅をxに代入
  var x = $(window).width();
  //windowの分岐幅をyに代入
  var y = 900;
  if (x <= y) {
      $('#cc-1').addClass('globalMenuSp');
      $('#cc-2').removeClass('sliding1');
      $('#cc-2').addClass('sliding2');
  }else{
      $('#cc-1').removeClass('globalMenuSp');
      $('#cc-2').removeClass('sliding2');
      $('#cc-2').addClass('sliding1');
  }
});
