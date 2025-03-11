import { FirstPage } from '../first-page';
import { SecondPage } from '../second-page';
import { ModalWindow } from '../modal/modal-window-start-btn';
import { navigateToPage } from '../routes';

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
      const options = this.firstPage.getOptionsList();
      const options2 = optionsContainer.children;

      if (options2.length < 2) {
        const modal = new ModalWindow();
        modal.open();
        return;
      }

      let isValid = true;

      for (const option of options) {
        const titleValue = option.getTitle().trim();
        const weightValue = option.getWeight();

        if (!titleValue || isNaN(weightValue) || weightValue <= 0) {
          isValid = false;
          break;
        }
      }

      if (isValid) {
        navigateToPage('second');
      } else {
        const modal = new ModalWindow();
        modal.open();
      }
    });
  }
}
