'use strict'

function ArtistDetail(parent, artist) {
  this.parent = parent;
  this.artist = artist;
  this.elements = null;
  this.albums = null;
  this.albumsInfo = null;
  this.loading = null;
}

ArtistDetail.prototype.generate = async function () {
  this.loading = new Loading(this.parent);
  this.loading.generate();
  await this.connectToAPI();
  console.log(this.albums)
  this.elements = `
    <section class="artist-page">
      <h3>Albums</h3>
      `
  this.albums.message.body.album_list.forEach(album=>{
    this.elements += `
    <article>
      <h4>${album.album.album_name}</h4>
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
  // this.albumsInfo = await detailArtistServiceInstance.getAlbumInfo(); Falta añadir el id
}