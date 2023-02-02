AOS.init();

$(document).ready(function() {
    $("#service_link").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $("#service").offset().top - 70
        }, 2000);
    });
    $("#about_link").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $("#about").offset().top - 70
        }, 2000);
    });
    $("#references_link").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $("#references").offset().top - 70
        }, 2000);
    });
    $("#home_link").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $("#home").offset().top - 70
        }, 2000);
    });
});

$(".service_col").hover(
    function(){
        $(this).find(".service_content").addClass("show");
        $(this).find(".icon_div").removeClass("show");
    },
    function(){
        $(this).find(".service_content").removeClass("show");
        $(this).find(".icon_div").addClass("show");
    }
);

// $(document).ready(function() {
//     $(window).on('scroll', function() {
//       var scroll = $(window).scrollTop();
//       var maxScroll = $(document).height() - $(window).height();
//       var scrollPercent = (scroll / maxScroll) * 100;
//       var color = 'linear-gradient(to bottom, rgba(47,207,47,' + (1 - scrollPercent/100) + ') 0%,rgba(255,255,255,1) 100%)';
//       $('.top-nav').css('background', color);
//     });
//   });

const $slides = $('.slide');
const $leftArrow = $('.left-arrow');
const $rightArrow = $('.right-arrow');

let index = 0;

function changeSlide() {
  $slides.removeClass('active');
  $slides.eq(index).addClass('active');
}

$leftArrow.click(function () {
  if (index === 0) {
    index = $slides.length - 1;
  } else {
    index--;
  }

  changeSlide();
});

$rightArrow.click(function () {
  if (index === $slides.length - 1) {
    index = 0;
  } else {
    index++;
  }

  changeSlide();
});

changeSlide();


window.addEventListener("hashchange", () => {
  if (
    window.location.hash &&
    window.location.hash.startsWith("#slider-span")
  ) {
    document.getElementById("ref_con").scrollIntoView();
  }
});

var images = document.querySelectorAll(".image-slider img");

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    for (var j = 0; j < images.length; j++) {
      images[j].classList.remove("selected");
    }
    this.classList.add("selected");
  });
}