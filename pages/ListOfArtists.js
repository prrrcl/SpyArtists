'use strict';
function ListOfArtists(parent, artistName) {
  this.parent = parent;
  this.elements = null;
  this.artistName = artistName;
  this.artists = null;
  this.details = null;
  this.loading = null;
  this.artistInfo = null;
}

ListOfArtists.prototype.generate = async function () {
  this.loading = new Loading(this.parent);
  this.loading.generate();
  
  await this.connectToAPI();
  this.elements = `
  <h3>Lista de artistas</h3>
  <ul class="list-artists">
  `;
  this.artists.forEach(artist => {

    this.elements += `
    <li><a class="artist-found" href="#" url="/viewartist" data-id="${artist.artist.artist_id}">${artist.artist.artist_name}</a></li>
    `
  });
  this.elements += `
  </ul>
  `
  this.render();
  this.addEventListeners();
}
ListOfArtists.prototype.render = function () {
  this.parent.innerHTML = this.elements;
}
ListOfArtists.prototype.connectToAPI = async function () {
  this.artists = await artistServiceInstance.getArtists(this.artistName);
}
ListOfArtists.prototype.artistDetails = async function(artist){
  artist.replace(/ /g, '%20');
  this.artistInfo = await artistServiceInstance.getDetailsArtis(artist);
}
ListOfArtists.prototype.addEventListeners = function () {
  let anchors = document.querySelectorAll('.artist-found');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', (event)=>{
      event.preventDefault();
      let url = event.target.attributes.url.value;
      let id = document.querySelector('.artist-found').dataset.id;
      routerInstance.buildDOM(url, this.parent, id);
    });
  })
}