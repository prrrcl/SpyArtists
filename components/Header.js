'use strict';

function Header(parent, name){
  this.parent = parent;
  this.name = name;
  this.elements = null;
}

Header.prototype.generate = function(){
  this.elements = `
    <h1>${this.name}</h1>
  `
  this.render();
}
Header.prototype.render = function(){
  this.parent.innerHTML = this.elements;
}