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
    $("#loxone_link").click(function(event) {
      event.preventDefault();
      $("html, body").animate({
          scrollTop: $("#loxone").offset().top - 70
      }, 2000);
  });
  $("#jobs_link").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
        scrollTop: $("#jobs").offset().top - 70
    }, 2000);
    $("#contact_link").click(function(event) {
      event.preventDefault();
      $("html, body").animate({
          scrollTop: $("#contact").offset().top - 70
      }, 2000);
  });
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

$(document).ready(function() {
  // When the mouse enters the image
  $('.grow-on-hover').hover(function() {
    // Increase the size of the image by 10%
    $(this).css({
      'transform': 'scale(1.05)',
      'z-index': '1'
    });
  }, function() {
    // When the mouse leaves, restore the original size and position of the image
    $(this).css({
      'transform': 'scale(1)',
      'position': 'static',
      'z-index': '0'
    });
  });
});


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

const root_values = document.querySelector(':root');
const input = document.getElementById('toggleswitch');

console.log(input.checked)

input.addEventListener('change',function(){
  if(this.checked) {
    root_values.style.setProperty('--bg', '#F5F5F5');
    root_values.style.setProperty('--normal-text', '#000000');
    root_values.style.setProperty('--border-light-black', 'black');
    root_values.style.setProperty('--light-black', 'white');
  } else {
    root_values.style.setProperty('--bg', '#1e2323');
    root_values.style.setProperty('--normal-text', '#ffffff');
    root_values.style.setProperty('--border-light-black', 'rgba(255,255,255,0.1)');
    root_values.style.setProperty('--light-black', '#434242');
  }
});


// JOBS TOGGLE AD

let counter = 0;
function toggleText() {
  const hiddenText = document.querySelector('.hidden-text');
  hiddenText.classList.toggle('visible-text');
  const down_arrow = document.querySelector(".jobs_arrow_down");
  const up_arrow = document.querySelector(".jobs_arrow_up");
  console.log(down_arrow)
  console.log(up_arrow)
  if (counter % 2 == 0){
    down_arrow.classList.remove('visible-text')
    down_arrow.classList.add('hidden-text')
    up_arrow.classList.add('visible-text')
    up_arrow.classList.remove('hidden-text')
    counter++;
    console.log(counter)

  }
  else{
    up_arrow.classList.remove('visible-text')
    up_arrow.classList.add('hidden-text')
    down_arrow.classList.add('visible-text')
    down_arrow.classList.remove('hidden-text')
    counter++;
    console.log(counter)
  }


  

}

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});




// const sliderContainer = document.querySelector('.section3');
// const slider = document.querySelector('.slider2');
// const slides = Array.from(slider.children);
// const leftArrow = document.querySelector('.left');
// const rightArrow = document.querySelector('.right');

// const showSlides = (slider, index) => {
//   slider.style.transform = `translateX(-${index * 100 / slides.length}%)`;
// };

// let currentIndex = 0;
// showSlides(slider, currentIndex);
// console.log(rightArrow)

// rightArrow.addEventListener('click', () => {
//     console.log(1)
//     currentIndex = (currentIndex + 1) % slides.length;
//     console.log(slider)
//     showSlides(slider, currentIndex);
// });
  
// leftArrow.addEventListener('click', () => {
//     currentIndex = (currentIndex + slides.length - 1) % slides.length;
//     showSlides(slider, currentIndex);
// });


// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   // scrollbar: {
//   //   el: '.swiper-scrollbar',
//   // },
// });

// const swiper = new Swiper(".mySwiper", {
//   slidesPerView: 2,
//   spaceBetween: 20,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev"
//     }
//   },
// });


var swiper = new Swiper(".mySwiper", {
  // loop: true,
  slidesPerView: 3,
  spaceBetween: 0,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  mousewheel: true,
  keyboard: true,
});