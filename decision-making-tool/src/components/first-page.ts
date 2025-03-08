import { Header } from './header/header'; 

export class FirstPage {
    private container: HTMLDivElement;
  
    constructor() {
      this.container = document.createElement('div');
      this.container.classList.add('container', 'first-page');
    }
    addTitle(titleText: string) {
        const title = new Header(titleText);
        this.container.appendChild(title.getElement());
    }
}