'use strict';

class DetailArtistService{
  constructor(){
    this.baseURL = 'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/';
    this.formatAndApiKey = '&format=json&apikey=41d657034f23a97207f58cde2844b01a';
    this.baseURLForImg = 'https://cors-anywhere.herokuapp.com/http://coverartarchive.org/release/';
  }
  async getAlbums(idArtist){
    const response = await fetch(`${this.baseURL}artist.albums.get?artist_id=${idArtist}&s_release_date=desc&g_album_name=1${this.formatAndApiKey}`)
    const data = await response.json();
    const arrayOfAlbums = data.message.body.album_list;
    
    const albumsWithCoversAndInfo = await Promise.all(arrayOfAlbums.map(async (album)=>{
      const id = album.album.album_id;
      const albumInfo = await this.getAlbumInfo(id);
      album.info = albumInfo;
      return album;
    }))
    const albumsWithCovers = await Promise.all(arrayOfAlbums.map(async (album) => {
      const mbid = album.album.album_mbid;
      if(mbid) {
        const cover = await this.getAlbumCover(mbid)
        album.cover = cover;
        return album;
      } else {
        album.cover = {images:[{image:'./assets/imgs/undefined.jpg'}]};
        return album;
      }
    }))
    return albumsWithCovers;
  }
  async getAlbumInfo(idAlbum){
    const response = await fetch(`${this.baseURL}album.tracks.get?album_id=${idAlbum}${this.formatAndApiKey}`)
    const data = await response.json();
    return data;
  }
  async getAlbumCover(id){
    const response2 = await fetch(`${this.baseURLForImg}${id}`);
    if(response2.status !== 404) {
      const data2 = await response2.json();
      return data2;
    } else {
      return {images:[{image:'./assets/imgs/undefined.jpg'}]};
    }
  }
}

const detailArtistServiceInstance = new DetailArtistService();