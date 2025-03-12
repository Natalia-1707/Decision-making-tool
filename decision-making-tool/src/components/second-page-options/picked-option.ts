import '../second-page-style.css';

export class PickedOption {
  public readonly inputPickedOption: HTMLInputElement;

  constructor() {
    this.inputPickedOption = document.createElement('input');
    this.inputPickedOption.type = 'text';
    this.inputPickedOption.placeholder = 'PRESS GO BUTTON TO START';
    this.inputPickedOption.classList.add('input-picked-option');
    this.inputPickedOption.readOnly = true;
  }

  getPickedOption(): HTMLElement {
    return this.inputPickedOption;
  }
}
