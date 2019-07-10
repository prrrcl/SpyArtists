'use strict';
function DetailArtistService(){
  this.baseURL = 'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/';
  this.formatAndApiKey = '&format=json&apikey=41d657034f23a97207f58cde2844b01a'
}
DetailArtistService.prototype.getAlbums = async function (idArtist){
  let response = await fetch(`${this.baseURL}artist.albums.get?artist_id=${idArtist}&s_release_date=desc&g_album_name=1${this.formatAndApiKey}`)
  let data = await response.json();
  return data;
}
DetailArtistService.prototype.getAlbumInfo = async function (idAlbum){
  let response = await fetch(`${this.baseURL}album.get?album_id=${idAlbum}${this.formatAndApiKey}`)
  let data = await response.json();
  return data;
}

let detailArtistServiceInstance = new DetailArtistService();