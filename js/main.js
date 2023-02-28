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

/* document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  header.style.height = `${window.innerHeight}px`;

  const navbarLinks = document.querySelectorAll(".navbar a");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = e.target.dataset.value;
      const sectionOffsetTop = document.getElementById(sectionId).offsetTop;

      window.scrollTo({
        top: sectionOffsetTop,
        behavior: "smooth",
      });
    });
  });
});
 */

document.addEventListener("DOMContentLoaded", function () {
  let date = new Date();
  let year = date.getFullYear();
  document.getElementById("current-year").innerHTML = year;
});
