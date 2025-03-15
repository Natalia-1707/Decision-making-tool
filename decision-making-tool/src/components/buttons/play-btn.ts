import '../second-page-style.css';

import { Duration } from '../second-page-options/duration';
import { Wheel } from '../second-page-options/wheel';

export class PlayButton {
  private button: HTMLButtonElement;
  private duration: Duration;
  private wheel: Wheel;

  constructor() {
    this.button = document.createElement('button');
    this.button.classList.add('buttons-second-page');
    this.button.textContent = 'GO';
    this.duration = new Duration();
    this.wheel = new Wheel();

    /*this.button.addEventListener('click', () => this.startSpin());*/
  }

  getButton(): HTMLButtonElement {
    return this.button;
  }

  /*private startSpin(): void {
    const duration = this.duration.getDurationValue();

    if (duration < 5) {
      alert('Минимальное время вращения — 5 секунд');
      return;
    }

    console.log(`Запускаем колесо на ${duration} секунд`);
    this.wheel.spin(duration);
  }*/
}
