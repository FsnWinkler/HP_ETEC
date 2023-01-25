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