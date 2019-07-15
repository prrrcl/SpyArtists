'use strict';
class ArtistService{
  constructor(){
    this.baseURL = 'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/';
    this.formatAndApiKey = '&format=json&apikey=41d657034f23a97207f58cde2844b01a';
    this.baseURLWiki = 'https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&format=json&origin=*&utf8=&srsearch=';
  }
  async getArtists(artist){
    const response = await fetch(`${this.baseURL}artist.search?q_artist=${artist}&page=1&page_size=5${this.formatAndApiKey}`);
    const data = await response.json();
    const arrayOfArtits = data.message.body.artist_list;
    
    const artitsWithInfo = await Promise.all(arrayOfArtits.map(async (artist)=>{
      const name = artist.artist.artist_name;
      const artistInfo = await this.getDetailsArtis(name);
      artist.info = artistInfo;
      return artist;
    }))
    return artitsWithInfo;
  }
  async getDetailsArtis(artist){
    const response = await fetch(`${this.baseURLWiki}${artist}`);
    const data = await response.json();
    return data;
  }
}

const artistServiceInstance = new ArtistService();