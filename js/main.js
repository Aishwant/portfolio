
//Navigations
openNav = () => { document.getElementById("sidenav").style.width = "100%"; }

closeNav = () => { document.getElementById("sidenav").style.width = "0"; }

aboutme = () => { closeNav(); $('#aboutme').select(); }

skills = () => { closeNav(); $('#skills').select(); }

experiences = () => { closeNav(); $('#experiences').select(); }

education = () => { closeNav(); $('#education').select(); }

contact = () => { closeNav(); $('#contact').select(); }



// Functions to make the div active and change backgrounds
var globalmax = $(".main-contents").height() - $(".main-contents").height()/2;

var globalmin = -2;
var active = ".aboutme-nav";

makeactive = () => {
    $('.aboutme-nav').css("background-color", "#1D3557");
    $('.skills-nav').css("background-color", "#1D3557");
    $('.experiences-nav').css("background-color", "#1D3557");
    $('.education-nav').css("background-color", "#1D3557");
    $('.contact-nav').css("background-color", "#1D3557");
    $(active).css("background-color", "#96c4e4");
}

makeactive();

$('.main-contents').on('scroll', () => {
    if($('#aboutme').position().top < globalmax && $('#aboutme').position().top > globalmin && active != ".aboutme-nav"){
        active = ".aboutme-nav";
        makeactive();
    }
    else if($('#skills').position().top < globalmax && $('#skills').position().top > globalmin && active != "skills-nav"){
        active = ".skills-nav";
        makeactive();
    }
    else if($('#experiences').position().top < globalmax && $('#experiences').position().top > globalmin && active != "experiences-nav"){
        active = ".experiences-nav";
        makeactive();
    }
    else if($('#education').position().top < globalmax && $('#education').position().top > globalmin && active != "education-nav"){
        active = ".education-nav";
        makeactive();
    }
    else if($('#contact').position().top < globalmax && $('#contact').position().top > globalmin && active != "contact-nav"){
        active = ".contact-nav";
        makeactive();
    }
});


sizeContentDivs = () => {
    if (window.outerWidth <= 850 ){
        var width = window.outerWidth - 70 - 15;
        $(".heading").width(width);
    }else{
        var width = $(".content").width() - 230 - 70;
        $(".heading").width(width);
    }
}

sizeContentDivs();

// Change div on resize
window.onresize = () =>{
    // var width = $(".content").width() - 70;
    // $(".heading").width(width);
    sizeContentDivs();
}