'use strict';

class Footer{
  constructor(parent){
    this.parent = parent;
    this.elements = null;
  }
  generate(){
    this.elements = `
    <section>
    <p>Todos los izquierdos reservados. SpyArtists &reg; 2019
    </section>
    `
    this.render();
  }
  render(){
    this.parent.innerHTML = this.elements;
  }
}