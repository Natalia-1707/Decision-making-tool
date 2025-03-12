import { Header } from './header/header';
import { BackButton } from './buttons/back-btn';
import { SoundButton } from './buttons/sound-btn';

export class SecondPage {
  private container: HTMLDivElement;
  private buttonsContainer: HTMLDivElement;
  private backButton: BackButton;
  private soundButton: SoundButton;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('container', 'second-page');

    this.buttonsContainer = document.createElement('div');
    this.buttonsContainer.classList.add('buttons-container');

    this.backButton = new BackButton(this.container, this.container);
    this.buttonsContainer.appendChild(this.backButton.getButton());
    this.container.appendChild(this.buttonsContainer);

    this.soundButton = new SoundButton();
    this.buttonsContainer.appendChild(this.soundButton.getOnButton());
    this.buttonsContainer.appendChild(this.soundButton.getOffButton());


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
