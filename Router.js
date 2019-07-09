'use strict';

function Router() {
  this.page = null;
}

Router.prototype.buildDOM = function (url, parent) {
  switch (url) {
    case '/':
      this.generateLandingPage(parent);
      break;
    case '/artistslist':
      this.generateListArtistsPage(parent);
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

let routerInstance = new Router();