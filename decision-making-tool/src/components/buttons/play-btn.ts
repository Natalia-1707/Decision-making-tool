import '../second-page-style.css';

import { Duration } from '../second-page-options/duration';
import { Wheel } from '../second-page-options/wheel';
import { PickedOption } from '../second-page-options/picked-option';
import { Notification } from '../second-page-options/notification';
import { BackButton } from './back-btn';
import { SoundButton } from './sound-btn';

export class PlayButton {
  private button: HTMLButtonElement;
  private duration: Duration;
  private wheel: Wheel;
  private pickedOption: PickedOption;
  private notification: Notification;
  private backButton: BackButton;
  private soundButton: SoundButton;

  constructor(
    duration: Duration,
    wheel: Wheel,
    pickedOption: PickedOption,
    backButton: BackButton,
    soundButton: SoundButton
  ) {
    this.button = document.createElement('button');
    this.button.classList.add('buttons-second-page');
    this.button.textContent = 'GO';
    this.duration = duration;
    this.wheel = wheel;
    this.pickedOption = pickedOption;
    this.notification = new Notification();
    this.backButton = backButton;
    this.soundButton = soundButton;

    this.button.addEventListener('click', () => this.startSpin());
  }

  getButton(): HTMLButtonElement {
    return this.button;
  }

  private startSpin(): void {
    const duration = this.duration.getDurationValue();

    if (!duration || duration < 5 || duration > 30) {
      this.notification.open();
      return;
    }

    this.button.classList.add('disabled');
    this.button.disabled = true;
    this.backButton.getButton().disabled = true;
    this.soundButton.setDisabled(true);
    this.duration.setDisabled(true);

    console.log(`Запускаем колесо на ${duration} секунд`);
    this.wheel.startSpin(duration, (option) => {
      this.pickedOption.updateText(option);
    });
    setTimeout(() => {
      this.button.classList.remove('disabled');
      this.button.disabled = false;
      this.backButton.getButton().disabled = false;
      this.soundButton.setDisabled(false);
      this.duration.setDisabled(false);
    }, duration * 1000);
  }
}
