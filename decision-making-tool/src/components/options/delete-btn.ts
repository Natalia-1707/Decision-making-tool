import { FirstPage } from '../first-page';

export class DeleteOptionButton {
  private firstPage: FirstPage;

  constructor(firstPage: FirstPage) {
    this.firstPage = firstPage;
  }

  addEventListenerToButton(
    button: HTMLButtonElement,
    optionElement: HTMLElement
  ) {
    button.addEventListener('click', () => {
      this.deleteOption(optionElement);
    });
  }

  private deleteOption(optionElement: HTMLElement) {
    const optionsList = this.firstPage.getOptionsList();
    this.firstPage.getOptionsList().splice(
      optionsList.findIndex((o) => o.option === optionElement),
      1
    );
    optionElement.remove();
  }
}
