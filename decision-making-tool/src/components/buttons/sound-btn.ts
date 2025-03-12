import '../second-page-style.css';

export class SoundButton {
  private onButton: HTMLElement;
  private offButton: HTMLElement;
  private isSoundOn: boolean;

  constructor() {
    this.isSoundOn = true;

    this.onButton = document.createElement('i');
    this.onButton.classList.add('fa-solid', 'fa-volume-high', 'sound-btn');

    this.offButton = document.createElement('i');
    this.offButton.classList.add('fa-solid', 'fa-volume-xmark', 'sound-btn');
    this.offButton.style.display = 'none';

    this.addEventListeners();
  }

  private addEventListeners(): void {
    this.onButton.addEventListener('click', () => this.toggleSound());
    this.offButton.addEventListener('click', () => this.toggleSound());
  }

  private toggleSound(): void {
    this.isSoundOn = !this.isSoundOn;

    if (this.isSoundOn) {
      this.onButton.style.display = 'flex';
      this.offButton.style.display = 'none';
    } else {
      this.onButton.style.display = 'none';
      this.offButton.style.display = 'flex';
    }
  }
  getOnButton(): HTMLElement {
    return this.onButton;
  }

  getOffButton(): HTMLElement {
    return this.offButton;
  }
}
