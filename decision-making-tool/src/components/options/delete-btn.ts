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
      this.updateIds();
    });
  }

  deleteOption(optionElement: HTMLElement) {
    optionElement.remove();
  }

  private updateIds() {
    const optionElements =
      this.optionsContainer.querySelectorAll('.option-div');
    optionElements.forEach((element, index) => {
      const optionId = element.querySelector('.option-id-div');
      if (optionId) {
        optionId.textContent = `#${index + 1}`;
      }
    });
  }
}
