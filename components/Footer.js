'use strict';

function Footer(parent){
  this.parent = parent;
  this.elements = null;
}

Footer.prototype.generate = function(){
  this.elements = `
<section>
  <p>Todos los izquierdos reservados. SpyArtists &reg; 2019
</section>
  `
  this.render();
}
Footer.prototype.render = function(){
  this.parent.innerHTML = this.elements;
}