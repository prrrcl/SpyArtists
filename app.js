'use strict';

function main() {
  const ENTRY_POINT = '/';
  let layoutInstance = null;
  let headerInstance = null;
  let footerInstance = null;
  let root = document.querySelector('#root');

  generateLayout();
  generateHeader();
  generateFooter();
  activateRouter();
  listenerSearch();

  function generateLayout() {
    layoutInstance = new Layout(root);
    layoutInstance.generate();
  }
  function generateHeader() {
    headerInstance = new Header(layoutInstance.header, 'SpyArtists');
    headerInstance.generate();
  }
  function generateFooter() {
    footerInstance = new Footer(layoutInstance.footer);
    footerInstance.generate();
  }
  function activateRouter() {
    routerInstance.buildDOM(ENTRY_POINT, layoutInstance.main);
  }
  function listenerSearch() {
    let btn = document.querySelector('.search-btn');
    btn.addEventListener('click', changeUrl);
  }
  function changeUrl(event) {
    event.preventDefault();
    let url = event.target.attributes.url.value;
    let input = document.querySelector('.search-input').value;
    routerInstance.buildDOM(url, layoutInstance.main, input);
  }
  
}
window.addEventListener('load', main);