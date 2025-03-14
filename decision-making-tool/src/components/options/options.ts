import { FirstPage } from '../first-page';
import { DeleteOptionButton } from './delete-btn';
import { Wheel } from '../second-page-options/wheel';

export class Options {
  public option: HTMLDivElement;
  public inputTitle: HTMLInputElement;
  public inputWeight: HTMLInputElement;
  private deleteButton: HTMLButtonElement;
  private firstPage: FirstPage;
  private wheel: Wheel;

  constructor(
    idNumber: number,
    deleteHandler: DeleteOptionButton,
    firstPage: FirstPage,
    wheel: Wheel
  ) {
    this.firstPage = firstPage;
    this.wheel = wheel;
    this.option = document.createElement('div');
    this.option.classList.add('option-div');

    const optionId: HTMLDivElement = document.createElement('div');
    optionId.classList.add('option-id-div');
    optionId.textContent = `#${idNumber}`;

    this.inputTitle = document.createElement('input');
    this.inputTitle.type = 'text';
    this.inputTitle.placeholder = 'Title';
    this.inputTitle.classList.add('option-input-title');

    this.inputTitle.addEventListener('blur', () => {
      firstPage.updateWheel(this.wheel);
    });

    this.inputWeight = document.createElement('input');
    this.inputWeight.type = 'number';
    this.inputWeight.placeholder = 'Weight';
    this.inputWeight.min = '0';
    this.inputWeight.step = '0.01';
    this.inputWeight.classList.add('option-input-weight');

    this.inputWeight.addEventListener('blur', () => {
      firstPage.updateWheel(this.wheel);
    });

    this.deleteButton = document.createElement('button');
    this.deleteButton.textContent = 'Delete';
    this.deleteButton.classList.add('option-button');

    deleteHandler.addEventListenerToButton(this.deleteButton, this.option);

    this.option.appendChild(optionId);
    this.option.appendChild(this.inputTitle);
    this.option.appendChild(this.inputWeight);
    this.option.appendChild(this.deleteButton);

    setTimeout(() => {
      this.inputTitle.focus();
    }, 0);
  }

  getTitle(): string {
    const title = this.inputTitle.value.trim();
    return title;
  }

  getWeight(): number {
    const weight = parseFloat(this.inputWeight.value);
    return weight;
  }
}
