'use strict';
class Loading{
  constructor(parent){
    this.parent = parent;
    this.elements = null;
    this.dots = '';
  }
  generate(){
    this.elements = `
    <div class="loading">
      <p>Cargando</p>
      <p class="dots"></p>
    </div>
    `;
    this.render();
    this.etc();
  }
  etc(){
    const dotsDOM = document.querySelector('.dots');
    setInterval(()=>{
      
      this.dots += '.'
      if(this.dots === '....'){
        this.dots = '';
      }
      dotsDOM.innerHTML = this.dots;
    },200);
  }
  render(){
    this.parent.innerHTML = this.elements;
  }
}