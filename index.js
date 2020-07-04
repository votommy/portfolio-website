$(document).ready(function() { //jQuery
    $("#sig").click(function() { //scrolls to aboutMe on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top
            }, 1000);
    });
    $(".navAboutMe").click(function() { //scrolls to About Me on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top
            }, 900);
    });
    $(".navExperience").click(function() { //scrolls to Work Experience on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#workXP").offset().top
            }, 900);
    });
    $(".navAwards").click(function() { //scrolls to Awards on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#awards").offset().top
            }, 900);
    });
    $(".navProjects").click(function() { //scrolls to Awards on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#personalProjects").offset().top
            }, 900);
    });
    $(".navContact").click(function() { //scrolls to Contact on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
            }, 900);
    });
    
    $(".dropdown").click(function() {
        $(".navList").toggle(); //Toggle visibility of dropdown menu in mobile
        $("#hamburger").toggleClass('x'); //Toggle between hamburger and X
    });
}); //End jQuery