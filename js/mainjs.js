openNav = () => { 
    var menu = document.getElementById("main-menu");
    menu.style.width = "100%";
    menu.style.opacity = "1";
    menu.style.transition = "0.9s";
    menu.style.display = "block";
    document.getElementsByClassName("menu-toggle-button")[0].style.display = "none";
}

closeNav = () => { 
    var menu = document.getElementById("main-menu");
    menu.style.width = "0";
    menu.style.display = "none";
    document.getElementsByClassName("menu-toggle-button")[0].style.display = "block";
}