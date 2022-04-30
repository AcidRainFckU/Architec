const paralaxLayer = document.querySelectorAll(".parallax__layer");

function paralax() {
  let top = window.scrollY;
  let speed, yPos;
  paralaxLayer.forEach((el) => {
    speed = el.getAttribute("data-speed");
    yPos = -((top * speed) / 100);

    el.setAttribute(
      "style",
      "transform: translate3d(0px, " + yPos + "px, 0px)"
    );
  });
}

export default function paralaxScroll() {
  document.addEventListener("DOMContentLoaded", function (event) {
    paralax();
  });
  window.addEventListener("scroll", function () {
    paralax();
  });
}
