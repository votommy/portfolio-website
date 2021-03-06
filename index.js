$(document).ready(function() { //jQuery
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
    $(".navProjects").click(function() { //scrolls to Awards on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
            }, 900);
    });
    $(".navAwards").click(function() { //scrolls to Awards on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#awards").offset().top
            }, 900);
    });
    
    $(".dropdown").click(function() {
        $(".navList").toggle(); //Toggle visibility of dropdown menu in mobile
    });
}); //End jQuery

function yellowReveal() {
    const block = document.querySelector("#yellowReveal");
    const button = document.querySelector("#yellowRevealBtn");
    
    if (block.style.display === "none" || block.style.display === "") {
        block.style.display = "block";
        button.style.borderColor = "gray transparent transparent gray";
        button.style.transform = "rotate(45deg)";
    }
    else {
        block.style.display = "none";
        button.style.borderColor = "transparent gray gray transparent";
    }
}
function nw2Reveal() {
    const block = document.querySelector("#nw2Reveal");
    const button = document.querySelector("#nw2RevealBtn");
    
    if (block.style.display === "none" || block.style.display === "") {
        block.style.display = "block";
        button.style.borderColor = "gray transparent transparent gray";
        button.style.transform = "rotate(45deg)";
    }
    else {
        block.style.display = "none";
        button.style.borderColor = "transparent gray gray transparent";
    }
}
function nw1Reveal() {
    const block = document.querySelector("#nw1Reveal");
    const button = document.querySelector("#nw1RevealBtn");
    
    if (block.style.display === "none" || block.style.display === "") {
        block.style.display = "block";
        button.style.borderColor = "gray transparent transparent gray";
        button.style.transform = "rotate(45deg)";
    }
    else {
        block.style.display = "none";
        button.style.borderColor = "transparent gray gray transparent";
    }
}

let year = new Date().getFullYear(); //Automatically update copyright year
document.querySelector("#copyrightDate").innerHTML = "&copy;" + year + " Developed by Tommy Vo | All rights reserved";