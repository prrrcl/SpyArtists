'use strict';
function ListOfArtists(parent,artistName){
  this.parent = parent;
  this.elements = null;
  this.artistName = artistName;
  this.artists = null;
}

ListOfArtists.prototype.generate = async function(){
  await this.connectToAPI();
  this.elements = `
  <h1>Estás en listas de artistas</h1>
  `;
  this.render();
}
ListOfArtists.prototype.render = function(){
  this.parent.innerHTML = this.elements;
}
ListOfArtists.prototype.connectToAPI = async function(){
  this.artists = await artistServiceInstance.getArtists(this.artistName);
  
}