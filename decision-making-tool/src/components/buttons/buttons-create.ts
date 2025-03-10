export class Button {
  public button: HTMLButtonElement;

  constructor(text: string, id: string) {
    this.button = document.createElement('button');
    this.button.textContent = text;
    this.button.id = id;
    this.button.classList.add('buttons');
  }

  getButton(): HTMLButtonElement {
    return this.button;
  }
}
