$(document).ready(function () {

    // loading
  
    $("body").css('overflow-y', 'auto');
    $('#loading').fadeOut(500);
  
    $("#country").countrySelect();
  
    // user sub menu 
  
    $(".top-nav-user").click(function(){
      $(".top-nav-user .sub-menu").toggleClass("d-flex");
    });
    $(".top-nav-user").mouseover(function(){
      $(".top-nav-user .sub-menu").addClass("d-flex");
    });
    $(".top-nav-user").mouseleave(function(){
      $(".top-nav-user .sub-menu").removeClass("d-flex");
    });
  
  
    // notification sub menu 
  
    $(".top-nav-notification").click(function(){
      $(".top-nav-notification .sub-menu").toggleClass("d-flex");
    });
    $(".top-nav-notification").mouseover(function(){
      $(".top-nav-notification .sub-menu").addClass("d-flex");
    });
    $(".top-nav-notification").mouseleave(function(){
      $(".top-nav-notification .sub-menu").removeClass("d-flex");
    });
  
    
    // cart sub menu 
  
    $(".top-nav-cart").click(function(){
      $(".top-nav-cart .sub-menu").toggleClass("d-flex");
    });
    $(".top-nav-cart").mouseover(function(){
      $(".top-nav-cart .sub-menu").addClass("d-flex");
    });
    $(".top-nav-cart").mouseleave(function(){
      $(".top-nav-cart .sub-menu").removeClass("d-flex");
    });
  
  
  
    // ----- scroll top button ------
  
    var btn_top = $('#scroll-top');
    var btn_bottom = $('.scroll-bottom');
  
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn_top.addClass('show');
      } else {
        btn_top.removeClass('show');
      }
    })
  
  btn_top.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  
  btn_bottom.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:730}, '300');
  });
  
  });