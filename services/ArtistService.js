'use strict';
function ArtistService(){
  this.baseURL = 'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/';
  this.formatAndApiKey = '&format=json&apikey=41d657034f23a97207f58cde2844b01a'
}
ArtistService.prototype.getArtists = async function (artist){
  let response = await fetch(`${this.baseURL}artist.search?q_artist=${artist}&page_size=5${this.formatAndApiKey}`);
  let data = await response.json();
  return data;
}


let artistServiceInstance = new ArtistService();