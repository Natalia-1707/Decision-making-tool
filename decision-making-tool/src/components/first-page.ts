import { Header } from './header/header';
import { Button } from './buttons/buttons-create';

export class FirstPage {
  private container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('container', 'first-page');
  }
  addTitle(titleText: string) {
    const title = new Header(titleText);
    this.container.appendChild(title.getElement());
  }
  addButton(text: string, id: string) {
    const button = new Button(text, id);
    this.container.appendChild(button.getButton());
  }
}
