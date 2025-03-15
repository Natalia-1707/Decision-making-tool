import '../second-page-style.css';

import { Duration } from '../second-page-options/duration';
import { Wheel } from '../second-page-options/wheel';
import { PickedOption } from '../second-page-options/picked-option';
import { Notification } from '../second-page-options/notification';

export class PlayButton {
  private button: HTMLButtonElement;
  private duration: Duration;
  private wheel: Wheel;
  private pickedOption: PickedOption;
  private notification: Notification;

  constructor(duration: Duration, wheel: Wheel, pickedOption: PickedOption) {
    this.button = document.createElement('button');
    this.button.classList.add('buttons-second-page');
    this.button.textContent = 'GO';
    this.duration = duration;
    this.wheel = wheel;
    this.pickedOption = pickedOption;
    this.notification = new Notification();

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

    console.log(`Запускаем колесо на ${duration} секунд`);
    this.wheel.startSpin(duration, (option) => {
      this.pickedOption.updateText(option);
    });
  }
}
