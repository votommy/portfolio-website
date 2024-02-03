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

function hamburgerToggle(action) {
    switch (action) {
        case 'focusin':
        case 'mouseover':
            document.querySelector(".dropdown-content").style.display = "block";
            document.querySelector('#hamburger').classList.add('x');
            break;
        case 'focusout':
            document.querySelector('#hamburger').classList.remove('x');
            break;
        case 'mouseout':
            document.querySelector(".dropdown-content").style.display = "none";
            document.querySelector('#hamburger').classList.remove('x');
            break;
    }
}

function toggleSettings(toggleOn) {
    if (toggleOn) {
        document.querySelector(".dropdown-content").style.display = "none";
        document.querySelector("#settings").style.display = "block";
        document.querySelector("#settingsBackdrop").style.display = "block";
    }
    else {
        document.querySelector("#settings").style.display = "none";
        document.querySelector("#settingsBackdrop").style.display = "none";
    }
}

function smoothScroll(anchor) {
    document.querySelector(".dropdown-content").style.display = 'none';

    const top = document.querySelector(`#${anchor}`).getBoundingClientRect().top + window.scrollY;
    window.scrollTo({top: top, behavior: "smooth"});
}

let year = new Date().getFullYear(); //Automatically update copyright year
document.querySelector("#copyrightDate").innerHTML = "&copy;" + year + " Developed by Tommy Vo";