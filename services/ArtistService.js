'use strict';
function ArtistService(){
  this.baseURL = 'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/';
  this.formatAndApiKey = '&format=json&apikey=41d657034f23a97207f58cde2844b01a';
  this.baseURLWiki = 'https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&format=json&origin=*&utf8=&srsearch=';
}
ArtistService.prototype.getArtists = async function (artist){
  let response = await fetch(`${this.baseURL}artist.search?q_artist=${artist}&page=1&page_size=5${this.formatAndApiKey}`);
  let data = await response.json();
  let arrayOfArtits = data.message.body.artist_list;

  let artitsWithInfo = await Promise.all(arrayOfArtits.map(async (artist)=>{
    let name = artist.artist.artist_name;
    let artistInfo = await this.getDetailsArtis(name);
    artist.info = artistInfo;
    return artist;
  }))
  console.log(artitsWithInfo)
  return artitsWithInfo;
}
ArtistService.prototype.getDetailsArtis = async function (artist){
  let response = await fetch(`${this.baseURLWiki}${artist}`);
  let data = await response.json();
  return data;
}

let artistServiceInstance = new ArtistService();