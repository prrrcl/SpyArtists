'use strict'

function ArtistDetail(parent, artist) {
  this.parent = parent;
  this.artist = artist;
  this.elements = null;
  this.albums = null;
  this.albumsInfo = null;
  this.albumImg = null;
  this.loading = null;
}

ArtistDetail.prototype.generate = async function () {
  this.loading = new Loading(this.parent);
  this.loading.generate();
  await this.connectToAPI();
  this.elements = `
    <section class="artist-page">
      <h3>Albums</h3>
      `
  this.albums.forEach( album =>{
    this.elements += `
    <article class="card-album">
      <h4>${album.album.album_name}</h4>
      <img src="${album.cover.images[0].image}">
    </article>
    `;
  })

  this.elements += `
    </section>
  `
  this.render();
}
ArtistDetail.prototype.render = function () {
  this.parent.innerHTML = this.elements;
}

ArtistDetail.prototype.connectToAPI = async function () {
  this.albums = await detailArtistServiceInstance.getAlbums(this.artist);
}
ArtistDetail.prototype.getCover =  async function(id){
  this.albumImg = await detailArtistServiceInstance.getAlbumCover(id);
}
