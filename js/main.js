$(document).ready(function () {
  $(".header").height($(window).height());

  $(".navbar a").click(function () {
    $("body,html").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top,
      },
      1000
    );
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let date = new Date();
  let year = date.getFullYear();
  document.getElementById("current-year").innerHTML = year;
});
