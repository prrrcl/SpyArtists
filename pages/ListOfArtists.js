'use strict';
function ListOfArtists(parent){
  this.parent = parent;
  this.elements = null;
}

ListOfArtists.prototype.generate = function(){
  this.elements = `
  <h1>Estás en listas de artistas</h1>
  `;
  this.render();
}
ListOfArtists.prototype.render = function(){
  this.parent.innerHTML = this.elements;
}