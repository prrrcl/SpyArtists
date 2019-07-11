'use strict';

function Loading(parent) {

  this.parent = parent;
  this.elements = null;
  this.dots = ''
}

Loading.prototype.generate = function(){
  
  this.elements = `
  <div class="loading">
    <p>Cargando</p>
    <p class="dots"></p>
  </div>
  `;
  this.render();
  this.etc();
}
Loading.prototype.etc = function(){
  var dotsDOM = document.querySelector('.dots');
  setInterval(()=>{
    
    this.dots += '.'
    if(this.dots === '....'){
      this.dots = '';
    }
    dotsDOM.innerHTML = this.dots;
  },200);
  
}
Loading.prototype.render = function (){
  this.parent.innerHTML = this.elements;
}