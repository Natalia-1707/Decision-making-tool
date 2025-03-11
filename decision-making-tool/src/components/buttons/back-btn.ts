import '../second-page-style.css';

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
    this.button.addEventListener('click', () => this.navigateBack());
  }

  private navigateBack(): void {
    this.secondPage.style.display = 'none';
    this.firstPage.style.display = 'flex';
  }

  getButton(): HTMLButtonElement {
    return this.button;
  }
}
