'use strict';

function Header(parent, name, motto){
  this.parent = parent;
  this.name = name;
  this.elements = null;
  this.motto = motto;
}

Header.prototype.generate = function(){
  this.elements = `
    <h1>${this.name}</h1>
    <h3>${this.motto}</h3>
  `
  this.render();
}
Header.prototype.render = function(){
  this.parent.innerHTML = this.elements;
}