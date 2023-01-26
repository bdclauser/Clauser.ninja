$(document).ready(function(){
    $('.header').height($(window).height());

    $(".navbar a").click(function(){
        $("body,html").animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)

    })

})
const year = document.querySelector('#current-year')
year.innerHTML = new Date().getFullYear()
