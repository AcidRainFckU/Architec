const header = document.querySelector(".header");

export function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp");
    } else {
      document.querySelector("body").classList.add("no-webp");
    }
  });
}

export function headerColor() {
  const mainSecH = document.querySelector(".main-section").clientHeight;
  let top = window.scrollY;

  if (top < mainSecH) {
    header.classList.remove("fixed");
    header.classList.add("absolute");
  } else {
    header.classList.remove("absolute");
    header.classList.add("fixed");
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  headerColor();
});
window.addEventListener("scroll", function () {
  headerColor();
});
