/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/path/calc.js":
/*!*****************************!*\
  !*** ./src/js/path/calc.js ***!
  \*****************************/
/***/ ((module) => {

function calc() {
  let persons = document.querySelectorAll(".counter-block-input")[0];
  let restDays = document.querySelectorAll(".counter-block-input")[1];
  let place = document.getElementById("select");
  let totalValue = document.getElementById("total");
  let personsSum = 0;
  let daysSum = 0;
  let total = 0;

  totalValue.innerHTML = 0;

  persons.addEventListener("change", function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == "") {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  restDays.addEventListener("change", function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (persons.value == "") {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  place.addEventListener("change", function () {
    if (restDays.value == "" || persons.value == "") {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
}
module.exports = calc;


/***/ }),

/***/ "./src/js/path/form.js":
/*!*****************************!*\
  !*** ./src/js/path/form.js ***!
  \*****************************/
/***/ ((module) => {

function forma() {
  let message = {
    loading: "Загрузка...",
    success: "Спасибо, скоро мы с вами свяжемся!",
    failure: "Что-то пошло не так ....",
  };

  let form = document.querySelector(".main-form");
  let input = form.getElementsByTagName("input");
  let statusMessage = document.createElement("div");
  statusMessage.classList.add("status");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open("POST", "server.php");
    request.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );

    let formData = new FormData(form);

    let obj = {};
    formData.forEach(function (value, key) {
      obj[key] = value;
    });
    let json = JSON.stringify(obj);

    request.send(formData);

    request.addEventListener("readystatechange", function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState == 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    for (let i = 0; i < input.length; i++) {
      input[i].value = "";
    }
  });
}

module.exports = forma;


/***/ }),

/***/ "./src/js/path/modal.js":
/*!******************************!*\
  !*** ./src/js/path/modal.js ***!
  \******************************/
/***/ ((module) => {

function modal() {
  let more = document.querySelector(".more");
  let overlay = document.querySelector(".overlay");
  let close = document.querySelector(".popup-close");

  more.addEventListener("click", function () {
    overlay.style.display = "block";
    this.classList.add("more-splash");
    document.body.style.overflow = "hidden";
  });

  close.addEventListener("click", function () {
    overlay.style.display = "none";
    more.classList.remove("more-splash");
    document.body.style.overflow = "";
  });
}
module.exports = modal;


/***/ }),

/***/ "./src/js/path/slider.js":
/*!*******************************!*\
  !*** ./src/js/path/slider.js ***!
  \*******************************/
/***/ ((module) => {

function slaider() {
  let slideIndex = 1;
  let slides = document.querySelectorAll(".slider-item");
  let prev = document.querySelector(".prev");
  let next = document.querySelector(".next");
  let dotsWrap = document.querySelector(".slider-dots");
  let dots = document.querySelectorAll(".dot");

  showSlides(slideIndex);
  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => (item.style.display = "none"));

    dots.forEach((item) => item.classList.remove("dot-active"));

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("dot-active");
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  function currentSlides(n) {
    showSlides((slideIndex = n));
  }
  prev.addEventListener("click", function () {
    plusSlides(-1);
  });
  next.addEventListener("click", function () {
    plusSlides(1);
  });

  dotsWrap.addEventListener("click", function (event) {
    for (let i = 0; i < dots.length; i++) {
      if (
        event.target.classList.contains("dot") &&
        event.target == dots[i - 1]
      ) {
        currentSlides(i);
      }
    }
  });
}
module.exports = slaider;


/***/ }),

/***/ "./src/js/path/tabs.js":
/*!*****************************!*\
  !*** ./src/js/path/tabs.js ***!
  \*****************************/
/***/ ((module) => {

function tabs() {
  let tab = document.querySelectorAll(".info-header-tab");
  let info = document.querySelector(".info-header");
  let tabContent = document.querySelectorAll(".info-tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }

  info.addEventListener("click", function (event) {
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}
module.exports = tabs;


/***/ }),

/***/ "./src/js/path/timer.js":
/*!******************************!*\
  !*** ./src/js/path/timer.js ***!
  \******************************/
/***/ ((module) => {

function timeri() {
  let deadline = "2022-10-19";
  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor(t / (1000 * 60 * 60));

    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id);
    let hours = timer.querySelector(".hours");
    let minutes = timer.querySelector(".minutes");
    let seconds = timer.querySelector(".seconds");
    let timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock("timer", deadline);
}
module.exports = timeri;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  let calc = __webpack_require__(/*! ../js/path/calc.js */ "./src/js/path/calc.js");
  let forma = __webpack_require__(/*! ../js/path/form */ "./src/js/path/form.js");
  let slider = __webpack_require__(/*! ../js/path/slider */ "./src/js/path/slider.js");
  let tabs = __webpack_require__(/*! ../js/path/tabs */ "./src/js/path/tabs.js");
  let timeri = __webpack_require__(/*! ../js/path/timer */ "./src/js/path/timer.js");
  let modal = __webpack_require__(/*! ../js/path/modal */ "./src/js/path/modal.js");
  calc();
  forma();
  slider();
  tabs();
  timeri();
  modal();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map