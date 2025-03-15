import '../second-page-style.css';

import { Duration } from '../second-page-options/duration';
import { Wheel } from '../second-page-options/wheel';

export class PlayButton {
  private button: HTMLButtonElement;
  private duration: Duration;
  private wheel: Wheel;

  constructor(duration: Duration, wheel: Wheel) {
    this.button = document.createElement('button');
    this.button.classList.add('buttons-second-page');
    this.button.textContent = 'GO';
    this.duration = duration;
    this.wheel = wheel;

    this.button.addEventListener('click', () => this.startSpin());
  }

  getButton(): HTMLButtonElement {
    return this.button;
  }

  private startSpin(): void {
    const duration = this.duration.getDurationValue();

    console.log(`Запускаем колесо на ${duration} секунд`);
    this.wheel.startSpin(duration);
  }
}
