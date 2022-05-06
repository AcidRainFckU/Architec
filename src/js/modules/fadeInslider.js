const sliderItem = document.querySelectorAll(".slider__item");

var currentSlide = 1;

function removeSlider(porps) {
  sliderItem.forEach((el, i) => {
    if (i == porps - 1) {
      return;
    } else {
      el.classList.remove("open");
    }
  });
}

function currentSlideChange(prop) {
  sliderItem[prop - 1].setAttribute("style", "z-index: 9");
  sliderItem[currentSlide].setAttribute("style", "z-index: 10");
  sliderItem[currentSlide].classList.add("open");
}

function sliderAnim() {
  if (currentSlide == sliderItem.length - 1) {
    sliderItem[0].classList.remove("first-open");

    removeSlider(currentSlide);

    currentSlideChange(currentSlide);

    currentSlide = 0;
  } else if (currentSlide == 0) {
    removeSlider(sliderItem.length);

    currentSlideChange(sliderItem.length);

    sliderItem[currentSlide + 1].classList.remove("open");

    currentSlide++;
  } else {
    removeSlider(currentSlide);

    currentSlideChange(currentSlide);

    sliderItem[currentSlide + 1].classList.remove("open");

    currentSlide++;
  }
}

setInterval(sliderAnim, 4000);
