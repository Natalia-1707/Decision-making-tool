import { Header } from './header/header';
import { Button } from './buttons/buttons-create';
import { Options } from './options/options';

export class FirstPage {
  private container: HTMLDivElement;
  private optionsContainer: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('container', 'first-page');
    this.optionsContainer = document.createElement('div');
    this.optionsContainer.classList.add('options-container');
  }

  addTitle(titleText: string) {
    const title: Header = new Header(titleText);
    this.container.appendChild(title.getElement());
  }
  addOption(): void {
    const option: Options = new Options();
    this.container.appendChild(this.optionsContainer);
    this.optionsContainer.appendChild(option.getElement());
  }

  addButton(text: string, id: string) {
    const button: Button = new Button(text, id);
    this.container.appendChild(button.getButton());
    return button.getButton();
  }
  
  getOptionsContainer(): HTMLDivElement {
    return this.optionsContainer;
  }
}
