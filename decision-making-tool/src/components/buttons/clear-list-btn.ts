import { FirstPage } from '../first-page';

export class ClearListButton {
  private optionsContainer: HTMLElement;
  private firstPage: FirstPage;

  constructor(optionsContainer: HTMLElement, firstPage: FirstPage) {
    this.optionsContainer = optionsContainer;
    this.firstPage = firstPage;
  }

  addEventListenerToButton(button: HTMLButtonElement) {
    button.addEventListener('click', () => {
      this.deleteAll();
    });
  }

  deleteAll() {
    this.optionsContainer.innerHTML = '';
    this.firstPage.resetIdCounter();
  }
}
