import * as flsFunctions from "./modules/fucntions.js";
import paralaxScroll from "./modules/paralax.js";
import * as swiper from "./modules/swiper.js";
import * as scroll from "./modules/scroll.js";
import * as slider from "./modules/fadeInslider.js";
import * as stages from "./modules/stages.js";
import * as modal from "./modules/modal.js";
import * as telMask from "./modules/telMask.js";
import * as loader from "./modules/loader.js";

import WOW from "wow.js";
new WOW().init();

flsFunctions.isWebp();
paralaxScroll();

// MAIL SEND

const phoneForm = document.getElementById("phoneForm");
const emailForm = document.getElementById("email__form");

phoneForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get("phone_name");
  const phone = formData.get("phone_phone");
  const data = {
    name: name,
    phone: phone,
  };
  sendMail(data, "mailPhone");
  e.target.reset();
});

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get("email__name");
  const email = formData.get("email__email");
  const data = {
    name: name,
    email: email,
  };
  sendMail(data, "mainEmail");
  e.target.reset();
});

const sendMail = (data, phpFrom) => {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log("done");
    }
  };

  xhttp.open("POST", `https://abkstudio.ru/api/${phpFrom}.php`, true);

  xhttp.send(JSON.stringify(data));
};

// ---------------------------------------------------------------------
