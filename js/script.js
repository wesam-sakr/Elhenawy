$(document).ready(function () {

  // loading

  $("body").css('overflow-y', 'auto');

  $('#loading').fadeOut(500);

  $('select').niceSelect();

  $(".fav").click(function(){
    $(this).children(".bi").toggleClass('bi-heart-fill').toggleClass('bi-heart');
  });


  // ----- scroll top button ------

  var btn_top = $('#scroll-top');
  var btn_bottom = $('.scroll-bottom');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn_top.addClass('show');
    } else {
      btn_top.removeClass('show');
    }
  })

  btn_top.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  btn_bottom.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 730 }, '300');
  });

  $(".suggest .owl-carousel").owlCarousel({
    loop: true,
    margin: 24,
    items: 5,
    rtl: true,
    responsive: {
      0: {
        items: 2,
        nav: false
      },
      768: {
        items: 4,
        nav: false
      },
      998: {
        items: 5,
        nav: false,
      }
    }
  });

});