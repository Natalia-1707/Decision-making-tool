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
      console.log('Button clicked');
      const optionsContainer = this.firstPage.getOptionsContainer();
      console.log('Returned from getOptionsList:', optionsContainer);
      const options = this.firstPage.getOptionsList();
      const options2 = optionsContainer.children;

      console.log('Options list:', options);

      if (options2.length < 2) {
        const modal = new ModalWindow();
        modal.open();
        return;
      }

      let isValid = true;

      for (const option of options) {
        const titleValue = option.getTitle().trim();
        const weightValue = option.getWeight();

        console.log('Validating option:');
        console.log('Title:', titleValue);
        console.log('Weight:', weightValue);

        if (!titleValue || isNaN(weightValue) || weightValue <= 0) {
          console.log(
            `Invalid option detected: Title: '${titleValue}', Weight: ${weightValue}`
          );
          isValid = false;
          break;
        }
      }

      if (isValid) {
        this.firstPage.getContainer().style.display = 'none';
        this.secondPage.getContainer().style.display = 'flex';
        console.log('All options valid, moving to the second page.');
      } else {
        const modal = new ModalWindow();
        modal.open();
        console.log('Invalid options detected, modal opened.');
      }
    });
  }
}
