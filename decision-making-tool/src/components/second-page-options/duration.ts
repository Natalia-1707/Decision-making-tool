import '../second-page-style.css';

export class Duration {
  private durationDiv: HTMLDivElement;
  private durationIcon: HTMLElement;
  public inputDuration: HTMLInputElement;

  constructor() {
    this.durationDiv = document.createElement('div');
    this.durationDiv.classList.add('duration-div');

    this.durationIcon = document.createElement('i');
    this.durationIcon.classList.add('fa-solid', 'fa-clock', 'duration-icon');

    this.inputDuration = document.createElement('input');
    this.inputDuration.type = 'number';
    this.inputDuration.placeholder = 'sec';
    this.inputDuration.classList.add('input-duration');

    this.inputDuration.value = '10';
    this.inputDuration.min = '5';
    this.inputDuration.max = '30';

    this.durationDiv.appendChild(this.durationIcon);
    this.durationDiv.appendChild(this.inputDuration);
  }

  getDurationValue(): number {
    const value = parseInt(this.inputDuration.value, 10);
    return isNaN(value) ? 10 : Math.max(5, Math.min(30, value));
  }

  getDuration(): HTMLElement {
    return this.durationDiv;
  }
}
