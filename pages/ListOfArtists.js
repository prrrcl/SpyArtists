'use strict';
class ListOfArtists{
  constructor(parent, artistName){
    this.parent = parent;
    this.elements = null;
    this.artistName = artistName;
    this.artists = null;
    this.details = null;
    this.loading = null;
    this.artistInfo = null;
  }
  async generate(){
    this.loading = new Loading(this.parent);
    this.loading.generate();
    
    await this.connectToAPI();
    this.elements = `
    <h3>Lista de artistas</h3>
    <ul class="list-artists">
    `;
    this.artists.forEach(artist => {
      const snippet = artist.info.query.search[0];
      if(snippet !== undefined){
    
        this.elements += `
        <li>
        <a class="artist-found" href="#" url="/viewartist" data-id="${artist.artist.artist_id}">${artist.artist.artist_name}</a>
        <div class="artist-info">
          <p>${snippet.snippet}...</p>
        </div>
        </li>
        `
      }else{
        this.elements += `
        <li>
        <a class="artist-found" href="#" url="/viewartist" data-id="${artist.artist.artist_id}">${artist.artist.artist_name}</a>
        <div class="artist-info">
        <p>
          Artista sin información disponible.
          </p>
        </div>
        </li>
        `
      }
    });
    this.elements += `
    </ul>
    `
    this.render();
    this.addEventListeners();
  }
  render(){
    this.parent.innerHTML = this.elements;
  }
  async connectToAPI(){
    this.artists = await artistServiceInstance.getArtists(this.artistName);
  }
  async artistDetails(artist){
    artist.replace(/ /g, '%20');
    this.artistInfo = await artistServiceInstance.getDetailsArtis(artist);
  }
  addEventListeners(){
    const anchors = document.querySelectorAll('.artist-found');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', (event)=>{
        event.preventDefault();
        const url = event.target.attributes.url.value;
        const id = document.querySelector('.artist-found').dataset.id;
        routerInstance.buildDOM(url, this.parent, id);
      });
    })
  }
}
