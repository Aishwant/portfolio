
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
    $('.aboutme-nav').css("color", "grey");
    $('.skills-nav').css("color", "grey");
    $('.experiences-nav').css("color", "grey");
    $('.education-nav').css("color", "grey");
    $('.contact-nav').css("color", "grey");
    $(active).css("color", "#96c4e4");
}

makeactive();

$('.main-contents').on('scroll', () => {
    if($('#aboutme').position().top < globalmax && $('#aboutme').position().top > globalmin && active != ".aboutme-nav"){
        active = ".aboutme-nav";
        makeactive();
    }
    else if($('#skills').position().top < globalmax && $('#skills').position().top > globalmin && active != "skills-nav"){
        active = ".skills-nav"
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

    if($('#skills').position().top == ($(".main-contents").height() - 10)){
        console.log("Hello")
        console.log($(".main-contents").height() - 10);
    }

});



function sizeContentDivs(){
    if (window.innerHeight <= 850 ){
        var width = $(".div-content-3").width() - 10;
        $(".heading").width(width);
    }
    else if(window.innerHeight > 850 && window.innerHeight < 992){
        var width = $(".div-content-3").width()
        $(".heading").width(width);
    }
    else{
        var width = $(".div-content-3").width();
        $(".heading").width(width);
    }
    var imgwidth = ($("body").width() - $(".content").width())/2 + 69;
    $(".img-border").css("left", imgwidth);
    
};

var imgwidth = ($("body").width() - $(".content").width())/2 + 69;
    $(".img-border").css("left", imgwidth);

sizeContentDivs();

// Change div on resize
window.onresize = () =>{
    // var width = $(".content").width() - 70;
    // $(".heading").width(width);
    sizeContentDivs();
}

// anime({
//     targets: '.about-content',
//     top: 0,
//     bottom: 0,
//     left: -20,
//     right: 0,
//     duration: 3000
// });


// var scrollSkills = anime({
//     targets: ''
// })