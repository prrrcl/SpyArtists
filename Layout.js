'use strict';

function Layout(root, classname) {
  this.root = root;
  this.classname = classname;
  this.elements = null;
  this.header = null;
  this.main = null;
  this.footer = null;
}
Layout.prototype.generate = function () {
  this.elements = `
    <header id="main-header"></header>
    <main id="main"></main>
    <footer id="main-footer"></footer>
`;
  this.render();
  this.getContainers();
}

Layout.prototype.render = function () {
  this.root.innerHTML = this.elements;
}
Layout.prototype.getContainers = function () {
  this.header = document.querySelector('#main-header');
  this.main = document.querySelector('#main');
  this.footer = document.querySelector('#main-footer');
}