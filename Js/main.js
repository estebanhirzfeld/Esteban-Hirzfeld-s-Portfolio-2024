// $('.carousel').bcSwipe({ threshold: 50 });

let isEducation = true;
$('.qualification__content--work div').hide()





function switchQualification() {
    isEducation = !isEducation;
    if (isEducation) {
        $('.qualification__content--education div').show()
        $('.qualification__content--work div').hide()
        console.log(isEducation);
    } else {
        $('.qualification__content--education div').hide()
        $('.qualification__content--work div').show()    
        console.log(isEducation);
    }
}

$(".switch-button").click(function () {
    switchQualification()
})













////////////////////////////////////////////////////////////////////////////////


$(".contact__label").hide();

$(".contact__input--nombre").focus(function () {
    $(".contact__label--nombre").show();
}).focusout(function () {
    $(".contact__label--nombre").hide();
});

$(".contact__input--email").focus(function () {
    $(".contact__label--email").show();
}).focusout(function () {
    $(".contact__label--email").hide();
});

$(".contact__input--asunto").focus(function () {
    $(".contact__label--asunto").show();
}).focusout(function () {
    $(".contact__label--asunto").hide();
});

$(".contact__input--mensaje").focus(function () {
    $(".contact__label--mensaje").show();
}).focusout(function () {
    $(".contact__label--mensaje").hide();
});


$(".cerrarNavbar").click(function () {
    $(".navBar").hide();
})


















