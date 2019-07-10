'use strict';
function ListOfArtists(parent, artistName) {
  this.parent = parent;
  this.elements = null;
  this.artistName = artistName;
  this.artists = null;
  this.details = null;
}

ListOfArtists.prototype.generate = async function () {
  await this.connectToAPI();
  this.elements = `
  <section>
  <ul>
  `;
  this.artists.message.body.artist_list.forEach(artist => {
    this.elements += `
    <li><a class="artist-found" href="#" url="/viewartist" data-id="${artist.artist.artist_id}">${artist.artist.artist_name}</a></li>
    `
  });
  this.elements += `
  </ul>
  </section>
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