// $('.carousel').bcSwipe({ threshold: 50 });

let isEducation = true;
$('.qualification__content--work div').hide()


// change image src on mouseDown change profileImg src="assets/img/1.png" to src="assets/img/3.png" and viceversa

// click_count = 0;

// let isProfileImg1 = true;
// function changeProfileImg() {
//     if (isProfileImg1) {
//         $('.profileImg').attr('src', 'assets/img/3.png');
//         isProfileImg1 = false;
//     } else {
//         $('.profileImg').attr('src', 'assets/img/1.png');
//         isProfileImg1 = true;
//     }
// }

// $(".profileImg").mousedown(function () {
//     changeProfileImg();
// }).mouseup(function () {
//     changeProfileImg();
// });

// // if click_counter >= 5 then active Google Gravity\
// function googleGravity() {
//     if (click_count >= 5) {
//         // document.addEventListener("click", function (event) {
//         //     event.target.classList.add("box2d");
//         // });
//     }
// }

// $(".profileImg").click(function () {
//     click_count++;
//     googleGravity();
// });



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


















