'use strict';

class LandingPage{
  constructor(parent){
    this.parent = parent;
    this.elements = null;
  }
  generate(){
    this.elements = `
      <section>
        <input class="search-input" name="item" placeholder="Busca un artista" autocomplete="off">
        <a href="#" class="search-btn" url="/artistslist">Buscar</a>
        <p class="error"></p>
      </section>
    `
    this.render();
  }
  render(){
    this.parent.innerHTML = this.elements;
  }
}
