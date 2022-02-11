// $('.carousel').bcSwipe({ threshold: 50 });

let isEducation = true;

Education();

function Education() {
    $('.qualification__content').empty();
    $('.qualification__content').append(
        `
        <div class="col-4 col-md-4 col-lg-4 ">
                                <div class="leftColumn cardBackground alignCenter">
                                    <p>Técnico Electrónico<br>
                                        Instituto San Bonifacio</p>
                                </div>
                            </div>
                            <div class="col-4 col-md-4 col-lg-4 ">
                                <div class="middleColumn">
                                    <div class="rule"></div>
                                    <div class="ruleDot"></div>
                                    <div class="rule"></div>
                                </div>
                            </div>
                            <div class="col-4 col-md-4 col-lg-4 ">
                                <div class="RightColumn">
                                </div>
                            </div>
                            <div class="col-4 col-md-4 col-lg-4 ">
                                <div class="leftColumn">
                                </div>
                            </div>
                            <div class="col-4 col-md-4 col-lg-4 ">
                                <div class="middleColumn">
                                    <div class="rule"></div>
                                    <div class="ruleDot"></div>
                                    <div class="rule"></div>
                                </div>
                            </div>
                            <div class="col-4 col-md-4 col-lg-4 ">
                                <div class="RightColumn cardBackground alignCenter">
                                    <p>Ingeniería En Sistemas<br>
                                        UTN - University </p>
                                </div>
                            </div>
                            <div class="col-4 col-md-4 col-lg-4 ">
                                <div class="leftColumn cardBackground alignCenter">
                                    <p>Front-End Developer<br>
                                        Coder House</p>
                                </div>
                            </div>
                            <div class="col-4 col-md-4 col-lg-4 ">
                                <div class="middleColumn">
                                    <div class="rule"></div>
                                    <div class="ruleDot"></div>
                                    <div class="rule"></div>
                                </div>
                            </div>
                            <div class="col-4 col-md-4 col-lg-4">
                                <div class="RightColumn ">
                                </div>
                            </div>
                            <div class="col-4 col-md-4 col-lg-4 ">
                                <div class="leftColumn">
                                </div>
                            </div>
                            <div class="col-4 col-md-4 col-lg-4 ">
                                <div class="middleColumn">
                                    <div class="rule"></div>
                                    <div class="ruleDot"></div>
                                    <div class="rule"></div>
                                </div>
                            </div>
                            <div class="col-4 col-md-4 col-lg-4 ">
                                <div class="RightColumn cardBackground alignCenter">
                                    <p>Unity 3D Game Developer<br>
                                        Coder House</p>
                                </div>
                            </div>
                            <div class="col-4 col-md-4 col-lg-4 ">
                            <div class="leftColumn cardBackground alignCenter">
                                <p>Back-End Developer<br>
                                    Coder House</p>
                            </div>
                        </div>
                        <div class="col-4 col-md-4 col-lg-4 ">
                            <div class="middleColumn">
                                <div class="rule"></div>
                                <div class="ruleDot"></div>
                                <div class="rule"></div>
                            </div>
                        </div>
                        <div class="col-4 col-md-4 col-lg-4">
                            <div class="RightColumn ">
                            </div>
                        </div>
                            
        `
    )
}

function Work() {
    $('.qualification__content').empty();
    $('.qualification__content').append(
        `
        <div class="col-4 col-md-4 col-lg-4 ">
                                <div class="leftColumn cardBackground alignCenter">
                                    <p>Marketing & Copywriting<br>
                                        MercadoLibre</p>
                                </div>
                            </div>
                            <div class="col-4 col-md-4 col-lg-4 ">
                                <div class="middleColumn">
                                    <div class="rule"></div>
                                    <div class="ruleDot"></div>
                                    <div class="rule"></div>
                                </div>
                            </div>
                            <div class="col-4 col-md-4 col-lg-4 ">
                                <div class="RightColumn">
                                </div>
                            </div>
    
                            <div class="col-4 col-md-4 col-lg-4 ">
                                <div class="leftColumn">
    
                                </div>
                            </div>
                            <div class="col-4 col-md-4 col-lg-4 ">
                                <div class="middleColumn">
                                    <div class="rule"></div>
                                    <div class="ruleDot"></div>
                                    <div class="rule"></div>
                                </div>
                            </div>
                            <div class="col-4 col-md-4 col-lg-4 ">
                                <div class="RightColumn cardBackground alignCenter">
                                    <p>SEO & Editor<br>
                                        Youtube</p>
                                </div>
                            </div>
    
                            <div class="col-4 col-md-4 col-lg-4 ">
                                <div class="leftColumn cardBackground alignCenter">
                                    <p>Front-End Developer<br>
                                        Coder House</p>
                                </div>
                            </div>
                            <div class="col-4 col-md-4 col-lg-4 ">
                                <div class="middleColumn">
                                    <div class="rule"></div>
                                    <div class="ruleDot"></div>
                                    <div class="rule"></div>
                                </div>
                            </div>
                            <div class="col-4 col-md-4 col-lg-4">
                                <div class="RightColumn ">
                                </div>
                            </div>
        `
    );

}

function switchQualification() {
    isEducation = !isEducation;
    if (isEducation) {
        Education();
    } else {
        Work();
    }
}

$(".switch-button").click(function () {
    switchQualification()
})

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


















