const menuPoints = document.querySelectorAll('a[href*="#"]');
const yOffset = -document.querySelector(".header").clientHeight;
// BURGER
const burgerOpen = document.getElementById("burgerOpen");
const burgerClose = document.getElementById("burgerClose");
const burgerMenu = document.getElementById("burgerMenu");

burgerOpen.addEventListener("click", () => {
  burgerMenu.classList.add("open");
});
function handleBurgerClose() {
  burgerMenu.classList.remove("open");
}

burgerClose.addEventListener("click", () => {
  handleBurgerClose();
});

for (let point of menuPoints) {
  point.addEventListener("click", function (e) {
    e.preventDefault();
    handleBurgerClose();
    const blockID = point.getAttribute("href").slice(1);
    const element = document.getElementById(blockID);

    if (blockID !== "about") {
      let y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      let y = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  });
}
