// PHONE

window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll(".tel"), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (9__) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      var reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      )
        this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

const phoneForm = document.getElementById("phoneForm");
const phoneInput = document.querySelector(".tel");

phoneForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (phoneInput.value.length < 18) {
    maskInput(phoneInput);
    return false;
  }
});

// EMIAL
const modalEmail = document.getElementById("email__form");
const emailInput = document.getElementById("modal_email");

function validate(modal_email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = modal_email.value;

  if (reg.test(address) == false) {
    maskInput(emailInput);
    return false;
  }
}

modalEmail.addEventListener("submit", (e) => {
  e.preventDefault();
  validate(emailInput);
});

function maskInput(el) {
  el.setAttribute("style", "border-bottom: 2px solid #dc3545; color: #dc3545");
  el.nextElementSibling.setAttribute("style", "display: unset");
}
