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

$(document).addEventListener("DOMContentLoaded", function () {
  var date = new Date();
  var year = date.getFullYear();
  document.getElementById("current-year").innerHTML = year;
});

// Get the target element (the element with the gradient background)
const targetElement = document.querySelector(".blog");
const listItems = document.querySelectorAll("ul li");
// Function to calculate the average color of the target element
const calculateAverageColor = (element) => {
  // Create a canvas element
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  // Get the width and height of the element
  const width = element.offsetWidth;
  const height = element.offsetHeight;

  canvas.width = width;
  canvas.height = height;

  // Draw the element onto the canvas
  context.drawImage(element, 0, 0, width, height);

  // Get the image data from the canvas
  const imageData = context.getImageData(0, 0, width, height).data;

  // Calculate the average color by summing up the red, green, and blue values and dividing by the number of pixels
  let r = 0,
    g = 0,
    b = 0;
  for (let i = 0; i < imageData.length; i += 4) {
    r += imageData[i];
    g += imageData[i + 1];
    b += imageData[i + 2];
  }

  r = Math.floor(r / (imageData.length / 4));
  g = Math.floor(g / (imageData.length / 4));
  b = Math.floor(b / (imageData.length / 4));

  // Return the average color as an RGB string
  return `rgb(${r}, ${g}, ${b})`;
};

// Function to set the text color based on the average color of the background
const setTextColor = (element, averageColor) => {
  // Convert the average color to HSL
  const hsl = rgbToHsl(...averageColor.match(/\d+/g).map(Number));

  // If the lightness is less than 50%, set the text color to white, otherwise set it to black
  element.style.color = hsl[2] < 0.5 ? "white" : "black";
};

// Function to convert RGB to HSL
const rgbToHsl = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
};
 listItems.forEach((listItem) => {
    setTextColor(listItem, averageColor);
 });