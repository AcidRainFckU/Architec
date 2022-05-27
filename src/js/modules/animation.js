const loaderElem = document.getElementById("loader");
const html = document.getElementById("html");

window.onload = function () {
  setTimeout(() => {
    html.classList.remove("no-scroll");

    loaderElem.setAttribute("style", "top: -100%");
    setTimeout(() => {
      loaderElem.classList.add("close");
    }, 300);
  }, 1100);
};
