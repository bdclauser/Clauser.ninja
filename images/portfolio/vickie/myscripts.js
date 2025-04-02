
// Not used at this time
/* function myFunction() {
  var x = document.getElementById("exampleDiv");
  if (window.getComputedStyle(x).display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} */

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();
});
