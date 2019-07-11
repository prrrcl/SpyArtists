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
  changeBg();
  backHombe();
  function generateLayout() {
    layoutInstance = new Layout(root);
    layoutInstance.generate();
  }
  function generateHeader() {
    headerInstance = new Header(layoutInstance.header, 'SpyArtists',`Search all album's from your favourite artist's`);
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
  function backHombe(){
    let header = document.querySelector('#main-header');
    header.addEventListener('click', ()=>{
      location.reload();
    })
  }
  function changeUrl(event) {
    event.preventDefault();
    
    let url = event.target.attributes.url.value;
    let input = document.querySelector('.search-input').value;
    if(input !== ''){
      routerInstance.buildDOM(url, layoutInstance.main, input);
    }else{
      let error = document.querySelector('.error');
      error.setAttribute('style','padding: 8px;background: rgba(0, 0, 0, 0.8);');
      error.innerHTML = 'Por favor, introduce un artista';
    }
    
  }
  function changeBg() {
    let bgs = [
      './assets/imgs/5.jpg',
      './assets/imgs/1.jpg',
      './assets/imgs/2.jpg',
      './assets/imgs/3.jpg',
      './assets/imgs/4.jpg',
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