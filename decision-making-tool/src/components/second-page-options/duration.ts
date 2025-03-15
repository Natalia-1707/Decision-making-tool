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

    this.inputDuration.addEventListener('input', () => {
      console.log(this.getDurationValue());
    });

    this.durationDiv.appendChild(this.durationIcon);
    this.durationDiv.appendChild(this.inputDuration);
  }

  setDisabled(isDisabled: boolean): void {
    this.inputDuration.disabled = isDisabled;

    if (isDisabled) {
      this.durationIcon.style.opacity = '0.5';
      this.durationIcon.style.pointerEvents = 'none';
    } else {
      this.durationIcon.style.opacity = '1';
      this.durationIcon.style.pointerEvents = 'auto';
    }
  }

  getDurationValue(): number {
    const value = this.inputDuration.value;
    console.log('Полученное значение из поля ввода: ', value);
    return parseInt(value, 10);
  }

  getDuration(): HTMLElement {
    return this.durationDiv;
  }
}
