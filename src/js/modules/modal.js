const modalCall = document.querySelectorAll("[data-modal]");
const modalClose = document.querySelectorAll(".modal__close");
const modaDialog = document.querySelectorAll(".modal__dialog");
const modals = document.querySelectorAll(".modal");

const html = document.getElementById("html");

modalCall.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();

    let modalId = el.getAttribute("data-modal").slice(1);

    for (let y = 0; y < modals.length; y++) {
      if (modals[y].id !== modalId) {
        closeModal(y);
      }
    }

    const modal = document.getElementById(modalId);

    modal.classList.add("show");
    html.classList.add("no-scroll");

    setTimeout(function () {
      modal.childNodes[1].setAttribute("style", "transform: rotateX(0)");
    }, 200);
  });
});

function closeModal(i) {
  modals[i].childNodes[1].setAttribute("style", "transform: rotateX(90deg)");
  setTimeout(function () {
    modals[i].classList.remove("show");
  }, 200);
}

modalClose.forEach((el, i) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    html.classList.remove("no-scroll");

    closeModal(i);
  });
});

modals.forEach((el, i) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    html.classList.remove("no-scroll");

    closeModal(i);
  });
});

modaDialog.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});
