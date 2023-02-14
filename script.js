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

// const silder_frontpage = document.querySelector(".slider");
// const left_arr = document.querySelector(".left-arrow");
// const right_arr = document.querySelector(".right-arrow");
// const slide = document.getElementsByClassName("slide");

// let currentImage = 0;

// left_arr.addEventListener("click", function() {
//   slide[currentImage].classList.remove("active");
//   currentImage--;
//   if (currentImage < 0) {
//     currentImage = slide.length - 1;
//   }
//   slide[currentImage].classList.add("active");
// });

// right_arr.addEventListener("click", function() {
//     slide[currentImage].classList.remove("active");
//   currentImage++;
//   if (currentImage >= slide.length) {
//     currentImage = 0;
//   }
//   slide[currentImage].classList.add("active");
// });


const slider_frontpage = document.querySelector(".slider");
const left_arr = document.querySelector(".left-arrow");
const right_arr = document.querySelector(".right-arrow");
const slide = document.getElementsByClassName("slide");

let currentImage = 0;

function changeSlide() {
  slide[currentImage].classList.remove("active");
  currentImage++;
  if (currentImage >= slide.length) {
    currentImage = 0;
  }
  slide[currentImage].classList.add("active");
}

let slideInterval = setInterval(changeSlide, 8000);

left_arr.addEventListener("click", function() {
  clearInterval(slideInterval);
  slide[currentImage].classList.remove("active");
  currentImage--;
  if (currentImage < 0) {
    currentImage = slide.length - 1;
  }
  slide[currentImage].classList.add("active");
  slideInterval = setInterval(changeSlide, 8000);
});

right_arr.addEventListener("click", function() {
  clearInterval(slideInterval);
  slide[currentImage].classList.remove("active");
  currentImage++;
  if (currentImage >= slide.length) {
    currentImage = 0;
  }
  slide[currentImage].classList.add("active");
  slideInterval = setInterval(changeSlide, 8000);
});




const sliderContainer = document.querySelector('.section3');
const slider = document.querySelector('.slider2');
const slides = Array.from(slider.children);
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

const showSlides = (slider, index) => {
  slider.style.transform = `translateX(-${index * 100 / slides.length}%)`;
};

let currentIndex = 0;
showSlides(slider, currentIndex);
console.log(rightArrow)

rightArrow.addEventListener('click', () => {
    console.log(1)
    currentIndex = (currentIndex + 1) % slides.length;
    console.log(slider)
    showSlides(slider, currentIndex);
});
  
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + slides.length - 1) % slides.length;
    showSlides(slider, currentIndex);
});






