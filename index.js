$(document).ready(function() { //jQuery
//    disableScroll();
//    $(window).one('scroll', function() {
//        landingPageVanish();
//    });
    
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

function disableScroll() {
    window.onscroll = () => { window.scroll(0, 0); };
}
function enableScroll() {
    window.onscroll = function() {};
}

//function landingPageVanish() {
//    const landingPage = document.querySelector("#landingPage");
//    landingPage.style.transform = "translate(0, -100%)";
//        
//    //wait for landing page to leave the screen. Time should match CSS transition-duration
//    setTimeout(function() {
//        landingPage.style.display = "none"; //make it disappear
//        enableScroll();
//    }, 900);
//
//    //start the page at the top, in case the user scrolls before clicking the landing page
//    document.body.scrollTop = 0;
//    document.documentElement.scrollTop = 0;
//}

function checkTheme() {
    const darkSheet = document.styleSheets[1];
    darkSheet.disabled = true;
    
    const highContrastSheet = document.styleSheets[2];
    highContrastSheet.disabled = true;
}
function lightModeOn() {
    const darkSheet = document.styleSheets[1];
    darkSheet.disabled = true;
    
    const highContrastSheet = document.styleSheets[2];
    highContrastSheet.disabled = true;
}
function darkModeOn() {
    const darkSheet = document.styleSheets[1];
    darkSheet.disabled = false;
    
    const highContrastSheet = document.styleSheets[2];
    highContrastSheet.disabled = true;
}
function highContrastModeOn() {
    const darkSheet = document.styleSheets[1];
    darkSheet.disabled = true;
    
    const highContrastSheet = document.styleSheets[2];
    highContrastSheet.disabled = false;
}

function yellowReveal() {
    const block = document.querySelector("#yellowReveal");
    const button = document.querySelector("#yellowRevealBtn");
    
    if (block.style.display === "none" || block.style.display === "") {
        block.style.display = "block";
        button.innerHTML = "&minus;";
    }
    else {
        block.style.display = "none";
        button.innerHTML = "&plus;";
    }
}
function nw2Reveal() {
    const block = document.querySelector("#nw2Reveal");
    const button = document.querySelector("#nw2RevealBtn");
    
    if (block.style.display === "none" || block.style.display === "") {
        block.style.display = "block";
        button.innerHTML = "&minus;";
    }
    else {
        block.style.display = "none";
        button.innerHTML = "&plus;";
    }
}
function nw1Reveal() {
    const block = document.querySelector("#nw1Reveal");
    const button = document.querySelector("#nw1RevealBtn");
    
    if (block.style.display === "none" || block.style.display === "") {
        block.style.display = "block";
        button.innerHTML = "&minus;";
    }
    else {
        block.style.display = "none";
        button.innerHTML = "&plus;";
    }
}

let year = new Date().getFullYear(); //Automatically update copyright year
document.querySelector("#copyrightDate").innerHTML = "&copy;" + year + " Developed by Tommy Vo";