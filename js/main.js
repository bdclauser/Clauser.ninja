$(document).ready(function(){
    $('.header').height($(window).height());

    $(".navbar a").click(function(){
        $("body,html").animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)

    })

})

$(document).addEventListener('DOMContentLoaded', function() {
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("current-year").innerHTML = year;
});