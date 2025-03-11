import { Header } from './header/header';
import { BackButton } from './buttons/back-btn';

export class SecondPage {
  private container: HTMLDivElement;
  private buttonsContainer: HTMLDivElement;
  private backButton: BackButton;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('container', 'second-page');

    this.buttonsContainer = document.createElement('div');
    this.buttonsContainer.classList.add('buttons-container');

    this.backButton = new BackButton(this.container, this.container);
    this.buttonsContainer.appendChild(this.backButton.getButton());
    this.container.appendChild(this.buttonsContainer);

    this.container.style.display = 'none';
  }

  getContainer(): HTMLDivElement {
    return this.container;
  }

  addTitle(titleText: string) {
    const title: Header = new Header(titleText);
    this.container.appendChild(title.header);
  }
}
