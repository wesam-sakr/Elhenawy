$(document).ready(function () {


  var bodyDir = $('body').css('direction')
  console.log(bodyDir)
  var dirAr
  if (bodyDir == "rtl") {
    dirAr = true
  }
  else {
    dirAr = false
  }


  // loading

  $("body").css('overflow-y', 'auto');

  $('#loading').fadeOut(500);

  $('select').niceSelect();

  $(".fav").click(function () {
    $(this).children(".bi").toggleClass('bi-heart-fill').toggleClass('bi-heart');
  });

  $('.toggleFav').click(function () {
    $(this).toggleClass('added')
  })


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


  const inputElements = [...document.querySelectorAll("input.code")];
  inputElements.forEach((ele, index) => {
    ele.addEventListener("keydown", (e) => {
      if (e.keyCode === 8 && e.target.value === "")
        inputElements[Math.max(0, index - 1)].focus();
    });
    ele.addEventListener("input", (e) => {
      inputElements[index].focus();
      const [first, ...rest] = e.target.value;
      e.target.value = first ?? ""; // first will be undefined when backspace was entered, so set the input to ""
      const lastInputBox = index === inputElements.length - 1;
      const didInsertContent = first !== undefined;
      if (didInsertContent && !lastInputBox) {
        inputElements[index + 1].focus();
        inputElements[index + 1].value = rest.join("");
        inputElements[index + 1].dispatchEvent(new Event("input"));
      }
    });
  });

  function onSubmit(e) {
    e.preventDefault();
    const code = inputElements.map(({ value }) => value).join("");
    console.log(code);
  }

  $(".suggest .owl-carousel").owlCarousel({
    loop: true,
    margin: 24,
    items: 5,
    rtl: dirAr,
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

  $("#your-rate").rateYo({
    starWidth: "15px",
    ratedFill: "#FFC107",
    rating: 0,
    fullStar: true,
    rtl: dirAr
  });


  $(".add-address").click(function () {
    if ($(".form-address").css("display") == "block") {
      $(".form-address").hide();
    } else {
      $(".form-address").show();
    }
  });
  $(".input-cridet").hide();

  $('.cart input[type="radio"]').change(function () {
    if ($(".lable-cridet").is(":checked")) {
      $(".input-cridet").show();
    } else {
      $(".input-cridet").hide();
    }
  });

  $("#filter").click(function () {
    $(".filter").toggleClass("filter-toggle");
  });
  $(".filter-header .btn-close").click(function () {
    $(".filter").toggleClass("filter-toggle");
  });

});