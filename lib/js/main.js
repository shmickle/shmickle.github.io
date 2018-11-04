"use strict";

window.onload = function () {
  sidenavInitialization();
};

function sidenavInitialization() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {//Sidenav options
  });
}