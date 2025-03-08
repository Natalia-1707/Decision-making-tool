export class Options {
    private option: HTMLHeadingElement;
  
    constructor() {
      this.option = document.createElement('div');
      this.option.classList.add('option-div');

      const optionId: HTMLDivElement = document.createElement('div');
      optionId.classList.add('option-id-div');
      optionId.innerText = '#1';

      const inputTitle: HTMLInputElement = document.createElement('input');
      inputTitle.type = 'text';
      inputTitle.placeholder = 'Title';
      inputTitle.classList.add('option-input-title');

      const inputWeight: HTMLInputElement = document.createElement('input');
      inputWeight.type = 'text';
      inputWeight.placeholder = 'Weight';
      inputWeight.classList.add('option-input-weight');

      const buttonDelete: HTMLButtonElement = document.createElement('button');
      buttonDelete.textContent = 'Delete';
      buttonDelete.classList.add('option-button');

    
      this.option.appendChild(optionId);
      this.option.appendChild(inputTitle);
      this.option.appendChild(inputWeight);
      this.option.appendChild(buttonDelete);

      setTimeout(() => {
        inputTitle.focus();
      }, 0);
    }
  
    getElement(): HTMLDivElement {
      return this.option;
    }
  
}