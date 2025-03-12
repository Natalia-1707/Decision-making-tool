import '../second-page-style.css';

export class PlayButton {
  private button: HTMLButtonElement;

  constructor() {
    this.button = document.createElement('button');
    this.button.classList.add('buttons-second-page');
    this.button.textContent = 'GO';
  }

  getButton(): HTMLButtonElement {
    return this.button;
  }
}
