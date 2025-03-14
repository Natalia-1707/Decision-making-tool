import { Header } from './header/header';
import { BackButton } from './buttons/back-btn';
import { SoundButton } from './buttons/sound-btn';
import { Duration } from './second-page-options/duration';
import { PlayButton } from './buttons/play-btn';
import { PickedOption } from './second-page-options/picked-option';
import { Wheel } from './second-page-options/wheel';

export class SecondPage {
  private container: HTMLDivElement;
  private buttonsContainer: HTMLDivElement;
  private topButtonsContainer: HTMLDivElement;
  private backButton: BackButton;
  private soundButton: SoundButton;
  private duration: Duration;
  private playButton: PlayButton;
  private readonly pickedOption: PickedOption;
  private wheel: Wheel;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('container', 'second-page');

    this.topButtonsContainer = document.createElement('div');
    this.topButtonsContainer.classList.add('top-buttons-container');

    this.buttonsContainer = document.createElement('div');
    this.buttonsContainer.classList.add('buttons-container');

    this.backButton = new BackButton(this.container, this.container);
    this.topButtonsContainer.appendChild(this.backButton.getButton());
    this.container.appendChild(this.buttonsContainer);

    this.soundButton = new SoundButton();
    this.topButtonsContainer.appendChild(this.soundButton.getOnButton());
    this.topButtonsContainer.appendChild(this.soundButton.getOffButton());

    this.duration = new Duration();
    this.topButtonsContainer.appendChild(this.duration.getDuration());

    this.playButton = new PlayButton();

    this.pickedOption = new PickedOption();

    this.buttonsContainer.appendChild(this.topButtonsContainer);
    this.buttonsContainer.appendChild(this.playButton.getButton());
    this.buttonsContainer.appendChild(this.pickedOption.getPickedOption());

    this.wheel = new Wheel();
    this.container.appendChild(this.wheel.getWheel());

    this.container.style.display = 'none';
  }

  getContainer(): HTMLDivElement {
    return this.container;
  }

  addTitle(titleText: string) {
    const title: Header = new Header(titleText);
    this.container.prepend(title.header);
  }

  addDuration(titleText: string) {
    const title: Header = new Header(titleText);
    this.container.appendChild(title.header);
  }
  updateWheel(options: { title: string; weight: number }[]): void {
    this.wheel.setOptions(options);
    this.wheel.drawWheel();
  }
}
