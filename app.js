'use strict';

function main(){
  const ENTRY_POINT = '/';
  let layoutInstance = null;
  let root = document.querySelector('#root');

  function generateLayout () {
    layoutInstance = new layoutInstance(root);
    layoutInstance.generate();
  }
}
window.addEventListener('load', main);