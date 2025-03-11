import '../second-page-style.css';
import { navigateToPage } from '../routes';

export class BackButton {
  private button: HTMLButtonElement;

  constructor(
    private secondPage: HTMLElement,
    private firstPage: HTMLElement
  ) {
    this.button = document.createElement('button');
    this.button.classList.add('back-button');
    this.button.textContent = 'Back';
    this.addEventListeners();
  }

  private addEventListeners(): void {
    this.button.addEventListener('click', this.navigateBack.bind(this));
    console.log('Event listener added to button');
  }

  private navigateBack(): void {
    console.log('Button clicked, navigating back');
    navigateToPage('first');
  }

  getButton(): HTMLButtonElement {
    return this.button;
  }
}
