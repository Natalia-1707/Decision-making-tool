import { Button } from './buttons-create';
import { Options } from '../options/options';

export class AddOptionButton {
    private optionsContainer: HTMLElement;
  
    constructor(optionsContainer: HTMLElement) {
      this.optionsContainer = optionsContainer;
    }
  
    addEventListenerToButton(button: HTMLButtonElement) {
      button.addEventListener('click', () => {
        const option = new Options();
        this.optionsContainer.appendChild(option.getElement());
      });
    }
  }