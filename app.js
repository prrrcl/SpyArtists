'use strict';

function main(){
  const ENTRY_POINT = '/';
  let layoutInstance = null;
  let headerInstance = null;
  let root = document.querySelector('#root');

  generateLayout();
  generateHeader();
  activateRouter();

  function generateLayout () {
    layoutInstance = new Layout(root);
    layoutInstance.generate();
  }
  function generateHeader (){
    headerInstance = new Header(layoutInstance.header, 'SpyArtists');
    headerInstance.generate();
  }
  function activateRouter(){
    routerInstance.buildDOM(ENTRY_POINT, layoutInstance.main);
  }
}
window.addEventListener('load', main);