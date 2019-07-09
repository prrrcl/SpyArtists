'use strict';

function Router() {
  this.page = null;
}

Router.prototype.buildDOM = function (url, parent, artist) {
  switch (url) {
    case '/':
      this.generateLandingPage(parent);
      break;
    case '/artistslist':
      this.generateListArtistsPage(parent, artist);
      break;
    case '/viewsong':
      this.generateViewSongPage(parent);
      break;
    default:
      this.generateLandingPage(parent);
  }
}
Router.prototype.generateLandingPage = function (parent){
  this.page = new LandingPage(parent);
  this.page.generate();
}
Router.prototype.generateListArtistsPage = function(parent, artist){
  this.page = new ListOfArtists(parent, artist);
  this.page.generate();
}

let routerInstance = new Router();