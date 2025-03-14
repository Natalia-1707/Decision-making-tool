import { Button } from './buttons-create';
import { Options } from '../options/options';
import { FirstPage } from '../first-page';
import { DeleteOptionButton } from '../options/delete-btn';
import { Wheel } from '../second-page-options/wheel';

export class AddOptionButton {
  private optionsContainer: HTMLElement;
  private idNumber: number = 1;
  private firstPage: FirstPage;

  constructor(
    firstPage: FirstPage,
    optionsContainer: HTMLElement,
  ) {
    this.firstPage = firstPage;
    this.optionsContainer = optionsContainer;
  }

  addEventListenerToButton(button: HTMLButtonElement, wheel: Wheel) {
    button.addEventListener('click', () => {
      const deleteHandler = new DeleteOptionButton(this.firstPage);
      const option = new Options(
        this.firstPage.getNextId(),
        deleteHandler,
        this.firstPage,
        wheel
      );
      this.optionsContainer.appendChild(option.option);
      this.firstPage.getOptionsList().push(option);
    });
  }
}
