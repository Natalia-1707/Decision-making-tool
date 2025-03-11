import { DeleteOptionButton } from './delete-btn';

export class Options {
  public option: HTMLDivElement;
  public inputTitle: HTMLInputElement;
  public inputWeight: HTMLInputElement;
  private deleteButton: HTMLButtonElement;

  constructor(idNumber: number, deleteHandler: DeleteOptionButton) {
    console.log('Options constructor called');
    this.option = document.createElement('div');
    this.option.classList.add('option-div');

    const optionId: HTMLDivElement = document.createElement('div');
    optionId.classList.add('option-id-div');
    optionId.textContent = `#${idNumber}`;

    this.inputTitle = document.createElement('input');
    this.inputTitle.type = 'text';
    this.inputTitle.placeholder = 'Title';
    this.inputTitle.classList.add('option-input-title');

    this.inputTitle.addEventListener('input', () => {
      console.log('Значение заголовка обновлено:', this.inputTitle.value);
    });

    this.inputWeight = document.createElement('input');
    this.inputWeight.type = 'number';
    this.inputWeight.placeholder = 'Weight';
    this.inputWeight.min = '0';
    this.inputWeight.step = '0.01';
    this.inputWeight.classList.add('option-input-weight');

    this.inputWeight.addEventListener('input', () => {
      console.log('Значение веса обновлено:', this.inputWeight.value);
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
