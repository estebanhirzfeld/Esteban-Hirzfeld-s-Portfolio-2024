// minified NavBar

// let moon = "fa-regular fa-moon";
// moon = "fa-solid fa-moon";

closedNav()
openedNav()
$('.openedNav').hide();
function openedNav() {
    $('.openedNav').append(
        `
        <div class="container-fluid navBar  pt-2">
        <div class="row ">
            <button class="col-4 col-md-4 col-lg-4 py-4 home__button">
                <span><i class="fas fa-home col-12 navBar__font--color"></i></span>
                <span class="navBar__font--color">Home</span>
            </button>
            <button class="col-4 col-md-4 col-lg-4 py-4 aboutMe__button">
                <span><i class="fas fa-user col-12 navBar__font--color"></i></span>
                <span class="navBar__font--color">Acerca de Mi</span>
            </button>
            <button class="col-4 col-md-4 col-lg-4 py-4 skills__button">
                <span><i class="fas fa-file-invoice col-12 navBar__font--color"></i></span>
                <span class="navBar__font--color">Skills</span>
            </button>
    
            <button class="col-4 col-md-4 col-lg-4 py-4 services__button">
                <span><i class="fas fa-briefcase col-12 navBar__font--color"></i></span>
                <span class="navBar__font--color">Servicios</span>
            </button>
            <button class="col-4 col-md-4 col-lg-4 py-4 portfolio__button">
                <span><i class="fas fa-image col-12 navBar__font--color"></i></span>
                <span class="navBar__font--color">Portfolio</span>
            </button>
            <button class="col-4 col-md-4 col-lg-4 py-4 contactMe__button">
                <span><i class="fas fa-comment-alt col-12 navBar__font--color"></i></span>
                <span class="navBar__font--color">Contactarme</span>
            </button>
    
            <div class="container-fluid">
                <div class="row pb-2">
                    <div class="col-12 col-md-12 col-lg-12 d-flex justify-content-end align-items-center">
                        <button class="closeNav__button navBar__font--color"><span><i class="fas fa-times"></i></span></button>
                    </div>
                </div>
            </div>
        </div >
    </div >
        `
    )
}

function closedNav() {
    $('.closedNav').html(
        `<div data-aos="fade-up" class="container-fluid navBar__controller py-3">
                <div class="row">
                    <div class="col-8 col-md-8 col-lg-8 d-flex justify-content-start align-items-center">
                        <button class="home__button navBar__font--color"><span>Esteban Hirzfeld</i></span></button>
                    </div>
                    <div class="col-4 col-md-4 col-lg-4 d-flex justify-content-end align-items-center">
                        <button class="darkModeButton"><span><i class="fa-regular fa-moon px-2 navBar__font--color"></i></span></button>
                        <button class="openNav__button navBar__font--color"><span><i class="fas fa-th px-2"></i></span></button>
                    </div>
                </div>
            </div>
    `)
}

$('.openNav__button').click(function () {
    $('.closedNav').hide();
    $('.openedNav').show();
})

$('.closeNav__button').click(function () {
    $('.closedNav').show();
    $('.openedNav').hide();
})

$('.home__button').click(function () {
    $('html, body').animate({ scrollTop: $('#home').offset().top }, 100);
    $('.closedNav').show();
    $('.openedNav').hide();
})
$('.aboutMe__button').click(function () {
    $('html, body').animate({ scrollTop: $('#aboutMe').offset().top }, 100);
    $('.closedNav').show();
    $('.openedNav').hide();
})
$('.skills__button').click(function () {
    $('html, body').animate({ scrollTop: $('#skills').offset().top }, 100);
    $('.closedNav').show();
    $('.openedNav').hide();
})
$('.services__button').click(function () {
    $('html, body').animate({ scrollTop: $('#services').offset().top }, 100);
    $('.closedNav').show();
    $('.openedNav').hide();
})
$('.portfolio__button').click(function () {
    $('html, body').animate({ scrollTop: $('#portfolio').offset().top }, 100);
    $('.closedNav').show();
    $('.openedNav').hide();
})
$('.contactMe__button').click(function () {
    $('html, body').animate({ scrollTop: $('#contactMe').offset().top }, 100);
    $('.closedNav').show();
    $('.openedNav').hide();
})

// darkMode /////////////////////////////////////////////////////////////////


$("body").append(
    `
    <button class="darkModeButton desktopDarkmode__button rounded-circle d-lg-flex justify-content-center align-items-center">
    <span><i class="fa-regular fa-moon fa-lg"></i></span>
    </button>
    `
)

isActive = false;
function switchDarkMode() {
    isActive = !isActive;
    if (isActive) {
        
        DarkMode();
    } else {
        LightMode();
    }
}


function DarkMode(){

    $("body").css({
        "color": "#fcfbff",
        "background-image": "linear-gradient(to top, #5f72bd 0%, #330867 100%)",
    });

    $(".cardBackground").css({
        "color": "black",
        "box-shadow":"0px 0px 0px 0px #ffffff00",
    })

    $(".rule").css({
        "box-shadow":"0px 0px 0px 0px #ffffff00",
    })

    $(".ruleDot").css({
        "box-shadow":"0px 0px 0px 0px #ffffff00",
    })

    $(".desktopNavbar").css({
        "color": "white",
    })


    $(".navBar__controller").css({
        "color": "white",
    })
    
    $(".navBar__font--color").css({
        "color": "white",
    })
    
    $(".desktopDarkmode__button").css({
        "color": "white",
        "background-color": "#2d1052"
    })


}

function LightMode(){
    
    $("body").css({
        "background-image":"none",
        "color": "black",
    });

    $(".cardBackground").css({
        "color": "black",
        "box-shadow":"5px 5px 15px 5px rgba(208, 207, 207, 0.31)"
    })

    $(".rule").css({
        "box-shadow":"5px 5px 15px 5px rgba(208, 207, 207, 0.31)"
    })

    $(".ruleDot").css({
        "box-shadow":"5px 5px 15px 5px rgba(208, 207, 207, 0.31)"
    })

    $(".desktopNavBar").css({
        "color": "black"
    })

    $(".navBar__controller").css({
        "color": "black"
    })

    $(".navBar__font--color").css({
        "color": "black"
    })

    $(".desktopDarkmode__button").css({
        "color": "black",
        "background-color": "white"
    })

}


$(".darkModeButton").click(function(){
    switchDarkMode();
})