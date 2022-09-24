window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  let calc = require("../js/path/calc.js");
  let forma = require("../js/path/form");
  let slider = require("../js/path/slider");
  let tabs = require("../js/path/tabs");
  let timeri = require("../js/path/timer");
  let modal = require("../js/path/modal");
  calc();
  forma();
  slider();
  tabs();
  timeri();
  modal();
});
