'use strict';

function LandingPage(parent) {
  this.parent = parent;
  this.elements = null;
}

LandingPage.prototype.generate = function () {
  this.elements = `
    <section>
      <h3>Esto es la Landing</h3>
      <input class="search-input" name="item" placeholder="Busca un artista">
      <a href="#" class="search-btn" url="/artistslist">Buscar</a>
    </section>
  `
  this.render();
}
LandingPage.prototype.render = function () {

  this.parent.innerHTML = this.elements;
}

