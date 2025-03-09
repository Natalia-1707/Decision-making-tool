import { FirstPage } from '../first-page';
import { SecondPage } from '../second-page';

export class StartButton {
  private firstPage: FirstPage;
  private secondPage: SecondPage;

  constructor(firstPage: FirstPage, secondPage: SecondPage) {
    this.firstPage = firstPage;
    this.secondPage = secondPage;
  }

  addEventListenerToButton(button: HTMLButtonElement) {
    button.addEventListener('click', () => {
      const startHandler = new StartButton(this.firstPage, this.secondPage);
      this.firstPage.getContainer().style.display = 'none';
      this.secondPage.getContainer().style.display = 'flex';
    });
  }
}
