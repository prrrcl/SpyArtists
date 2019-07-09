'use strict';

function main(){
  const ENTRY_POINT = '/';
  let layoutInstance = null;
  let root = document.querySelector('#root');

  generateLayout();

  function generateLayout () {
    layoutInstance = new Layout(root);
    layoutInstance.generate();
  }
}
window.addEventListener('load', main);