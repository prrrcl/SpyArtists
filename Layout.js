'use strict';
class Layout{
  constructor(root, classname){
    this.root = root;
    this.classname = classname;
    this.elements = null;
    this.header = null;
    this.main = null;
    this.footer = null;
  }
  generate(){
    this.elements = `
      <header id="main-header"></header>
      <main id="main"></main>
      <footer id="main-footer"></footer>
    `;
    this.render();
    this.getContainers();
  }
  render(){
    this.root.innerHTML = this.elements;
  }
  getContainers(){
    this.header = document.querySelector('#main-header');
    this.main = document.querySelector('#main');
    this.footer = document.querySelector('#main-footer');
  }
}