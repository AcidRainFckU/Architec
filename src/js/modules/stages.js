const stages = document.querySelectorAll(".stage");
const stageButton = document.querySelectorAll(".stages__button--open");

stageButton.forEach((el, i) => {
  el.addEventListener("click", () => {
    if (!stages[i].classList.contains("open")) {
      stages[i].classList.add("open");
      el.setAttribute("value", "Скрыть");
    } else {
      stages[i].classList.remove("open");
      el.setAttribute("value", "Раскрыть");
    }
  });
});
