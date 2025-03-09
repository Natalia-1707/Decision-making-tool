import { Button } from './buttons-create';
import { Options } from '../options/options';
import { FirstPage } from '../first-page';
import { DeleteOptionButton } from '../options/delete-btn';

export class AddOptionButton {
  private optionsContainer: HTMLElement;
  private idNumber: number = 1;
  private firstPage: FirstPage;

  constructor(firstPage: FirstPage, optionsContainer: HTMLElement) {
    this.firstPage = firstPage;
    this.optionsContainer = optionsContainer;
  }

  addEventListenerToButton(button: HTMLButtonElement) {
    button.addEventListener('click', () => {
      const deleteHandler = new DeleteOptionButton(this.optionsContainer);
      const option = new Options(this.firstPage.getNextId(), deleteHandler);
      this.optionsContainer.appendChild(option.getElement());
    });
  }
}
