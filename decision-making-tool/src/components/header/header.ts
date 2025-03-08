export class Header {
  private header: HTMLHeadingElement;

  constructor(text: string) {
    this.header = document.createElement('h1');
    this.header.textContent = 'Decision Making Tool';
    this.header.classList.add('header');
  }

  getElement(): HTMLHeadingElement {
    return this.header;
  }
}
