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

    this.durationDiv.appendChild(this.durationIcon);
    this.durationDiv.appendChild(this.inputDuration);
  }

  getDuration(): HTMLElement {
    return this.durationDiv;
  }
}
