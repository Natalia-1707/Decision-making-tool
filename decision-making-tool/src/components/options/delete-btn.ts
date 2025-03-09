export class DeleteOptionButton {
  private optionsContainer: HTMLElement;

  constructor(optionsContainer: HTMLElement) {
    this.optionsContainer = optionsContainer;
  }

  addEventListenerToButton(
    button: HTMLButtonElement,
    optionElement: HTMLElement
  ) {
    button.addEventListener('click', () => {
      this.deleteOption(optionElement);
    });
  }

  deleteOption(optionElement: HTMLElement) {
    optionElement.remove();
  }
}
