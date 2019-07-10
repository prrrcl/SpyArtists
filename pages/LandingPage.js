'use strict';

function LandingPage(parent) {
  this.parent = parent;
  this.elements = null;
}

LandingPage.prototype.generate = function () {
  this.elements = `
    <section>
      <input class="search-input" name="item" placeholder="Busca un artista" autocomplete="off">
      <a href="#" class="search-btn" url="/artistslist">Buscar</a>
    </section>
  `
  this.render();
}
LandingPage.prototype.render = function () {

  this.parent.innerHTML = this.elements;
}

