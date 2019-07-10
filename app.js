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
//  changeBg();
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
  function changeBg() {
    let bgs = [
      './assets/imgs/1.jpeg',
      './assets/imgs/2.jpeg',
      './assets/imgs/3.jpeg',
      './assets/imgs/4.jpeg',
    ];
    let classes = [
      'fade-in',
      'fade',
      'fade-out',
      'fade2-in',
      'fade2',
      'fade2-out'
    ]
    let body = document.querySelector('#bg');
    let counterBgs = 0;
    let counterCls = 0;
    let duration = 2000;
    setInterval(() => {
      counterBgs++;
      if(counterBgs === bgs.length){
        counterBgs = 0;
      }
      body.setAttribute('style', `background-image: url(${bgs[counterBgs]})`);
    }, duration * 3);

    setInterval(()=>{
      body.classList.remove(classes[counterCls]);
      counterCls++;
      if(counterCls === classes.length){
        counterCls = 0;
      }
      body.classList.add(classes[counterCls]);
    },duration)
    
    

  }

}
window.addEventListener('load', main);