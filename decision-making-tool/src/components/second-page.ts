export class SecondPage {
  private container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('container', 'second-page');
  }

  getContainer(): HTMLDivElement {
    return this.container;
  }
}
