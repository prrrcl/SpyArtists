'use strict';

function LandingPage(parent) {
  this.parent = parent;
  this.elements = null;
}

LandingPage.prototype.generate = function () {
  this.elements = ``
  this.render();
}
LandingPage.prototype.render = function () {
  this.parent.innerHTML = this.elements;
}