import { FirstPage } from '../first-page';
import { SecondPage } from '../second-page';
import { Options } from '../options/options'; 
import { ModalWindow } from '../modal/modal-window-start-btn';

export class StartButton {
  private firstPage: FirstPage;
  private secondPage: SecondPage;

  constructor(firstPage: FirstPage, secondPage: SecondPage) {
    this.firstPage = firstPage;
    this.secondPage = secondPage;
  }

  addEventListenerToButton(button: HTMLButtonElement) {
    button.addEventListener('click', () => {
      const optionsContainer = this.firstPage.getOptionsContainer();
      const options = optionsContainer.children;

      if (options.length < 2) {
        const modal = new ModalWindow('You must add at least 2 valid options. An option is considered valid if its title is not empty and its weight is greater than 0');
        modal.open();
        return;
    }
      const startHandler = new StartButton(this.firstPage, this.secondPage);
      this.firstPage.getContainer().style.display = 'none';
      this.secondPage.getContainer().style.display = 'flex';
    });
  }
}
