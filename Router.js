'use strict';


class Router{
  constructor(){
    this.page = null
  }
  buildDOM(url, parent, artist){
    switch (url) {
      case '/':
        this.generateLandingPage(parent);
        break;
      case '/artistslist':
        this.generateListArtistsPage(parent, artist);
        break;
      case '/viewartist':
        this.generateViewArtistPage(parent, artist);
        break;
      default:
        this.generateLandingPage(parent);
    }
  }
  generateLandingPage(parent){
    this.page = new LandingPage(parent);
    this.page.generate();
  }
  generateListArtistsPage(parent, artist){
    this.page = new ListOfArtists(parent, artist);
    this.page.generate();
  }
  generateViewArtistPage(parent, artist){
    this.page = new ArtistDetail(parent, artist);
    this.page.generate();
  }
}
const routerInstance = new Router();