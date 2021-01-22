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

changeTheme = () => {
    console.log("Change");
    if(document.getElementById("customSwitch1").checked){
        darkTheme()
    }else{
        lightTheme()
    }
}

lightTheme = () => {
    document.querySelector(".intro-img").style.backgroundImage = "url('./assets/AishwantGhimire.JPG')"
    document.documentElement.style.setProperty("--primary-bgcolor", "#fff");
    document.documentElement.style.setProperty("--primary2-font-color", "#afafaf");
    document.documentElement.style.setProperty("--primary3-font-color", "#afafaf");
}

darkTheme = () => {
    document.querySelector(".intro-img").style.backgroundImage = "url('./assets/AishwantGhimirebw.JPG')"
    document.documentElement.style.setProperty("--primary-bgcolor", "#000");
    document.documentElement.style.setProperty("--primary2-font-color", "#fff");
    document.documentElement.style.setProperty("--primary3-font-color", "#333");
}