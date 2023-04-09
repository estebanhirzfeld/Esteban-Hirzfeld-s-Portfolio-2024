var targetExperiencia = parseInt($("#targetExperiencia").text());
var targetProyectos = parseInt($("#targetProyectos").text());
var targetEmpresas = parseInt($("#targetEmpresas").text());


    function animateValue(id, start, end, duration) {
        if (start === end) return;
        var range = end - start;
        var current = start;
        var increment = end > start? 1 : +1;
        var stepTime = Math.abs(Math.floor(duration / range));
        var obj = document.getElementById(id);
        var timer = setInterval(function() {
            current += increment;
            // obj.innerHTML = ("0"+ current + "+");
            // if obj.innerHTML has 2 digits, remove the 0, else, keep it and add the + sign
            obj.innerHTML = (current.toString().length == 2 ? current : "0"+ current) + "+";

            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
    
    animateValue("targetExperiencia", 0, targetExperiencia , 3500);  //id start target duration
    animateValue("targetProyectos", 0 , targetProyectos , 3500);  //id start target duration
    animateValue("targetEmpresas", 0 , targetEmpresas , 3500);  //id start target duration
