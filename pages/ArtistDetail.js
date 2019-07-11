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
      <p><small>Pulsa en el álbum para ver el tracklist</small></p>
      <section class="cards-container">
      `
  this.albums.forEach( (album, index) => {
    var img = document.createElement('img');
    img.setAttribute('src', album.cover.images[0].image)
    imagesElements.push(img);
    this.elements += `
    <article class="card-album card-album-${(index+1)}">
      <h4>${album.album.album_name}</h4>
      <h6>${this.formatDateAlbum(album.album.album_release_date)}</h6>
      <ul class="tracklist">
      `
  
    album.info.message.body.track_list.forEach((track)=>{
      this.elements += `
      <li>${track.track.track_name}</li>
      `
    })
  
      this.elements +=`
      </ul>
      <div class="tracklist">${album.info.message}</div>
      <div style="width:10%;height:10%" class="image-loading lds-eclipse"><div>
    </article>
    `;
  })

  this.elements += `
      </section>
    </section>
  `
  this.render();
  this.addListeners();
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
ArtistDetail.prototype.formatDateAlbum =  function(date){
  let dateArr = date.split('-');
  let d = new Date(dateArr[0], dateArr[1], dateArr[2]);
  let options = {  year: 'numeric', month: 'long' };

  return d.toLocaleDateString('es-ES', options).toUpperCase();
}
ArtistDetail.prototype.addListeners = function(){
  var cards = document.querySelectorAll('.card-album');

  cards.forEach((card)=>{
    card.addEventListener('click',()=>{
      card.classList.toggle('opened');
    })
  })
}
