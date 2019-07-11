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
  var imagesElements = [];
  this.loading = new Loading(this.parent);
  this.loading.generate();
  await this.connectToAPI();
  this.elements = `
    <section class="artist-page">
      <h3>Albums</h3>
      <section class="cards-container">
      `
  this.albums.forEach( (album, index) => {
    var img = document.createElement('img');
    img.setAttribute('src', album.cover.images[0].image)
    imagesElements.push(img);
    this.elements += `
    <article class="card-album card-album-${(index+1)}">
      <h4>${album.album.album_name}</h4>
      <div style="width:10%;height:10%" class="image-loading lds-eclipse"><div>
    </article>
    `;
  })

  this.elements += `
      </section>
    </section>
  `
  this.render();
  var article = document.querySelectorAll('.card-album');
  var loading = document.querySelectorAll('.image-loading');

  imagesElements.forEach((image, index) => {
    image.onload = function() {
      article[index].appendChild(image);
      loading[index].remove();
    }
  })

  

  // setTimeout(() => {
  // }, 3000);


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
