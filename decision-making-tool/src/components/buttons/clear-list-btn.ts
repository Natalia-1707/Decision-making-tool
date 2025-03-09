export class ClearListButton {
  private optionsContainer: HTMLElement;

  constructor(optionsContainer: HTMLElement) {
    this.optionsContainer = optionsContainer;
  }

  addEventListenerToButton(button: HTMLButtonElement) {
    button.addEventListener('click', () => {
      this.deleteAll();
    });
  }

  deleteAll() {
    this.optionsContainer.innerHTML = '';
  }
}
