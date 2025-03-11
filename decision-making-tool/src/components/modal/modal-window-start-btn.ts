export class ModalWindow {
  private modalContainer: HTMLElement;
  private modal: HTMLDialogElement;
  private closeButton: HTMLElement;
  private static readonly messageFirst: string =
    'You must add at least 2 valid options.';
  private static readonly messageSecond: string =
    'An option is considered valid if its title is not empty and its weight is greater than 0.';

  constructor() {
    this.modalContainer = document.createElement('div');
    this.modalContainer.classList.add('modal-container');

    this.modal = document.createElement('dialog');
    this.modal.classList.add('modal-window');

    this.closeButton = document.createElement('i');
    this.closeButton.classList.add(
      'fa-regular',
      'fa-circle-xmark',
      'modal-cancel-btn'
    );

    const content = document.createElement('div');
    content.classList.add('modal-content');

    const messageFirstLine = document.createElement('div');
    messageFirstLine.textContent = ModalWindow.messageFirst;

    const messageSecondLine = document.createElement('div');
    messageSecondLine.textContent = ModalWindow.messageSecond;

    content.appendChild(messageFirstLine);
    content.appendChild(messageSecondLine);

    this.modal.append(content, this.closeButton);
    this.modalContainer.appendChild(this.modal);
    document.body.appendChild(this.modalContainer);
    this.addEventListeners();
  }

  private addEventListeners(): void {
    this.closeButton.addEventListener('click', () => this.close());
    this.modalContainer.addEventListener('click', (event: MouseEvent) => {
      if (event.target === this.modalContainer) this.close();
    });
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape' && this.modalContainer) this.close();
    });
  }

  open(): void {
    this.modal.style.display = 'flex';
    this.modalContainer.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.modal.style.display = 'none';
    this.modalContainer.style.display = 'none';
    document.body.style.overflow = '';
    this.modalContainer.remove();
  }

  getModal(): HTMLDialogElement {
    return this.modal;
  }
}
