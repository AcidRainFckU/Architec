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

// FAQ

const faqQuest = document.querySelectorAll(".quest__title");

faqQuest.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.parentNode.classList.contains("open")) {
      el.parentNode.classList.remove("open");
    } else {
      el.parentNode.classList.add("open");
    }
  });
});

// UPARROW

("use strict");

function trackScroll() {
  var scrolled = window.pageYOffset;
  var coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    upArrow.parentNode.setAttribute("style", "z-index: 9999");
    upArrow.parentNode.classList.add("show");
  }
  if (scrolled < coords) {
    upArrow.parentNode.setAttribute("style", "z-index: -1");
    upArrow.parentNode.classList.remove("show");
  }
}

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 0);
  }
}

const upArrow = document.getElementById("upButton");

window.addEventListener("scroll", trackScroll);
upArrow.addEventListener("click", backToTop);
