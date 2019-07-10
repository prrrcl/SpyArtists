'use strict';

function Loading(parent) {

  this.parent = parent;
  this.elements = null;

}

Loading.prototype.generate = function(){
  this.elements = `
  <div class="loading">
    <p>Cargando...</p>
  </div>
  `;
  this.render();
}
Loading.prototype.render = function (){
  this.parent.innerHTML = this.elements;
}