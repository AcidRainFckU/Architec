const loader = document.getElementById("loader");
const html = document.getElementById("html");

window.onload = function () {
  html.classList.remove("no-scroll");

  loader.setAttribute("style", "top: -200%");
  setTimeout(() => {
    loader.classList.add("close");
  }, 1100);
};
