'use strict';
class Header{
  constructor(parent, name, motto){
    this.parent = parent;
    this.name = name;
    this.elements = null;
    this.motto = motto;
  }
  generate(){
    this.elements = `
      <h1>${this.name}</h1>
      <h3>${this.motto}</h3>
    `
    this.render();
  }
  render(){
    this.parent.innerHTML = this.elements;
  }
}
