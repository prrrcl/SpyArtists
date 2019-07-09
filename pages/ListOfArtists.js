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
  <section>
  <ul>
  `;
   this.artists.message.body.artist_list.forEach(artist=>{
    this.elements += `
    <li>${artist.artist.artist_name}</li>
    `
  });
  this.elements += `
  </ul>
  </section>
  `
  this.render();
}
ListOfArtists.prototype.render = function(){
  this.parent.innerHTML = this.elements;
}
ListOfArtists.prototype.connectToAPI = async function(){
  this.artists = await artistServiceInstance.getArtists(this.artistName);
  
}