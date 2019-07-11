'use strict';
function DetailArtistService(){
  this.baseURL = 'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/';
  this.formatAndApiKey = '&format=json&apikey=41d657034f23a97207f58cde2844b01a';
  this.baseURLForImg = 'https://cors-anywhere.herokuapp.com/http://coverartarchive.org/release/';
}
DetailArtistService.prototype.getAlbums = async function (idArtist){
  let response = await fetch(`${this.baseURL}artist.albums.get?artist_id=${idArtist}&s_release_date=desc&g_album_name=1${this.formatAndApiKey}`)
  let data = await response.json();
  let arrayOfAlbums = data.message.body.album_list;

  let albumsWithCovers = await Promise.all(arrayOfAlbums.map(async (album) => {
    let mbid = album.album.album_mbid;
    if(mbid) {
      let cover = await this.getAlbumCover(mbid)
      album.cover = cover;
      return album;
    } else {
      album.cover = {images:[{image:'./assets/imgs/undefined.jpg'}]};
      return album;
    }

  }))
  return albumsWithCovers;
}
DetailArtistService.prototype.getAlbumInfo = async function (idAlbum){
  let response = await fetch(`${this.baseURL}album.get?album_id=${idAlbum}${this.formatAndApiKey}`)
  let data = await response.json();
  
  return data;
}
DetailArtistService.prototype.getAlbumCover = async function (id){
  let response2 = await fetch(`${this.baseURLForImg}${id}`);
  if(response2.status !== 404) {
    let data2 = await response2.json();
    return data2;
  } else {
    return {images:[{image:'./assets/imgs/undefined.jpg'}]};
  }
}
let detailArtistServiceInstance = new DetailArtistService();