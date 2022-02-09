// minified NavBar

closedNav()
openedNav()
$('.openedNav').hide();
function openedNav() {
    $('.openedNav').append(
        `
        <div class="container-fluid navBar  pt-2">
        <div class="row ">
            <button class="col-4 col-md-4 col-lg-4 py-4 home__button">
                <span><i class="fas fa-home col-12 text-dark"></i></span>
                <span class="text-dark">Home</span>
            </button>
            <button class="col-4 col-md-4 col-lg-4 py-4 aboutMe__button">
                <span><i class="fas fa-user col-12 text-dark"></i></span>
                <span class="text-dark">Acerca de Mi</span>
            </button>
            <button class="col-4 col-md-4 col-lg-4 py-4 skills__button">
                <span><i class="fas fa-file-invoice col-12 text-dark"></i></span>
                <span class="text-dark">Skills</span>
            </button>
    
            <button class="col-4 col-md-4 col-lg-4 py-4 services__button">
                <span><i class="fas fa-briefcase col-12 text-dark"></i></span>
                <span class="text-dark">Servicios</span>
            </button>
            <button class="col-4 col-md-4 col-lg-4 py-4 portfolio__button">
                <span><i class="fas fa-image col-12 text-dark"></i></span>
                <span class="text-dark">Portfolio</span>
            </button>
            <button class="col-4 col-md-4 col-lg-4 py-4 contactMe__button">
                <span><i class="fas fa-comment-alt col-12 text-dark"></i></span>
                <span class="text-dark">Contactarme</span>
            </button>
    
            <div class="container-fluid">
                <div class="row pb-2">
                    <div class="col-12 col-md-12 col-lg-12 d-flex justify-content-end align-items-center">
                        <button class="closeNav__button text-dark"><span><i class="fas fa-times"></i></span></button>
                    </div>
                </div>
            </div>
        </div >
    </div >
        `
    )
}

function closedNav() {
    $('.closedNav').append(
        `<div data-aos="fade-up" class="container-fluid navBar__controller py-3">
                <div class="row">
                    <div class="col-8 col-md-8 col-lg-8 d-flex justify-content-start align-items-center">
                        <button class="home__button text-dark"><span>Esteban Hirzfeld</i></span></button>
                    </div>
                    <div class="col-4 col-md-4 col-lg-4 d-flex justify-content-end align-items-center">
                        <button><span><i class="far fa-moon px-2 text-dark"></i></i></span></button>
                        <button class="openNav__button text-dark"><span><i class="fas fa-th px-2"></i></span></button>
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