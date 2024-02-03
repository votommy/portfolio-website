$(document).ready(function() { //jQuery
    $("#hamburger").focusin(function() {
        $(".dropdown-content").css("display", "block");
        $('#hamburger').addClass('x');
    });
    $("#hamburger").focusout(function() {
        $('#hamburger').removeClass('x');
    });
    $(".dropdown").mouseover(function() {
        $(".dropdown-content").css("display", "block");
        $('#hamburger').addClass('x');
    });
    $(".dropdown").mouseout(function() {
        $(".dropdown-content").css("display", "none");
        $('#hamburger').removeClass('x');
    });
    
    $(".navAboutMe").click(function() { //scrolls to About Me on click. Animate smooth scroll
        $(".dropdown-content").css("display", "none");
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top
            }, 900);
        history.pushState("", document.title, window.location.pathname);
    });
    $(".navExperience").click(function() { //scrolls to Work Experience on click. Animate smooth scroll
        $(".dropdown-content").css("display", "none");
        $('html, body').animate({
            scrollTop: $("#workXP").offset().top
            }, 900);
    });
    $(".navProjects").click(function() { //scrolls to Awards on click. Animate smooth scroll
        $(".dropdown-content").css("display", "none");
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
            }, 900);
    });
    $(".navAwards").click(function() { //scrolls to Awards on click. Animate smooth scroll
        $(".dropdown-content").css("display", "none");
        $('html, body').animate({
            scrollTop: $("#awards").offset().top
            }, 900);
    });
    $(".navContact").click(function() { //scrolls to Awards on click. Animate smooth scroll
        $(".dropdown-content").css("display", "none");
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
            }, 900);
    });
    $(".navSettings").click(function() {
        $(".dropdown-content").css("display", "none");
        $("#settings").css("display", "block");
        $("#settingsBackdrop").css("display", "block");
    });
    $(".exitSettingsBtn").click(function() {
        $("#settings").css("display", "none");
        $("#settingsBackdrop").css("display", "none");
    });
    
}); //End jQuery

function setTheme(theme) {
    switch (theme) {
        case 'dark':
            document.styleSheets[1].disabled = false;
            document.styleSheets[2].disabled = true;
            break;
        case 'highContrast':
            document.styleSheets[1].disabled = true;
            document.styleSheets[2].disabled = false;
            break;
        default:
            document.styleSheets[1].disabled = true;
            document.styleSheets[2].disabled = true;
    }
}

function openAccordion(name) {
    const block = document.querySelector(`#${name}Reveal`);
    const button = document.querySelector(`#${name}RevealBtn`);
    
    if (block.style.display === "none" || block.style.display === "") {
        block.style.display = "block";
        button.innerHTML = "&minus;";
        button.title = "Show less";
    }
    else {
        block.style.display = "none";
        button.innerHTML = "&plus;";
        button.title = "Show more";
    }
}

let year = new Date().getFullYear(); //Automatically update copyright year
document.querySelector("#copyrightDate").innerHTML = "&copy;" + year + " Developed by Tommy Vo";